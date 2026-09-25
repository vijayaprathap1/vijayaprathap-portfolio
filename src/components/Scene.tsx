import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  One particle system that morphs between shapes as you scroll:
  hero → AI core (sphere) · products → orbit rings · experience → data wave
  stack → torus knot · contact → back to the core.
*/

type Stop = { id: string; shape: number; x: number; alpha: number; scale: number };

const STOPS: Stop[] = [
  { id: "top", shape: 0, x: 2.8, alpha: 1, scale: 1.2 },
  { id: "products", shape: 1, x: 0, alpha: 0.32, scale: 1.15 },
  { id: "experience", shape: 2, x: 0, alpha: 0.5, scale: 1 },
  { id: "stack", shape: 3, x: 2.2, alpha: 0.55, scale: 0.9 },
  { id: "contact", shape: 0, x: 0, alpha: 0.8, scale: 1.25 },
];

const vertex = /* glsl */ `
  attribute vec3 aP0;
  attribute vec3 aP1;
  attribute vec3 aP2;
  attribute vec3 aP3;
  attribute float aSeed;
  uniform vec4 uW;
  uniform float uTime;
  uniform float uSize;
  uniform vec2 uMouse;
  varying float vSeed;
  varying float vGlow;

  void main() {
    vec3 p = aP0 * uW.x + aP1 * uW.y + aP2 * uW.z + aP3 * uW.w;

    // breathing noise
    float t = uTime * 0.6;
    p += 0.06 * vec3(
      sin(t + aSeed * 40.0 + p.y * 2.0),
      cos(t * 1.3 + aSeed * 30.0 + p.x * 2.0),
      sin(t * 0.8 + aSeed * 20.0 + p.z * 2.0)
    );

    // rolling wave for the terrain shape
    p.y += uW.z * 0.45 * sin(p.x * 0.9 + uTime * 1.2) * cos(p.z * 0.8 + uTime * 0.7);

    // orbit rings drift around their axis
    float a = uW.y * uTime * (0.08 + aSeed * 0.12);
    p.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * p.xz;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);

    // push particles away from the pointer (in view space)
    vec2 d = mv.xy - uMouse;
    float f = exp(-dot(d, d) * 1.6);
    mv.xy += normalize(d + 1e-4) * f * 0.35;

    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.55 + aSeed) * (8.0 / -mv.z);
    vSeed = aSeed;
    vGlow = f;
  }
`;

const fragment = /* glsl */ `
  uniform float uAlpha;
  uniform vec3 uA;
  uniform vec3 uB;
  varying float vSeed;
  varying float vGlow;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, r);
    vec3 col = mix(uA, uB, smoothstep(0.55, 1.0, vSeed));
    col = mix(col, vec3(1.0), vGlow * 0.6);
    gl_FragColor = vec4(col, soft * uAlpha * (0.35 + 0.65 * vSeed));
  }
`;

function buildShapes(n: number) {
  const p0 = new Float32Array(n * 3);
  const p1 = new Float32Array(n * 3);
  const p2 = new Float32Array(n * 3);
  const p3 = new Float32Array(n * 3);
  const seed = new Float32Array(n);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const cols = Math.ceil(Math.sqrt(n * 1.6));
  const rows = Math.ceil(n / cols);

  for (let i = 0; i < n; i++) {
    const s = Math.random();
    seed[i] = s;

    // 0 — fibonacci sphere with a denser shell
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = golden * i;
    const R = 2.1 * (0.86 + 0.14 * Math.pow(Math.random(), 3));
    p0.set([Math.cos(th) * rad * R, y * R, Math.sin(th) * rad * R], i * 3);

    // 1 — three tilted orbit rings
    const ring = i % 3;
    const ang = Math.random() * Math.PI * 2;
    const rr = [2.2, 3.1, 4.0][ring] + (Math.random() - 0.5) * 0.25;
    const tilt = [0.35, -0.55, 0.12][ring];
    const rx = Math.cos(ang) * rr;
    const rz = Math.sin(ang) * rr;
    p1.set([rx, rz * Math.sin(tilt) + (Math.random() - 0.5) * 0.08, rz * Math.cos(tilt)], i * 3);

    // 2 — terrain grid
    const gx = (i % cols) / cols;
    const gz = Math.floor(i / cols) / rows;
    p2.set([(gx - 0.5) * 13, -1.1, (gz - 0.5) * 7], i * 3);

    // 3 — torus knot (p=2, q=3)
    const u = (i / n) * Math.PI * 2;
    const kr = 1.35 + 0.55 * Math.cos(3 * u);
    const jitter = () => (Math.random() - 0.5) * 0.28;
    p3.set([kr * Math.cos(2 * u) + jitter(), kr * Math.sin(2 * u) + jitter(), 0.55 * Math.sin(3 * u) * 1.6 + jitter()], i * 3);
  }
  return { p0, p1, p2, p3, seed };
}

const smooth = (x: number) => x * x * (3 - 2 * x);

export function Scene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // no WebGL: the page still works without the scene
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const N = small ? 4200 : 9000;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const { p0, p1, p2, p3, seed } = buildShapes(N);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(p0, 3));
    geo.setAttribute("aP0", new THREE.BufferAttribute(p0, 3));
    geo.setAttribute("aP1", new THREE.BufferAttribute(p1, 3));
    geo.setAttribute("aP2", new THREE.BufferAttribute(p2, 3));
    geo.setAttribute("aP3", new THREE.BufferAttribute(p3, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));

    const uniforms = {
      uW: { value: new THREE.Vector4(1, 0, 0, 0) },
      uTime: { value: 0 },
      uSize: { value: (small ? 3.4 : 3.0) * Math.min(window.devicePixelRatio, 1.75) },
      uAlpha: { value: 1 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uA: { value: new THREE.Color("#7c93ff") },
      uB: { value: new THREE.Color("#e8ecff") },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    const group = new THREE.Group();
    group.add(points);
    scene.add(group);

    // --- sizing
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      camera.position.z = w < 768 ? 12 : 9;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // --- pointer (in view space at z = 0 plane)
    const target = new THREE.Vector2(99, 99);
    const tilt = new THREE.Vector2();
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      const halfH = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      target.set(nx * halfH * camera.aspect, ny * halfH);
      tilt.set(nx, ny);
    };
    const onLeave = () => target.set(99, 99);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    // --- scroll → blend between stops
    const state = { w: new THREE.Vector4(1, 0, 0, 0), x: STOPS[0].x, y: 0, alpha: 1, scale: 1 };
    const weights = [0, 0, 0, 0];
    const computeTarget = () => {
      const mid = window.scrollY + window.innerHeight * 0.5;
      const tops = STOPS.map((s) => document.getElementById(s.id)?.offsetTop ?? 0);
      let i = 0;
      while (i < STOPS.length - 1 && mid >= tops[i + 1]) i++;
      const a = STOPS[i];
      const b = STOPS[Math.min(i + 1, STOPS.length - 1)];
      const span = Math.max(1, (tops[i + 1] ?? tops[i] + 1) - tops[i]);
      // hold the shape for most of a section, morph in the last 45%
      const raw = a === b ? 0 : (mid - tops[i]) / span;
      const k = smooth(Math.min(1, Math.max(0, (raw - 0.55) / 0.45)));
      weights.fill(0);
      weights[a.shape] += 1 - k;
      weights[b.shape] += k;
      const mob = window.innerWidth < 1024;
      return {
        w: weights,
        x: mob ? 0 : a.x + (b.x - a.x) * k,
        y: mob && i === 0 ? 2.6 * (1 - k) : 0,
        alpha: (a.alpha + (b.alpha - a.alpha) * k) * (mob ? 0.85 : 1),
        scale: a.scale + (b.scale - a.scale) * k,
      };
    };

    // --- loop
    const clock = new THREE.Clock();
    let raf = 0;
    let visible = true;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!reduce) uniforms.uTime.value += dt;
      const t = computeTarget();
      const ease = 1 - Math.pow(0.001, dt); // frame-rate independent lerp
      state.w.lerp(new THREE.Vector4(t.w[0], t.w[1], t.w[2], t.w[3]), ease * 1.4);
      state.x += (t.x - state.x) * ease;
      state.y += (t.y - state.y) * ease;
      state.alpha += (t.alpha - state.alpha) * ease;
      state.scale += (t.scale - state.scale) * ease;

      uniforms.uW.value.copy(state.w);
      uniforms.uAlpha.value = state.alpha;
      uniforms.uMouse.value.lerp(target, 0.12);
      group.position.set(state.x, state.y, 0);
      group.scale.setScalar(state.scale);
      const spin = reduce ? 0 : uniforms.uTime.value * 0.06;
      group.rotation.y += (spin + tilt.x * 0.35 - group.rotation.y) * 0.05;
      group.rotation.x += (-tilt.y * 0.2 + state.w.z * 0.35 - group.rotation.x) * 0.05;
      renderer.render(scene, camera);
    };
    tick();

    const onVis = () => {
      visible = document.visibilityState === "visible";
      clock.getDelta();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

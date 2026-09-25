import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Words rise out of a mask, one after another. Pass plain strings or {t, className} parts. */
export function SplitReveal({
  parts,
  className,
  delay = 0,
  as = "h2",
  onView = true,
}: {
  parts: (string | { t: string; className: string })[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
  onView?: boolean;
}) {
  const words = parts.flatMap((p) =>
    (typeof p === "string" ? p : p.t).split(" ").filter(Boolean).map((w) => ({
      w,
      c: typeof p === "string" ? "" : p.className,
    })),
  );
  const Tag = motion[as];
  const animate = { y: "0%", rotate: 0 };
  return (
    <Tag className={className} aria-label={words.map((x) => x.w).join(" ")}>
      {words.map((x, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className={`inline-block ${x.c}`}
            initial={{ y: "110%", rotate: 4 }}
            {...(onView
              ? { whileInView: animate, viewport: { once: true, margin: "-40px" } }
              : { animate })}
            transition={{ duration: 0.9, delay: delay + i * 0.045, ease }}
          >
            {x.w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Element drifts toward the pointer while hovered. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  const move = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

/** 3D tilt that follows the pointer, with a moving highlight. */
export function Tilt({ children, className, max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });
  const glow = useTransform(
    [mx, my] as never,
    ([a, b]: number[]) =>
      `radial-gradient(600px circle at ${a * 100}% ${b * 100}%, rgb(124 147 255 / 0.12), transparent 45%)`,
  );
  return (
    <div className="[perspective:1400px]">
      <motion.div
        className={`relative [transform-style:preserve-3d] ${className ?? ""}`}
        style={{ rotateX: rx, rotateY: ry }}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        onPointerLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
      >
        {children}
        <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glow }} />
      </motion.div>
    </div>
  );
}

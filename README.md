# Vijayaprathap P — Portfolio

Personal site for Vijayaprathap P, Senior Frontend Engineer (React, Next.js, TypeScript).

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · Three.js · Motion

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build to dist/
npm run preview
```

## Edit content

All copy lives in `src/data.ts`: profile, headline metrics, the twelve products (three featured) (problem → what I built → outcome), experience, stack, principles and the scripted chat replies in the hero. Change it there and every section updates.

Product visuals are coded UI recreations in `src/components/previews/`, so no screenshots of private client work are needed.

## Deploy

Vercel picks up `vercel.json` (framework: Vite, output: `dist`). Push to the connected branch and it deploys.

## 3D scene

`src/components/Scene.tsx` is one Three.js particle system that changes shape per section (core → orbit rings → data wave → knot → core). Section ids and shapes are listed in `STOPS` at the top of the file. It is lazy-loaded, pauses when the tab is hidden, and holds still for visitors who prefer reduced motion.

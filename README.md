# Vijayaprathap P — Portfolio

**Senior Frontend Engineer** building interfaces for AI, fintech and commerce products.

**Live:** [vijayaprathap.vercel.app](https://vijayaprathap.vercel.app) · [LinkedIn](https://linkedin.com/in/vjprathap) · [pvijayaprathap1@gmail.com](mailto:pvijayaprathap1@gmail.com)

![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.180-000000?logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

---

## About the site

A single-page portfolio for the products I've built over 4.5+ years. The site itself shows the kind of work I do: real-time UI, careful motion and fast load times.

- **Three.js particle scene.** One GPU particle system with custom GLSL shaders that changes shape as you scroll: an AI core in the hero, orbit rings behind the products, a data wave behind experience, and a knot behind the stack. Particles move away from the cursor.
- **Live chat demo.** A working copy of the Valopt AI Chatbot Widget. Replies stream in word by word, the way the real widget streams over Server-Sent Events.
- **Stacking product cards.** Three featured products stay pinned and stack on top of each other as you scroll.
- **Product index.** Filter by company, hover a row for a floating preview that follows the cursor, and click for a full case study in a side panel.
- **Motion details.** Headlines rise in word by word, buttons drift toward the cursor, the experience timeline draws itself as you scroll, and a progress bar runs along the top.
- **Coded product previews.** Every product visual is built in React and CSS instead of a screenshot, so no private client work is exposed.

## Products featured

| Product | Where | What it is |
| --- | --- | --- |
| **Auto Collect AI** | Own product | B2B invoice recovery: receivables dashboard, automated follow-ups, online debtor payments |
| **Valopt AI Chatbot Widget** | Valopt | Embeddable AI agent with streaming replies, 1,000+ daily sessions |
| **AI Agent & Analytics Dashboard** | Valopt | Real-time console for monitoring AI agents |
| Valopt.ai Website | Valopt | SEO-first Next.js 14 site with sub-second loads |
| Valopt UI Design System | Valopt | Accessible React + Tailwind component library |
| ValoptMailer | Valopt | OAuth2-secured email automation |
| Ecigplanete & Smoke-Market | eVenturers | Two French PrestaShop stores; checkout for 10k+ monthly users |
| Stock Tracking & Analytics | eVenturers | Live inventory movements across back office, storefront and orders |
| SMS & WhatsApp Engagement | eVenturers | Win-back campaigns and direct customer messaging |
| Refer-a-Friend & Loyalty | eVenturers | Referral codes and points that customers redeem as discounts |
| Calcula Revenue Tool | eVenturers | Revenue by customer group, zone and country |
| Order by Product & Invoicing | eVenturers | Bulk supplier orders with generated PDF invoices |

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite 7, TypeScript (strict) |
| Styling | Tailwind CSS v4 with design tokens in `@theme` |
| 3D | Three.js with custom vertex and fragment shaders |
| Animation | Motion (Framer Motion) |
| Fonts | Geist, Geist Mono, Instrument Serif (Google Fonts) |
| Hosting | Vercel (static build) |

It has three runtime dependencies: `react`, `motion` and `three`. There is no backend, database or tracking.

## Getting started

Requires Node 20 or newer.

```bash
git clone https://github.com/vijayaprathap1/vijayaprathap-portfolio.git
cd vijayaprathap-portfolio
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Typecheck, then build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript only |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── data.ts                  ← all site content (edit this)
├── App.tsx                  page layout and scroll progress bar
├── styles.css               design tokens and base styles
└── components/
    ├── Scene.tsx            Three.js particle scene (lazy-loaded)
    ├── Hero.tsx             headline, stats, tech marquee
    ├── ChatDemo.tsx         streaming chat widget demo
    ├── Products.tsx         stacking cards, index, case-study drawer
    ├── Sections.tsx         experience, stack, contact, footer
    ├── Nav.tsx              header, mobile menu, IST clock
    ├── motionkit.tsx        SplitReveal, Magnetic, Tilt helpers
    ├── ui.tsx               icons and shared bits
    └── previews/            coded UI previews for each product
public/
├── Vijayaprathap-P-Resume.pdf
└── favicon.svg
```

## Editing content

**All copy lives in [`src/data.ts`](src/data.ts).** Every section reads from it.

- **Add a product:** add an entry to `products`. Set `featured: true` to put it in the stacking cards (three works best). Otherwise it appears in the index.
- **Give it a preview:** pick an existing `kind` (`chat`, `dashboard`, `store`, …) or add a new component in `src/components/previews/index.tsx` and register it in the `map`.
- **Update the résumé:** replace `public/Vijayaprathap-P-Resume.pdf`, keeping the same file name.
- **Chat demo answers:** edit `chatScript`.
- **Colours:** change the tokens at the top of `src/styles.css`. The accent is `--color-accent`. The particle colours are `uA` and `uB` in `Scene.tsx`.

## 3D scene

`src/components/Scene.tsx` renders about 9,000 particles on desktop and 4,200 on mobile. Every particle stores its position in all four shapes, and the shader blends between them based on scroll position.

To change which shape shows in which section, edit `STOPS` at the top of the file:

```ts
{ id: "products", shape: 1, x: 0, alpha: 0.32, scale: 1.15 }
//  section id    0 core · 1 rings · 2 wave · 3 knot
```

**Performance and accessibility:**
- Loaded as a separate chunk after the page renders.
- Pixel ratio capped at 1.75, fewer particles on small screens.
- Rendering pauses when the tab is hidden.
- If WebGL isn't available, the page works without the scene.
- `prefers-reduced-motion` stops the ambient animation, and the rest of the page's motion follows the same setting.

## Accessibility

- Semantic landmarks, a skip link, and visible focus rings.
- The case-study drawer is a proper dialog: it takes focus, closes on Esc, and returns focus when it closes.
- Filter buttons report their state (`aria-pressed`), and the chat demo announces new replies (`aria-live`).
- Layout works down to 360px wide without horizontal scrolling.

## Deployment

The site is deployed on **Vercel**. The Vercel project is connected to this repo:

- A push to `main` updates the live site at [vijayaprathap.vercel.app](https://vijayaprathap.vercel.app).
- A push to any other branch creates a preview deployment.

`vercel.json` sets the framework (Vite), build command (`npm run build`) and output folder (`dist`).

## License

The code is free to read and learn from. The content (text, résumé and product descriptions) belongs to Vijayaprathap P, so please don't reuse it as your own portfolio.

---

**Vijayaprathap P** · Puducherry, India · Open to senior frontend and product-engineering roles (remote, EU/US overlap)

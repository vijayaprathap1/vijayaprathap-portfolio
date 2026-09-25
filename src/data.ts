// All content is sourced from Vijayaprathap's résumé. Edit here — every section reads from this file.

export const profile = {
  name: "Vijayaprathap P",
  first: "Vijayaprathap",
  role: "Senior Frontend Engineer",
  location: "Puducherry, India",
  timezone: "Asia/Kolkata",
  email: "pvijayaprathap1@gmail.com",
  phone: "+91 90925 20552",
  phoneHref: "tel:+919092520552",
  linkedin: "https://linkedin.com/in/vjprathap",
  github: "https://github.com/vijayaprathap1",
  resume: "/Vijayaprathap-P-Resume.pdf",
  current: { company: "Valopt", place: "France · Remote" },
  years: "4.5+",
};

export const proof = [
  { value: "4.5+", unit: "yrs", label: "Shipping production frontends" },
  { value: "1,000+", unit: "/day", label: "AI conversations through my widget" },
  { value: "10k+", unit: "MAU", label: "Shoppers on a checkout I optimized" },
  { value: "<1", unit: "sec", label: "SSR responses on Next.js 14" },
] as const;

export type PreviewKind =
  | "chat"
  | "dashboard"
  | "website"
  | "mailer"
  | "store"
  | "stock"
  | "loyalty"
  | "notify";

export type Product = {
  slug: string;
  name: string;
  kind: PreviewKind;
  company: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  flagship?: boolean;
};

export const products: Product[] = [
  {
    slug: "chatbot-widget",
    name: "Valopt AI Chatbot Widget",
    kind: "chat",
    company: "Valopt",
    year: "2024 —",
    role: "Lead frontend",
    flagship: true,
    summary:
      "An embeddable AI agent that answers customers in real time, streaming LLM responses straight into any website.",
    problem:
      "Customer questions arrived faster than a support team could answer them, and slow, blocking replies lose visitors.",
    built: [
      "Real-time NLP replies streamed token-by-token over optimized API integrations",
      "Messaging workflows and business-logic hooks for automated customer interactions",
      "A lightweight, embeddable widget that stays out of the host site's way",
    ],
    outcome: "Supports 1,000+ customer interactions every day.",
    stack: ["Next.js", "TypeScript", "LLM APIs", "SSE", "WebSockets"],
  },
  {
    slug: "agent-dashboard",
    name: "AI Agent Chatbot Dashboard",
    kind: "dashboard",
    company: "Valopt",
    year: "2025",
    role: "Frontend architect",
    summary:
      "The operator console behind the chatbot: monitor live conversations, agent health and content in one place.",
    problem:
      "A bot handling a thousand conversations a day needs humans who can see what it's doing, as it happens.",
    built: [
      "Real-time monitoring of live chatbot sessions",
      "Strapi-backed content and configuration management",
      "Strict TypeScript and modular architecture end to end",
    ],
    outcome: "One typed console for the whole AI support operation.",
    stack: ["Next.js", "TypeScript", "Strapi", "TanStack Query"],
  },
  {
    slug: "valopt-website",
    name: "Valopt.ai Website",
    kind: "website",
    company: "Valopt",
    year: "2024",
    role: "Frontend lead",
    summary:
      "The public face of Valopt: an SEO-first, server-rendered marketing site with CMS-driven content.",
    problem:
      "Marketing needed to publish without engineers, and the site had to rank and load fast worldwide.",
    built: [
      "Next.js 14 App Router with SSR and custom middleware",
      "REST integration with a Strapi headless CMS for content and assets",
      "Pixel-true build against a custom Tailwind design system",
    ],
    outcome: "Sub-second responses with Core Web Vitals (LCP, CLS) in range.",
    stack: ["Next.js 14", "Tailwind CSS", "Strapi", "REST"],
  },
  {
    slug: "valopt-mailer",
    name: "ValoptMailer",
    kind: "mailer",
    company: "Valopt",
    year: "2025",
    role: "Full-stack",
    summary:
      "A secure email automation service that sends transactional and campaign mail on behalf of the platform.",
    problem:
      "Email sending was scattered across scripts, with credentials handled in ways that didn't scale safely.",
    built: [
      "Nodemailer delivery authenticated with OAuth2, no stored passwords",
      "Universal JavaScript architecture shared across Next.js and Node",
      "Automation triggers wired into platform events",
    ],
    outcome: "Email as a secure, reusable service, not a script.",
    stack: ["Next.js", "Node.js", "Nodemailer", "OAuth2"],
  },
  {
    slug: "ecigplanet",
    name: "Ecigplanet",
    kind: "store",
    company: "eVenturers",
    year: "2021 — 24",
    role: "End-to-end developer",
    summary:
      "A French e-commerce platform, customized end to end: storefront, admin tooling and dashboards.",
    problem:
      "An off-the-shelf PrestaShop store needed custom operations tooling and a storefront that converts.",
    built: [
      "Custom backend tools and admin dashboard features in PHP",
      "Storefront UI rebuilt for usability with HTML, CSS and Bootstrap",
      "Checkout tuned with code splitting and image optimization",
    ],
    outcome: "A faster checkout serving 10,000+ monthly active users.",
    stack: ["PrestaShop", "PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "stock-analytics",
    name: "Stock Tracking & Analytics",
    kind: "stock",
    company: "eVenturers",
    year: "2023",
    role: "Sole engineer",
    summary: "A custom tool that gives the business live inventory visibility and insight.",
    problem: "Stock levels lived in spreadsheets, so decisions ran on yesterday's numbers.",
    built: [
      "Real-time inventory views built with modern ES6+ data pipelines",
      "map / filter / reduce aggregations for business insights",
    ],
    outcome: "Real-time inventory visibility for the operations team.",
    stack: ["JavaScript ES6+", "PHP", "MySQL"],
  },
  {
    slug: "referral-loyalty",
    name: "Referral & Loyalty System",
    kind: "loyalty",
    company: "eVenturers",
    year: "2022",
    role: "Designed from scratch",
    summary: "Reward-based mechanics that turn customers into a growth channel.",
    problem: "Growth depended on paid acquisition, with no way to reward customers for bringing friends.",
    built: [
      "Referral codes, reward tiers and loyalty points designed from zero",
      "PHP backend logic with an optimized frontend",
    ],
    outcome: "User growth driven by reward-based mechanics.",
    stack: ["PHP", "JavaScript", "MySQL"],
  },
  {
    slug: "notifications",
    name: "WhatsApp & SMS Notifications",
    kind: "notify",
    company: "eVenturers",
    year: "2022",
    role: "Integration engineer",
    summary: "Automated order and engagement messages delivered on the channels customers actually read.",
    problem: "Email-only order updates went unread, and repeat purchases suffered.",
    built: [
      "API integrations for automated WhatsApp and SMS notifications",
      "Event-driven triggers across the order lifecycle",
    ],
    outcome: "Improved customer retention.",
    stack: ["REST APIs", "PHP", "Webhooks"],
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Valopt Pvt Ltd",
    place: "France · Remote",
    dates: "Jun 2024 — Present",
    points: [
      "Architected a Next.js 14 (App Router) + Node.js environment with SSR and custom middleware, delivering sub-second responses and healthy Core Web Vitals.",
      "Built and maintain a modular, accessible component library in React, Tailwind and SCSS that cut redundancy and keeps every browser consistent.",
      "Spearheaded the Valopt AI Chatbot Widget, supporting 1,000+ daily customer interactions.",
      "Turn complex mockups into pixel-perfect, responsive UI on a custom Tailwind design system, working in Agile with backend and QA.",
    ],
  },
  {
    role: "Web Developer",
    company: "eVenturers Solutions",
    place: "Puducherry",
    dates: "Sep 2021 — Apr 2024",
    points: [
      "Led frontend for major French e-commerce platforms, optimizing checkout for 10,000+ monthly active users with code splitting and image optimization.",
      "Engineered a Stock Tracking & Analytics tool for real-time inventory visibility.",
      "Integrated automated WhatsApp and SMS notifications that improved retention.",
      "Designed a Referral & Loyalty system from scratch.",
    ],
  },
] as const;

export const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Pondicherry Engineering College",
  dates: "2016 — 2019",
};

export const stack = [
  {
    group: "Core",
    items: ["React", "Next.js 14+", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "HTML5"],
    note: "App Router, SSR, SSG, Middleware",
  },
  {
    group: "Interface",
    items: ["Tailwind CSS", "SCSS / Sass", "Framer Motion", "Semantic HTML", "ARIA", "Mobile-first"],
    note: "Design systems that scale",
  },
  {
    group: "Real-time & AI",
    items: ["LLM APIs", "Server-Sent Events", "WebSockets"],
    note: "Streaming UIs, live data",
  },
  {
    group: "Data",
    items: ["REST", "GraphQL", "TanStack Query", "Strapi", "Postman"],
    note: "APIs and headless CMS",
  },
  {
    group: "Quality & tooling",
    items: ["Node.js", "Webpack", "Jest", "BrowserStack", "Chrome DevTools", "Git / Bitbucket"],
    note: "Performance and reliability",
  },
] as const;

export const principles = [
  {
    title: "Fast is a feature",
    body: "SSR, code splitting and image discipline. I watch LCP and CLS the way product watches conversion, because they're the same thing.",
  },
  {
    title: "Systems over screens",
    body: "One accessible component library, one set of tokens. Every new page gets cheaper to build and harder to break.",
  },
  {
    title: "Real-time, done calmly",
    body: "Streaming AI responses and live dashboards should feel instant without feeling noisy. SSE and sockets, tuned for people.",
  },
  {
    title: "Accessible by default",
    body: "Semantic HTML, ARIA where it earns its place, keyboard paths that work, tested across browsers on BrowserStack.",
  },
] as const;

// Scripted replies for the hero chat demo (a replica of the widget UX, not a live model).
export const chatScript: { q: string; a: string }[] = [
  {
    q: "What do you build?",
    a: "Interfaces for e-commerce and AI products: real-time chat, operator dashboards, fast SSR sites and the design systems underneath them.",
  },
  {
    q: "Tell me about the chatbot",
    a: "I lead the Valopt AI Chatbot Widget. LLM replies stream in token by token (like this one), handling 1,000+ customer conversations a day.",
  },
  {
    q: "What's your stack?",
    a: "React, Next.js 14 and TypeScript, styled with Tailwind and SCSS. SSE and WebSockets for real-time, Strapi and GraphQL for data.",
  },
  {
    q: "Are you open to work?",
    a: "Yes, I'm open to senior frontend roles and product collaborations. Drop a line at pvijayaprathap1@gmail.com and let's talk.",
  },
];

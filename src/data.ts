// All content comes from Vijayaprathap's résumés. Edit here; every section reads from this file.

export const profile = {
  name: "Vijayaprathap P",
  first: "Vijayaprathap",
  role: "Senior Full-Stack Engineer",
  location: "Puducherry, India",
  timezone: "Asia/Kolkata",
  email: "pvijayaprathap1@gmail.com",
  phone: "+91 90925 20552",
  phoneHref: "tel:+919092520552",
  linkedin: "https://linkedin.com/in/vjprathap",
  github: "https://github.com/vijayaprathap1",
  resume: "Vijayaprathap-P-Resume.pdf",
  years: "4.5+",
};

export const proof = [
  { value: "4.5+", unit: "yrs", label: "Shipping production software" },
  { value: "1,000+", unit: "/day", label: "AI conversations through my widget" },
  { value: "10k+", unit: "MAU", label: "Shoppers on a checkout I optimized" },
  { value: "2", unit: "SaaS", label: "Products I built end to end, solo" },
] as const;

export type PreviewKind =
  | "collect"
  | "botly"
  | "chat"
  | "dashboard"
  | "website"
  | "mailer"
  | "system"
  | "store"
  | "stock"
  | "loyalty"
  | "notify"
  | "calcula"
  | "orders";

export type Product = {
  slug: string;
  name: string;
  kind: PreviewKind;
  org: "Own product" | "Valopt" | "eVenturers";
  year: string;
  role: string;
  tagline: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const products: Product[] = [
  {
    slug: "auto-collect-ai",
    name: "Auto Collect AI",
    kind: "collect",
    org: "Own product",
    year: "2026",
    role: "Solo founder-engineer",
    featured: true,
    tagline: "Gets overdue B2B invoices paid, with the chasing done automatically.",
    problem:
      "Finance teams lose days chasing late invoices across spreadsheets, inboxes and accounting tools, and money sits unpaid.",
    built: [
      "Syncs invoices from Stripe, QuickBooks and CSV into email and SMS reminder workflows",
      "Multi-tenant Postgres with row-level security: tenant isolation enforced by the database",
      "Own auth (argon2id, DB sessions), team roles and a super-admin console",
      "Credit billing on a Stripe-webhook ledger, debited in the same transaction as each send",
    ],
    outcome: "Built solo, 0 to 1: architecture, backend, UI and Playwright e2e tests.",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Stripe"],
    links: [{ label: "Code", href: "https://github.com/vijayaprathap1/autocollect-ai" }],
  },
  {
    slug: "botly",
    name: "Botly",
    kind: "botly",
    org: "Own product",
    year: "2026",
    role: "Solo founder-engineer",
    featured: true,
    tagline: "An AI support assistant for Indian businesses, installed with one line of code.",
    problem:
      "Small Indian shops get questions in Tamil, Hindi and Hinglish around the clock, and can't afford a support team to answer them.",
    built: [
      "Onboards from a URL: crawls the site, and Claude drafts FAQs for the owner to approve",
      "Streams answers in English, Tamil, Hindi and Hinglish, grounded in approved knowledge",
      "Hybrid RAG (pgvector + full-text) and prompt caching keep answers accurate and cost flat",
      "Leads to WhatsApp and email, Shopify / WooCommerce order lookup, Razorpay billing",
    ],
    outcome: "Live, with 150+ automated tests and an eval gate against prompt injection.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "pgvector"],
    links: [
      { label: "Live", href: "https://botly-rosy.vercel.app/" },
      { label: "Code", href: "https://github.com/vijayaprathap1/botly" },
    ],
  },
  {
    slug: "chatbot-widget",
    name: "Valopt AI Chatbot Widget",
    kind: "chat",
    org: "Valopt",
    year: "2024 —",
    role: "Led concept to production",
    featured: true,
    tagline: "An embeddable AI agent that answers customers in real time, on any website.",
    problem:
      "Customer questions arrived faster than a team could answer them, and slow, blocking replies lose visitors.",
    built: [
      "Low-latency streaming UI over Server-Sent Events, with LLM replies arriving token by token",
      "Messaging workflows and business-logic hooks for automated customer interactions",
      "A lightweight embed that stays out of the host site's way",
    ],
    outcome: "Handles 1,000+ customer sessions every day.",
    stack: ["Next.js", "TypeScript", "LLM APIs", "SSE", "WebSockets"],
  },
  {
    slug: "agent-dashboard",
    name: "AI Agent & Analytics Dashboard",
    kind: "dashboard",
    org: "Valopt",
    year: "2025",
    role: "Frontend architect",
    featured: true,
    tagline: "The control centre for managing and monitoring live AI agents.",
    problem:
      "A bot running a thousand conversations a day needs people who can see what it's doing while it happens.",
    built: [
      "Real-time monitoring that turns operational events and telemetry into visual metrics",
      "Query filtering and status monitoring with TanStack Query",
      "Strapi-backed configuration, strict TypeScript and modular architecture throughout",
    ],
    outcome: "One typed console for the whole AI support operation.",
    stack: ["Next.js 14", "TypeScript", "Strapi", "TanStack Query"],
  },
  {
    slug: "valopt-website",
    name: "Valopt.ai Website",
    kind: "website",
    org: "Valopt",
    year: "2024",
    role: "Frontend lead",
    tagline: "An SEO-first, server-rendered marketing site with CMS-driven content.",
    problem: "Marketing needed to publish without engineers, and the site had to rank and load fast.",
    built: [
      "Next.js 14 App Router with SSR, custom middleware, dynamic imports and route caching",
      "REST integration with a Strapi headless CMS for content and assets",
      "Pixel-true build on a custom Tailwind design system",
    ],
    outcome: "Sub-second loads with Core Web Vitals (LCP, CLS) in range.",
    stack: ["Next.js 14", "Tailwind CSS", "Strapi", "REST"],
  },
  {
    slug: "design-system",
    name: "Valopt UI Design System",
    kind: "system",
    org: "Valopt",
    year: "2024 —",
    role: "Built & maintain",
    tagline: "One accessible component library shared by every Valopt surface.",
    problem: "Each new screen re-implemented buttons, inputs and layouts slightly differently.",
    built: [
      "Modular, accessible components in React, TypeScript, Tailwind and SCSS",
      "Custom Tailwind configuration that encodes the brand's tokens",
      "Cross-browser consistency, verified on BrowserStack",
    ],
    outcome: "Less duplicated code and faster feature rollouts across the team.",
    stack: ["React", "TypeScript", "Tailwind CSS", "SCSS"],
  },
  {
    slug: "valopt-mailer",
    name: "ValoptMailer",
    kind: "mailer",
    org: "Valopt",
    year: "2025",
    role: "Full-stack",
    tagline: "Secure email automation for campaigns and trigger-based updates.",
    problem: "Email sending was scattered across scripts, with credentials handled in ways that didn't scale.",
    built: [
      "Nodemailer delivery authenticated with OAuth2, no stored passwords",
      "Programmatic campaigns and event-triggered user updates",
      "Universal JavaScript architecture shared by Next.js and Node",
    ],
    outcome: "Email as a secure, reusable service instead of a script.",
    stack: ["Next.js", "Node.js", "Nodemailer", "OAuth2"],
  },
  {
    slug: "ecigplanete",
    name: "Ecigplanete & Smoke-Market",
    kind: "store",
    org: "eVenturers",
    year: "2021 — 24",
    role: "Lead developer",
    tagline: "Two French PrestaShop stores, one retail and one wholesale.",
    problem: "Two live stores needed constant feature work, custom tooling and a checkout that converts.",
    built: [
      "Maintenance, optimizations and new features across both storefronts",
      "Checkout funnel tuned with code splitting and image optimization",
      "Custom back-office tools and admin dashboards in PHP",
    ],
    outcome: "A faster checkout for 10,000+ monthly active users.",
    stack: ["PrestaShop", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    slug: "stock-tracker",
    name: "Stock Tracking & Analytics",
    kind: "stock",
    org: "eVenturers",
    year: "2023",
    role: "Built from scratch",
    tagline: "Every stock movement, from back office, storefront or order, in one live view.",
    problem: "Stock changed in three places and nobody could see why a number went up or down.",
    built: [
      "Tracks updates from the back office, the storefront and customer orders",
      "Shows previous and current levels with the increase or decrease for each change",
      "ES6+ aggregation pipelines (map, filter, reduce) for inventory trends",
    ],
    outcome: "Real-time inventory visibility for operators.",
    stack: ["JavaScript ES6+", "PHP", "MySQL"],
  },
  {
    slug: "sms-whatsapp",
    name: "SMS & WhatsApp Engagement",
    kind: "notify",
    org: "eVenturers",
    year: "2022",
    role: "Integration engineer",
    tagline: "Win back quiet customers and connect buyers, sellers and agents directly.",
    problem: "Customers who stopped ordering were never contacted, and support lived in email only.",
    built: [
      "SMS module that finds customers with no orders in a chosen period and sends new arrivals and offers",
      "WhatsApp integration in storefront and back office linking customers, departments, agents and sellers",
      "Cron-driven win-back emails for customers inactive for three months",
    ],
    outcome: "Fewer drop-offs and better retention.",
    stack: ["WhatsApp API", "SMS API", "PHP", "Cron"],
  },
  {
    slug: "referral",
    name: "Refer-a-Friend & Loyalty",
    kind: "loyalty",
    org: "eVenturers",
    year: "2022",
    role: "Designed & built",
    tagline: "Referral codes and loyalty points that customers redeem as discounts.",
    problem: "Growth relied on paid acquisition with no reward for customers who brought friends.",
    built: [
      "Referral page and refer-a-friend flow, designed and built front to back",
      "Points system that converts into discounts",
    ],
    outcome: "Reward-based growth and repeat purchases.",
    stack: ["PHP", "jQuery", "Bootstrap", "MySQL"],
  },
  {
    slug: "calcula",
    name: "Calcula Revenue Tool",
    kind: "calcula",
    org: "eVenturers",
    year: "2023",
    role: "Built",
    tagline: "Revenue broken down by customer group, geographic zone and country.",
    problem: "Revenue reporting was one number; the business couldn't see where it came from.",
    built: [
      "Revenue calculations across customer groups, zones and countries",
      "Views that turn sales data into business insight",
    ],
    outcome: "Clearer revenue insight for decisions.",
    stack: ["PHP", "MySQL", "JavaScript"],
  },
  {
    slug: "order-by-product",
    name: "Order by Product & Invoicing",
    kind: "orders",
    org: "eVenturers",
    year: "2023",
    role: "Built",
    tagline: "Bulk supplier orders and generated invoices from one back-office screen.",
    problem: "Restocking from many suppliers meant manual orders and hand-made invoices.",
    built: [
      "Back-office tool for bulk orders of products and accessories across manufacturers and suppliers",
      "Detailed purchase invoices for new and existing products",
      "PDF generation for invoices, order cancellations and payment returns",
    ],
    outcome: "Purchasing and paperwork in one flow.",
    stack: ["PHP", "PrestaShop", "PDF"],
  },
];

export const experience = [
  {
    role: "Senior Frontend / Full Stack Developer",
    company: "Valopt",
    place: "France · Remote",
    dates: "Jun 2024 — Present",
    points: [
      "Spearheaded the Valopt AI Chatbot Widget from concept to production: streaming SSE UI, 1,000+ daily sessions.",
      "Architected the analytics and monitoring dashboard in Next.js 14 and Strapi.",
      "Built the accessible React + Tailwind design system used across every surface.",
      "Sub-second loads through SSR, code splitting and caching, with LCP and CLS in range.",
    ],
  },
  {
    role: "Web Developer",
    company: "eVenturers Solutions",
    place: "Puducherry",
    dates: "Sep 2021 — Apr 2024",
    points: [
      "Led development for two French PrestaShop stores, Ecigplanete and Smoke-Market.",
      "Optimized a checkout used by 10,000+ monthly active users.",
      "Built internal tools from scratch: stock tracking, Calcula revenue, Order by Product, invoicing.",
      "Shipped SMS, WhatsApp and referral systems that improved retention.",
    ],
  },
] as const;

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Pondicherry Engineering College",
  dates: "2016 — 2019",
};

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Design systems"] },
  { group: "Backend & data", items: ["Node.js", "Fastify", "PostgreSQL", "Supabase", "Row-level security", "REST", "GraphQL"] },
  { group: "AI & real-time", items: ["Claude API", "RAG", "pgvector", "Tool use", "LLM evals", "SSE", "WebSockets"] },
  { group: "Payments & integrations", items: ["Stripe", "Razorpay", "QuickBooks", "Shopify", "WhatsApp Cloud API", "Strapi"] },
  { group: "Quality", items: ["Playwright", "Vitest", "Jest", "TanStack Query", "BrowserStack", "CI/CD"] },
] as const;

export const principles = [
  { title: "Fast is a feature", body: "SSR, code splitting and image discipline. I watch LCP and CLS the way product watches conversion." },
  { title: "Systems over screens", body: "One accessible component library and one set of tokens, so every new page is cheaper and harder to break." },
  { title: "Real-time, calmly", body: "Streaming AI replies and live dashboards should feel instant without feeling noisy." },
  { title: "Own it end to end", body: "From a vague requirement to a shipped, measured feature, including the edge cases nobody wrote down." },
] as const;

export const chatScript: { q: string; a: string; keys: string[] }[] = [
  {
    q: "What do you build?",
    keys: ["build", "do you do", "work on", "skills", "stack", "experience", "about you", "who are you"],
    a: "Full-stack products for AI, fintech and commerce. At Valopt, a streaming AI chatbot and its agent dashboard. On my own, two SaaS products: Auto Collect AI and Botly.",
  },
  {
    q: "What is Botly?",
    keys: ["botly", "support widget", "tamil", "hindi", "rag"],
    a: "My AI support assistant for Indian businesses. It reads a shop's website, then answers customers in Tamil, Hindi or Hinglish, grounded in approved knowledge, and sends leads to WhatsApp.",
  },
  {
    q: "What is Auto Collect AI?",
    keys: ["auto collect", "autocollect", "invoice", "fintech", "dunning"],
    a: "My invoice-chasing SaaS. It syncs unpaid invoices from Stripe and QuickBooks, runs reminder workflows, and keeps every tenant isolated with Postgres row-level security.",
  },
  {
    q: "Tell me about the chatbot",
    keys: ["chatbot", "valopt", "widget", "sse", "stream"],
    a: "I led the Valopt AI Chatbot Widget. Replies stream in over SSE, token by token like this one, across 1,000+ sessions a day.",
  },
  {
    q: "Are you open to work?",
    keys: ["open", "hire", "hiring", "available", "job", "role", "contact", "email", "remote", "salary"],
    a: "Yes. I'm open to senior full-stack and product-engineering roles, remote with EU or US overlap. Write to pvijayaprathap1@gmail.com.",
  },
];

// All content comes from Vijayaprathap's résumés. Edit here; every section reads from this file.

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
  resume: "Vijayaprathap-P-Resume.pdf",
  years: "4.5+",
};

export const proof = [
  { value: "4.5+", unit: "yrs", label: "Shipping production frontends" },
  { value: "1,000+", unit: "/day", label: "AI conversations through my widget" },
  { value: "10k+", unit: "MAU", label: "Shoppers on a checkout I optimized" },
  { value: "<1", unit: "sec", label: "SSR responses on Next.js 14" },
] as const;

export type PreviewKind =
  | "collect"
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
};

export const products: Product[] = [
  {
    slug: "auto-collect-ai",
    name: "Auto Collect AI",
    kind: "collect",
    org: "Own product",
    year: "2026",
    role: "Creator & lead engineer",
    featured: true,
    tagline: "Gets overdue B2B invoices paid, with the chasing done automatically.",
    problem:
      "Finance teams lose days chasing late invoices across spreadsheets, inboxes and accounting tools, and money sits unpaid.",
    built: [
      "Provider analytics dashboard that turns receivables into clear visuals: aging buckets, outstanding balances, recovery rates",
      "Automated recovery workflows for overdue payments",
      "Secure OAuth sign-in and connectors to external accounting and ERP systems",
      "Debtor self-service invoice review and payment, with direct payment-gateway settlement",
    ],
    outcome: "Taken from 0 to 1: designed, architected and built end to end.",
    stack: ["Next.js 14", "TypeScript", "Stripe", "OAuth", "PostgreSQL", "Tailwind CSS"],
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
  { group: "Core", items: ["React", "Next.js 14+", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "Zustand"] },
  { group: "Interface", items: ["Tailwind CSS", "SCSS", "Framer Motion", "Three.js", "ARIA", "Design systems"] },
  { group: "Real-time & AI", items: ["LLM APIs", "SSE", "WebSockets", "Prompt design", "Agent workflows"] },
  { group: "Data & payments", items: ["REST", "GraphQL", "TanStack Query", "Strapi", "PostgreSQL", "Stripe"] },
  { group: "Quality", items: ["Node.js", "Webpack", "Jest", "BrowserStack", "Git", "CI/CD"] },
] as const;

export const principles = [
  { title: "Fast is a feature", body: "SSR, code splitting and image discipline. I watch LCP and CLS the way product watches conversion." },
  { title: "Systems over screens", body: "One accessible component library and one set of tokens, so every new page is cheaper and harder to break." },
  { title: "Real-time, calmly", body: "Streaming AI replies and live dashboards should feel instant without feeling noisy." },
  { title: "Own it end to end", body: "From a vague requirement to a shipped, measured feature, including the edge cases nobody wrote down." },
] as const;

export const chatScript: { q: string; a: string }[] = [
  {
    q: "What do you build?",
    a: "Products for AI, fintech and commerce: a streaming chatbot, an agent dashboard, an invoice-recovery platform and the design systems underneath them.",
  },
  {
    q: "What is Auto Collect AI?",
    a: "My own product. It tracks overdue B2B invoices, shows receivables as aging buckets and recovery rates, and lets debtors review and pay online.",
  },
  {
    q: "Tell me about the chatbot",
    a: "I led the Valopt AI Chatbot Widget. Replies stream in over SSE, token by token like this one, across 1,000+ sessions a day.",
  },
  {
    q: "Are you open to work?",
    a: "Yes. I'm open to senior frontend and product-engineering roles, remote with EU or US overlap. Write to pvijayaprathap1@gmail.com.",
  },
];

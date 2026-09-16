export const profile = {
  name: "Vijayaprathap P",
  shortName: "VJ Prathap",
  monogram: "VP",
  title: "Senior Frontend Engineer",
  location: "Puducherry",
  coords: "11.9416° N  79.8083° E",
  timezone: "Asia/Kolkata",
  tzLabel: "IST",
  availability: "Available",
  current: "Valopt · France, Remote",
  email: "pvijayaprathap1@gmail.com",
  phone: "+91 90925 20552",
  phoneHref: "tel:+919092520552",
  linkedin: "https://linkedin.com/in/vjprathap",
  github: "https://github.com/vijayaprathap1",
  years: "4.5+",
  summary:
    "Senior frontend engineer. React, Next.js, TypeScript. E-commerce and AI. Built to load. Built to last.",
  about: [
    "I design and ship the surface of the product: modular systems, measured motion, pages that stay fast under real traffic. Most of the recent work sits where commerce operations meet AI-assisted customer experience.",
    "At Valopt I architected a Next.js 14 App Router environment with SSR and custom middleware. Sub-second responses. Core Web Vitals in range. I also lead the Valopt AI Chatbot Widget — real-time NLP for 1,000+ daily conversations — and the dashboard that watches it.",
    "Before that, nearly three years at eVenturers owning frontend for French e-commerce platforms: checkout for 10,000+ monthly users, inventory analytics, messaging, a referral system built from zero.",
  ],
} as const;

export const metrics = [
  { value: "4.5+", label: "Years shipping" },
  { value: "1k+", label: "Daily AI chats" },
  { value: "10k+", label: "MAU at checkout" },
  { value: "<1s", label: "SSR response" },
] as const;

export const marqueeItems = [
  "React",
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "TanStack Query",
  "SSE",
  "WebSockets",
  "Strapi",
  "Redux Toolkit",
  "Jest",
  "Webpack",
  "ARIA",
  "Core Web Vitals",
] as const;

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Spec" },
  { href: "#contact", label: "Contact" },
] as const;

export type ProjectCategory = "AI" | "Product" | "E-commerce" | "Automation" | "Tools";

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "AI",
  "Product",
  "E-commerce",
  "Automation",
  "Tools",
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  tags: string[];
  blurb: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "chatbot-widget",
    index: "01",
    title: "Valopt AI Chatbot Widget",
    category: "AI",
    year: "2024",
    image: "/projects/chatbot.jpg",
    tags: ["Next.js", "LLM APIs", "SSE"],
    blurb:
      "Real-time NLP widget. 1,000+ daily conversations. Streaming responses, optimized APIs, no chrome in the way.",
  },
  {
    slug: "valopt-website",
    index: "02",
    title: "Valopt.ai Website",
    category: "Product",
    year: "2024",
    image: "/projects/website.jpg",
    tags: ["Next.js", "Tailwind", "Strapi"],
    blurb:
      "SEO-first marketing surface. Strapi for content. Static where it should be. Fast where it counts.",
  },
  {
    slug: "chatbot-dashboard",
    index: "03",
    title: "AI Agent Chatbot Dashboard",
    category: "AI",
    year: "2025",
    image: "/projects/dashboard.jpg",
    tags: ["Next.js", "TypeScript", "Strapi"],
    blurb:
      "Operator console for live chatbot monitoring. Typed end to end. Signal over decoration.",
  },
  {
    slug: "valopt-mailer",
    index: "04",
    title: "ValoptMailer Automation",
    category: "Automation",
    year: "2025",
    image: "/projects/mailer.jpg",
    tags: ["Next.js", "Node.js", "OAuth2"],
    blurb:
      "Email as a service, not a script. Nodemailer, OAuth2, universal JavaScript architecture.",
  },
  {
    slug: "eciqplanet",
    index: "05",
    title: "Eciqplanet",
    category: "E-commerce",
    year: "2022",
    image: "/projects/ecommerce.jpg",
    tags: ["PrestaShop", "PHP", "MySQL"],
    blurb:
      "French commerce platform, customized end to end. Admin tools, dashboards, a storefront that actually sells.",
  },
  {
    slug: "stock-analytics",
    index: "06",
    title: "Stock Tracking & Analytics",
    category: "Tools",
    year: "2023",
    image: "/projects/analytics.jpg",
    tags: ["JavaScript", "ES6+"],
    blurb:
      "Inventory, live. Map, filter, reduce. The picture the floor needs, when it needs it.",
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Valopt Pvt Ltd",
    place: "France · Remote",
    dates: "Jun 2024 — Present",
    points: [
      "Next.js 14 App Router + Node. SSR and custom middleware. Sub-second responses. LCP and CLS in range.",
      "Modular accessible UI library in React, Tailwind, SCSS. One system, every browser.",
      "Valopt AI Chatbot Widget. 1,000+ daily interactions.",
      "Mockups to production against a custom Tailwind design system. Pixel-true. Responsive.",
    ],
  },
  {
    role: "Web Developer",
    company: "eVenturers Solutions Pvt. Ltd.",
    place: "Puducherry",
    dates: "Sep 2021 — Apr 2024",
    points: [
      "Frontend for major French e-commerce. Checkout tightened for 10,000+ monthly active users.",
      "Custom stock tracking and analytics in JavaScript (ES6+).",
      "WhatsApp and SMS notification systems. Retention, not noise.",
      "Referral and loyalty system from scratch. PHP plus a tuned frontend.",
    ],
  },
] as const;

export const education = {
  school: "Pondicherry Engineering College",
  degree: "B.E. Computer Science and Engineering",
  dates: "2016 — 2019",
  place: "Pondicherry",
} as const;

export const skillGroups = [
  {
    label: "Core",
    items: [
      "React.js",
      "Next.js 14+ (App Router, SSR, SSG, Middleware)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "HTML5",
    ],
  },
  {
    label: "Interface",
    items: [
      "Tailwind CSS",
      "SCSS / SASS",
      "Mobile-first",
      "Framer Motion",
      "Semantic HTML",
      "ARIA",
    ],
  },
  {
    label: "Realtime",
    items: ["WebSockets", "Server-Sent Events", "LLM API integration"],
  },
  {
    label: "Data",
    items: ["REST", "GraphQL", "TanStack Query", "Strapi", "Postman"],
  },
  {
    label: "Ops",
    items: ["Node.js", "Webpack", "Jest", "Chrome DevTools", "BrowserStack", "Git"],
  },
] as const;

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
] as const;

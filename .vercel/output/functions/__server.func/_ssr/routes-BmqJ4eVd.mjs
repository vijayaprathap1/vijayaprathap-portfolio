import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ArrowUpRight, i as Check, o as ArrowDown, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, c as Slot, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BmqJ4eVd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
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
	summary: "Senior frontend engineer. React, Next.js, TypeScript. E-commerce and AI. Built to load. Built to last.",
	about: [
		"I design and ship the surface of the product: modular systems, measured motion, pages that stay fast under real traffic. Most of the recent work sits where commerce operations meet AI-assisted customer experience.",
		"At Valopt I architected a Next.js 14 App Router environment with SSR and custom middleware. Sub-second responses. Core Web Vitals in range. I also lead the Valopt AI Chatbot Widget — real-time NLP for 1,000+ daily conversations — and the dashboard that watches it.",
		"Before that, nearly three years at eVenturers owning frontend for French e-commerce platforms: checkout for 10,000+ monthly users, inventory analytics, messaging, a referral system built from zero."
	]
};
var metrics = [
	{
		value: "4.5+",
		label: "Years shipping"
	},
	{
		value: "1k+",
		label: "Daily AI chats"
	},
	{
		value: "10k+",
		label: "MAU at checkout"
	},
	{
		value: "<1s",
		label: "SSR response"
	}
];
var marqueeItems = [
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
	"Core Web Vitals"
];
var navItems = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Spec"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var projectCategories = [
	"All",
	"AI",
	"Product",
	"E-commerce",
	"Automation",
	"Tools"
];
var projects = [
	{
		slug: "chatbot-widget",
		index: "01",
		title: "Valopt AI Chatbot Widget",
		category: "AI",
		year: "2024",
		image: "/projects/chatbot.jpg",
		tags: [
			"Next.js",
			"LLM APIs",
			"SSE"
		],
		blurb: "Real-time NLP widget. 1,000+ daily conversations. Streaming responses, optimized APIs, no chrome in the way."
	},
	{
		slug: "valopt-website",
		index: "02",
		title: "Valopt.ai Website",
		category: "Product",
		year: "2024",
		image: "/projects/website.jpg",
		tags: [
			"Next.js",
			"Tailwind",
			"Strapi"
		],
		blurb: "SEO-first marketing surface. Strapi for content. Static where it should be. Fast where it counts."
	},
	{
		slug: "chatbot-dashboard",
		index: "03",
		title: "AI Agent Chatbot Dashboard",
		category: "AI",
		year: "2025",
		image: "/projects/dashboard.jpg",
		tags: [
			"Next.js",
			"TypeScript",
			"Strapi"
		],
		blurb: "Operator console for live chatbot monitoring. Typed end to end. Signal over decoration."
	},
	{
		slug: "valopt-mailer",
		index: "04",
		title: "ValoptMailer Automation",
		category: "Automation",
		year: "2025",
		image: "/projects/mailer.jpg",
		tags: [
			"Next.js",
			"Node.js",
			"OAuth2"
		],
		blurb: "Email as a service, not a script. Nodemailer, OAuth2, universal JavaScript architecture."
	},
	{
		slug: "eciqplanet",
		index: "05",
		title: "Eciqplanet",
		category: "E-commerce",
		year: "2022",
		image: "/projects/ecommerce.jpg",
		tags: [
			"PrestaShop",
			"PHP",
			"MySQL"
		],
		blurb: "French commerce platform, customized end to end. Admin tools, dashboards, a storefront that actually sells."
	},
	{
		slug: "stock-analytics",
		index: "06",
		title: "Stock Tracking & Analytics",
		category: "Tools",
		year: "2023",
		image: "/projects/analytics.jpg",
		tags: ["JavaScript", "ES6+"],
		blurb: "Inventory, live. Map, filter, reduce. The picture the floor needs, when it needs it."
	}
];
var experience = [{
	role: "Senior Full Stack Developer",
	company: "Valopt Pvt Ltd",
	place: "France · Remote",
	dates: "Jun 2024 — Present",
	points: [
		"Next.js 14 App Router + Node. SSR and custom middleware. Sub-second responses. LCP and CLS in range.",
		"Modular accessible UI library in React, Tailwind, SCSS. One system, every browser.",
		"Valopt AI Chatbot Widget. 1,000+ daily interactions.",
		"Mockups to production against a custom Tailwind design system. Pixel-true. Responsive."
	]
}, {
	role: "Web Developer",
	company: "eVenturers Solutions Pvt. Ltd.",
	place: "Puducherry",
	dates: "Sep 2021 — Apr 2024",
	points: [
		"Frontend for major French e-commerce. Checkout tightened for 10,000+ monthly active users.",
		"Custom stock tracking and analytics in JavaScript (ES6+).",
		"WhatsApp and SMS notification systems. Retention, not noise.",
		"Referral and loyalty system from scratch. PHP plus a tuned frontend."
	]
}];
var education = {
	school: "Pondicherry Engineering College",
	degree: "B.E. Computer Science and Engineering",
	dates: "2016 — 2019",
	place: "Pondicherry"
};
var skillGroups = [
	{
		label: "Core",
		items: [
			"React.js",
			"Next.js 14+ (App Router, SSR, SSG, Middleware)",
			"TypeScript",
			"JavaScript (ES6+)",
			"Redux Toolkit",
			"HTML5"
		]
	},
	{
		label: "Interface",
		items: [
			"Tailwind CSS",
			"SCSS / SASS",
			"Mobile-first",
			"Framer Motion",
			"Semantic HTML",
			"ARIA"
		]
	},
	{
		label: "Realtime",
		items: [
			"WebSockets",
			"Server-Sent Events",
			"LLM API integration"
		]
	},
	{
		label: "Data",
		items: [
			"REST",
			"GraphQL",
			"TanStack Query",
			"Strapi",
			"Postman"
		]
	},
	{
		label: "Ops",
		items: [
			"Node.js",
			"Webpack",
			"Jest",
			"Chrome DevTools",
			"BrowserStack",
			"Git"
		]
	}
];
var languages = [{
	name: "Tamil",
	level: "Native"
}, {
	name: "English",
	level: "Professional"
}];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-wide border-t border-border pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-fg",
					children: "02 — About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-4xl font-display text-display font-medium tracking-display",
					children: "The interface is the company."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 font-display text-4xl font-medium tracking-tight tabular-nums",
								children: [profile.years, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl text-muted",
									children: " yrs"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Based"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 font-display text-4xl font-medium tracking-tight",
								children: profile.location
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-fg",
								children: profile.current
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-5 text-base leading-relaxed text-muted sm:text-lg",
							children: profile.about.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-pretty",
								children: para
							}, para))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-14",
							children: [experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-3 border-t border-border py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-1 font-mono text-xs tabular-nums text-muted",
									children: job.dates
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-medium tracking-tight",
										children: job.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											job.company,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: " · "
											}),
											job.place
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-2 text-sm leading-relaxed text-fg",
										children: job.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "pl-4 -indent-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-subtle",
												children: "— "
											}), point]
										}, point))
									})
								] })]
							}, job.company)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-3 border-t border-border py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-1 font-mono text-xs tabular-nums text-muted",
									children: education.dates
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-medium tracking-tight",
									children: education.degree
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: [
										education.school,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: " · "
										}),
										education.place
									]
								})] })]
							})]
						})]
					})]
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium outline-none select-none transition-[background-color,color,box-shadow,opacity,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-fg/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[inset_0_0_0_1px_var(--color-border)] hover:shadow-[inset_0_0_0_1px_var(--color-fg)]",
			ghost: "bg-transparent text-fg hover:bg-surface",
			ink: "bg-fg text-bg hover:opacity-90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-sm bg-bg px-3.5 text-base text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle md:text-sm", "focus-visible:shadow-[inset_0_0_0_1px_var(--color-fg)]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("kicker mb-2 block text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-36 w-full resize-y rounded-sm bg-bg px-3.5 py-3 text-base text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle md:text-sm", "focus-visible:shadow-[inset_0_0_0_1px_var(--color-fg)]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	function readForm(form) {
		const data = new FormData(form);
		return {
			name: String(data.get("name") ?? "").trim(),
			email: String(data.get("email") ?? "").trim(),
			message: String(data.get("message") ?? "").trim()
		};
	}
	function validate(values) {
		const next = {};
		if (!values.name) next.name = "Name is required.";
		if (!values.email) next.email = "Email is required.";
		else if (!EMAIL_RE.test(values.email)) next.email = "That email looks off.";
		if (values.message.length < 12) next.message = "Give me 12+ characters of context.";
		setErrors(next);
		return Object.keys(next).length === 0;
	}
	function onSubmit(event) {
		event.preventDefault();
		const values = readForm(event.currentTarget);
		setName(values.name);
		setEmail(values.email);
		setMessage(values.message);
		if (!validate(values)) return;
		setStatus("submitting");
		const payload = {
			...values,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const raw = localStorage.getItem("vp-inquiries");
			const existing = raw ? JSON.parse(raw) : [];
			existing.push(payload);
			localStorage.setItem("vp-inquiries", JSON.stringify(existing));
		} catch {}
		window.setTimeout(() => {
			setStatus("sent");
			toast.success("Received. I’ll write back.");
		}, 420);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-wide border-t border-border pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-fg",
					children: "04 — Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-display font-medium tracking-display",
					children: "If it’s real, I’ll build it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted",
							children: "Frontend roles. Contract. AI-adjacent product UI. I read every message."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-10 space-y-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${profile.email}`,
									className: "mt-1 inline-flex items-center gap-1 text-fg transition-[opacity] duration-150 hover:opacity-70",
									children: [profile.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.phoneHref,
									className: "mt-1 inline-flex text-fg transition-[opacity] duration-150 hover:opacity-70",
									children: profile.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker",
									children: "Social"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex flex-wrap gap-x-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: profile.linkedin,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-fg hover:opacity-70",
										children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: profile.github,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-fg hover:opacity-70",
										children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
									})]
								})] })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-80 flex-col justify-center border border-border bg-surface p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-sm bg-fg text-bg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-3xl font-medium tracking-tight",
									children: "Received."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 max-w-md text-muted",
									children: [
										"I’ll reply to ",
										email,
										" from ",
										profile.email,
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									className: "mt-8 w-fit",
									onClick: () => {
										setStatus("idle");
										setName("");
										setEmail("");
										setMessage("");
									},
									children: "Send another"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							noValidate: true,
							className: "border border-border bg-surface p-5 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "name",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											name: "name",
											autoComplete: "name",
											value: name,
											onChange: (e) => setName(e.target.value),
											"aria-invalid": Boolean(errors.name),
											"aria-describedby": errors.name ? "name-error" : void 0
										}),
										errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "name-error",
											className: "mt-1.5 text-xs text-danger",
											children: errors.name
										}) : null
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "email",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											name: "email",
											type: "email",
											autoComplete: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											"aria-invalid": Boolean(errors.email),
											"aria-describedby": errors.email ? "email-error" : void 0
										}),
										errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "email-error",
											className: "mt-1.5 text-xs text-danger",
											children: errors.email
										}) : null
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "message",
											children: "Message"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "message",
											name: "message",
											value: message,
											onChange: (e) => setMessage(e.target.value),
											placeholder: "What should we ship?",
											"aria-invalid": Boolean(errors.message),
											"aria-describedby": errors.message ? "message-error" : void 0
										}),
										errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "message-error",
											className: "mt-1.5 text-xs text-danger",
											children: errors.message
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-muted",
										children: "No list. A reply."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "ink",
										disabled: status === "submitting",
										children: status === "submitting" ? "Sending…" : "Send"
									})]
								})
							]
						})
					})]
				})
			]
		})
	});
}
function Cursor() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		const hover = window.matchMedia("(hover: hover)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || !hover || reduce) return;
		const el = ref.current;
		if (!el) return;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let cx = x;
		let cy = y;
		let raf = 0;
		const onMove = (event) => {
			x = event.clientX;
			y = event.clientY;
		};
		const loop = () => {
			cx += (x - cx) * .2;
			cy += (y - cy) * .2;
			el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "cursor-dot",
		"aria-hidden": "true"
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-between px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-wide items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker rise text-fg",
					children: ["Status — ", profile.availability]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker rise hidden sm:block",
					style: { animationDelay: "80ms" },
					children: profile.coords
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "rise max-w-full font-display text-hero font-medium tracking-display text-pretty text-fg uppercase",
					style: { animationDelay: "60ms" },
					children: ["Vijayaprathap", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " P"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rise mt-6 max-w-xl text-base text-muted sm:text-lg",
					style: { animationDelay: "140ms" },
					children: [profile.title, ". E-commerce and AI. The interface is the product — if it blinks, it isn’t finished."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise mx-auto grid w-full max-w-wide gap-8 sm:grid-cols-[1fr_auto] sm:items-end",
				style: { animationDelay: "220ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4",
					children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "kicker",
						children: m.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-2xl font-medium tracking-tight tabular-nums sm:text-3xl",
						children: m.value
					})] }, m.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							children: ["Selected work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Start"
						})
					})]
				})]
			})
		]
	});
}
function TechMarquee() {
	const row = [...marqueeItems, ...marqueeItems];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8 px-8 py-4 font-mono text-xs uppercase tracking-mono text-muted",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-subtle",
					children: "/"
				})]
			}, `${item}-${i}`))
		})
	});
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-fg",
						children: "01 — Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title font-medium tracking-tight",
						children: "Six systems. One standard."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm text-muted",
						children: "Filter the practice. Hover a plate for the short version."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-1 overflow-x-auto border-b border-border pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					role: "tablist",
					"aria-label": "Project categories",
					children: projectCategories.map((cat) => {
						const active = filter === cat;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": active,
							onClick: () => setFilter(cat),
							className: cn("h-11 shrink-0 px-4 font-mono text-xs uppercase tracking-mono transition-[color,box-shadow] duration-150 ease-out", active ? "text-fg shadow-[inset_0_-1px_0_0_var(--color-fg)]" : "text-muted hover:text-fg"),
							children: cat
						}, cat);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: visible.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectPlate, {
						project,
						index: i
					}, project.slug))
				}, filter)
			]
		})
	});
}
function ProjectPlate({ project, index }) {
	const reverse = index % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "project-enter group grid gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-12 lg:py-14",
		style: { animationDelay: `${Math.min(index, 4) * 70}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative overflow-hidden bg-surface lg:col-span-7", reverse && "lg:order-2"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-photo overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: "",
					className: "size-full object-cover transition-[transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("pointer-events-none absolute inset-0 hidden items-end md:flex", "bg-gradient-to-t from-bg/90 via-bg/20 to-transparent", "opacity-0 transition-[opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", "group-hover:opacity-100 group-focus-within:opacity-100", "motion-reduce:opacity-100"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md p-6 text-sm leading-relaxed text-fg",
					children: project.blurb
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col justify-end lg:col-span-5", reverse && "lg:order-1"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm tabular-nums text-muted",
						children: project.index
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: project.category
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-xs uppercase tracking-mono text-muted",
					children: [
						project.year,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: " / "
						}),
						project.tags.join(" / ")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-sm leading-relaxed text-muted md:hidden",
					children: project.blurb
				})
			]
		})]
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const update = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? window.scrollY / max : 0;
			el.style.transform = `scaleX(${p})`;
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "scroll-progress",
		style: { transform: "scaleX(0)" },
		"aria-hidden": "true"
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-wide px-5 py-12 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-hero font-medium uppercase tracking-display text-fg",
					children: ["Vijayaprathap", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " P"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Write"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${profile.email}`,
								className: "transition-[opacity] duration-150 hover:opacity-60",
								children: profile.email
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.phoneHref,
								className: "transition-[opacity] duration-150 hover:opacity-60",
								children: profile.phone
							}) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Follow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.github,
								target: "_blank",
								rel: "noreferrer",
								className: "transition-[opacity] duration-150 hover:opacity-60",
								children: "GitHub"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "transition-[opacity] duration-150 hover:opacity-60",
								children: "LinkedIn"
							}) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								profile.location,
								". ",
								profile.current,
								"."
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						year,
						" ",
						profile.name
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Space Grotesk · IBM Plex Mono · ", profile.coords] })]
				})
			]
		})
	});
}
function scrollToHash(hash) {
	const id = hash.replace("#", "");
	const el = document.getElementById(id);
	if (!el) return;
	el.scrollIntoView({
		behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
		block: "start"
	});
}
function formatIst(date = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("en-GB", {
		timeZone: profile.timezone,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	}).format(date);
}
function useIstClock() {
	const [time, setTime] = (0, import_react.useState)(formatIst);
	(0, import_react.useEffect)(() => {
		const tick = () => setTime(formatIst());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return time;
}
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const clock = useIstClock();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const ids = navItems.map((item) => item.href.slice(1));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-40% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5
			]
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	const onNav = (href) => (event) => {
		event.preventDefault();
		setOpen(false);
		scrollToHash(href);
		history.replaceState(null, "", href);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out", scrolled ? "border-border bg-bg" : "border-transparent bg-bg"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-wide items-center justify-between gap-4 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					onClick: onNav("#top"),
					className: "flex items-center gap-3",
					"aria-label": "Back to top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tracking-mono text-fg",
						children: profile.monogram
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: onNav(item.href),
						className: cn("px-3 py-2 font-mono text-xs uppercase tracking-mono transition-[color] duration-150 ease-out", active === item.href ? "text-fg" : "text-muted hover:text-fg"),
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hidden font-mono text-xs tabular-nums tracking-mono text-muted sm:block",
							suppressHydrationWarning: true,
							children: [
								profile.tzLabel,
								" ",
								clock
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: onNav("#contact"),
								children: "Contact"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									className: "md:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								"aria-describedby": void 0,
								className: "fixed inset-0 z-50 flex flex-col bg-bg p-6 pb-24 outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "font-mono text-xs tracking-mono",
											children: profile.monogram
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												"aria-label": "Close menu",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										className: "mt-16 flex flex-col gap-1",
										"aria-label": "Mobile",
										children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: item.href,
											onClick: onNav(item.href),
											className: "py-3 font-display text-5xl font-medium tracking-tight text-fg",
											children: item.label
										}, item.href))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-auto font-mono text-xs text-muted",
										children: profile.email
									})
								]
							})] })]
						})
					]
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-wide border-t border-border pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-fg",
					children: "03 — Spec"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-title font-medium tracking-tight",
					children: "The stack, as a system."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 border-t border-border",
					children: [skillGroups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tabular-nums text-subtle sm:col-span-1",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "kicker sm:col-span-2",
								children: group.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-fg sm:col-span-9 sm:text-base",
								children: group.items.join("  ·  ")
							})
						]
					}, group.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tabular-nums text-subtle sm:col-span-1",
								children: "06"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "kicker sm:col-span-2",
								children: "Languages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-fg sm:col-span-9 sm:text-base",
								children: languages.map((lang) => `${lang.name} (${lang.level})`).join("  ·  ")
							})
						]
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#work",
				className: "skip-link",
				children: "Skip to work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMarquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };

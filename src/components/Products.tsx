import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { products, type Product } from "@/data";
import { ChatDemo } from "./ChatDemo";
import { SplitReveal, Tilt } from "./motionkit";
import { Preview } from "./previews";
import { Icon, Reveal } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

export function Products() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  const [open, setOpen] = useState<Product | null>(null);

  return (
    <section id="products" className="relative py-28 sm:py-36">
      <div className="page">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end sm:mb-20">
          <div className="md:col-span-8">
            <p className="eyebrow">
              <span className="text-accent">01</span> / Products
            </p>
            <SplitReveal
              className="mt-4 text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] font-medium tracking-[-0.045em]"
              parts={["Twelve products,", { t: "built for real users.", className: "serif text-dim" }]}
            />
          </div>
          <Reveal className="text-[15px] leading-relaxed text-dim md:col-span-4 md:pb-2">
            My own fintech product, an AI support suite at Valopt, and the tools behind two French
            e-commerce stores. Scroll through the headliners, then open anything in the index.
          </Reveal>
        </div>
      </div>

      <FeaturedStack items={featured} />

      <div className="page mt-28 sm:mt-36">
        <ProductIndex items={rest} onOpen={setOpen} />
        <p className="mt-6 font-mono text-xs text-faint">
          Product visuals are UI recreations with placeholder data. The originals are private client work.
        </p>
      </div>

      <Drawer product={open} onClose={() => setOpen(null)} />
    </section>
  );
}

/* ---------------- Featured: sticky stacking cards ---------------- */

function FeaturedStack({ items }: { items: Product[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="page relative">
      {items.map((p, i) => (
        <StackCard key={p.slug} p={p} i={i} n={items.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function StackCard({ p, i, n, progress }: { p: Product; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.045]);
  const dim = useTransform(progress, [i / n, Math.min(1, (i + 1) / n)], [0, i === n - 1 ? 0 : 0.45]);
  return (
    <div className="mb-8 lg:sticky lg:mb-0 lg:h-[92vh] lg:pt-2" style={{ top: `${88 + i * 26}px` }}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="relative grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-line-strong bg-raised shadow-[0_-30px_80px_-40px_rgb(0_0_0/0.9)] lg:h-[min(76vh,44rem)] lg:grid-cols-12"
      >
        <div className="relative min-w-0 border-b border-line bg-bg/60 p-4 sm:p-7 lg:col-span-7 lg:border-r lg:border-b-0">
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-96 rounded-full bg-accent/15 blur-[100px]" aria-hidden="true" />
          <div className="relative h-[22rem] sm:h-[26rem] lg:h-full">
            {p.kind === "chat" ? (
              <ChatDemo />
            ) : (
              <div className="h-full w-full lg:h-[74%] lg:w-[74%] lg:origin-top-left lg:scale-[1.35]">
                <Preview kind={p.kind} />
              </div>
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-col p-6 sm:p-9 lg:col-span-5 lg:overflow-y-auto">
          <div className="flex items-center justify-between gap-3">
            <span className={`chip ${p.org === "Own product" ? "!border-accent/50 !text-accent" : ""}`}>{p.org}</span>
            <span className="font-mono text-xs text-faint">
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 text-[clamp(1.9rem,3vw,2.75rem)] leading-[1.02] font-medium tracking-[-0.035em]">{p.name}</h3>
          <p className="mt-2 font-mono text-xs text-faint uppercase">
            {p.year} · {p.role}
          </p>
          <p className="mt-5 leading-relaxed text-dim">{p.tagline}</p>

          <ul className="mt-6 space-y-2.5 text-[15px]">
            {p.built.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed text-fg/85">
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl border border-accent/25 bg-accent/[0.07] px-4 py-3 text-[15px] font-medium">
            <span className="text-accent">→</span> {p.outcome}
          </p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
            {p.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <motion.div className="pointer-events-none absolute inset-0 bg-bg" style={{ opacity: dim }} aria-hidden="true" />
      </motion.article>
    </div>
  );
}

/* ---------------- Index with cursor-following preview ---------------- */

const FILTERS = ["All", "Valopt", "eVenturers"] as const;

function ProductIndex({ items, onOpen }: { items: Product[]; onOpen: (p: Product) => void }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [hover, setHover] = useState<Product | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const rot = useSpring(0, { stiffness: 200, damping: 20 });
  const last = useRef(0);

  const list = filter === "All" ? items : items.filter((p) => p.org === filter);

  return (
    <div
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        x.set(e.clientX + 28);
        y.set(e.clientY - 110);
        rot.set(Math.max(-8, Math.min(8, (e.clientX - last.current) * 0.6)));
        last.current = e.clientX;
      }}
      onPointerLeave={() => setHover(null)}
    >
      <Reveal className="flex flex-col gap-5 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Index</p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Everything else I've shipped</h3>
        </div>
        <div className="flex gap-1 rounded-full border border-line bg-bg/50 p-1 backdrop-blur" role="group" aria-label="Filter by company">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="relative rounded-full px-4 py-1.5 text-sm text-dim transition-colors aria-pressed:text-bg"
            >
              {filter === f && (
                <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <ul>
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.03, ease } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <button
                type="button"
                onClick={() => onOpen(p)}
                onPointerEnter={() => setHover(p)}
                onFocus={() => setHover(null)}
                className="group relative grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-line py-6 text-left sm:grid-cols-[3rem_1.4fr_1fr_6rem_2rem] sm:py-7"
              >
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-accent/[0.08] to-transparent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
                <span className="relative hidden font-mono text-xs text-faint sm:block">{String(i + 1).padStart(2, "0")}</span>
                <span className="relative text-xl font-medium tracking-[-0.02em] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-2xl">
                  {p.name}
                </span>
                <span className="relative col-start-1 text-sm text-dim sm:col-start-auto">{p.tagline}</span>
                <span className="relative hidden font-mono text-xs text-faint sm:block">
                  {p.org} · {p.year}
                </span>
                <span className="relative row-span-2 row-start-1 grid size-9 place-items-center rounded-full border border-line text-dim transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink sm:row-span-1 sm:row-start-auto">
                  <Icon name="arrow" className="size-4" />
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* floating preview (desktop pointer only) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 hidden h-56 w-80 md:block"
        style={{ x: sx, y: sy, rotate: rot }}
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {hover && (
            <motion.div
              key={hover.slug}
              className="h-full"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease }}
            >
              <Preview kind={hover.kind} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------------- Detail drawer ---------------- */

function Drawer({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div className="fixed inset-0 z-[70]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-bg/70 backdrop-blur-sm" tabIndex={-1} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease }}
            className="absolute top-0 right-0 flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-line-strong bg-raised"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-raised/90 px-6 py-4 backdrop-blur">
              <span className="chip">{product.org} · {product.year}</span>
              <button ref={closeRef} type="button" onClick={onClose} className="grid size-9 place-items-center rounded-full border border-line hover:border-fg" aria-label="Close case study">
                <Icon name="close" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <Tilt className="h-60 rounded-xl sm:h-72" max={5}>
                <Preview kind={product.kind} />
              </Tilt>
              <h2 id="drawer-title" className="mt-8 text-3xl leading-tight font-medium tracking-[-0.03em]">{product.name}</h2>
              <p className="mt-1 font-mono text-xs text-faint uppercase">{product.role}</p>
              <p className="mt-4 text-lg leading-relaxed text-dim">{product.tagline}</p>
              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="eyebrow">Problem</dt>
                  <dd className="mt-2 leading-relaxed text-fg/85">{product.problem}</dd>
                </div>
                <div>
                  <dt className="eyebrow">What I built</dt>
                  <dd className="mt-2">
                    <ul className="space-y-2">
                      {product.built.map((b) => (
                        <li key={b} className="flex gap-3 leading-relaxed text-fg/85">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Result</dt>
                  <dd className="mt-2 font-medium">
                    <span className="text-accent">→</span> {product.outcome}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Stack</dt>
                  <dd className="mt-3 flex flex-wrap gap-1.5">
                    {product.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

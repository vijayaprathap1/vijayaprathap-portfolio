import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { products, type Product } from "@/data";
import { Preview } from "./previews";
import { Icon, Reveal, SectionHead } from "./ui";

export function Products() {
  const [flagship, ...rest] = products;
  const valopt = rest.filter((p) => p.company === "Valopt");
  const ev = rest.filter((p) => p.company !== "Valopt");

  return (
    <section id="products" className="page py-28 sm:py-36">
      <SectionHead
        index="01"
        label="Products"
        title={
          <>
            Eight products, <span className="serif text-dim">built for real users.</span>
          </>
        }
        aside={
          <p className="text-[15px] leading-relaxed">
            AI customer support at Valopt, French e-commerce at eVenturers. Open any card to see the
            problem, what I built and the result.
          </p>
        }
      />

      <Flagship p={flagship} />

      <Group label="Valopt" sub="AI platform · 2024 — now">
        <div className="grid gap-4 md:grid-cols-3">
          {valopt.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </Group>

      <Group label="eVenturers" sub="E-commerce · 2021 — 2024">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ev.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductCard p={p} compact />
            </Reveal>
          ))}
        </div>
      </Group>

      <p className="mt-8 font-mono text-xs text-faint">
        Product visuals are UI recreations. The originals are private client work.
      </p>
    </section>
  );
}

function Group({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="mt-20">
      <Reveal className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <h3 className="text-xl font-medium tracking-tight">{label}</h3>
        <p className="font-mono text-xs text-faint">{sub}</p>
      </Reveal>
      {children}
    </div>
  );
}

function Meta({ p }: { p: Product }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] tracking-wide text-faint uppercase">
      <span>{p.company}</span>
      <span aria-hidden="true">·</span>
      <span>{p.year}</span>
      <span aria-hidden="true">·</span>
      <span>{p.role}</span>
    </p>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
      {items.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Flagship({ p }: { p: Product }) {
  return (
    <Reveal>
      <article className="card group relative grid grid-cols-1 overflow-hidden lg:grid-cols-12">
        <div className="relative flex flex-col border-b border-line bg-bg/40 p-5 sm:p-8 min-w-0 lg:col-span-7 lg:border-r lg:border-b-0">
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-80 rounded-full bg-accent/10 blur-[90px]"
            aria-hidden="true"
          />
          <span className="chip relative mb-5 self-start !border-accent/40 !text-accent">Flagship</span>
          <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-96 lg:flex-1 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
            <div className="h-[69%] w-[69%] origin-top-left scale-[1.45]">
              <Preview kind={p.kind} />
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:col-span-5">
          <Meta p={p} />
          <h3 className="mt-4 text-3xl leading-tight font-medium tracking-[-0.03em] sm:text-4xl">{p.name}</h3>
          <p className="mt-4 leading-relaxed text-dim">{p.summary}</p>

          <dl className="mt-8 space-y-6 text-[15px]">
            <div>
              <dt className="eyebrow">Problem</dt>
              <dd className="mt-2 leading-relaxed text-fg/85">{p.problem}</dd>
            </div>
            <div>
              <dt className="eyebrow">What I built</dt>
              <dd className="mt-2">
                <ul className="space-y-2">
                  {p.built.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-fg/85">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <p className="mt-8 rounded-xl border border-accent/25 bg-accent/[0.06] px-4 py-3.5 text-[15px] font-medium text-fg">
            <span className="text-accent">→</span> {p.outcome}
          </p>

          <div className="mt-auto pt-8">
            <Stack items={p.stack} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProductCard({ p, compact }: { p: Product; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const id = `case-${p.slug}`;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-line-strong">
      <div className={`border-b border-line bg-bg/40 p-4 ${compact ? "h-44" : "h-56"}`}>
        <div className="h-full transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
          <Preview kind={p.kind} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Meta p={p} />
        <h4 className={`mt-3 font-medium tracking-[-0.02em] ${compact ? "text-lg" : "text-xl"}`}>{p.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-dim">{p.summary}</p>
        <p className="mt-4 text-sm font-medium">
          <span className="text-accent">→</span> {p.outcome}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-5 text-sm">
                <div>
                  <p className="eyebrow">Problem</p>
                  <p className="mt-1.5 leading-relaxed text-fg/85">{p.problem}</p>
                </div>
                <div>
                  <p className="eyebrow">What I built</p>
                  <ul className="mt-1.5 space-y-1.5">
                    {p.built.map((b) => (
                      <li key={b} className="flex gap-2.5 leading-relaxed text-fg/85">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <Stack items={p.stack.slice(0, compact ? 2 : 3)} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={id}
            className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-dim transition-colors hover:text-fg"
          >
            {open ? "Less" : "Case"}
            <Icon
              name="down"
              className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}

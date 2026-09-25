import { motion } from "motion/react";
import { profile, proof, stack } from "@/data";
import { Magnetic, SplitReveal } from "./motionkit";
import { Icon } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col pt-28 sm:pt-32">
      <div className="page relative flex flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg/50 py-1.5 pr-3.5 pl-2.5 text-[13px] text-dim backdrop-blur-md transition-colors hover:border-line-strong hover:text-fg"
          >
            <span className="pulse-dot size-2 rounded-full bg-accent" />
            Open to senior frontend & product roles
          </a>
          <span className="font-mono text-xs text-faint">Remote · EU / US overlap</span>
        </motion.div>

        <SplitReveal
          as="h1"
          onView={false}
          delay={0.15}
          className="mt-8 max-w-[15ch] text-[clamp(2.9rem,7vw,6.6rem)] lg:max-w-[64%] leading-[0.92] font-medium tracking-[-0.05em]"
          parts={[
            "I build the interfaces behind",
            { t: "AI,", className: "serif text-accent" },
            { t: "fintech", className: "serif" },
            "and",
            { t: "commerce.", className: "serif" },
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-dim"
        >
          I'm {profile.first}, a senior frontend engineer at Valopt and the creator of Auto Collect
          AI. {profile.years} years of React, Next.js and TypeScript, shipped to real users: an AI
          chatbot with 1,000+ conversations a day, a checkout for 10,000+ shoppers a month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a href="#products" className="btn btn-primary">
              Explore the products <Icon name="down" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-ghost backdrop-blur-md">
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="page relative mt-16 pb-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 + i * 0.08, ease }}
              className="bg-bg/70 px-5 py-6 backdrop-blur-md sm:px-7"
            >
              <dd className="text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-medium tracking-[-0.04em] tabular-nums">
                {p.value}
                <span className="ml-1 font-mono text-xs tracking-normal text-faint">{p.unit}</span>
              </dd>
              <dt className="mt-2.5 text-[13px] leading-snug text-dim">{p.label}</dt>
            </motion.div>
          ))}
        </dl>
      </div>

      <StackMarquee />
    </section>
  );
}

function StackMarquee() {
  const items = stack.flatMap((g) => g.items);
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-bg/40 py-4 backdrop-blur-sm" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-dim">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

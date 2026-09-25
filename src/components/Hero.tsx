import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { chatScript, profile, proof, stack } from "@/data";
import { Icon } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[44rem]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-24 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-raised/60 py-1.5 pr-3.5 pl-2.5 text-[13px] text-dim backdrop-blur transition-colors hover:border-line-strong hover:text-fg"
          >
            <span className="pulse-dot size-2 rounded-full bg-accent" />
            Open to senior frontend roles
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="mt-7 text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[0.98] font-medium tracking-[-0.045em]"
          >
            I build the interfaces behind <span className="serif text-accent">AI</span> and{" "}
            <span className="serif">commerce</span> products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-dim"
          >
            I'm {profile.first}, a senior frontend engineer at Valopt. For {profile.years} years I've
            shipped React, Next.js and TypeScript products, from an AI chatbot answering 1,000+
            customers a day to a checkout used by 10,000+ shoppers a month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#products" className="btn btn-primary">
              See the products <Icon name="down" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="min-w-0 lg:col-span-5"
        >
          <HeroChat />
        </motion.div>
      </div>

      <div className="page relative mt-20 sm:mt-28">
        <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`py-7 sm:py-9 ${i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : ""} ${
                i === 2 ? "border-t border-line lg:border-t-0 lg:border-l lg:pl-8" : ""
              } ${i === 3 ? "border-t border-line lg:border-t-0" : ""}`}
            >
              <dd className="text-[clamp(2rem,3.6vw,3rem)] leading-none font-medium tracking-[-0.04em] tabular-nums">
                {p.value}
                <span className="ml-1 font-mono text-sm tracking-normal text-faint">{p.unit}</span>
              </dd>
              <dt className="mt-3 max-w-[15rem] pr-3 text-sm text-dim">{p.label}</dt>
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
    <div className="marquee mt-10 overflow-hidden py-2" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-faint">
            {t}
            <span className="size-1 rounded-full bg-line-strong" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Scripted, streaming replica of the Valopt chat widget ---------- */

type Msg = { from: "user" | "bot"; text: string; done: boolean };

function HeroChat() {
  const reduce = useReducedMotion();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [asked, setAsked] = useState<number[]>([]);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function stream(answer: string) {
    setBusy(true);
    setMsgs((m) => [...m, { from: "bot", text: "", done: false }]);
    const tokens = answer.match(/\S+\s*/g) ?? [answer];
    if (reduce) {
      setMsgs((m) => [...m.slice(0, -1), { from: "bot", text: answer, done: true }]);
      setBusy(false);
      return;
    }
    let i = 0;
    const tick = () => {
      i++;
      const text = tokens.slice(0, i).join("");
      const done = i >= tokens.length;
      setMsgs((m) => [...m.slice(0, -1), { from: "bot", text, done }]);
      if (done) setBusy(false);
      else timers.current.push(window.setTimeout(tick, 28 + Math.random() * 50));
    };
    timers.current.push(window.setTimeout(tick, 520));
  }

  function ask(i: number) {
    if (busy) return;
    setAsked((a) => [...a, i]);
    setMsgs((m) => [...m, { from: "user", text: chatScript[i].q, done: true }]);
    stream(chatScript[i].a);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const q = draft.trim();
    if (!q || busy) return;
    setDraft("");
    setMsgs((m) => [...m, { from: "user", text: q, done: true }]);
    stream(
      `I'm a scripted demo of the widget, so I can only answer the suggested questions. For anything else, email ${profile.email}.`,
    );
  }

  useEffect(() => {
    const t = window.setTimeout(() => ask(0), 1100);
    return () => window.clearTimeout(t);
  }, []);

  const remaining = chatScript.map((_, i) => i).filter((i) => !asked.includes(i));

  return (
    <div className="card relative overflow-hidden shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)]">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span className="grid size-9 place-items-center rounded-full bg-accent font-mono text-xs font-medium text-accent-ink">
          VP
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Ask about my work</p>
          <p className="flex items-center gap-1.5 text-xs text-faint">
            <span className="size-1.5 rounded-full bg-accent" /> Streaming · replica of the Valopt widget
          </p>
        </div>
      </div>

      <div
        ref={scroller}
        className="h-[19rem] space-y-3 overflow-y-auto px-5 py-5 [scrollbar-width:none]"
        aria-live="polite"
      >
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[86%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
                m.from === "user"
                  ? "rounded-br-md bg-fg text-bg"
                  : "rounded-bl-md border border-line bg-well text-fg/90"
              }`}
            >
              {m.text || <Dots />}
              {m.from === "bot" && m.text && !m.done && <span className="caret" />}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-line px-4 pt-3 pb-4">
        {remaining.length > 0 && (
          <div className="mb-3 flex gap-2 overflow-x-auto [scrollbar-width:none]">
            {remaining.map((i) => (
              <button
                key={i}
                type="button"
                disabled={busy}
                onClick={() => ask(i)}
                className="chip shrink-0 transition-colors hover:border-accent/60 hover:text-fg disabled:opacity-40"
              >
                {chatScript[i].q}
              </button>
            ))}
          </div>
        )}
        <form onSubmit={submit} className="flex items-center gap-2 rounded-full border border-line bg-bg/60 py-1.5 pr-1.5 pl-4">
          <label htmlFor="chat-input" className="sr-only">
            Message
          </label>
          <input
            id="chat-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message…"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-faint focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={busy || !draft.trim()}
            className="grid size-8 place-items-center rounded-full bg-accent text-accent-ink transition-opacity disabled:opacity-30"
          >
            <Icon name="send" className="size-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <span className="flex gap-1 py-1.5" aria-label="Typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-dim"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

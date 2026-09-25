import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { chatScript, profile } from "@/data";
import { Icon } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Scripted, streaming replica of the Valopt chat widget ---------- */

type Msg = { from: "user" | "bot"; text: string; done: boolean };

export function ChatDemo({ autoStart = true }: { autoStart?: boolean }) {
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

  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!autoStart || !root.current) return;
    let t = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          t = window.setTimeout(() => ask(0), 700);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(root.current);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [autoStart]);

  const remaining = chatScript.map((_, i) => i).filter((i) => !asked.includes(i));

  return (
    <div ref={root} className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-raised shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)]">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span className="grid size-9 place-items-center rounded-full bg-accent font-mono text-xs font-medium text-accent-ink">
          VP
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Ask about my work</p>
          <p className="flex items-center gap-1.5 text-xs text-faint">
            <span className="size-1.5 rounded-full bg-accent" /> Live demo · streams like the real widget
          </p>
        </div>
      </div>

      <div
        ref={scroller}
        className="min-h-[15rem] flex-1 space-y-3 overflow-y-auto px-5 py-5 [scrollbar-width:none]"
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
            className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-opacity disabled:opacity-30"
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

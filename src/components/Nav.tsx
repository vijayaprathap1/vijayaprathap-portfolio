import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data";
import { Icon } from "./ui";

const links = [
  { href: "#products", label: "Products" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function useLocalTime() {
  const [time, setTime] = useState(() => fmt());
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt()), 1000 * 15);
    return () => window.clearInterval(id);
  }, []);
  return time;
}
function fmt() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: profile.timezone,
  }).format(new Date());
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useLocalTime();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Vijayaprathap P, home">
          <span className="grid size-8 place-items-center rounded-lg bg-fg font-mono text-[11px] font-medium text-bg transition-colors group-hover:bg-accent">
            VP
          </span>
          <span className="hidden text-sm font-medium sm:block">Vijayaprathap P</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-dim transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-xs text-faint lg:block">
            Puducherry {time} IST
          </span>
          <a href={profile.resume} className="btn btn-ghost hidden !h-9 !px-4 !text-[13px] sm:inline-flex">
            Résumé
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="page flex flex-col pt-6">
              {[...links, { href: profile.resume, label: "Résumé" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-5 text-3xl font-medium tracking-tight"
                  >
                    {l.label}
                    <Icon name="arrow" className="size-5 text-faint" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

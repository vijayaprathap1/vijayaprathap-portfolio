import { useEffect, useState, type MouseEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}

function formatIst(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: profile.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function useIstClock() {
  const [time, setTime] = useState(formatIst);

  useEffect(() => {
    const tick = () => setTime(formatIst());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const clock = useIstClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onNav = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    scrollToHash(href);
    history.replaceState(null, "", href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out",
        scrolled ? "border-border bg-bg" : "border-transparent bg-bg",
      )}
    >
      <div className="mx-auto flex h-14 max-w-wide items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          onClick={onNav("#top")}
          className="flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="font-mono text-xs tracking-mono text-fg">
            {profile.monogram}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNav(item.href)}
              className={cn(
                "px-3 py-2 font-mono text-xs uppercase tracking-mono transition-[color] duration-150 ease-out",
                active === item.href ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p
            className="hidden font-mono text-xs tabular-nums tracking-mono text-muted sm:block"
            suppressHydrationWarning
          >
            {profile.tzLabel} {clock}
          </p>
          <Button asChild variant="ink" size="sm" className="hidden sm:inline-flex">
            <a href="#contact" onClick={onNav("#contact")}>
              Contact
            </a>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-0 z-50 flex flex-col bg-bg p-6 pb-24 outline-none"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-mono text-xs tracking-mono">
                    {profile.monogram}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="mt-16 flex flex-col gap-1" aria-label="Mobile">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={onNav(item.href)}
                      className="py-3 font-display text-5xl font-medium tracking-tight text-fg"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <p className="mt-auto font-mono text-xs text-muted">{profile.email}</p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

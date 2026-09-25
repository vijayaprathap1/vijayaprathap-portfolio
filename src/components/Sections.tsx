import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { education, experience, principles, profile, stack } from "@/data";
import { useLocalTime } from "./Nav";
import { Magnetic, SplitReveal } from "./motionkit";
import { BrandIcon, Icon, Reveal } from "./ui";

function Head({ n, label, parts }: { n: string; label: string; parts: Parameters<typeof SplitReveal>[0]["parts"] }) {
  return (
    <div className="mb-14 sm:mb-20">
      <p className="eyebrow">
        <span className="text-accent">{n}</span> / {label}
      </p>
      <SplitReveal
        className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] font-medium tracking-[-0.045em]"
        parts={parts}
      />
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="page relative py-28 sm:py-36">
      <Head n="02" label="Experience" parts={["Four and a half years,", { t: "two companies, one standard.", className: "serif text-dim" }]} />

      <ol ref={ref} className="relative ml-2 sm:ml-0">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-line sm:left-[11.5rem]" aria-hidden="true" />
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-px origin-top bg-accent sm:left-[11.5rem]"
          style={{ scaleY: line }}
          aria-hidden="true"
        />
        {[...experience, null].map((job, i) => (
          <li key={i} className="relative grid gap-4 pb-16 pl-8 sm:grid-cols-[11.5rem_1fr] sm:gap-0 sm:pl-0">
            <span className="absolute top-1.5 left-[-4.5px] size-2.5 rounded-full border-2 border-bg bg-accent sm:left-[calc(11.5rem-4.5px)]" aria-hidden="true" />
            <Reveal className="sm:pr-10 sm:text-right">
              <p className="font-mono text-xs text-faint">{job ? job.dates : education.dates}</p>
              {job && i === 0 && <p className="mt-2 font-mono text-[11px] text-accent">● Current</p>}
            </Reveal>
            <Reveal className="sm:pl-12" delay={0.08}>
              {job ? (
                <>
                  <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-tight font-medium tracking-[-0.035em]">{job.company}</h3>
                  <p className="mt-1 text-dim">
                    {job.role} · {job.place}
                  </p>
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="rounded-xl border border-line bg-raised/70 p-4 text-[15px] leading-relaxed text-fg/85 backdrop-blur-md">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{education.degree}</h3>
                  <p className="mt-1 text-dim">{education.school}</p>
                </>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="page relative py-28 sm:py-36">
      <Head n="03" label="Stack & principles" parts={["Tools I trust,", { t: "and how I use them.", className: "serif text-dim" }]} />

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {stack.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div className="flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <h3 className="w-40 shrink-0 font-mono text-xs tracking-widest text-faint uppercase">{g.group}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-xl font-medium tracking-[-0.02em] text-fg/90 transition-colors hover:text-accent sm:text-2xl">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-line bg-raised/70 p-6 backdrop-blur-md transition-colors hover:border-accent/40">
                <h3 className="flex items-center gap-3 font-medium">
                  <span className="size-1.5 rounded-full bg-accent transition-transform group-hover:scale-[2.2]" />
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime();

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const r = document.createRange();
      const el = document.getElementById("email-text");
      if (el) {
        r.selectNodeContents(el);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(r);
      }
    }
  }

  return (
    <section id="contact" className="relative pt-28 pb-16 sm:pt-40">
      <div className="page">
        <p className="eyebrow">
          <span className="text-accent">04</span> / Contact
        </p>
        <SplitReveal
          className="mt-5 text-[clamp(2.8rem,8.5vw,8rem)] leading-[0.9] font-medium tracking-[-0.055em]"
          parts={["Let's build", { t: "something people", className: "serif" }, { t: "use daily.", className: "serif text-accent" }]}
        />

        <Reveal className="mt-12 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn-primary !h-14 !px-7 !text-base">
              Email me <Icon name="arrow" />
            </a>
          </Magnetic>
          <Magnetic>
            <button type="button" onClick={copy} className="btn btn-ghost !h-14 !px-6 backdrop-blur-md" aria-live="polite">
              <Icon name={copied ? "check" : "copy"} />
              {copied ? "Copied" : "Copy email"}
            </button>
          </Magnetic>
          <Magnetic>
            <a href={profile.resume} className="btn btn-ghost !h-14 !px-6 backdrop-blur-md" target="_blank" rel="noreferrer">
              <Icon name="file" /> Résumé
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="grid h-full gap-6 rounded-2xl border border-line bg-raised/70 p-6 text-sm backdrop-blur-md sm:grid-cols-2 sm:p-8">
              <Detail label="Email">
                <span id="email-text" className="break-all">{profile.email}</span>
              </Detail>
              <Detail label="Phone">
                <a href={profile.phoneHref} className="hover:text-accent">{profile.phone}</a>
              </Detail>
              <Detail label="Elsewhere">
                <span className="flex gap-4">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent">
                    <BrandIcon name="linkedin" className="size-3.5" /> LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent">
                    <BrandIcon name="github" className="size-3.5" /> GitHub
                  </a>
                </span>
              </Detail>
              <Detail label="Local time">
                {time} IST · {profile.location}
              </Detail>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.07] p-6 backdrop-blur-md sm:p-8">
              <p className="eyebrow !text-accent">For businesses</p>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">An AI chatbot for your website</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                The same streaming widget, set up for hotels, clinics and builders. It answers FAQs
                around the clock and captures bookings and leads straight to WhatsApp.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {["Room bookings", "Appointment slots", "Lead qualification", "WhatsApp routing"].map((t) => (
                  <li key={t} className="chip !border-accent/30 !text-fg/80">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2 text-[15px]">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="page relative flex flex-col gap-3 border-t border-line pt-8 pb-10 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Vijayaprathap P</p>
      <p>Designed & built in Puducherry · React, Three.js, TypeScript</p>
      <a href="#top" className="hover:text-fg">Back to top ↑</a>
    </footer>
  );
}

import { useState } from "react";
import { education, experience, principles, profile, stack } from "@/data";
import { useLocalTime } from "./Nav";
import { BrandIcon, Icon, Reveal, SectionHead } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="page py-28 sm:py-36">
      <SectionHead
        index="02"
        label="Experience"
        title={
          <>
            Four and a half years, <span className="serif text-dim">two companies, one standard.</span>
          </>
        }
      />

      <ol className="border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-faint">{job.dates}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em]">{job.company}</h3>
                <p className="mt-1 text-dim">{job.role}</p>
                <p className="mt-1 text-sm text-faint">{job.place}</p>
                {i === 0 && (
                  <span className="chip mt-4 !border-accent/40 !text-accent">
                    <span className="size-1.5 rounded-full bg-accent" /> Current
                  </span>
                )}
              </div>
              <ul className="space-y-4 md:col-span-8">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-4 leading-relaxed text-fg/85">
                    <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-line-strong" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
        <Reveal>
          <li className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-faint">{education.dates}</p>
              <p className="mt-3 text-sm text-dim">Education</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium tracking-[-0.02em]">{education.degree}</h3>
              <p className="mt-1 text-dim">{education.school}</p>
            </div>
          </li>
        </Reveal>
      </ol>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="page py-28 sm:py-36">
      <SectionHead
        index="03"
        label="Stack & principles"
        title={
          <>
            Tools I trust, <span className="serif text-dim">and how I use them.</span>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="card h-full divide-y divide-line">
            {stack.map((g) => (
              <div key={g.group} className="grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-7">
                <div>
                  <h3 className="font-medium">{g.group}</h3>
                  <p className="mt-0.5 text-xs text-faint">{g.note}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s} className="chip !text-fg/80">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-3 font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-4">
        <div className="card flex flex-wrap items-center gap-x-8 gap-y-2 px-6 py-5 text-sm">
          <span className="eyebrow">Languages</span>
          <span>
            Tamil <span className="text-faint">· Native</span>
          </span>
          <span>
            English <span className="text-faint">· Professional</span>
          </span>
          <span className="text-faint sm:ml-auto">Agile · Git / Bitbucket workflows</span>
        </div>
      </Reveal>
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
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="page pt-12 pb-16 sm:pt-20">
      <Reveal>
        <div className="card relative overflow-hidden px-6 py-16 sm:px-12 sm:py-24">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -top-24 right-0 h-80 w-[36rem] max-w-full rounded-full bg-accent/10 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="eyebrow">
              <span className="text-accent">04</span> / Contact
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] font-medium tracking-[-0.045em]">
              Building something people <span className="serif text-accent">use every day?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-dim">
              I'm open to senior frontend roles and product work, especially in AI and e-commerce.
              Tell me what you're building.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Email me <Icon name="arrow" />
              </a>
              <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
                <Icon name={copied ? "check" : "copy"} />
                {copied ? "Copied" : "Copy email"}
              </button>
              <a href={profile.resume} className="btn btn-ghost" download>
                <Icon name="file" /> Résumé (PDF)
              </a>
            </div>

            <div className="mt-14 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <Detail label="Email">
                <a href={`mailto:${profile.email}`} className="break-all hover:text-accent">
                  {profile.email}
                </a>
              </Detail>
              <Detail label="Phone">
                <a href={profile.phoneHref} className="hover:text-accent">
                  {profile.phone}
                </a>
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="page flex flex-col gap-3 pb-10 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Vijayaprathap P</p>
      <p>Designed & built in Puducherry · React, TypeScript, Tailwind</p>
      <a href="#top" className="hover:text-fg">
        Back to top ↑
      </a>
    </footer>
  );
}

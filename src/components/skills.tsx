import { languages, skillGroups } from "@/lib/site-data";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-wide border-t border-border pt-8">
        <p className="kicker text-fg">03 — Spec</p>
        <h2 className="mt-3 font-display text-title font-medium tracking-tight">
          The stack, as a system.
        </h2>

        <div className="mt-12 border-t border-border">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8"
            >
              <p className="font-mono text-xs tabular-nums text-subtle sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="kicker sm:col-span-2">{group.label}</h3>
              <p className="text-sm leading-relaxed text-fg sm:col-span-9 sm:text-base">
                {group.items.join("  ·  ")}
              </p>
            </div>
          ))}
          <div className="grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8">
            <p className="font-mono text-xs tabular-nums text-subtle sm:col-span-1">
              06
            </p>
            <h3 className="kicker sm:col-span-2">Languages</h3>
            <p className="text-sm leading-relaxed text-fg sm:col-span-9 sm:text-base">
              {languages.map((lang) => `${lang.name} (${lang.level})`).join("  ·  ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

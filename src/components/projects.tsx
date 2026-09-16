import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-fg">01 — Work</p>
            <h2 className="mt-3 font-display text-title font-medium tracking-tight">
              Six systems. One standard.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Filter the practice. Hover a plate for the short version.
          </p>
        </div>

        <div
          className="mt-10 flex gap-1 overflow-x-auto border-b border-border pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Project categories"
        >
          {projectCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={cn(
                  "h-11 shrink-0 px-4 font-mono text-xs uppercase tracking-mono transition-[color,box-shadow] duration-150 ease-out",
                  active
                    ? "text-fg shadow-[inset_0_-1px_0_0_var(--color-fg)]"
                    : "text-muted hover:text-fg",
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div key={filter} className="mt-4">
          {visible.map((project, i) => (
            <ProjectPlate key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPlate({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <article
      className="project-enter group grid gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-12 lg:py-14"
      style={{ animationDelay: `${Math.min(index, 4) * 70}ms` }}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-surface lg:col-span-7",
          reverse && "lg:order-2",
        )}
      >
        <div className="aspect-photo overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="size-full object-cover transition-[transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 hidden items-end md:flex",
            "bg-gradient-to-t from-bg/90 via-bg/20 to-transparent",
            "opacity-0 transition-[opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:opacity-100 group-focus-within:opacity-100",
            "motion-reduce:opacity-100",
          )}
        >
          <p className="max-w-md p-6 text-sm leading-relaxed text-fg">
            {project.blurb}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col justify-end lg:col-span-5",
          reverse && "lg:order-1",
        )}
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-sm tabular-nums text-muted">{project.index}</p>
          <p className="kicker">{project.category}</p>
        </div>
        <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 font-mono text-xs uppercase tracking-mono text-muted">
          {project.year}
          <span aria-hidden="true"> / </span>
          {project.tags.join(" / ")}
        </p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:hidden">
          {project.blurb}
        </p>
      </div>
    </article>
  );
}

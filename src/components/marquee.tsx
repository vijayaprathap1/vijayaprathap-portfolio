import { marqueeItems } from "@/lib/site-data";

export function TechMarquee() {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 py-4 font-mono text-xs uppercase tracking-mono text-muted"
          >
            {item}
            <span className="text-subtle">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

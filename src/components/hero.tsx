import { ArrowDown } from "lucide-react";
import { metrics, profile } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-between px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8"
    >
      <div className="mx-auto flex w-full max-w-wide items-center justify-between gap-4">
        <p className="kicker rise text-fg">
          Status — {profile.availability}
        </p>
        <p
          className="kicker rise hidden sm:block"
          style={{ animationDelay: "80ms" }}
        >
          {profile.coords}
        </p>
      </div>

      <div className="mx-auto w-full max-w-wide">
        <h1
          className="rise max-w-full font-display text-hero font-medium tracking-display text-pretty text-fg uppercase"
          style={{ animationDelay: "60ms" }}
        >
          Vijayaprathap
          <span className="text-muted"> P</span>
        </h1>
        <p
          className="rise mt-6 max-w-xl text-base text-muted sm:text-lg"
          style={{ animationDelay: "140ms" }}
        >
          {profile.title}. E-commerce and AI. The interface is the product —
          if it blinks, it isn’t finished.
        </p>
      </div>

      <div
        className="rise mx-auto grid w-full max-w-wide gap-8 sm:grid-cols-[1fr_auto] sm:items-end"
        style={{ animationDelay: "220ms" }}
      >
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="kicker">{m.label}</dt>
              <dd className="mt-1 font-display text-2xl font-medium tracking-tight tabular-nums sm:text-3xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ink" className="w-full sm:w-auto">
            <a href="#work">
              Selected work
              <ArrowDown />
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href="#contact">Start</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

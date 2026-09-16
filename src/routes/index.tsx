import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Cursor } from "@/components/cursor";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg">
      <a href="#work" className="skip-link">
        Skip to work
      </a>
      <ScrollProgress />
      <Cursor />
      <SiteHeader />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

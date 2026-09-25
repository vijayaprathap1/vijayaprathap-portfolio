import { MotionConfig } from "motion/react";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Products } from "./components/Products";
import { Contact, Experience, Footer, Stack } from "./components/Sections";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-dvh">
        <a
          href="#products"
          className="sr-only rounded-full bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to products
        </a>
        <Nav />
        <main>
          <Hero />
          <Products />
          <Experience />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

import { lazy, Suspense } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Products } from "./components/Products";
import { Contact, Experience, Footer, Stack } from "./components/Sections";

const Scene = lazy(() => import("./components/Scene").then((m) => ({ default: m.Scene })));

export function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-dvh">
        <a
          href="#products"
          className="sr-only rounded-full bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80]"
        >
          Skip to products
        </a>
        <motion.div
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Products />
          <Experience />
          <Stack />
          <Contact />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { AllProjects } from "@/sections/AllProjects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { ProjectDetail } from "@/sections/ProjectDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./layout/Footer";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    window.__lenis = lenis;

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
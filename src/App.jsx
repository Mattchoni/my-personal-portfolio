import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { AllProjects } from "@/sections/AllProjects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Routes, Route } from "react-router-dom";
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
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
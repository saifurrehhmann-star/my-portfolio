import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function FullPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#fcfbf9] dark:bg-[#09090b] text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfbf9] dark:bg-[#09090b] text-stone-900 dark:text-white">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
        <span className="absolute font-mono font-bold text-xs text-amber-500">&lt;/&gt;</span>
      </div>
      <p className="font-mono text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase">
        Loading Portfolio...
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<FullPortfolio />} />
          <Route path="/about" element={<FullPortfolio />} />
          <Route path="/experience" element={<FullPortfolio />} />
          <Route path="/skills" element={<FullPortfolio />} />
          <Route path="/projects" element={<FullPortfolio />} />
          <Route path="/contact" element={<FullPortfolio />} />
          <Route path="*" element={<FullPortfolio />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./App.css";

// Lazy Imports
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="site-ambient" aria-hidden="true">
          <div className="site-ambient__dots" />
          <div className="site-ambient__glow site-ambient__glow--one" />
          <div className="site-ambient__glow site-ambient__glow--two" />
        </div>
        <div className="relative z-10">
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center text-xl font-semibold">
                Loading...
              </div>
            }
          >
            <MotionConfig reducedMotion="user">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MotionConfig>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

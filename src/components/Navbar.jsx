import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight - 50) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-500 dark:text-cyan-400">Saif Ur Rehman</h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className={`transition-colors duration-300 pb-1 border-b-2 ${isActive ? "text-cyan-500 dark:text-cyan-400 border-cyan-500 dark:border-cyan-400" : "border-transparent text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"}`}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className={`transition-colors duration-300 ${isActive ? "text-cyan-500 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"}`}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </motion.nav>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = links.map((link) => document.getElementById(link.name.toLowerCase()));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].name.toLowerCase());
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1E8]/90 dark:bg-[#121316]/90 backdrop-blur-md border-b border-[#DDD6C8] dark:border-[#2A2D36] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand / Name */}
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-2 text-base font-bold tracking-tight text-[#171717] dark:text-[#F5F1E8] sm:text-xl"
        >
          <span className="font-editorial">Saif Ur Rehman</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF6A00] font-semibold"
                    : "text-[#5F5B55] dark:text-[#9E9A92] hover:text-[#171717] dark:hover:text-[#F5F1E8]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6A00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full border border-[#DDD6C8] dark:border-[#2A2D36] flex items-center justify-center text-[#5F5B55] dark:text-[#9E9A92] hover:text-[#FF6A00] hover:border-[#FF6A00] dark:hover:text-[#FF6A00] dark:hover:border-[#FF6A00] transition-colors duration-200"
          >
            {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={14} />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#171717] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#171717] px-4 py-2.5 rounded-full hover:bg-[#FF6A00] dark:hover:bg-[#FF6A00] dark:hover:text-white transition-colors duration-200"
          >
            <span>Let's Talk</span>
            <FaArrowRight size={10} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open Menu"
            className="md:hidden w-10 h-10 flex items-center justify-center text-xl text-[#171717] dark:text-[#F5F1E8] rounded-full border border-[#DDD6C8] dark:border-[#2A2D36]"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#F5F1E8] dark:bg-[#121316] border-b border-[#DDD6C8] dark:border-[#2A2D36] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, idx) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between text-xl font-bold py-2 border-b border-[#DDD6C8]/40 dark:border-[#2A2D36]/40 ${
                      isActive
                        ? "text-[#FF6A00]"
                        : "text-[#171717] dark:text-[#F5F1E8]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono-tag text-[#5F5B55] dark:text-[#9E9A92]">
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#FF6A00] text-white font-semibold text-sm uppercase tracking-wider"
              >
                <span>Let's Talk</span>
                <FaArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

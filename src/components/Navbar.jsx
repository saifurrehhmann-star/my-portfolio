import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaBriefcase } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map((link) =>
        document.getElementById(link.name.toLowerCase())
      );

      const scrollPosition = window.scrollY + 180;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].name.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 transition-all duration-300">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between glass-panel shadow-xl ${
          scrolled
            ? "shadow-amber-500/5 dark:shadow-amber-950/20 border-amber-500/25"
            : ""
        }`}
      >
        {/* Brand Logo in Solar Amber */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="font-mono text-amber-500 font-bold text-lg group-hover:-translate-x-0.5 transition-transform">
            &lt;
          </span>
          <span className="font-bold text-base sm:text-lg tracking-tight text-stone-900 dark:text-white">
            Saif<span className="text-amber-500 font-extrabold">.dev</span>
          </span>
          <span className="font-mono text-amber-500 font-bold text-lg group-hover:translate-x-0.5 transition-transform">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-stone-200/60 dark:bg-stone-900/60 p-1 rounded-full border border-stone-300/40 dark:border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative z-10 px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 block rounded-full ${
                    isActive
                      ? "text-amber-600 dark:text-amber-400 font-semibold"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white dark:bg-stone-800 shadow-sm -z-10 border border-stone-200/80 dark:border-amber-500/30"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:text-amber-500 dark:hover:text-amber-400 border border-stone-300/80 dark:border-stone-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-sm"
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-sm" />
            ) : (
              <FaMoon className="text-stone-700 text-sm" />
            )}
          </button>

          {/* Hire Me CTA Button in Solar Amber */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs px-4 py-2 rounded-full transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02]"
          >
            <FaBriefcase className="text-xs" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-200 border border-stone-300/80 dark:border-stone-800 hover:border-amber-500/50 transition-colors"
          >
            {open ? <FaTimes className="text-base" /> : <FaBars className="text-sm" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-panel rounded-2xl p-5 shadow-2xl border border-stone-200 dark:border-stone-800"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20"
                          : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      )}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold text-sm py-2.5 rounded-xl shadow-md"
                >
                  <FaBriefcase /> Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
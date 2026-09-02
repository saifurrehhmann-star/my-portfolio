import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
  FaShopify,
  FaReact,
} from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "Shopify Store Architect",
    "React & Frontend Specialist",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow orbs in Solar Amber & Warm Bronze */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Available for Freelance & Full-time Roles</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-[1.15] mb-4"
          >
            Hi, I'm <span className="gradient-text-amber">Saif Ur Rehman</span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-stone-600 dark:text-stone-300 mb-6 flex items-center justify-center lg:justify-start gap-2"
          >
            <span>Building</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold min-w-[200px] text-left">
              {displayText}
              <span className="animate-pulse text-amber-500 font-normal">|</span>
            </span>
          </motion.div>

          {/* Value proposition paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            Passionate developer creating high-converting Shopify e-commerce
            stores and modern full-stack web applications with clean code,
            pixel-perfect design, and responsive performance.
          </motion.p>

          {/* Action CTAs in Solar Amber */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 glass-card text-stone-800 dark:text-stone-200 font-semibold px-6 py-3.5 rounded-full hover:border-amber-500/60 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              <span>Let's Connect</span>
            </a>
          </motion.div>

          {/* Social Links & Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-stone-200 dark:border-stone-800/80"
          >
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:scale-110 transition-all"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:scale-110 transition-all"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:scale-110 transition-all"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Developer Showcase Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-5 relative max-w-lg mx-auto w-full"
        >
          {/* Main IDE Window */}
          <div className="rounded-2xl overflow-hidden glass-panel border border-stone-300/80 dark:border-white/10 shadow-2xl shadow-amber-500/10">
            {/* Terminal Window Header */}
            <div className="bg-stone-200/90 dark:bg-stone-900/90 px-4 py-3 border-b border-stone-300 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-stone-400">
                <FaCode className="text-amber-500 text-xs" />
                <span>DeveloperProfile.js</span>
              </div>
              <div className="w-12 text-right">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
              </div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-stone-950 text-stone-100 dark:bg-[#0c0c0e]/95">
              <p className="text-stone-500">// Welcome to my portfolio</p>
              <p>
                <span className="text-amber-400">const</span>{" "}
                <span className="text-yellow-300">developer</span> = &#123;
              </p>
              <div className="pl-4 space-y-1 my-1">
                <p>
                  <span className="text-stone-400">name:</span>{" "}
                  <span className="text-amber-300">"Saif Ur Rehman"</span>,
                </p>
                <p>
                  <span className="text-stone-400">title:</span>{" "}
                  <span className="text-orange-400">"Full Stack & Shopify Dev"</span>,
                </p>
                <p>
                  <span className="text-stone-400">location:</span>{" "}
                  <span className="text-amber-300">"Karachi, Pakistan"</span>,
                </p>
                <p>
                  <span className="text-stone-400">coreStack:</span> [
                  <span className="text-yellow-300">"React 19"</span>,{" "}
                  <span className="text-amber-300">"Shopify"</span>,{" "}
                  <span className="text-orange-300">"Node"</span>,{" "}
                  <span className="text-emerald-300">"MongoDB"</span>],
                </p>
                <p>
                  <span className="text-stone-400">passionateAbout:</span> [
                  <span className="text-amber-300">"Bespoke UI"</span>,{" "}
                  <span className="text-amber-300">"Conversion Design"</span>],
                </p>
                <p>
                  <span className="text-stone-400">openForHire:</span>{" "}
                  <span className="text-amber-400 font-bold">true</span>
                </p>
              </div>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-stone-800 text-stone-400 flex items-center justify-between text-xs">
                <span className="text-amber-400 flex items-center gap-1.5">
                  <FaCheckCircle className="text-xs" /> Ready to build
                </span>
                <span className="text-stone-500">status: 200 OK</span>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl shadow-lg border-amber-500/40 hidden sm:flex items-center gap-2"
          >
            <FaReact className="text-amber-400 text-lg animate-spin-slow" />
            <div className="text-left">
              <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-tight">Expertise</p>
              <p className="text-xs font-bold text-stone-900 dark:text-white">React & Next</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl shadow-lg border-amber-500/40 hidden sm:flex items-center gap-2"
          >
            <FaShopify className="text-amber-500 text-xl" />
            <div className="text-left">
              <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-tight">E-Commerce</p>
              <p className="text-xs font-bold text-stone-900 dark:text-white">Shopify Partner</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
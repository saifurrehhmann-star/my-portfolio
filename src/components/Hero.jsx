import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function Hero() {
  const roles = ["MERN Stack Developer", "React Developer", "Shopify Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 rounded-full mb-5"
          >
            Open to Work
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs md:text-sm tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3"
          >
            Entry-Level Developer / <span className="text-cyan-600 dark:text-cyan-400">{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white"
          >
         Saif Ur Rehman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 max-w-md mb-8"
          >
            I build React, Shopify, and modern web apps with clean UI and solid, responsive structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a href="#projects" className="flex items-center gap-2 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 font-medium px-5 py-3 rounded-full hover:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors duration-300">
              View Projects <FaArrowRight />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-3 rounded-full hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
              LinkedIn <FaExternalLinkAlt size={12} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-3"
          >
            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden max-w-sm mx-auto"
        >
          <div className="aspect-square bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-cyan-500/20 dark:bg-cyan-400/20 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center text-4xl font-bold text-cyan-600 dark:text-cyan-400">
             SR
            </div>
          </div>

          <div className="p-5">
            <p className="text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-2">What I Build</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">Clean React and Shopify apps.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
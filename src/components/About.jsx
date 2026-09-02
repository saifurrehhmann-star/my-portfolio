import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaLightbulb,
  FaRocket,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let current = 0;
    const increment = target / 35;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");

  const tabContents = {
    journey: {
      title: "My Journey as a Developer",
      icon: FaUserTie,
      text: "I am an enthusiastic Full Stack and Shopify Developer based in Karachi, Pakistan. My journey started with a strong curiosity about how the web works, which quickly evolved into crafting real-world web applications and high-conversion e-commerce storefronts. Today, I build production-grade web solutions for active businesses like MakeBrands, Shahuzz, and Ngees.",
    },
    philosophy: {
      title: "My Development Philosophy",
      icon: FaLightbulb,
      text: "I believe great software lives at the intersection of aesthetic beauty and solid engineering. A website should not only look stunning on every screen size, but also load blazingly fast, maintain strict accessibility standards, and convert visitors into loyal clients through effortless user flows.",
    },
    capabilities: {
      title: "What I Bring to the Table",
      icon: FaRocket,
      text: "Whether designing bespoke Shopify theme sections using Liquid, engineering interactive React frontends with Tailwind and Framer Motion, or building RESTful backends with Node.js and MongoDB, I deliver clean, modular, and maintainable code built for long-term scalability.",
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3"
        >
          <FaUserTie className="text-xs" />
          <span>ABOUT ME</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
        >
          Passionate About Code,{" "}
          <span className="gradient-text-amber">Focused on Results</span>
        </motion.h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Main Story with Interactive Tabs (Col span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-6 bg-stone-200/60 dark:bg-stone-900/60 p-1.5 rounded-2xl border border-stone-300/40 dark:border-white/5 w-fit">
              {[
                { id: "journey", label: "My Journey" },
                { id: "philosophy", label: "Philosophy" },
                { id: "capabilities", label: "Capabilities" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-sm"
                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-[140px]"
              >
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 flex items-center gap-2.5">
                  {tabContents[activeTab].title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  {tabContents[activeTab].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
              <FaCheckCircle className="text-amber-500" />
              <span>Available for freelance contracts & full-time roles</span>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              Get in Touch →
            </a>
          </div>
        </motion.div>

        {/* Card 2: 4 Animated Stats Counters (Col span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="md:col-span-5 grid grid-cols-2 gap-4"
        >
          {[
            {
              target: 4,
              suffix: "+",
              label: "Live Client Stores",
              desc: "Shahuzz, Ngees, MakeBrands",
              color: "text-amber-500",
            },
            {
              target: 10,
              suffix: "+",
              label: "Tech Mastered",
              desc: "React, Node, Shopify, etc.",
              color: "text-orange-500",
            },
            {
              target: 500,
              suffix: "+",
              label: "Hours of Practice",
              desc: "Code & problem solving",
              color: "text-yellow-500",
            },
            {
              target: 100,
              suffix: "%",
              label: "Responsive Design",
              desc: "Mobile, tablet & desktop",
              color: "text-amber-600 dark:text-amber-400",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between"
            >
              <div
                className={`text-3xl sm:text-4xl font-extrabold ${stat.color} mb-1`}
              >
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-white leading-tight">
                  {stat.label}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Card 3: Core Specialization / Tech DNA (Col span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-7"
        >
          <div className="flex items-center gap-2.5 mb-4 text-amber-600 dark:text-amber-400">
            <FaLayerGroup className="text-lg" />
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">
              Core Tech DNA
            </h3>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 mb-5">
            Key areas where I create maximum value for businesses and clients:
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Frontend Engineering",
                tech: "React 19, Tailwind v4, Vite, Framer Motion",
              },
              {
                title: "Shopify E-Commerce",
                tech: "Liquid, Custom Themes, Speed & UX Optimization",
              },
              {
                title: "Backend & Database",
                tech: "Node.js, Express, MongoDB, RESTful APIs",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-100/80 dark:bg-stone-900/60 p-3 rounded-xl border border-stone-200/50 dark:border-white/5"
              >
                <p className="text-xs font-bold text-stone-900 dark:text-white">
                  {item.title}
                </p>
                <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                  {item.tech}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4: Location & Work Mode (Col span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-amber-600 dark:text-amber-400">
              <FaMapMarkerAlt className="text-lg" />
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                Location & Availability
              </h3>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
              Based in <strong>Karachi, Pakistan (GMT+5)</strong>. Experienced in working with local teams and remote clients worldwide across varied timezones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <div className="bg-stone-100/80 dark:bg-stone-900/60 p-3.5 rounded-xl border border-stone-200/50 dark:border-white/5 flex items-center gap-3">
              <FaLaptopCode className="text-amber-500 text-xl" />
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-white">Remote & Hybrid</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">Flexible work arrangements</p>
              </div>
            </div>

            <div className="bg-stone-100/80 dark:bg-stone-900/60 p-3.5 rounded-xl border border-stone-200/50 dark:border-white/5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-white">Active Status</p>
                <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Immediate availability</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
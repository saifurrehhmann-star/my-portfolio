import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiMongodb,
  SiShopify,
  SiGithub,
  SiExpress,
  SiVite,
} from "react-icons/si";
import { FaCss3Alt, FaTools } from "react-icons/fa";

const skillsData = [
  { name: "React 19", icon: SiReact, level: 85, category: "Frontend", color: "#f59e0b", desc: "Hooks, SPA, Component Architecture" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, level: 90, category: "Frontend", color: "#fbbf24", desc: "Async/Await, DOM, Modern Syntax" },
  { name: "Shopify & Liquid", icon: SiShopify, level: 88, category: "E-Commerce", color: "#95BF47", desc: "Theme Sections, Apps, Liquid Logic" },
  { name: "Tailwind CSS v4", icon: SiTailwindcss, level: 92, category: "Frontend", color: "#38BDF8", desc: "Modern Utilities, Responsive Layouts" },
  { name: "Node.js", icon: SiNodedotjs, level: 75, category: "Backend", color: "#68A063", desc: "Server Logic, Event Loop, REST APIs" },
  { name: "Express.js", icon: SiExpress, level: 78, category: "Backend", color: "#a8a29e", desc: "Routing, Middleware, Controllers" },
  { name: "MongoDB", icon: SiMongodb, level: 72, category: "Backend", color: "#47A248", desc: "Collections, Aggregation, Mongoose" },
  { name: "HTML5 & Semantic Web", icon: SiHtml5, level: 95, category: "Frontend", color: "#E34F26", desc: "SEO Best Practices, Accessibility" },
  { name: "CSS3 & Modern Animations", icon: FaCss3Alt, level: 90, category: "Frontend", color: "#1572B6", desc: "Flexbox, Grid, Keyframes, Transitions" },
  { name: "Git & Version Control", icon: SiGit, level: 82, category: "Tools", color: "#F05032", desc: "Branching, Merging, Collaboration" },
  { name: "GitHub & CI/CD", icon: SiGithub, level: 85, category: "Tools", color: "#d6d3d1", desc: "Repositories, Pull Requests, Deployments" },
  { name: "Vite & Tooling", icon: SiVite, level: 88, category: "Tools", color: "#ea580c", desc: "Fast HMR, Bundling, Optimization" },
];

const categories = ["All", "Frontend", "Backend", "E-Commerce", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3"
        >
          <FaTools className="text-xs" />
          <span>TECHNICAL ARSENAL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
        >
          Technologies & <span className="gradient-text-amber">Frameworks</span>
        </motion.h2>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300/40 dark:border-white/5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-md"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="glass-card rounded-2xl p-5 group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-white/10 group-hover:scale-110 transition-transform shadow-sm"
                  >
                    <Icon style={{ color: skill.color }} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400 tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 line-clamp-1">
                {skill.desc}
              </p>

              {/* Progress bar in Solar Amber */}
              <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
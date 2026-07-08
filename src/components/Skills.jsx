import { useState, useEffect } from "react";
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
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const allSkills = [
  { name: "JavaScript (ES6+)", icon: SiJavascript, level: 85, category: "Frontend", color: "#F7DF1E" },
  { name: "React", icon: SiReact, level: 80, category: "Frontend", color: "#61DAFB" },
  { name: "HTML5", icon: SiHtml5, level: 90, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, level: 85, category: "Frontend", color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 80, category: "Frontend", color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, level: 65, category: "Backend", color: "#3C873A" },
  { name: "MongoDB", icon: SiMongodb, level: 60, category: "Backend", color: "#47A248" },
  { name: "Shopify", icon: SiShopify, level: 85, category: "E-Commerce", color: "#95BF47" },
  { name: "Git", icon: SiGit, level: 75, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, level: 75, category: "Tools", color: "#6e7681" },
];

const categories = ["All", "Frontend", "Backend", "E-Commerce", "Tools"];

function SkillBar({ skill }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 100);
    return () => clearTimeout(timer);
  }, [skill.level]);

  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon style={{ color: skill.color }} className="text-xl" />
          <span className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>

      <div className="w-full h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white"
      >
        <span className="text-cyan-600 dark:text-cyan-400">02.</span> Skills
      </motion.h2>

      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeCategory === cat
                ? "bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
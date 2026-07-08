import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fashion Store",
    category: "Shopify",
    image: "/projects/shahuzz.png",
    description: "A fully customized Shopify store built for a clothing brand with custom theme sections and checkout optimization.",
    tech: ["Shopify", "Liquid", "CSS"],
    link: "https://shahuzz.pk/",
    github: null,
  },
  {
    title: "Electronics Shop",
    category: "Shopify",
    image: "/projects/ngees.png",
    description: "E-commerce store with custom product filtering and a fast, mobile-friendly layout.",
    tech: ["Shopify", "JavaScript"],
    link: "https://ngees.pk/",
    github: null,
  },
  {
    title: "Portfolio Website",
    category: "React",
    image: "/projects/portfolio-site.png",
    description: "A personal portfolio built with React and Tailwind CSS featuring smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Landing Page",
    category: "Web Design",
    image: "/projects/makebrands.png",
    description: "A responsive landing page designed and coded from scratch using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://makebrands.pk/",
    github: "#",
  },
];

const categories = ["All", "Shopify", "React", "Web Design"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white"
      >
        <span className="text-cyan-600 dark:text-cyan-400">03.</span> Projects
      </motion.h2>

      <div className="flex gap-2 mb-10 flex-wrap">
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

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
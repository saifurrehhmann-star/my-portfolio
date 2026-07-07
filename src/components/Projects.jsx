import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaShopify } from "react-icons/fa";

const projects = [
  {
    title: "Modern Skincare Store",
    category: "Shopify",
    image: "/projects/shahuzz.png",
    description: "Designed and developed a modern Shopify store for skincare products.",
    tech: ["Shopify", "Liquid", "CSS"],
    link: "https://shahuzz.pk/",
    github: null,
  },
  {
    title: "Beauty & Skincare Website",
    category: "Shopify",
    image: "/projects/ngees.png",
    description: "E-commerce store with custom product filtering and a fast, mobile-friendly layout.",
    tech: ["Shopify", "JavaScript"],
    link: "https://ngees.com/",
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
    title: "Digital Agency Website",
    category: "Web Design",
    image: "/projects/makebrands.png",
    description: "Designed and developed a modern, responsive website for a digital agency.",
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
        className="text-3xl font-bold mb-6 flex items-center gap-3"
      >
        <span className="text-cyan-400">03.</span> Projects
      </motion.h2>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeCategory === cat
                ? "bg-cyan-400 text-slate-900"
                : "bg-slate-800 text-slate-400 hover:text-cyan-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8 }}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-colors duration-300"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {project.title}
                  {project.category === "Shopify" && (
                    <span className="flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      <FaShopify /> Shopify
                    </span>
                  )}
                </h3>
                <div className="flex gap-3 text-lg">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                      <FaGithub />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
                {project.tech.map((t) => (
                  <span key={t} className="bg-slate-900 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
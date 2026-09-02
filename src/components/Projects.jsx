import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaLaptopCode, FaPlusCircle } from "react-icons/fa";

// Centralized project list: Easily add or modify projects here!
// Adding a new project object here will automatically update the grid and category counts.
export const initialProjects = [
  {
    id: "smart-society",
    title: "Smart Housing Society",
    category: "Full-Stack Development",
    image: "/projects/smart-society.png",
    description:
      "A modern full-stack Smart Housing Society web application built with React.js. The project is designed to provide a clean, responsive, and user-friendly digital experience for a housing society, with interactive features, smooth navigation, and scalable functionality.",
    tech: ["React.js", "Tailwind CSS", "Full-Stack", "REST APIs"],
    link: "https://contest-azm.vercel.app/",
    github: null,
    featured: true,
    status: "Live Web App",
  },
  {
    id: "shahuzz",
    title: "Shahuzz Skincare",
    category: "Shopify",
    image: "/projects/shahuzz.png",
    description:
      "A bespoke custom Shopify storefront engineered for a premium beauty & skincare line. Includes customized promotional banners, all-in-one ritual bundle sections, and an accelerated checkout experience.",
    tech: ["Shopify", "Liquid", "Responsive CSS", "Conversion Optimization"],
    link: "https://shahuzz.pk/",
    github: null,
    featured: true,
    status: "Live E-Commerce",
  },
  {
    id: "makebrands",
    title: "MakeBrands Agency Platform",
    category: "Web Development",
    image: "/projects/makebrands.png",
    description:
      "A premier performance marketing and digital media studio landing page built with modern dark aesthetic, interactive service modules, and high-impact client case studies.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "Animations"],
    link: "https://makebrands.pk/",
    github: null,
    featured: false,
    status: "Live Platform",
  },
  {
    id: "ngees",
    title: "Ngees Skin",
    category: "Shopify",
    image: "/projects/ngees.png",
    description:
      "Modern e-commerce store built for a specialized UV Tint and daily moisturizer skincare brand. Features mobile-first navigation, optimized image rendering, and minimal clean layout.",
    tech: ["Shopify", "Liquid", "Mobile UX", "Performance"],
    link: "https://ngees.pk/",
    github: null,
    featured: false,
    status: "Live E-Commerce",
  },
  {
    id: "teeny-tinys",
    title: "Teeny Tiny's Baby Clothing",
    category: "Shopify",
    image: "/projects/baby-clothing.png",
    description:
      "A colorful, playful Shopify apparel storefront built for infant and toddler collections. Includes dynamic collection sliders, custom product badges, and cart upsell recommendations.",
    tech: ["Shopify", "Liquid", "CSS Grid", "E-Commerce"],
    link: null,
    github: null,
    featured: false,
    status: "Client Production",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const projects = initialProjects;

  // Dynamically extract unique categories and calculate counts automatically
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const getCategoryCount = (cat) => {
    if (cat === "All") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3"
        >
          <FaLaptopCode className="text-xs" />
          <span>FEATURED WORK</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
        >
          Crafted with Care,{" "}
          <span className="gradient-text-amber">Built for Scale</span>
        </motion.h2>
      </div>

      {/* Dynamic Category Filter Pills with Auto-Calculated Counts */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300/40 dark:border-white/5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-md"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive
                      ? "bg-amber-500/20 text-amber-700 dark:text-amber-300"
                      : "bg-stone-300/60 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scalable & Balanced Responsive Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </AnimatePresence>

        {/* Scalable Future Slot Indicator (Rendered only on 'All' view to maintain symmetry when projects is 5, completing a 2x3 6-card grid) */}
        {activeCategory === "All" && (
          <div className="glass-card rounded-3xl p-6 border-dashed border-2 border-stone-300 dark:border-stone-800 flex flex-col items-center justify-center text-center min-h-[360px] group hover:border-amber-500/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              <FaPlusCircle />
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2">
              Next Project in the Pipeline
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs mb-5">
              Currently engineering new custom Shopify themes & full-stack React applications.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              Have a project in mind? Let's talk →
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
}
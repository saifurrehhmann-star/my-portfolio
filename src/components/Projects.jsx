import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    title: "Smart Housing Society",
    category: "Real Estate",
    categoryLabel: "Real Estate / Housing Society Website",
    image: "/projects/smarthousing.png",
    description: "A modern responsive website for a housing society, designed to present society information, facilities, community activities, and resident-focused services through a clean and user-friendly interface.",
    role: "Frontend Developer",
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://contest-azm.vercel.app/",
    github: null,
  },
  {
    title: "Home Cleaning Services",
    category: "Home Services",
    categoryLabel: "Home Services / Cleaning",
    image: "/projects/homecleaning.png",
    description: "A modern, responsive home cleaning services website designed to showcase cleaning and household services with a premium, user-friendly experience.",
    role: "Full-Stack Developer",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://home-cleaning-services-wine.vercel.app/",
    github: null,
  },
  {
    title: "Stylez Hub",
    category: "E-commerce",
    categoryLabel: "E-commerce / Footwear",
    image: "/projects/stylezhub.png",
    description: "A modern footwear e-commerce store built for online shopping in Pakistan, featuring sneakers, runners, joggers, sandals, slippers and sliders with product variants, discounts, cart and checkout functionality.",
    role: "Shopify Developer",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    link: "https://stylezhub.pk/",
    github: null,
  },
  {
    title: "Shahuzz Skincare Store",
    category: "Shopify",
    image: "/projects/shahuzz.png",
    description: "A custom Shopify storefront for Shahuzz skincare, showcasing skincare kits, serums, cleansers, face washes, and moisturizers with product-focused sections.",
    tech: ["Shopify", "Liquid", "CSS3", "JavaScript"],
    link: "https://shahuzz.pk/",
    github: null,
  },
  {
    title: "Ngees Skin Care Store",
    category: "Shopify",
    image: "/projects/ngees.png",
    description: "A skincare storefront for Ngees.skin featuring serums, moisturizers, UV tint, and bundled products in a clean, product-focused shopping experience.",
    tech: ["Shopify", "JavaScript", "Liquid"],
    link: "https://ngees.com/",
    github: null,
  },
  {
    title: "MakeBrands Agency Platform",
    category: "Web Design",
    image: "/projects/makebrands.png",
    description: "A responsive digital agency platform designed and coded with semantic HTML, modern styling, and interactive layouts.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://makebrands.pk/",
    github: null,
  },
  {
    title: "Teeny Tiny's Baby Store",
    category: "Shopify",
    image: "/projects/baby-clothing.png",
    description: "A Shopify storefront for baby and kids clothing, featuring apparel collections, product variants, and online shopping.",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    link: "https://teenytinys.pk/",
    github: null,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const isPaused = isHovered || hasFocus;
  const prefersReducedMotion = useReducedMotion();
  const showProject = (index) => {
    setActiveProject((index + allProjects.length) % allProjects.length);
  };

  useEffect(() => {
    if (isPaused || prefersReducedMotion || allProjects.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % allProjects.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section id="projects" className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-16 sm:px-8 sm:py-24 dark:border-[#2A2D36]">
      {/* Section heading and carousel arrows */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="flex min-w-0 items-baseline gap-3 sm:gap-4">
          <span className="shrink-0 text-xs font-mono-tag font-bold tracking-widest uppercase text-[#FF6A00] sm:text-sm">
            04 //
          </span>
          <div>
            <h2 className="text-[clamp(1.6rem,7vw,3rem)] sm:text-5xl font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial">
              SELECTED WORKS
            </h2>
            <p className="text-sm sm:text-base text-[#5F5B55] dark:text-[#9E9A92] mt-1">
              A selection of websites and digital experiences I have built.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            type="button"
            onClick={() => showProject(activeProject - 1)}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD6C8] dark:border-[#2A2D36] text-[#171717] dark:text-[#F5F1E8] transition-[color,border-color,transform] duration-300 hover:-translate-x-0.5 hover:border-[#FF6A00] hover:text-[#FF6A00]"
          >
            <FaArrowLeft size={13} />
          </button>
          <button
            type="button"
            onClick={() => showProject(activeProject + 1)}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD6C8] dark:border-[#2A2D36] text-[#171717] dark:text-[#F5F1E8] transition-[color,border-color,transform] duration-300 hover:translate-x-0.5 hover:border-[#FF6A00] hover:text-[#FF6A00]"
          >
            <FaArrowRight size={13} />
          </button>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setHasFocus(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") showProject(activeProject + 1);
          if (event.key === "ArrowLeft") showProject(activeProject - 1);
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project carousel. Use the arrow keys to browse projects."
      >
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(#ff6a0030_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />
        <div className="relative h-[480px] overflow-hidden rounded-3xl border border-[#DDD6C8] bg-[#EAE4D8]/40 dark:border-[#2A2D36] dark:bg-[#0D0D12]/70 min-[400px]:h-[500px] sm:h-[530px]">
          {allProjects.map((project, index) => {
              let offset = index - activeProject;
              const half = allProjects.length / 2;
              if (offset > half) offset -= allProjects.length;
              if (offset < -half) offset += allProjects.length;

              return (
                <ProjectCard
                  key={project.title}
                  {...project}
                  offset={offset}
                  number={index + 1}
                  isActive={offset === 0}
                  onSelect={() => showProject(index)}
                  reducedMotion={prefersReducedMotion}
                />
              );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#5F5B55] dark:text-[#9E9A92]">
            <span className="font-semibold text-[#171717] dark:text-[#F5F1E8]">{allProjects[activeProject]?.title}</span>
            <span className="mx-2 text-[#FF6A00]">/</span>
            {isPaused ? "Paused — use arrows or select a card" : "Auto-rotating selected projects"}
          </p>

        </div>

        <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Choose a project">
          {allProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => showProject(index)}
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={index === activeProject ? "true" : undefined}
              className="flex h-8 w-8 items-center justify-center rounded-full"
            ><span className={`h-2.5 rounded-full transition-all duration-300 ${index === activeProject ? "w-8 bg-[#FF6A00]" : "w-2.5 bg-[#B8B1A5] dark:bg-[#514C48] hover:bg-[#FF6A00]"}`} /></button>
          ))}
        </div>
      </div>
    </section>
  );
}

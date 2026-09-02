import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaShopify, FaCode, FaCheckCircle, FaReact } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  github,
  image,
  category,
  featured,
  status = "Live Project",
}) {
  const isShopify = category === "Shopify";
  const isFullStack = category === "Full-Stack Development";

  const getCategoryIcon = () => {
    if (isShopify) return <FaShopify className="text-xs" />;
    if (isFullStack) return <FaReact className="text-xs" />;
    return <FaCode className="text-xs" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Top Image Preview with Standardized Aspect Ratio */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-200 dark:bg-stone-900 shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

        {/* Floating Category & Status Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md ${
              isShopify
                ? "bg-amber-500/90 text-stone-950"
                : isFullStack
                ? "bg-yellow-400/90 text-stone-950"
                : "bg-orange-500/90 text-stone-950"
            }`}
          >
            {getCategoryIcon()}
            <span>{category}</span>
          </span>

          {featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-yellow-400 text-stone-950 shadow-sm">
              ★ Featured
            </span>
          )}
        </div>

        {/* Bottom overlay status */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-[11px] font-semibold text-stone-300">
          <FaCheckCircle className="text-emerald-400 text-[10px]" />
          <span>{status}</span>
        </div>
      </div>

      {/* Card Content (Flex-1 so it stretches uniformly) */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {title}
            </h3>

            {/* Link shortcuts */}
            <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400 shrink-0">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} GitHub`}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500 transition-colors"
                >
                  <FaGithub size={14} />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} Live Site`}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500 transition-colors"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>

          <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom Section: Tech tags & Action Button */}
        <div className="space-y-4 pt-3 border-t border-stone-200 dark:border-stone-800/80 mt-auto">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 min-h-[26px]">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Button */}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-200/80 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-bold hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-stone-950 transition-all duration-300 shadow-sm"
            >
              <span>Explore Live Website</span>
              <FaExternalLinkAlt size={11} />
            </a>
          ) : (
            <div className="w-full text-center py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800/40 text-stone-500 dark:text-stone-400 text-xs font-semibold border border-dashed border-stone-200 dark:border-stone-800">
              Verified Client Build
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
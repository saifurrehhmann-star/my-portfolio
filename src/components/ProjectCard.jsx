import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaShopify } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, link, github, image, category }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors duration-300"
    >
      {image && (
        <div className="w-full h-48 overflow-hidden bg-slate-200 dark:bg-slate-900">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            {title}
            {category === "Shopify" && (
              <span className="flex items-center gap-1 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                <FaShopify /> Shopify
              </span>
            )}
          </h3>
          <div className="flex gap-3 text-lg text-slate-700 dark:text-slate-300">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                <FaGithub />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs text-cyan-600 dark:text-cyan-400">
          {tech.map((t) => (
            <span key={t} className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
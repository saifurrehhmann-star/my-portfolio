import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, link, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-colors duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-3 text-lg">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <FaGithub />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
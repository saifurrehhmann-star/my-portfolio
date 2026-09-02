import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const experiences = [
  {
    type: "work",
    role: "Website Developer & Maintenance",
    company: "MakeBrands Marketing Agency",
    location: "Trade Tower, Civil Lines, Karachi",
    period: "Feb 2026 — Present",
    badge: "Current Role",
    link: "https://makebrands.pk/",
    achievements: [
      "Engineered, customized, and maintained client e-commerce and agency websites from scratch.",
      "Developed high-converting, fully responsive UI layouts optimized for mobile performance and fast loading.",
      "Diagnosed and resolved critical frontend bugs, layout inconsistencies, and cross-browser discrepancies.",
      "Integrated seamless checkout experiences and assisted with customer order tracking workflows.",
    ],
    technologies: ["React", "Shopify", "Tailwind CSS", "Liquid", "JavaScript", "AI Tools"],
  },
  {
    type: "education",
    role: "Certified Web Developer (MERN Stack)",
    company: "Aptech Learning Institute",
    location: "Karachi, Pakistan",
    period: "Oct 2024 — Present",
    badge: "Specialized Training",
    link: null,
    achievements: [
      "In-depth training across the MERN Stack: MongoDB, Express.js, React, and Node.js.",
      "Comprehensive focus on relational & NoSQL database architecture, schema design, and query optimization.",
      "Mastery of modern JavaScript (ES6+), asynchronous programming, RESTful APIs, and state management.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "HTML5/CSS3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3"
        >
          <FaBriefcase className="text-xs" />
          <span>EXPERIENCE & JOURNEY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
        >
          Career & <span className="gradient-text-amber">Professional Growth</span>
        </motion.h2>
      </div>

      {/* Modern Glowing Node Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-10">
        {/* Continuous timeline line */}
        <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-amber-500 via-orange-500 to-stone-300 dark:to-stone-800" />

        {experiences.map((exp, idx) => {
          const isWork = exp.type === "work";
          return (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline node icon */}
              <div className="absolute -left-[23px] sm:-left-[31px] top-5 w-6 h-6 rounded-full bg-white dark:bg-stone-900 border-2 border-amber-500 flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        {exp.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white flex items-center gap-2.5">
                      {isWork ? (
                        <FaBriefcase className="text-amber-500 text-lg" />
                      ) : (
                        <FaGraduationCap className="text-orange-500 text-xl" />
                      )}
                      <span>{exp.role}</span>
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-200/70 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300">
                    <FaCalendarAlt className="text-amber-500 text-xs" />
                    {exp.period}
                  </span>
                </div>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-600 dark:text-stone-400 mb-6">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    {exp.company}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-500 hover:text-amber-400 inline-block ml-1"
                      >
                        <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-amber-500 text-xs" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullet achievements */}
                <ul className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed"
                    >
                      <FaCheckCircle className="text-amber-500 mt-0.5 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-200 dark:border-stone-800">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
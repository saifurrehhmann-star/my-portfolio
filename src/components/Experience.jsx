import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const timelineItems = [
  {
    type: "work",
    title: "Intern → Website Developer",
    company: "MakeBrands",
    location: "Office #724, Trade Tower, Civil Lines, Karachi",
    duration: "Feb 2026 — Present",
    points: [
      "Designed and developed client websites from scratch",
      "Built fully responsive layouts for desktop and mobile",
      "Fixed bugs and resolved website issues",
      "Managed and tracked website orders",
      "Handled overall website maintenance and updates",
    ],
    skills: ["HTML", "CSS", "React", "Shopify", "AI Tools"],
  },
  {
    type: "education",
    title: "Certified Web Developer",
    company: "Aptech",
    location: "Karachi",
    duration: "Oct 2024 — Present",
    points: [
      "Learning the MERN Stack (MongoDB, Express, React, Node.js)",
      "Studying database design and management",
      "Covering HTML, CSS, JavaScript, and other core web development languages used to build modern websites",
    ],
    skills: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 rounded-full mb-5"
      >
        Experience
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white"
      >
        Recent <span className="text-cyan-600 dark:text-cyan-400">experience.</span>
      </motion.h2>

      <div className="relative pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-700"></div>

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[27px] top-8 w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>

              <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors duration-300">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                    {item.type === "education" && (
                      <FaGraduationCap className="text-cyan-600 dark:text-cyan-400" />
                    )}
                    {item.title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full">
                    <FaCalendarAlt className="text-cyan-600 dark:text-cyan-400" />
                    {item.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <FaBriefcase className="text-cyan-600 dark:text-cyan-400" />
                    {item.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-1">●</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
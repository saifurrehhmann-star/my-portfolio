import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      role: "Intern → Website Developer",
      company: "MakeBrands",
      location: "Office #724, Trade Tower, Civil Lines, Karachi",
      period: "Feb 2026 — Present",
      points: [
        "Designed and developed client websites from scratch with clean structure.",
        "Built fully responsive layouts optimized for desktop, tablet, and mobile screens.",
        "Identified and fixed website bugs, styling discrepancies, and performance issues.",
        "Managed and tracked store orders, product updates, and client content.",
        "Handled day-to-day website maintenance, updates, and Shopify store administration.",
      ],
      skills: ["HTML5", "CSS3", "React", "Shopify", "Liquid", "AI Tools"],
    },
    {
      type: "education",
      role: "Certified Web Developer Program",
      company: "Aptech Computer Education",
      location: "Karachi, Pakistan",
      period: "Oct 2024 — Present",
      points: [
        "Studying the full MERN Stack (MongoDB, Express.js, React, Node.js).",
        "Developing relational & non-relational database schemas and REST APIs.",
        "Mastering core web development principles, modern JavaScript (ES6+), and responsive layouts.",
      ],
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript (ES6+)"],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-16 sm:px-8 sm:py-24 dark:border-[#2A2D36]">
      {/* Section Header */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-16">
        <span className="shrink-0 text-[#FF6A00] font-mono-tag text-xs sm:text-sm font-bold tracking-widest uppercase">
          02 //
        </span>
          <h2 className="text-[clamp(1.35rem,6vw,3rem)] sm:text-5xl font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial">
          EXPERIENCE & TIMELINE
        </h2>
      </motion.div>

      {/* Editorial Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#DDD6C8] dark:border-[#2A2D36] space-y-16">
        {experiences.map((item, index) => (
          <motion.div
            key={item.role + item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative group"
          >
            {/* Orange Timeline Node */}
            <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#F5F1E8] dark:bg-[#121316] border-2 border-[#FF6A00] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            </span>

            {/* Main Header Information */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono-tag uppercase tracking-wider text-[#FF6A00] font-semibold mb-1">
                  {item.type === "work" ? <FaBriefcase size={11} /> : <FaGraduationCap size={12} />}
                  {item.type === "work" ? "Professional Work" : "Education & Certification"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#F5F1E8] font-editorial">
                  {item.role}
                </h3>
                <p className="break-words text-base text-[#5F5B55] dark:text-[#9E9A92] font-medium mt-0.5">
                  {item.company} · <span className="text-xs font-mono-tag">{item.location}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8] dark:bg-[#181A20] text-xs font-mono-tag text-[#171717] dark:text-[#F5F1E8] border border-[#DDD6C8] dark:border-[#2A2D36] self-start md:self-auto">
                <FaCalendarAlt size={10} className="text-[#FF6A00]" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Content & Responsibilities */}
            <div className="bg-[#EAE4D8]/60 dark:bg-[#181A20]/60 border border-[#DDD6C8] dark:border-[#2A2D36] rounded-2xl p-6 sm:p-8 mt-6">
              <ul className="space-y-3 mb-6">
                {item.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#5F5B55] dark:text-[#9E9A92] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#DDD6C8]/80 dark:border-[#2A2D36]/80">
                <span className="text-xs font-mono-tag uppercase text-[#171717] dark:text-[#F5F1E8] mr-2 font-semibold">
                  Technologies:
                </span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono-tag px-3 py-1 rounded-md bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border border-[#DDD6C8] dark:border-[#2A2D36]"
                  >
                    {skill}
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

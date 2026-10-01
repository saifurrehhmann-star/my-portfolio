import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiShopify,
  SiGit,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Building responsive, component-driven interfaces with modern web standards.",
      skills: [
        { name: "React", icon: SiReact },
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "E-Commerce & Shopify",
      description: "Customizing Shopify themes, writing custom Liquid sections, and store administration.",
      skills: [
        { name: "Shopify", icon: SiShopify },
        { name: "Shopify Liquid", icon: SiShopify },
        { name: "Theme Customization", icon: SiShopify },
      ],
    },
    {
      category: "Backend & Database",
      description: "Developing REST APIs, server logic, and database management.",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
    {
      category: "Tools & Workflow",
      description: "Version control, development environments, and team collaboration.",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: SiGit },
      ],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-16 sm:px-8 sm:py-24 dark:border-[#2A2D36]">
      {/* Section Header */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-16">
        <span className="shrink-0 text-[#FF6A00] font-mono-tag text-xs sm:text-sm font-bold tracking-widest uppercase">
          03 //
        </span>
        <h2 className="text-[clamp(1.35rem,6vw,3rem)] sm:text-5xl font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial">
          TECHNICAL EXPERTISE
        </h2>
      </motion.div>

      {/* Structured Category Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#EAE4D8] dark:bg-[#181A20] border border-[#DDD6C8] dark:border-[#2A2D36] rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#FF6A00] transition-colors duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="min-w-0 text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F5F1E8] font-editorial">
                  {group.category}
                </h3>
                <span className="text-xs font-mono-tag text-[#FF6A00]">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-sm text-[#5F5B55] dark:text-[#9E9A92] mb-6">
                {group.description}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#DDD6C8]/60 dark:border-[#2A2D36]/60">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border border-[#DDD6C8] dark:border-[#2A2D36] hover:border-[#FF6A00] hover:text-[#FF6A00] dark:hover:border-[#FF6A00] dark:hover:text-[#FF6A00] text-xs sm:text-sm font-medium transition-all duration-200"
                  >
                    <Icon size={14} className="text-[#FF6A00]" />
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const skills = [
  "JavaScript (ES6+)", "React", "Node.js", "Tailwind CSS",
  "HTML & CSS", "Git/GitHub", "MongoDB", "Express",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 flex items-center gap-3"
      >
        <span className="text-cyan-400">02.</span> Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700 hover:border-cyan-400 transition-colors duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
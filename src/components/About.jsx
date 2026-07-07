import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 flex items-center gap-3"
      >
        <span className="text-cyan-400">01.</span> About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 items-center">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 text-slate-400 leading-relaxed"
        >
          Hello! I'm a passionate developer who loves creating things that
          live on the internet. My interest in web development started back
          when I decided to try editing custom templates — turns out hacking
          together a custom theme taught me a lot about HTML & CSS!
          <br />
          <br />
          Fast-forward to today, and I've had the privilege of working on
          various projects. My main focus these days is building accessible,
          performant web apps using React and modern JavaScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 rounded-lg bg-cyan-400/20 border-2 border-cyan-400 mx-auto"
        >
          {/* <img src="/your-photo.jpg" className="w-full h-full object-cover rounded-lg" /> */}
        </motion.div>
      </div>
    </section>
  );
}
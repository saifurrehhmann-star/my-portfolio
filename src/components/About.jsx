import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let current = 0;
    const increment = target / 40;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const tabs = ["My Story", "Education", "Interests"];
  const [activeTab, setActiveTab] = useState("My Story");

  const tabContent = {
    "My Story": `Hello! I'm a passionate and self-motivated developer who loves creating things that live on the internet. My interest in web development started when I began exploring how websites are built, and since then I've been continuously learning React, JavaScript, and modern web technologies through personal projects and hands-on practice.`,
    Education: `I have a solid foundation in web development fundamentals including HTML, CSS, JavaScript, and React. I keep upgrading my skills through online courses, official documentation, and by building real projects to strengthen my practical knowledge.`,
    Interests: `Outside of coding, I enjoy exploring new technologies, following tech communities, and constantly experimenting with UI/UX design ideas to make my projects look more polished and user-friendly.`,
  };

  const stats = [
    { label: "Projects Built", value: 5, suffix: "+" },
    { label: "Technologies Learned", value: 8, suffix: "+" },
    { label: "Hours of Practice", value: 200, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-900 dark:text-white"
      >
        <span className="text-cyan-600 dark:text-cyan-400">01.</span> About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="flex gap-2 mb-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-slate-600 dark:text-slate-400 leading-relaxed min-h-[120px]"
          >
            {tabContent[activeTab]}
          </motion.p>

          <div className="grid grid-cols-3 gap-4 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-square rounded-lg bg-cyan-500/10 dark:bg-gradient-to-br dark:from-cyan-400/20 dark:to-purple-500/20 border-2 border-cyan-500 dark:border-cyan-400 mx-auto flex items-center justify-center"
        >
          <FaCode className="text-6xl text-cyan-500/50 dark:text-cyan-400/50" />
        </motion.div>
      </div>
    </section>
  );
}
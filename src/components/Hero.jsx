import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting, setGreeting] = useState("Hello");

  // Time based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // Manual typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 mb-6 relative z-10"
      >
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-cyan-400">
          SU
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-cyan-400 mb-3 relative z-10"
      >
        {greeting}, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4 relative z-10 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent"
      >
        Saif Ur Rehman
      </motion.h1>

      {/* Typewriter role text */}
      <h2 className="text-2xl md:text-4xl font-semibold text-slate-400 mb-6 relative z-10 h-12">
        I'm a{" "}
        <span className="text-cyan-400">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-xl text-slate-400 mb-8 relative z-10"
      >
        I'm a frontend developer specializing in building (and occasionally
        designing) exceptional digital experiences using React and JavaScript.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex gap-6 text-2xl mb-8 relative z-10"
      >
        <a href="https://github.com/saifurrehhmann-star" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
          <FaTwitter />
        </a>
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300 relative z-10"
      >
        View My Work
      </motion.a>
    </section>
  );
}
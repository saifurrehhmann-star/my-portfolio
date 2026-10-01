import { motion } from "framer-motion";
import { FaLaptopCode, FaStore, FaServer, FaRocket } from "react-icons/fa";

export default function About() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Structure",
      desc: "Understanding the client goals, target audience, and layout architecture before writing a single line of code.",
      icon: FaLaptopCode,
    },
    {
      num: "02",
      title: "Frontend & Shopify Build",
      desc: "Engineering custom Liquid templates, React components, and semantic styles with high attention to responsive detail.",
      icon: FaStore,
    },
    {
      num: "03",
      title: "Testing & Refinement",
      desc: "Checking cross-browser compatibility, mobile touch behavior, performance, and fixing bugs across all screen sizes.",
      icon: FaServer,
    },
    {
      num: "04",
      title: "Deployment & Support",
      desc: "Deploying to live production servers, connecting custom domains, and ensuring smooth ongoing operations.",
      icon: FaRocket,
    },
  ];

  const stats = [
    { label: "Client & Personal Projects", value: "5+" },
    { label: "Core Technologies", value: "8+" },
    { label: "Hands-on Practice & Building", value: "200+ hrs" },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-16 sm:px-8 sm:py-24 dark:border-[#2A2D36]">
      {/* Section Header */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-16">
        <span className="shrink-0 text-[#FF6A00] font-mono-tag text-xs sm:text-sm font-bold tracking-widest uppercase">
          01 //
        </span>
          <h2 className="text-[clamp(1.35rem,6vw,3rem)] sm:text-5xl font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial">
          ABOUT & WORKFLOW
        </h2>
      </motion.div>

      {/* Two Column Editorial Layout */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative Story & Background */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-6">
          <p className="text-xl sm:text-2xl font-medium text-[#171717] dark:text-[#F5F1E8] leading-snug font-editorial">
            I am a web developer with a strong focus on turning designs and ideas into fully functioning, live web products.
          </p>

          <p className="text-[#5F5B55] dark:text-[#9E9A92] leading-relaxed text-base">
            My development journey is built on hands-on execution. Whether it is engineering custom Shopify Liquid themes for e-commerce brands or building fast Single Page Applications with React and modern CSS, I focus on clean structure, responsive precision, and user experience.
          </p>

          <p className="text-[#5F5B55] dark:text-[#9E9A92] leading-relaxed text-base">
            Currently, I work on client websites and store maintenance at <strong className="text-[#171717] dark:text-[#F5F1E8]">MakeBrands</strong> while continuously expanding my full-stack MERN (MongoDB, Express, React, Node.js) capabilities through the certified developer curriculum at <strong className="text-[#171717] dark:text-[#F5F1E8]">Aptech</strong>.
          </p>

          {/* Real Metrics Grid */}
          <div className="grid grid-cols-1 gap-1 border-t border-[#DDD6C8] pt-4 dark:border-[#2A2D36] sm:grid-cols-3 sm:gap-4 sm:pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-3">
                <span className="block text-2xl sm:text-3xl font-black text-[#FF6A00] font-editorial">
                  {stat.value}
                </span>
                <span className="block text-xs text-[#5F5B55] dark:text-[#9E9A92] mt-1 font-mono-tag">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 4-Step Engineering Workflow */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08 }} className="lg:col-span-6 bg-[#EAE4D8] dark:bg-[#181A20] border border-[#DDD6C8] dark:border-[#2A2D36] rounded-2xl p-6 sm:p-8">
          <h3 className="text-xs font-mono-tag uppercase text-[#FF6A00] tracking-widest font-semibold mb-6">
            HOW I BRING PROJECTS TO LIFE
          </h3>

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 pb-5 border-b border-[#DDD6C8]/60 dark:border-[#2A2D36]/60 last:border-b-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] border border-[#DDD6C8] dark:border-[#2A2D36] flex items-center justify-center text-[#FF6A00] shrink-0 font-mono-tag text-xs font-bold">
                    {step.num}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-[#171717] dark:text-[#F5F1E8] font-editorial mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#5F5B55] dark:text-[#9E9A92] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

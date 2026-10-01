import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaGithub, FaWhatsapp, FaCode } from "react-icons/fa";

// Add the future portrait path here when the photo is ready, for example: "/saif-profile.jpg".
const profilePhoto = "";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const introTransition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.7,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1],
  });

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={introTransition(0)}
        className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#5F5B55] dark:text-[#9E9A92] sm:gap-5 sm:text-sm"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#DDD6C8] bg-[#EAE4D8]/80 px-3 py-1.5 text-[#171717] dark:border-[#2A2D36] dark:bg-[#1A1C22]/80 dark:text-[#F5F1E8]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6A00] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6A00]" />
          </span>
          Available for Projects & Roles
        </span>
        <span className="hidden sm:inline">/</span>
        <span>Karachi, PK</span>
        <span className="hidden sm:inline">/</span>
        <span className="text-[#FF6A00]">Web Developer & Shopify Specialist</span>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.1 } },
            }}
            className="mb-7 text-[clamp(2rem,8.4vw,3.75rem)] font-black leading-[0.96] tracking-tight text-[#171717] dark:text-[#F5F1E8] sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {["BUILDING DIGITAL", "EXPERIENCES", "THAT MATTER."].map((line, index) => (
              <motion.span
                key={line}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 28, filter: reduceMotion ? "none" : "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: introTransition(index * 0.03) },
                }}
                className={`block font-editorial ${index === 1 ? "text-[#FF6A00]" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={introTransition(0.45)}
            className="max-w-2xl"
          >
            <p className="mb-8 text-lg leading-relaxed text-[#5F5B55] dark:text-[#9E9A92] sm:text-xl">
              I&apos;m <strong className="font-semibold text-[#171717] dark:text-[#F5F1E8]">Saif Ur Rehman</strong>, a web developer crafting custom Shopify e-commerce stores, modern React applications, and responsive websites with clean code and seamless deployment.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-5">
              <motion.a
                href="#projects"
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#FF6A00] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#FF6A00]/15 transition-colors hover:bg-[#E55F00]"
              >
                <span>View Selected Work</span>
                <FaArrowRight size={13} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#171717] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#171717] transition-colors hover:border-[#FF6A00] hover:text-[#FF6A00] dark:border-[#F5F1E8] dark:text-[#F5F1E8] dark:hover:border-[#FF6A00] dark:hover:text-[#FF6A00]"
              >
                Let&apos;s Talk
              </motion.a>

              <div className="flex items-center gap-3 border-l border-[#DDD6C8] pl-3 dark:border-[#2A2D36] sm:pl-5">
                <motion.a
                  href="https://github.com/saifurrehhmann-star"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  whileHover={reduceMotion ? undefined : { y: -3, rotate: -5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD6C8] text-[#181717] transition-colors hover:border-[#181717] dark:border-[#2A2D36] dark:text-white dark:hover:border-white"
                >
                  <FaGithub size={16} />
                </motion.a>
                <motion.a
                  href="https://wa.me/923228768303"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  whileHover={reduceMotion ? undefined : { y: -3, rotate: 5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD6C8] text-[#25D366] transition-colors hover:border-[#25D366] dark:border-[#2A2D36]"
                >
                  <FaWhatsapp size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={introTransition(0.25)}
          className="mx-auto w-full max-w-[390px] lg:col-span-5 lg:max-w-none"
        >
          <div className="hero-portrait-frame hero-portrait-float relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#DDD6C8] bg-gradient-to-br from-[#EAE4D8] via-[#F5F1E8] to-[#F3D9C4] p-3 shadow-2xl shadow-[#171717]/10 dark:border-[#2A2D36] dark:from-[#22232A] dark:via-[#181A20] dark:to-[#382316] dark:shadow-black/30">
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/60 bg-[radial-gradient(circle_at_50%_35%,rgba(255,106,0,0.18),transparent_48%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_50%_35%,rgba(255,106,0,0.2),transparent_48%)]">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,106,0,0.18)_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />
              {profilePhoto ? (
                <img src={profilePhoto} alt="Saif Ur Rehman" className="absolute inset-0 h-full w-full object-cover object-center" />
              ) : (
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#FF6A00]/30 bg-[#F5F1E8]/70 text-5xl font-black tracking-tight text-[#FF6A00] shadow-xl shadow-[#FF6A00]/10 backdrop-blur-sm dark:bg-[#121316]/70">
                  SR
                </div>
              )}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#DDD6C8]/80 bg-[#F5F1E8]/80 px-3 py-2 text-[10px] font-mono-tag uppercase tracking-wider text-[#5F5B55] backdrop-blur-md dark:border-[#2A2D36] dark:bg-[#121316]/75 dark:text-[#C3BDB5]">
                <FaCode className="text-[#FF6A00]" />
                Profile / Developer
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-2xl border border-white/50 bg-[#F5F1E8]/75 p-4 backdrop-blur-md dark:border-white/10 dark:bg-[#121316]/75">
                <div>
                  <p className="text-lg font-bold text-[#171717] dark:text-[#F5F1E8]">Saif Ur Rehman</p>
                  <p className="mt-0.5 text-xs text-[#5F5B55] dark:text-[#AAA49B]">Web Developer · Karachi, PK</p>
                </div>
                <span className="mb-1 h-2.5 w-2.5 rounded-full bg-[#FF6A00] shadow-[0_0_16px_4px_rgba(255,106,0,0.35)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={introTransition(0.65)}
        className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#DDD6C8] pt-6 text-[10px] uppercase tracking-wider text-[#5F5B55] dark:border-[#2A2D36] dark:text-[#9E9A92] sm:mt-14 sm:text-xs"
      >
        <span>01 / Discovery & Design</span>
        <span>02 / Frontend Architecture</span>
        <span>03 / Shopify & E-commerce</span>
        <span>04 / Live Deployment</span>
      </motion.div>
    </section>
  );
}

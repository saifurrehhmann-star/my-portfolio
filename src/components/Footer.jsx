import { FaArrowUp, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-10 sm:px-8 sm:py-12 dark:border-[#2A2D36]">
      <div className="flex flex-col items-center gap-7 sm:gap-8 md:flex-row md:items-center md:justify-between">
        {/* Brand & Tagline */}
        <div className="w-full min-w-0 text-center md:w-auto md:text-left">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial"
          >
            <span>Saif Ur Rehman</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
          </a>
          <p className="mt-1 break-words text-xs leading-relaxed text-[#5F5B55] dark:text-[#9E9A92] font-mono-tag">
            Web Developer & Shopify Specialist · Karachi, PK
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="grid w-full max-w-sm grid-cols-2 gap-x-3 gap-y-1 text-xs font-mono-tag uppercase tracking-wider text-[#5F5B55] dark:text-[#9E9A92] sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 md:w-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-2 text-center transition-colors duration-200 hover:text-[#FF6A00] sm:px-0 sm:py-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Socials & Back to Top */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/saifurrehhmann-star"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD6C8] text-[#181717] transition-opacity duration-200 hover:opacity-75 dark:border-[#2A2D36] dark:text-white"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://wa.me/923228768303"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD6C8] text-[#25D366] transition-opacity duration-200 hover:opacity-75 dark:border-[#2A2D36]"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-[#DDD6C8] dark:border-[#2A2D36] flex items-center justify-center text-[#171717] dark:text-[#F5F1E8] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors duration-200"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>

      <div className="mt-7 border-t border-[#DDD6C8]/60 px-2 pt-5 text-center text-[11px] leading-relaxed font-mono-tag text-[#5F5B55] dark:border-[#2A2D36]/60 dark:text-[#9E9A92] sm:mt-8 sm:pt-6 sm:text-xs">
        © {new Date().getFullYear()} Saif Ur Rehman. Designed & Built with clean code and precision.
      </div>
    </motion.footer>
  );
}

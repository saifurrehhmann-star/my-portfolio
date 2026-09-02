import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-stone-200 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/50 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="flex items-center justify-center md:justify-start gap-1 font-mono font-bold text-lg text-stone-900 dark:text-white"
          >
            <span className="text-amber-500">&lt;</span>
            <span>Saif</span>
            <span className="text-amber-500">.dev /&gt;</span>
          </a>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Full Stack MERN & Shopify E-Commerce Developer
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-stone-600 dark:text-stone-400">
          <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>

        {/* Back to Top & Socials */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500 transition-colors"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500 transition-colors"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500 transition-colors"
            >
              <FaWhatsapp size={15} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-9 h-9 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-500 hover:text-stone-950 dark:hover:bg-amber-400 dark:hover:text-stone-950 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-stone-200 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 dark:text-stone-500 text-center">
        <p>
          © {new Date().getFullYear()} Saif Ur Rehman. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Bespoke design crafted with <FaHeart className="text-amber-500 text-[10px]" /> using React 19 & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiShopify } from "react-icons/si";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  github,
  image,
  category,
  categoryLabel,
  role,
  offset,
  number,
  isActive,
  onSelect,
  reducedMotion,
}) {
  const hidden = Math.abs(offset) > 2;

  return (
    <motion.article
      initial={false}
      animate={{
        x: `calc(-50% + ${offset * 205}px)`,
        y: `calc(-50% + ${Math.abs(offset) * 24}px)`,
        rotate: offset * -11,
        scale: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.88 : 0.76,
        opacity: hidden ? 0 : offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.72 : 0.35,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={offset === 0 ? undefined : onSelect}
      aria-label={`${title}${isActive ? ", selected project" : ", select project"}`}
      aria-hidden={hidden}
      className={`group absolute left-1/2 top-1/2 h-[420px] w-[min(84vw,360px)] overflow-hidden rounded-2xl border bg-[#F5F1E8] text-left shadow-2xl transition-[border-color,box-shadow] duration-300 dark:bg-[#181A20] sm:h-[390px] sm:w-[min(78vw,340px)] ${
        isActive
          ? "z-30 border-[#FF6A00]/80 shadow-[#FF6A00]/10"
          : "z-10 border-[#DDD6C8] dark:border-[#39343A]"
      } ${offset === 0 ? "cursor-default" : "cursor-pointer"}`}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
    >
      <div className="relative h-[42%] overflow-hidden bg-[#DDD6C8] dark:bg-[#101014] sm:h-[46%]">
        <img
          src={image}
          alt={`${title} website preview`}
          className={`h-full w-full object-cover object-top transition-transform duration-700 ${isActive ? "group-hover:scale-105" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-[#121316]/20" />
        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] whitespace-normal rounded-2xl border border-white/20 bg-[#171717]/75 px-3 py-1 text-[10px] font-semibold uppercase leading-snug tracking-wider text-white backdrop-blur-md">
          {category === "Shopify" && <SiShopify className="mr-1.5 inline text-[#95BF47]" aria-hidden="true" />}
          {categoryLabel || category}
        </span>
        <span className="absolute bottom-3 right-4 font-mono-tag text-xs text-white/75">
          {String(number).padStart(2, "0")}
        </span>
      </div>

      <div className="flex h-[58%] flex-col p-4 sm:h-[54%] sm:p-6">
        <div className="mb-3">
          {role && <p className="mb-1 text-[10px] font-mono-tag uppercase tracking-widest text-[#FF6A00]">{role}</p>}
          <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight text-[#171717] dark:text-[#F5F1E8]">
            {title}
          </h3>
        </div>

        <p className="line-clamp-3 text-xs leading-relaxed text-[#5F5B55] dark:text-[#AAA49B]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full border border-[#DDD6C8] bg-white/40 px-2.5 py-1 text-[10px] text-[#49443F] dark:border-[#39343A] dark:bg-white/5 dark:text-[#DED8D0]">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#DDD6C8] pt-3 dark:border-[#39343A]">
          <div className="flex items-center gap-2">
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#171717] transition-colors hover:text-[#FF6A00] dark:text-[#F5F1E8]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171717] text-white dark:bg-[#F5F1E8] dark:text-[#171717]">
                  <FaExternalLinkAlt size={10} />
                </span>
                Open project
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={`View ${title} GitHub repository`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDD6C8] text-[#181717] transition-colors hover:border-[#181717] dark:border-[#39343A] dark:text-white dark:hover:border-white"
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
          <FaArrowRight className="text-[#FF6A00]" size={13} />
        </div>
      </div>
    </motion.article>
  );
}

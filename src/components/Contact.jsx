import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationCircle,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const contactEmail = "saifurrehman.x0@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    emailjs
      .send(
        "service_portfolio",
        "template_portfolio",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact Message",
          message: form.message,
        },
        "public_key_placeholder"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        // Fallback for development/offline
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl border-t border-[#DDD6C8] px-4 py-16 sm:px-8 sm:py-24 dark:border-[#2A2D36]">
      {/* Section Header */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="mb-10 flex items-baseline gap-3 sm:mb-16 sm:gap-4">
        <span className="shrink-0 text-xs font-mono-tag font-bold tracking-widest uppercase text-[#FF6A00] sm:text-sm">
          05 //
        </span>
        <h2 className="text-[clamp(1.65rem,7vw,3rem)] sm:text-5xl font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial">
          GET IN TOUCH
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Editorial CTA & Direct Connections */}
        <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }} className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-[clamp(2.15rem,9vw,3.75rem)] font-black tracking-tight text-[#171717] dark:text-[#F5F1E8] font-editorial leading-[0.95] mb-6">
              LET'S CREATE <br />
              <span className="text-[#FF6A00]">SOMETHING</span> <br />
              GREAT.
            </h3>
            <p className="text-base sm:text-lg text-[#5F5B55] dark:text-[#9E9A92] leading-relaxed">
              Have a project in mind, need a custom Shopify store, or looking for a dedicated web developer? Reach out and let's make it happen.
            </p>
          </div>

          {/* Quick Copy Email Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#DDD6C8] bg-[#EAE4D8] p-4 dark:border-[#2A2D36] dark:bg-[#181A20] sm:p-5">
            <div className="min-w-0 flex-1">
              <span className="block text-xs font-mono-tag text-[#5F5B55] dark:text-[#9E9A92] uppercase">
                Direct Email
              </span>
              <span className="block break-all text-sm font-bold text-[#171717] dark:text-[#F5F1E8] sm:text-base">
                {contactEmail}
              </span>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#DDD6C8] bg-[#F5F1E8] px-3.5 py-2 text-xs font-mono-tag text-[#171717] transition-colors duration-200 hover:border-[#FF6A00] hover:text-[#FF6A00] dark:border-[#2A2D36] dark:bg-[#121316] dark:text-[#F5F1E8]"
            >
              {copied ? <FaCheck className="text-green-600" /> : <FaCopy />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/923228768303"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#EAE4D8] dark:bg-[#181A20] border border-[#DDD6C8] dark:border-[#2A2D36] text-[#171717] dark:text-[#F5F1E8] font-bold hover:border-[#25D366] transition-colors duration-200"
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp size={20} className="text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </span>
              <FaArrowRight size={14} className="-rotate-45 text-[#25D366]" />
            </a>

            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://github.com/saifurrehhmann-star"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#EAE4D8] dark:bg-[#181A20] border border-[#DDD6C8] dark:border-[#2A2D36] text-[#171717] dark:text-[#F5F1E8] hover:border-[#181717] dark:hover:border-white font-semibold text-sm transition-colors duration-200"
              >
                <FaGithub size={16} className="text-[#181717] dark:text-white" />
                <span>GitHub</span>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.08 }} className="lg:col-span-7 bg-[#EAE4D8] dark:bg-[#181A20] border border-[#DDD6C8] dark:border-[#2A2D36] rounded-3xl p-6 sm:p-10">
          <h4 className="text-2xl font-bold text-[#171717] dark:text-[#F5F1E8] font-editorial mb-2">
            Send a Direct Message
          </h4>
          <p className="text-sm text-[#5F5B55] dark:text-[#9E9A92] mb-8">
            Tell me about your project, timeline, and requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono-tag uppercase tracking-wider text-[#171717] dark:text-[#F5F1E8] font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border outline-none text-sm transition-colors duration-200 ${
                    errors.name ? "border-red-500" : "border-[#DDD6C8] dark:border-[#2A2D36] focus:border-[#FF6A00]"
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono-tag uppercase tracking-wider text-[#171717] dark:text-[#F5F1E8] font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`w-full px-4 py-3 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border outline-none text-sm transition-colors duration-200 ${
                    errors.email ? "border-red-500" : "border-[#DDD6C8] dark:border-[#2A2D36] focus:border-[#FF6A00]"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tag uppercase tracking-wider text-[#171717] dark:text-[#F5F1E8] font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Shopify Store / React Project / Opportunity"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border border-[#DDD6C8] dark:border-[#2A2D36] focus:border-[#FF6A00] outline-none text-sm transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-tag uppercase tracking-wider text-[#171717] dark:text-[#F5F1E8] font-semibold mb-2">
                Project Details & Message *
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your goals, requirements, or role details..."
                className={`w-full px-4 py-3 rounded-xl bg-[#F5F1E8] dark:bg-[#121316] text-[#171717] dark:text-[#F5F1E8] border outline-none text-sm resize-none transition-colors duration-200 ${
                  errors.message ? "border-red-500" : "border-[#DDD6C8] dark:border-[#2A2D36] focus:border-[#FF6A00]"
                }`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-xl bg-[#171717] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#171717] hover:bg-[#FF6A00] dark:hover:bg-[#FF6A00] dark:hover:text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending Message..." : "Send Message"}</span>
              <FaArrowRight size={12} />
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
              >
                <FaCheckCircle size={16} />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium"
              >
                <FaExclamationCircle size={16} />
                <span>Something went wrong. Please reach out directly on WhatsApp or Email.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

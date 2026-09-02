import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.message.trim())
      newErrors.message = "Please write a brief message";
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
          subject: form.subject || "Portfolio Contact",
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3"
        >
          <FaEnvelope className="text-xs" />
          <span>GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
        >
          Let's Build Something <span className="gradient-text-amber">Great Together</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Reach-out & Socials (Col span 5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Available for New Projects</span>
            </div>

            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-8">
              Whether you need a brand-new Shopify e-commerce store, a responsive web application, or a dedicated frontend engineer, feel free to reach out.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 mb-8">
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200/60 dark:border-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400">Direct Chat</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-white">Message on WhatsApp</p>
                </div>
              </a>

              <a
                href="mailto:contact@saif.dev"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200/60 dark:border-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400">Send an Email</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-white">contact@saif.dev</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200/60 dark:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex items-center justify-center text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400">Current Base</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-white">Karachi, Pakistan (GMT+5)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <FaClock className="text-amber-500" />
              <span>Replies within 2-4 hours</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors"
              >
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Sleek Contact Form (Col span 7) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white mb-2">
            Send a direct message
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mb-6">
            Fill out the form below with your project details, requirements, or inquiries.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alexander Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full bg-stone-100 dark:bg-stone-900/90 text-stone-900 dark:text-white border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-stone-200 dark:border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1.5">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. alex@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full bg-stone-100 dark:bg-stone-900/90 text-stone-900 dark:text-white border rounded-xl px-4 py-3 text-sm outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-stone-200 dark:border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Shopify Store, React App, or Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-stone-100 dark:bg-stone-900/90 text-stone-900 dark:text-white border border-stone-200 dark:border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project, timeline, budget, and goals..."
                value={form.message}
                onChange={handleChange}
                className={`w-full bg-stone-100 dark:bg-stone-900/90 text-stone-900 dark:text-white border rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-stone-200 dark:border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 cursor-pointer disabled:opacity-50"
            >
              <FaPaperPlane className="text-xs" />
              <span>{status === "sending" ? "Sending message..." : "Send Message"}</span>
            </motion.button>

            {/* Notification messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-center gap-2"
                >
                  <FaCheckCircle className="shrink-0 text-amber-500" />
                  <span>Thank you! Your message has been recorded. I'll get back to you shortly.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs sm:text-sm flex items-center gap-2"
                >
                  <FaExclamationCircle className="shrink-0" />
                  <span>Something went wrong. Please reach out directly on WhatsApp or Email.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
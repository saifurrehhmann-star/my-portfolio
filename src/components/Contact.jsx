import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaWhatsapp, FaPaperPlane, FaExternalLinkAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 rounded-full mb-5">
          Contact
        </motion.span>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Let's <span className="text-cyan-600 dark:text-cyan-400">connect.</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col">
          <p className="text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3">Open for opportunities</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">Open to Work</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10">Internship, freelance, and entry-level opportunities where clean UI and solid front-end engineering matter.</p>

          <div className="mt-auto space-y-3">
            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 font-medium px-5 py-3 rounded-lg hover:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors duration-300">
              <FaWhatsapp /> Message on WhatsApp
            </a>

            <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-5 py-3 rounded-lg text-slate-800 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
              <span className="flex items-center gap-2 font-medium"><FaGithub /> GitHub</span>
              <FaExternalLinkAlt size={12} />
            </a>

            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-5 py-3 rounded-lg text-slate-800 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
              <span className="flex items-center gap-2 font-medium"><FaWhatsapp /> WhatsApp</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
          <span className="inline-block text-xs tracking-widest uppercase text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 rounded-full mb-4">Contact form</span>

          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Send a project message.</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Share the idea, role, timeline, or collaboration details and I'll reply as soon as possible.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Name</label>
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={`w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white border rounded-lg px-4 py-2.5 outline-none transition-colors duration-300 ${errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`} />
                {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Email</label>
                <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={`w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white border rounded-lg px-4 py-2.5 outline-none transition-colors duration-300 ${errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`} />
                {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Subject</label>
              <input type="text" name="subject" placeholder="Project, internship, freelance, or teaching" value={form.subject} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-lg px-4 py-2.5 outline-none transition-colors duration-300" />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Message</label>
              <textarea name="message" placeholder="Tell me what you need, the scope, timeline, and best way to reply." rows="5" value={form.message} onChange={handleChange} className={`w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white border rounded-lg px-4 py-2.5 outline-none transition-colors duration-300 resize-none ${errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`} />
              {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: status === "sending" ? 1 : 1.02 }} className="flex items-center justify-center gap-2 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 font-medium px-6 py-3 rounded-lg hover:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              <FaPaperPlane size={14} />
              {status === "sending" ? "Sending..." : "Send message"}
            </motion.button>

            {status === "success" && (
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                <FaExclamationCircle /> Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
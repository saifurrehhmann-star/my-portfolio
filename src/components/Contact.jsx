import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        message: form.message,
      }, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-3 text-slate-900 dark:text-white"
      >
        <span className="text-cyan-600 dark:text-cyan-400">04.</span> Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-600 dark:text-slate-400 mb-12 text-center max-w-lg mx-auto"
      >
        Have a project in mind or just want to say hi? My inbox is always open.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-cyan-600 dark:text-cyan-400 text-xl mt-1" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-500">Email</p>
              <p className="text-slate-800 dark:text-slate-300">youremail@example.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhone className="text-cyan-600 dark:text-cyan-400 text-xl mt-1" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-500">Phone</p>
              <p className="text-slate-800 dark:text-slate-300">+92 300 0000000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400 text-xl mt-1" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-500">Location</p>
              <p className="text-slate-800 dark:text-slate-300">Karachi, Pakistan</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border rounded-lg px-4 py-3 outline-none transition-colors duration-300 ${errors.name ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`}
            />
            {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border rounded-lg px-4 py-3 outline-none transition-colors duration-300 ${errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`}
            />
            {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={`w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border rounded-lg px-4 py-3 outline-none transition-colors duration-300 resize-none ${errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"}`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message ? <p className="text-red-500 dark:text-red-400 text-xs">{errors.message}</p> : <span></span>}
              <p className="text-xs text-slate-500 dark:text-slate-500">{form.message.length} characters</p>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
            className="border border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
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
        </motion.form>
      </div>
    </section>
  );
}
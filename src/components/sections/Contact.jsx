import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact({ lang = "en" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const t = {
    title:
      lang === "en"
        ? "Let’s create something meaningful."
        : "Creemos algo con sentido.",
    subtitle:
      lang === "en"
        ? "If you have an idea, a project, or just a thought — write to me."
        : "Si tienes una idea, un proyecto o solo un pensamiento — escríbeme.",
    note:
      lang === "en"
        ? "Direct communication. No agencies. Reply within 24h."
        : "Comunicación directa. Sin agencias. Respuesta en 24h.",
    name: lang === "en" ? "Your name" : "Tu nombre",
    email: "Email",
    message:
      lang === "en"
        ? "Tell me what’s on your mind…"
        : "Cuéntame qué tienes en mente…",
    send: lang === "en" ? "Send message" : "Enviar mensaje",
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      className="relative bg-black px-6 py-24 overflow-hidden"
    >
      {/* Subtle grain / artistic noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
          {/* Left — Editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl leading-tight font-medium text-white">
              {t.title}
            </h2>

            <p className="mt-6 text-sm text-gray-400 max-w-sm">{t.subtitle}</p>

            <p className="mt-10 text-xs text-gray-500 tracking-wide">
              {t.note}
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-3 space-y-14"
          >
            <ArtInput
              label={t.name}
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <ArtInput
              label={t.email}
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <div>
              <label className="block text-xs text-gray-400 mb-3">
                {lang === "en" ? "Message" : "Mensaje"}
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder={t.message}
                className="
                  w-full
                  bg-transparent
                  text-white
                  text-sm
                  placeholder-gray-600
                  resize-none
                  border-b border-white/20
                  pb-3
                  focus:outline-none
                  focus:border-white
                  transition-colors
                "
              />
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  text-sm
                  text-white
                  tracking-wide
                  transition-opacity
                  hover:opacity-70
                "
              >
                <span>{t.send}</span>
                <span className="block h-px w-10 bg-white transition-all duration-300 group-hover:w-20" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Artistic Input */
/* -------------------------------- */
function ArtInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-3">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          bg-transparent
          text-white
          text-sm
          border-b border-white/20
          pb-3
          focus:outline-none
          focus:border-white
          transition-colors
        "
      />
    </div>
  );
}

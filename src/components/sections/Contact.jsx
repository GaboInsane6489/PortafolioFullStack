import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import { createClient } from "@supabase/supabase-js";
import Icon from "../ui/Icon.jsx";

export default function Contact() {
  const lang = useStore($lang);
  const t = useTranslations(lang);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
            className="md:col-span-2 text-center md:text-left"
          >
            <h2 className="text-4xl leading-tight font-medium text-white">
              {t("contact.title")}
            </h2>

            <p className="mt-6 text-sm text-gray-400 max-w-sm mx-auto md:mx-0">
              {t("contact.subtitle")}
            </p>

            <p className="mt-10 text-xs text-gray-500 tracking-wide">
              {t("contact.note")}
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
              label={t("contact.name")}
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <ArtInput
              label={t("contact.email")}
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <div>
              <label
                htmlFor="message"
                className="block text-xs text-gray-400 mb-3"
              >
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
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
                <span>{t("contact.send")}</span>
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
      <label htmlFor={name} className="block text-xs text-gray-400 mb-3">
        {label}
      </label>
      <input
        id={name}
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

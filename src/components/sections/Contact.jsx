import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
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
      className="relative min-h-screen py-32 bg-black flex items-center overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Status: Online
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              print("Hello, World!"){" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                legendary.
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-8">
              <a
                href="gabrielgg2005ve@gmail.com"
                className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                  <Icon
                    name="mail"
                    className="text-gray-400 group-hover:text-purple-400"
                    size={24}
                  />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 mb-1">
                    Email
                  </span>
                  <span className="text-xl text-white font-medium">
                    gabrielgg2005ve@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/584127893937"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                  <Icon
                    name="whatsapp"
                    className="text-gray-400 group-hover:text-green-400"
                    size={24}
                  />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 mb-1">
                    WhatsApp
                  </span>
                  <span className="text-xl text-white font-medium">
                    +58 412 7893937
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    {t("contact.name")}
                  </label>
                  <div className="relative group">
                    <Icon
                      name="briefcase"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    {t("contact.email")}
                  </label>
                  <div className="relative group">
                    <Icon
                      name="mail"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  {t("contact.messageLabel")}
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder={t("contact.message")}
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-100 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                <span>{t("contact.send")}</span>
                <Icon
                  name="send"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

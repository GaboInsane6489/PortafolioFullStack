import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";

export default function Contact() {
  const lang = useStore($lang);
  const t = useTranslations(lang);

  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "91d5dea0-56d8-4a01-9589-27909b6301ac", // Use user's key or placeholder
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Nuevo mensaje de portafolio: ${form.name}`,
          from_name: "Portafolio Gabriel",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen py-32 flex items-center overflow-hidden">
      {/* Background showing video */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIi8+PC9zdmc+')] opacity-[0.03]" />
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
                href="mailto:gabrielgg2005ve@gmail.com"
                aria-label="Send an email to Gabriel González"
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
                aria-label="Contact Gabriel via WhatsApp"
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Icon name="check" className="text-green-400" size={40} />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  {t("contact.successTitle")}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
                  {t("contact.successDetail")}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-purple-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  &lt; send_another_message /&gt;
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
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
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all disabled:opacity-50"
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
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all disabled:opacity-50"
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
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      rows="4"
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none disabled:opacity-50"
                      placeholder={t("contact.message")}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm italic">
                    {t("contact.error")}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-100 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>{t("contact.sending")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("contact.send")}</span>
                      <Icon
                        name="send"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        size={18}
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "../ui/Icon";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";

const CodeCard = ({ img, title, subtitle, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10 shadow-2xl"
    >
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-12 h-12 rounded-xl bg-purple-600/20 backdrop-blur-md flex items-center justify-center mb-4 border border-purple-500/30 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300">
            <Icon
              name={icon}
              className="text-purple-400 group-hover:text-white transition-colors"
              size={24}
            />
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Shiny Border Effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-purple-500/50 rounded-2xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function CodeGallery() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const items = [
    {
      img: "/assets/images/projects/Codigo1.jpeg",
      title: t("codegallery.card1.title"),
      subtitle: t("codegallery.card1.subtitle"),
      icon: "code",
    },
    {
      img: "/assets/images/projects/Codigo2.jpeg",
      title: t("codegallery.card2.title"),
      subtitle: t("codegallery.card2.subtitle"),
      icon: "activity",
    },
    {
      img: "/assets/images/projects/Codigo3.jpeg",
      title: t("codegallery.card3.title"),
      subtitle: t("codegallery.card3.subtitle"),
      icon: "terminal",
    },
    {
      img: "/assets/images/projects/Codigo4.jpeg",
      title: t("codegallery.card4.title"),
      subtitle: t("codegallery.card4.subtitle"),
      icon: "sparkles",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 bg-black flex items-center overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-tl from-blue-900/10 via-transparent to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ opacity }} className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Icon name="terminal" className="text-purple-400" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
              {t("codegallery.meta")}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 mb-6">
            {t("codegallery.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {t("codegallery.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <CodeCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

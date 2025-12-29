import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useStore } from "@nanostores/react";
import { useTranslations, $lang } from "../../utils/i18n";
import { fadeUp, staggerContainer } from "../../utils/motion";
import Icon from "../ui/Icon";

const GithubSection = () => {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const stats = [
    { label: t("github.commits"), value: "2,540+", icon: "git-commit" },
    { label: t("github.hours"), value: "3,200+", icon: "clock" },
    { label: t("github.streak"), value: "180 Days", icon: "activity" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] bg-black py-32 overflow-hidden"
      onMouseMove={(e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
    >
      {/* Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 51, 234, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-4"
              >
                <Icon name="github" className="text-white w-8 h-8" />
                <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                  @GaboInsane6489
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
              >
                {t("github.title")}
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              {t("github.description")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-6 py-6 border-y border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="https://github.com/GaboInsane6489?tab=overview&from=2025-11-01&to=2025-11-30"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                {t("github.cta")}
                <Icon
                  name="arrowRight"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Images Layout */}
          <motion.div style={{ y }} className="relative h-[600px] w-full">
            {/* Image 1 - Main Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20 group"
            >
              <img
                src="/assets/images/Github1.jpeg"
                alt="Github Activity Main"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Image 2 - Top Right Float */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 md:right-10 w-64 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl z-10 opacity-80"
            >
              <img
                src="/assets/images/Github2.jpeg"
                alt="Github Activity Secondary"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Image 3 - Bottom Left Float */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-10 left-0 md:left-10 w-72 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl z-30"
            >
              <img
                src="/assets/images/Github3.jpeg"
                alt="Github Activity Tertiary"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;

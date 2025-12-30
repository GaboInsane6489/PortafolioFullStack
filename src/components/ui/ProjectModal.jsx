import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "framer-motion";
import Icon from "./Icon.jsx";
import { useTranslations } from "../../utils/i18n.js";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

/**
 * Project Details Modal
 * Immersive, Brutal design with swipeable carousel
 */
export default function ProjectModal({
  project,
  isOpen,
  onClose,
  lang = "en",
}) {
  const t = useTranslations(lang);
  const [[page, direction], setPage] = useState([0, 0]);

  // Reset image index when project changes
  useEffect(() => {
    if (isOpen) setPage([0, 0]);
  }, [isOpen, project]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const hasGallery = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-6xl bg-[#09090b] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:h-[80vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              <Icon name="x" size={24} />
            </button>

            {/* --- CAROUSEL SECTION --- */}
            <div className="w-full lg:w-[60%] bg-black relative flex flex-col justify-center overflow-hidden group/carousel">
              <div className="relative w-full h-full min-h-[300px] flex items-center bg-[#050505]">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full object-contain pointer-events-none select-none"
                    alt={project.title}
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              {hasGallery && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-xl transition-all border border-white/10 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 shadow-xl"
                    onClick={() => paginate(-1)}
                    aria-label="Previous image"
                  >
                    <Icon name="chevronLeft" size={20} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-xl transition-all border border-white/10 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 shadow-xl"
                    onClick={() => paginate(1)}
                    aria-label="Next image"
                  >
                    <Icon name="chevronRight" size={20} />
                  </button>

                  {/* Film Strip Thumbnails */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4 pointer-events-none">
                    <div className="flex gap-2 p-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 pointer-events-auto overflow-x-auto max-w-full">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setPage([idx, idx > imageIndex ? 1 : -1])
                          }
                          className={`relative w-14 h-9 rounded-lg overflow-hidden transition-all duration-300 ${
                            idx === imageIndex
                              ? "ring-2 ring-purple-500 scale-110 opacity-100 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                              : "opacity-40 hover:opacity-100 hover:scale-105"
                          }`}
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* --- DETAILS SECTION --- */}
            <div className="w-full lg:w-[40%] bg-[#09090b] bg-gradient-to-br from-[#09090b] via-[#0c0c12] to-[#11111a] flex flex-col border-l border-white/5">
              <div className="p-8 lg:p-10 flex-1 overflow-y-auto custom-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-md max-w-fit shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-invert prose-lg text-gray-400 mb-8 leading-relaxed">
                    <p>{project.longDescription || project.description}</p>

                    {project.features && (
                      <div className="mt-8 pt-8 border-t border-white/5">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm text-purple-400 flex items-center gap-2">
                          <Icon
                            name="sparkles"
                            size={14}
                            className="text-purple-400"
                          />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-sm bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors"
                            >
                              <span className="text-purple-400 mt-0.5 min-w-[1.25rem]">
                                <Icon name="check" size={18} />
                              </span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Action Bar */}
              <div className="p-6 border-t border-white/10 bg-[#050505]">
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white hover:bg-white hover:text-black border border-white/20 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-white/20"
                    >
                      <Icon name="externalLink" size={20} />
                      {lang === "en" ? "Visit Site" : "Ver Sitio"}
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-black border border-white/20 text-white hover:bg-white hover:text-black rounded-xl font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-white/20 group/btn"
                    >
                      <Icon
                        name="github"
                        size={20}
                        className="transition-transform group-hover/btn:scale-110"
                      />
                      {lang === "en" ? "Code" : "Código"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

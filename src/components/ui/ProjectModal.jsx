import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon.jsx";
import { useTranslations } from "../../utils/i18n.js";

/**
 * Project Details Modal
 * Displays expanded project information and an image carousel
 */
export default function ProjectModal({
  project,
  isOpen,
  onClose,
  lang = "en",
}) {
  const t = useTranslations(lang);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, project]);

  // Lock body scroll when modal is open
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

  const nextImage = (e) => {
    e.stopPropagation();
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
      );
    }
  };

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentImage = hasGallery
    ? project.gallery[currentImageIndex]
    : project.image;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl bg-[#050505] border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
              aria-label="Close modal"
            >
              <Icon name="x" size={20} />
            </button>

            {/* Image Section (Carousel) */}
            <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center bg-gray-900 group">
              <div className="relative w-full h-64 md:h-full min-h-[300px] md:min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={currentImage}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                {hasGallery && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-purple-600/80 text-white rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <Icon name="arrowLeft" size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-purple-600/80 text-white rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <Icon name="arrowRight" size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-white w-4"
                              : "bg-white/30 hover:bg-white/50"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto bg-[#0a0a0f]">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-md border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert prose-sm mb-8 text-gray-300 leading-relaxed">
                <p>{project.longDescription || project.description}</p>

                {project.features && (
                  <div className="mt-4">
                    <h4 className="text-white font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-900/20"
                  >
                    <Icon name="externalLink" size={18} />
                    {lang === "en" ? "Live Demo" : "Ver Demo"}
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium transition-all"
                  >
                    <Icon name="github" size={18} />
                    {lang === "en" ? "Source Code" : "Código"}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

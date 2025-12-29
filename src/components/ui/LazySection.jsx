import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LazySection Wrapper
 * Uses IntersectionObserver to trigger the mounting of lazy components
 * when they are about to enter the viewport (with a rootMargin buffer).
 */
export default function LazySection({ children, height = "400px" }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before it enters the viewport
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ minHeight: isIntersecting ? "auto" : height }}
    >
      {isIntersecting ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Suspense
              fallback={<div style={{ height }} className="bg-transparent" />}
            >
              {children}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div style={{ height }} className="bg-transparent" aria-hidden="true" />
      )}
    </div>
  );
}

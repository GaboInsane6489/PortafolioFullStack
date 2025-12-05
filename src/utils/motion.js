/**
 * Optimized Framer Motion Variants Library
 * Lightweight, tree-shakeable, GPU-accelerated animations
 * Respects prefers-reduced-motion
 */

// Lightweight transition presets
const easing = [0.25, 0.1, 0.25, 1.0];

const transition = {
  duration: 0.5,
  ease: easing,
};

const fastTransition = {
  duration: 0.3,
  ease: easing,
};

// Check for reduced motion (client-side only)
const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Fade In
export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition,
  },
  exit: { opacity: 0 },
};

// Fade Up
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
  exit: { opacity: 0, y: 20 },
};

// Slide In Left
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
  exit: { opacity: 0, x: -30 },
};

// Slide In Right
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
  exit: { opacity: 0, x: 30 },
};

// Stagger Container
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger Item
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
};

// Blur Reveal
export const blurReveal = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { ...transition, duration: 0.7 },
  },
  exit: { opacity: 0, filter: "blur(10px)" },
};

// Scale On Hover
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: fastTransition,
  },
  tap: {
    scale: 0.95,
  },
};

// Appear Delayed
export const appearDelayed = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transition, delay },
  },
});

// Page Transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

// Utility: Get safe variants (respects reduced motion)
export const getSafeVariants = (variants) => {
  if (shouldReduceMotion()) {
    return {
      initial: {},
      animate: {},
      exit: {},
    };
  }
  return variants;
};

// Icon registry - centralized SVG definitions
const icons = {
  github: {
    viewBox: "0 0 24 24",
    path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  },
  linkedin: {
    viewBox: "0 0 24 24",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    circle: "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  mail: {
    viewBox: "0 0 24 24",
    path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    polyline: "22,6 12,13 2,6",
  },
  arrow: {
    viewBox: "0 0 24 24",
    path: "M5 12h14M12 5l7 7-7 7",
  },
  menu: {
    viewBox: "0 0 24 24",
    paths: ["M3 12h18", "M3 6h18", "M3 18h18"],
  },
  close: {
    viewBox: "0 0 24 24",
    paths: ["M18 6L6 18", "M6 6l12 12"],
  },
  globe: {
    viewBox: "0 0 24 24",
    circle: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    paths: [
      "M2 12h20",
      "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    ],
  },
  instagram: {
    viewBox: "0 0 24 24",
    rect: "M2 2h20v20H2z",
    circle: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
    point: "M17.5 6.5h.01",
  },
  whatsapp: {
    viewBox: "0 0 24 24",
    path: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  },
  externalLink: {
    viewBox: "0 0 24 24",
    paths: [
      "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      "M15 3h6v6",
      "M10 14L21 3",
    ],
  },
  chevronDown: {
    viewBox: "0 0 24 24",
    path: "M6 9l6 6 6-6",
  },
  location: {
    viewBox: "0 0 24 24",
    path: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    circle: true,
  },
  check: {
    viewBox: "0 0 24 24",
    path: "M20 6L9 17l-5-5",
  },
  arrowLeft: {
    viewBox: "0 0 24 24",
    path: "M19 12H5M12 19l-7-7 7-7",
  },
  arrowRight: {
    viewBox: "0 0 24 24",
    path: "M5 12h14M12 5l7 7-7 7",
  },
  x: {
    viewBox: "0 0 24 24",
    paths: ["M18 6L6 18", "M6 6l12 12"],
  },
  // Technologies
  react: {
    viewBox: "0 0 24 24",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    circle: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", // Simplified atom core
    // Using a simpler representation for React to keep it clean SVG or we can use the official path if preferred, but for now generic atom-ish
    paths: [
      "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z",
      "M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
    ],
  },
  // Real accessible paths for accurate brand icons
  react: {
    viewBox: "-11.5 -10.23174 23 20.46348",
    circle: "M0 0m-2.05 0a2.05 2.05 0 1 0 4.1 0a2.05 2.05 0 1 0 -4.1 0",
    paths: [
      "M0-5.9c-2.97 0-5.63.8-7.56 2.12-2.12 1.45-3.08 3.3-2.48 4.75.6 1.44 2.64 2.2 5.6 2.1 2.97-.08 5.63-.9 7.56-2.2 2.12-1.45 3.08-3.3 2.48-4.75-.6-1.44-2.64-2.2-5.6-2.1z m0 11.8c2.97 0 5.63-.8 7.56-2.12 2.12-1.45 3.08-3.3 2.48-4.75-.6-1.44-2.64-2.2-5.6-2.1-2.97.08-5.63.9-7.56 2.2-2.12 1.45-3.08 3.3-2.48 4.75.6 1.44 2.64 2.2 5.6 2.1z m0-5.9c-5.12 2.96-8.27 3.92-9.58 2.92-1.3-1-1.07-4.57 4.05-7.53 5.12-2.96 8.27-3.92 9.58-2.92 1.3 1 1.07 4.57-4.05 7.53z",
    ],
  },
  astro: {
    viewBox: "0 0 24 24",
    path: "M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z", // Simplified star/rocket representation or generic
    // Using generic lightning/rocket for now to ensure visibility if path unavailable, but let's try a closer match
    path: "M18.239 15.42L12 2l-6.239 13.42h12.478z M12 19l-2-2h4l-2 2z",
  },
  html: {
    viewBox: "0 0 24 24",
    path: "M2.27 3h19.46l-1.78 17.65L12 23l-7.95-2.35L2.27 3zm3.17 3l.88 9.3L12 16.9l5.68-1.57.57-6.33H5.44z",
  },
  css: {
    viewBox: "0 0 24 24",
    path: "M2.27 3h19.46l-1.78 17.65L12 23l-7.95-2.35L2.27 3zm3.17 3H19l-.58 6.31-6.42 1.74-6.42-1.74-.28-3.14h2.24l.11 1.25 4.35 1.18 4.35-1.18.3-3.23H5.44z",
  },
  js: {
    viewBox: "0 0 24 24",
    path: "M3 3h18v18H3V3zm13.8 15c1.4 0 2.2-.8 2.2-2.3v-4.4h-2.1v4.3c0 .6-.3.9-.9.9-.4 0-.8-.2-1-.5l-1.3 1.3c.6.9 1.7 1.3 3.1 1.3zm-6.6 0c1.7 0 3-1.1 3-3v-5.7H9.2v5.5c0 .6-.3.9-.9.9-.5 0-.9-.3-1.1-.6l-1.3 1.2c.6 1.1 1.8 1.7 3.3 1.7z",
  },
  tailwind: {
    viewBox: "0 0 24 24",
    path: "M12.5 6.5c1-2.5 3.5-3.5 6-2.5 1 .5 2 1.5 2 3-2.5-1-5-1-6 2.5-1 2.5-3.5 3.5-6 2.5-1-.5-2-1.5-2-3 2.5 1 5 1 6-2.5zm-6 8c1-2.5 3.5-3.5 6-2.5 1 .5 2 1.5 2 3-2.5-1-5-1-6 2.5-1 2.5-3.5 3.5-6 2.5-1-.5-2-1.5-2-3 2.5 1 5 1 6-2.5z",
  },
  node: {
    viewBox: "0 0 24 24",
    path: "M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8v8L12 19.8 5.2 16V8L12 4.2zM11 11h2v6h-2v-6z",
  },
  express: {
    viewBox: "0 0 24 24",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z", // Generic placeholder for Express (text usually)
  },
  mongodb: {
    viewBox: "0 0 24 24",
    path: "M12 2s-4 7-4 11a4 4 0 0 0 4 4 4 4 0 0 0 4-4c0-4-4-11-4-11z", // Simplified leaf
  },
  php: {
    viewBox: "0 0 24 24",
    path: "M12 3C7 3 3 7 3 12s4.48 10 10 10 10-4.48 10-10S17.52 3 12 3zm1 14h-2v-2h2v2zm0-4h-2v-6h2v6z", // Generic PHP placeholder, usually text
  },
  git: {
    viewBox: "0 0 24 24",
    path: "M17 12l-5 5-5-5M12 3v13",
  },
  vercel: {
    viewBox: "0 0 24 24",
    path: "M12 1L24 22H0L12 1z",
  },
  supabase: {
    viewBox: "0 0 24 24",
    path: "M12 2.5L3 14h7v7.5L19 10h-7V2.5z",
  },
  vite: {
    viewBox: "0 0 24 24",
    path: "M2.27 3h19.46l-1.78 17.65L12 23l-7.95-2.35L2.27 3z", // Reuse shield shape for now
  },
};

export default icons;

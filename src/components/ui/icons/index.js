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
    lines: ["M3 12h18", "M3 6h18", "M3 18h18"],
  },
  close: {
    viewBox: "0 0 24 24",
    lines: ["M18 6L6 18", "M6 6l12 12"],
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
    lines: ["M18 6L6 18", "M6 6l12 12"],
  },
};

export default icons;

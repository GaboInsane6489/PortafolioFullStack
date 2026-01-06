import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://portafolio-full-stack-red.vercel.app",

  integrations: [react()], // 👈 solo React, sin @astrojs/tailwind

  vite: {
    ssr: {
      noExternal: ["framer-motion"],
    },
    css: {
      postcss: "./postcss.config.cjs", // 👈 Tailwind v4 se compila vía PostCSS
    },
  },

  output: "static",

  build: {
    inlineStylesheets: "auto",
  },
});

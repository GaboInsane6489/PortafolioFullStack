import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portafolio-full-stack-red.vercel.app",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["framer-motion"],
    },
  },

  output: "static",

  build: {
    inlineStylesheets: "auto",
  },
});

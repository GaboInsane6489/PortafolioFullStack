import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gabriel-g.dev",
  integrations: [react()],
  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: {
            "framer-motion": ["framer-motion"],
          },
        },
      },
    },
  },

  output: "server",

  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },

  compressHTML: true,
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    // Split large chunks so the browser can cache them separately
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "motion-vendor": ["framer-motion"],
          "ui-vendor": ["lucide-react", "react-icons"],
        },
      },
    },
    // Inline tiny assets instead of extra requests
    assetsInlineLimit: 4096,
  },
});


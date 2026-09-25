import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // SINGLE=1 inlines the lazy 3D chunk, for a one-file preview build
  build: process.env.SINGLE ? { rollupOptions: { output: { inlineDynamicImports: true } } } : {},
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});

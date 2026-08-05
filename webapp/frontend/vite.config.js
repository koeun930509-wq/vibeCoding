import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "../..",
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      absWorkingDir: __dirname,
    },
  },
  build: {
    outDir: "webapp/frontend/dist",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});

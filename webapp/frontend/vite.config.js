import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "../..",
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^react\/(.*)$/, replacement: path.resolve(__dirname, "node_modules/react/$1") },
      { find: /^react$/, replacement: path.resolve(__dirname, "node_modules/react") },
      { find: /^react-dom\/(.*)$/, replacement: path.resolve(__dirname, "node_modules/react-dom/$1") },
      { find: /^react-dom$/, replacement: path.resolve(__dirname, "node_modules/react-dom") },
    ],
  },
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

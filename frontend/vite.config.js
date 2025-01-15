global.structuredClone =
  global.structuredClone ||
  ((obj) => JSON.parse(JSON.stringify(obj)));

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

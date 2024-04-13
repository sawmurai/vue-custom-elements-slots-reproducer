import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ customElement: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/main.js"),
      // name: "VueCustomElements",
      // filename: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});

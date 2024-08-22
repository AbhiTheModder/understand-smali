// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { globSync } from "glob";

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: globSync("**/*.html", { ignore: "node_modules/**" }),
    },
  },
});

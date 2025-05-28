import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ui({
      uiPro: {
        pageHeader: {
          slots: {
            headline: "text-black",
            title: "text-white",
            description: "text-white",
          },
        },
        pageSection: {
          slots: {
            container: "sm:py-0 lg:py-0 ",
            description: "text-white",
            label: "text-white",
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

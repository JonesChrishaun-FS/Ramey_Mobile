import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import uiPro from "@nuxt/ui-pro/vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    uiPro({
      uiPro: {
        pageHeader: {
          slots: {
            headline: "text-black",
            title: "text-white",
            description: "text-white",
          },
        },
        header: {
          slots: {
            toggle: "sm:hidden",
            content: "sm:hidden",
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

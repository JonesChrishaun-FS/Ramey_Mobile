import "./assets/main.css";
import ui from "@nuxt/ui/vue-plugin";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router).mount("#app");
app.use(ui);

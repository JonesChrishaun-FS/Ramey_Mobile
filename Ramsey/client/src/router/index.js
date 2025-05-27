import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Parts from "@/pages/Parts.vue";
import Services from "@/pages/Services.vue";
import Deals from "@/pages/Deals.vue";
import Showcase from "@/pages/Showcase.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/parts",
    name: "Parts",
    component: Parts,
  },
  {
    path: "/promos&deals",
    name: "Deals",
    component: Deals,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Showcase,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

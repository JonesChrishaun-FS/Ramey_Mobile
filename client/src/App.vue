<template>
  <div id="app">
    <UApp>
      <UMain>
        <RouterView />
        <Analytics />
      </UMain>
      <AppFooter />
    </UApp>
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import { Analytics } from "@vercel/analytics/next";

export default {
  component: {
    AppFooter,
  },
};
</script>

<style scoped></style>

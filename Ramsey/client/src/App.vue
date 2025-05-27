<template>
  <div id="app">
    <UApp>
      <UMain>
        <RouterView />
      </UMain>
      <AppFooter />
    </UApp>
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
export default {
  component: {
    AppFooter,
  },
};
</script>

<style scoped></style>

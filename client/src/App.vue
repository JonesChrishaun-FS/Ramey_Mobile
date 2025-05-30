<template>
  <div id="app">
    <UApp>
      <Analytics mode="production" debug="true" />
      <RouterView />
      <AppFooter />
    </UApp>
  </div>
</template>

<script setup>
import { Analytics } from "@vercel/analytics/vue";
</script>

<style scoped></style>

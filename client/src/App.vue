<template>
  <div id="app">
    <UApp>
      <SpeedInsights />
      <Analytics mode="production" debug="true" />
      <RouterView />
      <AppFooter />
    </UApp>
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";
import { Analytics } from "@vercel/analytics/vue";
</script>

<style scoped></style>

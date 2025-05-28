<template>
  <div id="app">
    <UApp>
      <Analytics mode="production" />
      <Analytics debug="true" />
      <RouterView />
      <AppFooter />
    </UApp>
  </div>
</template>

<script>
import { Analytics } from "@vercel/analytics/vue";
</script>

<style scoped></style>

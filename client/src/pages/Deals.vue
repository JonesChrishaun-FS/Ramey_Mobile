<script setup lang="ts">
import ServicePromos from "@/components/ServicePromos.vue";
</script>

<template>
  <AppHeader />
  <!-- Header Section -->
  <header class="text-white py-16 px-6">
    <div class="pl-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 pb-5">Promotions</h1>
      <p class="text-xl text-gray-100 max-w-xl">
        Take advantage of our limited-time offers and keep your vehicle in top
        condition. Subscribe! To be notified of our seasonal deals!
      </p>
    </div>
    <SubscribeButton class="pt-5 pl-10" />
  </header>

  <ServicePromos />
</template>

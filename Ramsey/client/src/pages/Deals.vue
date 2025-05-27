<script setup lang="ts">
import ServicePromos from "@/components/ServicePromos.vue";
</script>

<template>
  <UPage>
    <AppHeader />
    <UPageHeader
      title="Promotions"
      description=" Take advantage of our limited-time offers and keep your vehicle in top
          condition. Subscribe! To be notified of our seasonal deals!"
      class="p-15"
    >
      <SubscribeButton class="pt-5" />
    </UPageHeader>
    <ServicePromos />
  </UPage>
</template>

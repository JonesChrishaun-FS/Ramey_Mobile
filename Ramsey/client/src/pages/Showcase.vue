<script setup>
import Projects from "@/components/Projects.vue";

const links = [
  {
    label: "Youtube",
    icon: "typcn:social-youtube",
    to: "https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHeader.vue",
    target: "_blank",
  },
];
</script>

<template>
  <UPage>
    <AppHeader />
    <Projects />
  </UPage>
</template>

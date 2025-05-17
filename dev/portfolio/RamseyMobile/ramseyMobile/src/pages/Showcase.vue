<script setup>
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
    <UPageHeader
      title="Our Projects"
      description="A responsive page header with
    title, description and actions."
      :links="links"
    />
  </UPage>
</template>

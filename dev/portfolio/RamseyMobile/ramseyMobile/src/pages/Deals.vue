<template>
  <UPage>
    <AppHeader />
    <UPageHeader
      title="Promotions"
      description="A responsive page header with title, description and actions."
      headline="Coming Soon"
    >
      <SubscribeButton class="pt-5" />
    </UPageHeader>
    <UPageGrid class="pt-5">
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card">
      </UPageCard>
    </UPageGrid>
  </UPage>
</template>

<script setup>
const cards = [
  {
    title: "Theme",
    description:
      "Learn how to customize Nuxt UI components using Tailwind CSS v4.",
    class: "lg:col-span-2 ",
    orientation: "horizontal",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
  },
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    class: "lg:col-span-2",
    orientation: "horizontal",
    reverse: true,
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
  },
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    class: "lg:col-span-2",
    orientation: "horizontal",
    reverse: true,
  },
  {
    title: "Theme",
    description:
      "Learn how to customize Nuxt UI components using Tailwind CSS v4.",
    icon: "i-lucide-swatch-book",
    class: "lg:col-span-1",
    orientation: "horizontal",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
  },
];
</script>

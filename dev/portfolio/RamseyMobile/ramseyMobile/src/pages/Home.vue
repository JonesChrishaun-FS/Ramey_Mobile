<script setup>
const posts = [
  {
    title: "Services",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    to: "/services",
  },
  {
    title: "Parts & Trade",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    to: "/parts",
  },
  {
    title: "Our Promos",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    to: "/promos&deals",
  },
  {
    title: "Our Projects",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    to: "/projects",
  },
];
</script>

<template>
  <UPage>
    <h1>Ramsey's Mobile</h1>
    <h1>Affordable Services, LLC</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel laoreet
      lacus. Nullam nec dolor eget ex mollis laoreet. Pellentesque porttitor
      sollicitudin eros, sed auctor arcu lobortis in. Vivamus fringilla rutrum
      elit quis accumsan. Proin a velit in arcu porttitor pellentesque id vel
      justo. Donec justo mi, imperdiet at hendrerit non, vehicula eu ligula.
      Aenean elementum velit volutpat est malesuada vulputate. Quisque ex orci,
      bibendum eu feugiat non, rhoncus at velit. Quisque egestas, eros ut
      dignissim volutpat, nibh ipsum ultrices velit, ac consequat mi tellus eget
      purus. Pellentesque in arcu malesuada, ultrices orci sit amet, tempor
      nisl. Donec convallis condimentum ligula. Nulla convallis scelerisque
      consequat. Morbi quis quam convallis, porta erat ac, egestas diam. Integer
      semper fermentum metus vitae blandit.
    </p>

    <UBlogPosts :posts="posts" class="pt-10 lg:grid-cols-4" />
  </UPage>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 4.063rem;
}
p {
  font-size: 1.125rem;
}
</style>

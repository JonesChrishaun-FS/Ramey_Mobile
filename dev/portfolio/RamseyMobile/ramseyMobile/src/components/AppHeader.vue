<script>
import Logo from "./Logo.vue";

export default {
  name: "AppHeader",
};
</script>
<template>
  <UHeader class="bg-transparent backdrop-blur-xs border-none h-60">
    <template #title><Logo class="h-35" alt="Go Back Home" /></template>
    <template #right>
      <nav class="flex hover:max-w-full transition-all duration-500 h-1">
        <router-link to="/services">Services</router-link>
        <router-link to="/parts">Parts & Trade</router-link>
        <router-link to="/promos&deals">Promos</router-link>
        <router-link to="/projects">Projects</router-link>
      </nav>
    </template>
  </UHeader>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  color: #103afa;
  justify-content: flex-end;
}
</style>

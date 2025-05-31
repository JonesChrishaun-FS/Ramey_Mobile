<template>
  <div class="sidebar-container">
    <!-- Mobile sidebar toggle -->
    <button
      @click="isOpen = !isOpen"
      class="lg:invisible fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-md"
      aria-label="Toggle sidebar"
    >
      <MenuIcon v-if="!isOpen" class="h-6 w-6" />
      <XIcon v-else class="h-6 w-6" />
    </button>

    <aside
      :class="[
        'fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out z-40 lg:invisible ',
        isOpen
          ? 'w-64 translate-x-0'
          : 'w-64 -translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="p-4 border-b border-gray-800">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="p-4">
            <Logo class="h-35" alt="Go Back Home" />
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="mt-6">
        <ul class="space-y-2">
          <!-- Services Section -->
          <li
            class="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <div class="flex items-center">
              <a
                href="/services"
                class="block py-2 px-4 hover:bg-gray-600 rounded transition-colors flex items-center"
                ><WrenchIcon class="h-5 w-5 mr-3" /> <span>Services</span></a
              >
            </div>
          </li>

          <!-- Parts & Trade Section -->
          <li>
            <button
              @click="toggleSection('parts')"
              class="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              <div class="flex items-center">
                <CogIcon class="h-5 w-5 mr-3" />
                <span>Parts & Trade</span>
              </div>
              <ChevronDownIcon
                :class="[
                  'h-4 w-8 transition-transform',
                  openSections.parts ? 'rotate-180' : '',
                ]"
              />
            </button>
            <ul
              v-if="openSections.parts"
              class="bg-gray-700 py-2 px-4 space-y-1"
            >
              <li v-for="(part, index) in parts" :key="index">
                <a
                  href="/parts"
                  class="block py-2 px-4 hover:bg-gray-600 rounded transition-colors"
                >
                  {{ part }}
                </a>
              </li>
            </ul>
          </li>

          <!-- Promos Section -->
          <li>
            <button
              @click="toggleSection('promos')"
              class="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              <div class="flex items-center">
                <TagIcon class="h-5 w-6 mr-3" />
                <span>Promos</span>
              </div>
              <ChevronDownIcon
                :class="[
                  'h-4 w-8 transition-transform',
                  openSections.promos ? 'rotate-180' : '',
                ]"
              />
            </button>
            <ul
              v-if="openSections.promos"
              class="bg-gray-700 py-2 px-4 space-y-1"
            >
              <li v-for="(promo, index) in promos" :key="index">
                <a
                  href="/promos&deals"
                  class="block py-2 px-4 hover:bg-gray-600 rounded transition-colors"
                >
                  {{ promo }}
                </a>
              </li>
            </ul>
          </li>

          <!-- Projects Section -->
          <li
            class="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <div class="flex items-center">
              <a
                href="/projects"
                class="block py-2 px-4 hover:bg-gray-600 rounded transition-colors flex items-center"
              >
                <ClipboardIcon class="h-5 w-5 mr-3" />
                <span>Projects</span></a
              >
            </div>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="bottom-0 w-full p-4 pr-4 border-t border-gray-700">
        <ContactPopUp />
      </div>
    </aside>

    <!-- Header for Web -->
    <header
      class="bg-white/20 backdrop-blur-xl pt-15 h-50 hidden lg:block mt-10 pl-5"
    >
      <div class="px-4">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <Logo class="h-35" alt="Go Back Home" />
            </a>
          </div>

          <nav class="hidden lg:flex pr-5">
            <ul class="flex gap-5">
              <li v-for="(item, index) in navItems" :key="index">
                <a
                  :href="item.url"
                  class="text-blue-700 font-medium transition-colors flex hover:max-w-full transition-all duration-500 h-1"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Mobile Header -->
    <header class="lg:hidden pt-20">
      <div class="container mx-auto px-4 pl-8">
        <div class="flex items-center justify-between h-16">
          <a href="/" class="flex items-center">
            <Logo class="h-35" alt="Go Home" aria-label="Go Home" />
          </a>
        </div>
      </div>
    </header>
  </div>

  <BackTopBTN />
</template>

<script setup>
import { ref, reactive } from "vue";
import BackTopBTN from "./BackTopBTN.vue";
import {
  Menu as MenuIcon,
  X as XIcon,
  ChevronDown as ChevronDownIcon,
  Wrench as WrenchIcon,
  Settings as SettingsIcon,
  Tag as TagIcon,
  Cog as CogIcon,
  Clipboard as ClipboardIcon,
} from "lucide-vue-next";
import ContactPopUp from "./ContactPopUp.vue";

const navItems = [
  {
    title: "Services",
    url: "/services",
    icon: SettingsIcon,
  },
  {
    title: "Parts & Trade",
    url: "/parts",
    icon: CogIcon,
  },
  {
    title: "Promotions",
    url: "/promos&deals",
    icon: TagIcon,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: ClipboardIcon,
  },
];

// Mobile sidebar state
const isOpen = ref(false);

// Section toggle state
const openSections = reactive({
  services: true,
  parts: false,
  promos: false,
  projects: false,
});

// Toggle section visibility
const toggleSection = (section) => {
  openSections[section] = !openSections[section];
};

// Sample data for each section
const parts = ["Engine Parts", "Brake Systems", "Filters", "Trade-In Services"];

const promos = [
  "Spring Special",
  "New Customer Discount",
  "Seasonal Maintenance",
];
</script>

<style scoped>
.sidebar-container {
  /* This ensures the sidebar container doesn't affect layout */
  position: relative;
  z-index: 40;
}

nav {
  display: flex;
  gap: 10px;
}

@media (min-width: 600px) {
  span {
    color: white;
  }
}
</style>

<script setup>
import {
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Clock as ClockIcon,
  ArrowRightIcon,
  WrenchIcon,
  XIcon,
} from "lucide-vue-next";
import { ref, computed } from "vue";
import BMW from "@/images/BMW.jpg";
import Chevelle from "@/images/Chevelle.jpg";
import Jeep from "@/images/Jeep.jpg";
import Mustang from "@/images/Mustang.jpg";

// Filter categories
const filters = [
  { id: "restoration", name: "Restorations" },
  { id: "repair", name: "Repairs" },
  { id: "custom", name: "Custom Builds" },
];

// Active filter state
const activeFilter = ref("all");

// Sample project data
const projects = ref([
  {
    id: 1,
    title: "1967 Mustang Restoration",
    category: "Restoration",
    description:
      "Complete restoration of a classic 1967 Ford Mustang, bringing it back to its original glory.",
    fullDescription:
      "This 1967 Ford Mustang came to us in poor condition after sitting in a barn for over 20 years. We completely disassembled the vehicle, addressed significant rust issues, rebuilt the engine, and restored the interior to factory specifications. Every detail was meticulously addressed to ensure authenticity while adding modern reliability upgrades where appropriate.",
    features: [
      "Complete engine rebuild",
      "Custom interior restoration with period-correct materials",
      "Chassis reinforcement and suspension upgrades",
      "Factory-matching paint with modern clear coat protection",
    ],
    image: Mustang,
    completionTime: "8 months",
    client: "John D.",
  },
  {
    id: 2,
    title: "BMW M3 Engine Rebuild",
    category: "Repair",
    description:
      "Comprehensive engine rebuild for a BMW M3 with performance upgrades and tuning.",
    fullDescription:
      "The client brought in their BMW M3 with significant engine issues. We performed a complete teardown and rebuild with upgraded internals, a larger turbocharger, and custom ECU tuning. The result was a reliable daily driver with significantly improved performance over stock specifications.",
    features: [
      "Forged internals installation",
      "Upgraded turbocharger",
      "Custom ECU mapping",
      "Reinforced cooling system",
    ],
    image: BMW,
    completionTime: "6 weeks",
    client: "Michael T.",
  },
  {
    id: 3,
    title: "Custom Off-Road Jeep Build",
    category: "Custom",
    description:
      "Built a fully customized off-road capable Jeep Wrangler with specialized equipment and modifications.",
    fullDescription:
      "This project involved transforming a stock Jeep Wrangler into an extreme off-road vehicle. We installed a 4-inch lift kit, 37-inch all-terrain tires, custom bumpers with winch, rock sliders, and a complete interior overhaul with specialized equipment for extended off-grid adventures.",
    features: [
      "4-inch suspension lift",
      "Custom front and rear bumpers with integrated recovery points",
      "Onboard air compressor system",
      "Reinforced drivetrain components",
      "Custom electrical system with dual batteries",
    ],
    image: Jeep,
    completionTime: "3 months",
    client: "Sarah K.",
  },

  {
    id: 5,
    title: "Classic Chevelle SS Restoration",
    category: "Restoration",
    description:
      "Frame-off restoration of a 1970 Chevelle SS with modern performance upgrades.",
    fullDescription:
      "This complete frame-off restoration brought a neglected 1970 Chevelle SS back to life with a modern twist. While maintaining the classic appearance, we integrated modern suspension components, disc brakes, and a fuel-injected crate engine for improved reliability and performance.",
    features: [
      "Frame-off restoration",
      "Modern LS engine swap with fuel injection",
      "Upgraded suspension and braking systems",
      "Modern climate control system integration",
    ],
    image: Chevelle,
    completionTime: "10 months",
    client: "Thomas W.",
  },
]);

// Computed property for filtered projects
const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category.toLowerCase() === activeFilter.value
  );
});

// Selected project for modal
const selectedProject = ref(null);

// Function to open project details modal
const openProjectDetails = (project) => {
  selectedProject.value = project;
};
</script>

<template>
  <div>
    <!-- Header Section -->
    <header class="text-white py-16 px-6">
      <div class="lg:pl-10 sm:pl-2">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Auto Projects</h1>
        <p class="text-xl text-gray-100 max-w-2xl">
          Explore our portfolio of custom auto repairs, restorations, and
          modifications completed by our expert team.
        </p>
      </div>
    </header>

    <!-- Filter Section -->
    <div class="bg-gray-800 sticky top-0 z-10 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex flex-wrap items-center gap-3">
          <span class="text-sm font-medium text-gray-100">Filter by:</span>
          <button
            @click="activeFilter = 'all'"
            class="px-4 py-2 text-sm rounded-full transition-colors"
            :class="
              activeFilter === 'all'
                ? 'bg-orange-400 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            "
          >
            All Projects
          </button>
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            class="px-4 py-2 text-sm rounded-full transition-colors"
            :class="
              activeFilter === filter.id
                ? 'bg-orange-400  text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            "
          >
            {{ filter.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <main class="px-6 py-12">
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <WrenchIcon class="h-16 w-16 mx-auto text-gray-400" />
        <h3 class="mt-4 text-lg font-medium text-gray-900">
          No projects found
        </h3>
        <p class="mt-2 text-gray-500">Try changing your filter selection.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="relative pb-[56.25%]">
            <img
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-gray-900">
                {{ project.title }}
              </h3>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {{ project.category }}
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <ClockIcon class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-sm text-gray-500">{{
                  project.completionTime
                }}</span>
              </div>
              <button
                @click="openProjectDetails(project)"
                class="text-sm font-medium text-black hover:text-gray-700 flex items-center"
              >
                View Details
                <ArrowRightIcon class="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Project Details Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div
        class="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold text-gray-900">
              {{ selectedProject.title }}
            </h2>
            <button
              @click="selectedProject = null"
              class="text-gray-500 hover:text-gray-700"
            >
              <XIcon class="h-6 w-6" />
            </button>
          </div>
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full h-auto rounded-lg mb-6 pb-10"
          />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="bg-blue-600 p-4 rounded-lg">
              <p class="text-sm text-orange-400 mb-1">Category</p>
              <p class="font-medium">{{ selectedProject.category }}</p>
            </div>
            <div class="bg-blue-600 p-4 rounded-lg">
              <p class="text-sm text-orange-400 mb-1">Completion Time</p>
              <p class="font-medium">{{ selectedProject.completionTime }}</p>
            </div>
            <div class="bg-blue-600 p-4 rounded-lg">
              <p class="text-sm text-orange-400 mb-1">Client</p>
              <p class="font-medium">{{ selectedProject.client }}</p>
            </div>
          </div>
          <div>
            <h3 class="text-lg text-orange-400 font-medium mb-2">
              Project Details
            </h3>
            <p class="text-gray-100 mb-8">
              {{ selectedProject.fullDescription }}
            </p>
            <div
              v-if="
                selectedProject.features && selectedProject.features.length > 0
              "
            >
              <h3 class="text-lg text-orange-400 font-medium mb-2">Features</h3>
              <ul class="list-disc pl-5 space-y-1">
                <li
                  v-for="(feature, index) in selectedProject.features"
                  :key="index"
                  class="text-gray-100"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Section -->
  <section id="contact" class="py-20 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p class="mt-4 text-xl text-gray-800">
          Have questions? We're here to help!
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-2 gap-10">
        <div class="h-96 lg:h-auto relative" ref="mapContainer">
          <!-- Map will be rendered here -->
          <div
            v-if="!mapLoaded"
            class="absolute inset-0 flex items-center justify-center bg-gray-100"
          >
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
            ></div>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <div class="flex items-start">
              <MapPinIcon class="h-6 w-6 text-red-500 mr-4 mt-1" />
            </div>
            <h3 class="text-lg font-medium text-blue-800 mb-3">Our Location</h3>
            <p class="text-gray-800">1110 Freedom Drive</p>
            <p class="text-gray-800">Statesville, NC 28652</p>
          </div>
          <div>
            <div class="flex items-start">
              <ClockIcon class="h-6 w-6 text-red-500 mr-3 mt-1" />
            </div>
            <h3 class="text-lg font-medium text-blue-800 mb-3">
              Business Hours
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-800">Sunday</span>
                <span class="text-gray-800">9:00 AM - 1:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-800">Monday</span>
                <span class="text-gray-800">9:00 AM - 5:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-800">Wednesday - Friday</span>
                <span class="text-gray-800">9:00 AM - 5:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-800">Tuesday & Sunday</span>
                <span class="text-gray-800">Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-blue-800 mb-3">
              Contact Information
            </h3>
            <div class="space-y-3 pt-2">
              <div class="flex items-center">
                <PhoneIcon class="h-6 w-6 text-red-500 mr-3 mt-1" />
                <span class="text-gray-800">(980) 223-2781</span>
              </div>
              <div class="flex items-center">
                <MailIcon class="h-6 w-6 text-red-500 mr-3 mt-1" />
                <span class="text-gray-800">info@autofixpro.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

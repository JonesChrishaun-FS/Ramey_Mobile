<script setup>
import { Wrench, Settings, Tag, Hammer, Clock, Phone } from "lucide-vue-next";
import AirFilter from "@/images/air-filter.png";
import OilFilter from "@/images/oil-filter.png";
import BrakePads from "@/images/brake-disc.png";
import Mustang from "@/images/Ford Mustang.jpg";
import Subaru from "@/images/Subaru.jpeg";
import ContactPopUp from "./ContactPopUp.vue";

// Sample data for services
const services = [
  {
    title: "Engine Diagnostics & Repair",
    description:
      "Complete engine diagnostics and repair services using state-of-the-art equipment.",
  },
  {
    title: "Brake System Service",
    description:
      "Inspection and repair of brake pads, rotors, calipers, and hydraulic systems.",
  },
  {
    title: "Transmission Service",
    description:
      "Automatic and manual transmission repair, fluid changes, and clutch replacement.",
  },
  {
    title: "Oil Changes & Fluid Services",
    description:
      "Regular maintenance including oil changes, fluid top-offs, and filter replacements.",
  },
];

// Sample data for parts
const parts = [
  {
    name: "Premium Brake Pads",
    description: "High-performance ceramic brake pads for all vehicle types",
    price: "89.99",
    image: BrakePads,
  },
  {
    name: "Oil Filter Bundle",
    description: "Set of 3 premium oil filters with extended life",
    price: "29.99",
    image: OilFilter,
  },
  {
    name: "Performance Air Filters",
    description: "Increased airflow for better engine performance",
    price: "49.99",
    image: AirFilter,
  },
];

// Sample data for promotions
const promotions = [
  {
    title: "Spring Maintenance Special",
    description:
      "Complete vehicle inspection, oil change, and tire rotation package",
    discount: "Save 20%",
  },
  {
    title: "Brake Service Discount",
    description: "Get a free brake inspection and 15% off any brake service",
    discount: "Save 15%",
  },
  {
    title: "Referral Reward",
    description: "Refer a friend and both receive $50 off your next service",
    discount: "$50 Off",
  },
];

// Sample data for projects
const projects = [
  {
    title: "Classic Mustang Restoration",
    description:
      "Complete restoration of a 1967 Ford Mustang, including engine rebuild and custom paint job.",
    image: Mustang,
    duration: "3 months",
  },

  {
    title: "Performance Upgrade Package",
    description:
      "Installed performance parts including turbocharger, intercooler, and ECU tuning on a Subaru WRX.",
    image: Subaru,
    duration: "2 weeks",
  },
];
</script>
<script>
export default {
  name: "BlogPost",
  methods: {
    autoService() {
      this.$router.push("/services");
    },
  },
};
</script>

<template>
  <div class="p-8">
    <!-- Main Content -->

    <article class="rounded-lg w-full">
      <!-- Blog Post Content -->
      <div class="pt-5">
        <!-- Services Section -->
        <section class="mb-12">
          <div class="flex items-center mb-4">
            <Wrench class="h-8 w-8 text-red-600 mr-3" />
            <h2 class="text-5xl font-bold text-gray-800 pr-5 pl-2">
              Our Services
            </h2>
            <!-- Add this button -->
            <router-link
              to="/services"
              class="inline-flex px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              See Our Services
            </router-link>
          </div>
          <div class="border-l-4 border-red-500 pl-4 mb-6">
            <p class="text-white">
              Automotive repair and maintenance services to keep your vehicle
              running at its best.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 class="font-semibold text-2xl text-red-600 mb-2">
                {{ service.title }}
              </h4>
              <p class="text-gray-50 text-sm">{{ service.description }}</p>
            </div>
          </div>
        </section>

        <!-- Parts & Trade Section -->
        <section class="mb-12">
          <div class="flex items-center mb-4">
            <Settings class="h-8 w-8 text-blue-600 mr-3" />
            <h2 class="text-5xl font-bold text-gray-800 pr-5 pl-2">
              Parts & Trade
            </h2>
            <!-- Add this button -->

            <router-link
              to="/parts"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Browse Our Parts
            </router-link>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 mb-6">
            <p class="text-white">
              Affordable quality parts and components with trade options
              available.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="(part, index) in parts"
              :key="index"
              class="bg-gray-800 p-4 rounded-lg text-center"
            >
              <img
                :src="part.image"
                :alt="part.name"
                class="h-32 w-full object-contain mb-3 backdrop-grayscale-50"
              />
              <h4 class="font-semibold text-blue-400">{{ part.name }}</h4>
              <p class="text-gray-200 text-sm mb-2">{{ part.description }}</p>
              <span class="text-blue-200 font-bold">${{ part.price }}</span>
            </div>
          </div>
        </section>

        <!-- Promotions Section -->
        <section class="mb-12">
          <div class="flex items-center mb-4">
            <Tag class="h-8 w-8 text-green-600 mr-3" />
            <h2 class="text-5xl font-bold text-gray-800 pr-5 pl-2">
              Current Promotions
            </h2>
            <!-- Add this button -->
            <router-link
              to="/promos&deals"
              class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Our Promotions
            </router-link>
          </div>
          <div class="border-l-4 border-green-500 pl-4 mb-6">
            <p class="text-wite">
              Special offers and discounts to help you save on your automotive
              needs.
            </p>
          </div>
          <div class="space-y-4">
            <div
              v-for="(promo, index) in promotions"
              :key="index"
              class="border border-green-200 bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h4 class="font-semibold text-green-200 mb-1">
                  {{ promo.title }}
                </h4>
                <p class="text-gray-200 text-sm">{{ promo.description }}</p>
              </div>
              <div class="mt-3 md:mt-0">
                <span
                  class="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold"
                >
                  {{ promo.discount }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section class="mb-6 pt-5">
          <div class="flex items-center mb-4">
            <Hammer class="h-8 w-8 text-purple-600 mr-3" />
            <h2 class="text-5xl font-bold text-gray-800 pr-5 pl-2">
              Recent Projects
            </h2>
            <!-- Add this button -->
            <router-link
              to="/projects"
              class="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Our Projects
            </router-link>
          </div>
          <div class="border-l-4 border-purple-500 pl-4 mb-6">
            <p class="text-white">
              Check out some of our recent automotive restoration and repair
              projects.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="bg-gray-800 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h4 class="font-semibold text-purple-400 mb-2">
                  {{ project.title }}
                </h4>
                <p class="text-gray-200 text-sm mb-3">
                  {{ project.description }}
                </p>
                <div class="flex items-center text-sm text-gray-100">
                  <Clock class="h-4 w-4 mr-1 pr-1" />
                  <span>{{ project.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
  <!-- Call to Action -->
  <div class="bg-gray-800 p-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-white">
          Ready to schedule a service?
        </h3>
        <p class="text-blue-100 mt-1">
          Contact us today for an appointment or consultation.
        </p>
      </div>
      <ContactPopUp />
    </div>
  </div>
</template>
<style>
div {
  margin-bottom: 15px;
}
h2 {
  color: azure;
  font-weight: 800;
}
</style>

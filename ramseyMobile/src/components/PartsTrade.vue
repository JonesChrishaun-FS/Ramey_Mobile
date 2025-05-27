<script setup>
import { ref } from "vue";
import { Menu, ChevronRight, CheckCircle } from "lucide-vue-next";
import Brakes from "@/images/Brakes.jpg";

// Mobile menu state
const mobileMenuOpen = ref(false);

// Parts categories
const partCategories = ref([
  {
    name: "Engine Parts",
    description: "Quality engine components for all vehicle makes and models.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brake Systems",
    description: "Reliable brake pads, rotors, and hydraulic components.",
    image: Brakes,
  },
  {
    name: "Electrical",
    description: "Starters, alternators, and complete wiring solutions.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Body Parts",
    description: "Exterior components and body panels for repairs.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]);

// Trade-in benefits
const tradeInBenefits = ref([
  "Fair market value for your used parts",
  "Instant store credit for future purchases",
  "Environmentally responsible recycling",
  "Free evaluation of your parts",
  "We accept parts from all vehicle makes and models",
]);

// Trade-in form
const tradeInForm = ref({
  name: "",
  email: "",
  phone: "",
  partType: "",
  description: "",
});

// Form submission methods
const submitTradeInForm = () => {
  alert(
    `Thank you, ${tradeInForm.value.name}! We'll evaluate your ${tradeInForm.value.partType} and get back to you shortly.`
  );
  // Reset form
  tradeInForm.value = {
    name: "",
    email: "",
    phone: "",
    partType: "",
    description: "",
  };
};
</script>
<script>
export default {
  name: "PartsTrade",
};
</script>
<template>
  <div>
    <!-- Header -->
    <header>
      <div class="container mx-auto px-4 py-4">
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2">
          <nav class="flex flex-col space-y-3">
            <a
              href="#parts"
              class="text-gray-700 hover:text-red-600 font-medium"
              >Parts</a
            >
            <a
              href="#trade-in"
              class="text-gray-700 hover:text-red-600 font-medium"
              >Trade-In</a
            >

            <a href="#" class="text-gray-700 hover:text-red-600 font-medium"
              >Contact</a
            >
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 pl-5"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Quality Auto Parts & Fair Trade-In Deals
            </h1>
            <p class="text-lg mb-6 text-gray-300 pt-5">
              Find the perfect parts for your vehicle or trade in your old parts
              for store credit.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 gap-4 pt-4"
            >
              <button
                class="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                <a href="#parts" class="text-white hover:text-white font-medium"
                  >Parts</a
                >
              </button>
              <button
                class="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                <a
                  href="#trade-in"
                  class="text-white hover:text-white font-medium"
                  >Trade-In Now</a
                >
              </button>
              <button
                class="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                <a href="#" class="text-white hover:text-white font-medium"
                  >Contact Us</a
                >
              </button>
            </div>
          </div>
          <div class="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Auto Parts"
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Parts Categories -->
    <section id="parts" class="py-16">
      <div class="flex flex-col mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Browse Parts</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          <div
            v-for="(category, index) in partCategories"
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div class="h-48 overflow-hidden">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ category.name }}</h3>
              <p class="text-gray-600 mb-4">{{ category.description }}</p>
              <button
                class="flex items-center text-blue-500 hover:text-red-700 font-medium"
              >
                <span>Browse {{ category.name }}</span>
                <ChevronRight class="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trade-In Section -->
    <section id="trade-in" class="py-16 p-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-3xl font-bold mb-4">Trade In Your Used Parts</h2>
            <p class="text-lg text-blue-50 mb-6 pb-6">
              Get store credit for your used auto parts. We accept a wide range
              of components in good working condition.
            </p>
            <ul class="space-y-3 mb-6">
              <li
                v-for="(item, index) in tradeInBenefits"
                :key="index"
                class="flex items-start"
              >
                <CheckCircle
                  class="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="md:w-1/2 p-6 rounded-lg shadow-md bg-white">
            <h3 class="text-xl text-blue-600 font-semibold mb-4 pb-4">
              Request a Trade-In Quote
            </h3>
            <form @submit.prevent="submitTradeInForm" class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="tradeInForm.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="tradeInForm.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="tradeInForm.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  for="part-type"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Part Type</label
                >
                <select
                  id="part-type"
                  v-model="tradeInForm.partType"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select Part Type</option>
                  <option
                    v-for="(category, index) in partCategories"
                    :key="index"
                    :value="category.name"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div>
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Part Description</label
                >
                <textarea
                  id="description"
                  v-model="tradeInForm.description"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
a:hover {
  background-color: "none";
}
</style>

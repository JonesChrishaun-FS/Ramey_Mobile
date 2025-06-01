<script>
export default {
  name: "AutoService",
};
</script>
<template>
  <div class="auto-repair-container p-6">
    <div class="flex flex-col sm:flex justify-between mb-6 gap-4">
      <h1 class="text-3xl font-bold">Our Services</h1>
      <p class="text-4xl pb-3 sm:text-gray-100">
        CALL OR FILL OUT CONTACT FORM FOR SERVICES & PRICING THESE ARE ESTIMATED
        COSTS DEPENDS ON TYPE OF VEHICLE. OFFER NOTARY SERVICES!!!
      </p>
    </div>

    <!-- Filter Controls -->
    <div class="mb-6 text-white flex flex-col sm:flex-row gap-4 pb-5">
      <div class="flex-1">
        <input
          id="search"
          v-model="searchQuery"
          type="text"
          placeholder="Search services..."
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div class="flex gap-2">
        <select
          v-model="selectedCategory"
          class="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <button
          @click="sortByPrice"
          class="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <span class="text-white">Price</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="{ 'rotate-180': sortDirection === 'desc' }"
          >
            <path d="m6 9 6-6 6 6" />
            <path d="m6 15 6 6 6-6" />
          </svg>
        </button>
        <button
          @click="openContactModal()"
          class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium"
        >
          <Phone class="h-4 w-4 mr-2 pr-1" />
          Contact Us
        </button>
      </div>
    </div>

    <!-- Services List -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 class="text-xl">DIAGNOSTIC SERVICE: $85-$125</h2>
        <p class="text-gray-200 text-lg pb-6">
          ** Depends on amount of manual labor involved to complete diagnosis
          From a simple scan &amp; inspection to actual parts removal &amp;
          inspection
        </p>
        <h2>
          ADDITIONAL LABOR &amp; AFTER 5PM
          <p>$55/HOUR</p>
          <br />
          TRAVEL FEE OUTSIDE IREDELL COUNTY
          <p>$20</p>
          <br />
          TOWING SERVICES : <br />
          <p>$80.06(IREDELL) || $90.74 || $100-$175 || $200&amp;Up</p>
        </h2>
      </div>
      <div
        v-for="service in filteredServices"
        :key="service.id"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-gray-600"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold text-gray-800">
              {{ service.name }}
            </h3>
            <span
              class="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mt-2"
            >
              {{ service.category }}
            </span>
          </div>
          <div class="text-xl font-bold text-primary">
            ${{ service.price.toFixed(2) }}
          </div>
        </div>
        <p class="mt-3 text-gray-600">{{ service.description }}</p>
        <div class="mt-4">
          <span class="text-sm text-gray-500">
            <span v-if="service.estimatedTime"
              >Est. Time: {{ service.estimatedTime }}</span
            >
          </span>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredServices.length === 0" class="text-center py-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mx-auto text-gray-400 mb-4"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <h3 class="text-xl font-medium text-gray-700">No services found</h3>
      <p class="text-gray-500 mt-2">
        Try adjusting your search or filter criteria
      </p>
    </div>

    <!-- Contact Modal -->
    <div
      v-if="showContactModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 border-gray-500"
      @click.self="closeContactModal"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-gray-500 bg-blue-950">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold text-gray-800">Contact Us</h2>
            <button
              @click="closeContactModal"
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div v-if="!contactSubmitted" class="p-6">
          <p class="text-gray-600 mb-6 pb-3">
            Have questions about our services or want to schedule an
            appointment? Fill out the form below and our team will get back to
            you as soon as possible.
          </p>

          <form @submit.prevent="submitContactForm">
            <!-- Contact Information -->
            <div class="mb-6 pb-5">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">
                Contact Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    for="fullName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Full Name *</label
                  >
                  <input
                    id="fullName"
                    v-model="contactForm.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                  <p v-if="errors.fullName" class="mt-1 text-sm text-red-600">
                    {{ errors.fullName }}
                  </p>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Phone Number *</label
                  >
                  <input
                    id="phone"
                    v-model="contactForm.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
                    {{ errors.phone }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Appointment Details -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">
                Preferred Appointment
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Preferred Date *</label
                  >
                  <input
                    id="date"
                    v-model="contactForm.date"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    for="time"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Preferred Time *</label
                  >
                  <select
                    id="time"
                    v-model="contactForm.time"
                    required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="" disabled selected>Select a time</option>
                    <option
                      v-for="time in availableTimes"
                      :key="time"
                      :value="time"
                    >
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Vehicle Information -->
            <div class="bg-gray-100 rounded-lg mb-6 p-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">
                Vehicle Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    for="make"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Make *</label
                  >
                  <input
                    id="make"
                    v-model="contactForm.make"
                    type="text"
                    required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <label
                    for="model"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Model *</label
                  >
                  <input
                    id="model"
                    v-model="contactForm.model"
                    type="text"
                    required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Camry"
                  />
                </div>
                <div>
                  <label
                    for="year"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Year *
                  </label>
                  <input
                    id="year"
                    v-model="contactForm.year"
                    type="number"
                    required
                    min="1900"
                    :max="currentYear"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="2020"
                  />
                </div>
              </div>
            </div>

            <!-- Message -->
            <div class="mb-6">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Message *</label
              >
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="4"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please describe what service you need or any questions you have..."
              ></textarea>
            </div>

            <div class="flex justify-end gap-3">
              <button
                type="button"
                @click="closeContactModal"
                class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">
                  <svg
                    class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
                <span v-else>Submit</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Confirmation -->
        <div v-else class="p-6">
          <div class="text-center">
            <div
              v-if="showSuccess"
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-green-600"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p class="text-gray-600 mb-6">
              We've received your request and will contact you shortly at
              {{ contactForm.phone }}.
            </p>

            <div class="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h4 class="font-semibold text-gray-800 mb-2 pb-5">
                Your Appointment Request
              </h4>
              <div class="grid gap-2 text-sm">
                <div>
                  <span class="text-gray-600">Date:</span>
                  <span class="font-medium ml-1 text-gray-800">{{
                    formatDate(contactForm.date)
                  }}</span>
                </div>
                <div>
                  <span class="text-gray-600">Time:</span>
                  <span class="font-medium ml-1 text-gray-800">{{
                    contactForm.time
                  }}</span>
                </div>
                <div>
                  <span class="text-gray-600">Vehicle:</span>
                  <span class="font-medium ml-1 text-gray-800"
                    >{{ contactForm.year }}
                    {{ contactForm.make }}
                    {{ contactForm.model }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h4 class="font-semibold text-gray-800 mb-2 pb-2">
              Our Contact Information
            </h4>
            <div class="grid gap-2 text-sm">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <span class="text-gray-600">(980) 223-2781</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <path
                    d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="text-gray-600"
                  >1110 Freedom Drive, Statesville, NC 28652</span
                >
              </div>
            </div>
          </div>

          <button
            @click="closeContactModal"
            class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { Phone } from "lucide-vue-next";

// Sample data for auto repair services
const services = ref([
  {
    id: 1,
    name: "Oil Change",
    description:
      "Complete oil change with filter replacement and fluid level check. Includes synthetic blend oil.",
    price: 49.99,
    category: "Maintenance",
    estimatedTime: "30-45 min",
  },
  {
    id: 2,
    name: "Brake Pad Replacement",
    description:
      "Front or rear brake pad replacement with inspection of rotors, calipers, and brake lines.",
    price: 199.99,
    category: "Brakes",
    estimatedTime: "1-2 hours",
  },
  {
    id: 3,
    name: "Tire Rotation",
    description:
      "Rotation of all four tires to ensure even wear and extend tire life. Includes pressure check.",
    price: 29.99,
    category: "Tires",
    estimatedTime: "30 min",
  },
  {
    id: 4,
    name: "Engine Tune-Up",
    description:
      "Comprehensive engine tune-up including spark plug replacement, fuel system cleaning, and performance adjustments.",
    price: 149.99,
    category: "Engine",
    estimatedTime: "1-3 hours",
  },
  {
    id: 5,
    name: "Wheel Alignment",
    description:
      "Four-wheel alignment to ensure proper handling and tire wear. Includes suspension inspection.",
    price: 89.99,
    category: "Tires",
    estimatedTime: "1 hour",
  },
  {
    id: 6,
    name: "Battery Replacement",
    description:
      "Installation of new battery with testing of charging system and electrical components.",
    price: 129.99,
    category: "Electrical",
    estimatedTime: "30 min",
  },
  {
    id: 7,
    name: "Air Conditioning Service",
    description:
      "A/C system inspection, refrigerant recharge, and performance test to ensure proper cooling.",
    price: 119.99,
    category: "Climate Control",
    estimatedTime: "1 hour",
  },
  {
    id: 8,
    name: "Transmission Fluid Change",
    description:
      "Complete transmission fluid flush and replacement with new filter and gasket as needed.",
    price: 159.99,
    category: "Transmission",
    estimatedTime: "1-2 hours",
  },
  {
    id: 9,
    name: "Radiator Flush",
    description:
      "Complete cooling system flush with new coolant and inspection of hoses and connections.",
    price: 99.99,
    category: "Cooling System",
    estimatedTime: "1 hour",
  },
  {
    id: 10,
    name: "Headlight Replacement",
    description:
      "Replacement of headlight bulbs or assemblies with alignment adjustment.",
    price: 69.99,
    category: "Electrical",
    estimatedTime: "30-45 min",
  },
]);

// Search and filter state
const searchQuery = ref("");
const selectedCategory = ref("");
const sortDirection = ref("asc");

// Get unique categories from services
const categories = computed(() => {
  const uniqueCategories = new Set(
    services.value.map((service) => service.category)
  );
  return [...uniqueCategories].sort();
});

// Filter services based on search query and selected category
const filteredServices = computed(() => {
  return services.value
    .filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      const matchesCategory =
        selectedCategory.value === "" ||
        service.category === selectedCategory.value;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortDirection.value === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
});

// Toggle sort direction
const sortByPrice = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};

// Form data
const contactForm = reactive({
  fullName: "",
  phone: "",
  date: "",
  time: "",
  make: "",
  model: "",
  year: null,
  message: "",
});

// State variables
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showContactModal = ref(false);
const contactSubmitted = ref(false);
const errors = ref({});
const apiBaseUrl = "/api";

// Current date and year for validation
const currentYear = new Date().getFullYear();
const minDate = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

// Available appointment times
const availableTimes = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

// Open contact modal
const openContactModal = () => {
  showContactModal.value = true;
  contactSubmitted.value = false;
  errors.value = {};
};

// Close contact modal
const closeContactModal = () => {
  showContactModal.value = false;

  // Reset form after a short delay to allow for animation
  setTimeout(() => {
    contactForm.value = {
      fullName: "",
      phone: "",
      date: "",
      time: "",
      make: "",
      model: "",
      year: null,
      message: "",
    };
    contactSubmitted.value = false;
    errors.value = {};
  }, 300);
};

// Validate form
const validateForm = () => {
  const newErrors = {};

  // Validate phone
  const phoneRegex =
    /^(\+1\s?)?($$[0-9]{3}$$\s?|[0-9]{3}[-.\s]?)[0-9]{3}[-.\s]?[0-9]{4}$/;
  if (!phoneRegex.test(contactForm.phone)) {
    newErrors.phone = "Please enter a valid phone number";
  }

  // Validate name
  if (contactForm.fullName.trim().length < 3) {
    newErrors.fullName = "Please enter your full name";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

// Submit contact form
const submitContactForm = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    isSubmitting.value = true;
    contactSubmitted.value = true;

    const response = await fetch(`${apiBaseUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });

    console.log(contactForm);

    const result = await response.json();

    if (result.success) {
      showSuccess.value = true;
      console.log(showSuccess.value);
      // Schedule refresh of recent submissions after 10 minutes
    } else {
      alert("Error submitting form: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while submitting the form. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style>
h1 {
  color: aliceblue;
}
:root {
  --color-primary: #0097d0;
  --color-primary-hover: #0097d0;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary\/10 {
  background-color: rgba(229, 62, 62, 0.1);
}

.bg-primary\/90 {
  background-color: #0097d0;
}

.text-primary {
  color: #081bfd;
}

.hover\:bg-primary\/90:hover {
  background-color: #0097d0;
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

#search {
  border-color: #fff;
}

input,
#time,
#message {
  border-color: gray;
}

input,
select,
#message {
  color: black;
}

span {
  padding-left: 5px;
}
</style>

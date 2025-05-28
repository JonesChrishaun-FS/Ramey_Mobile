<script>
export default {
  name: "SubscribeButton",
};
</script>

<template>
  <div>
    <!-- Success Message -->
    <Transition name="fade">
      <div
        v-if="showSuccess"
        class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
      >
        <CheckCircleIcon class="h-5 w-5 mr-2" />
        <span>Successfully subscribed!</span>
      </div>
    </Transition>

    <!-- Subscribe Button -->
    <button
      @click="openModal"
      class="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-cyan-800 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
    >
      <span>Subscribe</span>
      <ChevronRightIcon class="h-5 w-5 ml-1" />
    </button>

    <!-- Modal Overlay -->
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click="closeModal"
      >
        <!-- Modal Content -->
        <Transition name="zoom">
          <div
            v-if="isModalOpen"
            @click.stop
            class="bg-white dark:bg-orange-500 rounded-lg shadow-xl w-full max-w-md overflow-hidden"
          >
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Subscribe to Affordable Offers
                </h2>
                <button
                  @click="closeModal"
                  class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <XIcon class="h-6 w-6" />
                </button>
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Stay updated with our latest news and offers.
              </p>

              <form @submit.prevent="submitForm" class="space-y-4">
                <!-- Name Field -->
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    :class="{ 'border-red-800': errors.name }"
                    placeholder="John Doe"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-800">
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Email Field -->
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    :class="{ 'border-red-800': errors.email }"
                    placeholder="john@example.com"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-800">
                    {{ errors.email }}
                  </p>
                </div>

                <!-- Phone Field -->
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    :class="{ 'border-red-800': errors.phone }"
                    placeholder="(123) 456-7890"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-800">
                    {{ errors.phone }}
                  </p>
                </div>

                <!-- Preferred Contact Method -->
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input
                        type="radio"
                        v-model="form.preferredContact"
                        value="email"
                        class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                      />
                      <span class="ml-2 text-gray-700 dark:text-gray-300"
                        >Email</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        type="radio"
                        v-model="form.preferredContact"
                        value="phone"
                        class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                      />
                      <span class="ml-2 text-gray-700 dark:text-gray-300"
                        >Phone</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        type="radio"
                        v-model="form.preferredContact"
                        value="both"
                        class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                      />
                      <span class="ml-2 text-gray-700 dark:text-gray-300"
                        >Both</span
                      >
                    </label>
                  </div>
                  <p
                    v-if="errors.preferredContact"
                    class="mt-1 text-sm text-red-500"
                  >
                    {{ errors.preferredContact }}
                  </p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-cyan-800 text-white font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">
                    <LoaderIcon class="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </span>
                  <span v-else>Subscribe Now</span>
                </button>
              </form>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  ChevronRightIcon,
  XIcon,
  CheckCircleIcon,
  LoaderIcon,
} from "lucide-vue-next";

// Form state
const isModalOpen = ref(false);
const isSubmitting = ref(false);
const showSuccess = ref(false);
const apiBaseUrl = "http://localhost:8000/api";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  preferredContact: "email",
});

const errors = reactive({
  name: "",
  email: "",
  phone: "",
  preferredContact: "",
});

// Methods
const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ""; // Re-enable scrolling

  // Reset form
  Object.keys(form).forEach((key) => {
    if (key !== "preferredContact") {
      form[key] = "";
    }
  });

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });
};

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Validate name
  if (!form.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Validate phone (optional but must be valid if provided)
  if (form.phone.trim()) {
    const phoneRegex =
      /^(\+1\s?)?($$[0-9]{3}$$\s?|[0-9]{3}[-.\s]?)[0-9]{3}[-.\s]?[0-9]{4}$/;
    if (!phoneRegex.test(form.phone)) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }
  }

  // Validate preferred contact
  if (!form.preferredContact) {
    errors.preferredContact = "Please select a preferred contact method";
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    isSubmitting.value = true;
    // Simulate API call
    const response = await fetch(`${apiBaseUrl}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(form);

    const result = await response.json();

    // Close modal
    isModalOpen.value = false;

    // Show success message
    if (result.success) {
      showSuccess.value = true;
      setTimeout(() => {
        showSuccess.value = false;
      }, 3000);

      // Reset form
      Object.keys(form).forEach((key) => {
        if (key !== "preferredContact") {
          form[key] = "";
        }
      });
    }
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    isSubmitting.value = false;
    document.body.style.overflow = ""; // Re-enable scrolling
  }
};
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom transition */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

label {
  padding-top: 0.5rem;
  color: gray;
}

input,
p {
  color: black;
}
</style>

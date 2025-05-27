<template>
  <div class="flex items-center justify-center p-4">
    <!-- Contact Button -->
    <button
      @click="showPopup = true"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
    >
      <PhoneIcon class="h-5 w-5" />
      Contact Us
    </button>

    <!-- Popup Overlay -->
    <transition name="popup">
      <div
        v-if="showPopup"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click="closePopup"
      >
        <!-- Popup Content -->
        <div
          class="bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full transform transition-all duration-300"
          @click.stop
        >
          <!-- Header -->
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-900">
              Contact Information
            </h3>
            <button
              @click="closePopup"
              class="text-gray-400 hover:text-gray-600 transition duration-200"
            >
              <XIcon class="h-6 w-6" />
            </button>
          </div>

          <!-- Phone Number Display -->
          <div class="text-center mb-6">
            <div class="bg-blue-50 rounded-lg p-4 mb-4">
              <PhoneIcon class="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p class="text-sm text-gray-600 mb-2">Call us at:</p>
              <p class="text-2xl font-bold text-gray-900">{{ phoneNumber }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 justify-center">
              <a
                :href="`tel:${phoneNumber}`"
                class="bg-blue-600 hover:bg-blue-700 text-white p-10 rounded-lg transition duration-200 flex items-center gap-2"
              >
                <PhoneIcon class="h-4 w-4" />
                Call Now
              </a>
              <button
                @click="copyToClipboard"
                class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
              >
                <CopyIcon class="h-4 w-4" />
                {{ copied ? "Copied!" : "Copy" }}
              </button>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="text-center text-sm text-gray-500">
            <p>Available</p>
            <p>Monday - Friday | Tuesday - CLOSED</p>
            <p>9:00 AM - 5:00 PM EST</p>
            <p>Friday : 8:00 AM - 1:00 PM EST</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon, XIcon, CopyIcon } from "lucide-vue-next";

const showPopup = ref(false);
const copied = ref(false);
const phoneNumber = ref("+1 (980) 223-2781");

const closePopup = () => {
  showPopup.value = false;
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(phoneNumber.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Close popup on Escape key
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
};

// Add event listener when popup is shown
const watchPopup = () => {
  if (showPopup.value) {
    document.addEventListener("keydown", handleKeydown);
  } else {
    document.removeEventListener("keydown", handleKeydown);
  }
};

// Watch for popup changes
import { watch, onUnmounted } from "vue";
import { isTuesday } from "../../../server/node_modules/date-fns/fp/isTuesday";
watch(showPopup, watchPopup);

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-active .bg-white,
.popup-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.popup-enter-from .bg-white,
.popup-leave-to .bg-white {
  transform: scale(0.9);
}
</style>

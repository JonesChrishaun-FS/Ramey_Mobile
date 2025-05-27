<template>
  <transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 z-50"
      aria-label="Back to top of page"
      title="Back to top of page"
    >
      <ChevronUp class="h-6 w-6" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronUp } from "lucide-vue-next";

// Configuration options
const props = defineProps({
  visibleOffset: {
    type: Number,
    default: 300,
  },
  scrollDuration: {
    type: Number,
    default: 500,
  },
});

const showButton = ref(false);

// Check scroll position and update button visibility
const handleScroll = () => {
  showButton.value = window.scrollY > props.visibleOffset;
};

// Smooth scroll to top function
const scrollToTop = () => {
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;

    // Easing function: easeInOutCubic
    const progress = Math.min(elapsedTime / props.scrollDuration, 1);
    const easeProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition * (1 - easeProgress));

    if (elapsedTime < props.scrollDuration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial position
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Define theme colors */
:root {
  --color-primary: #0070f3;
  --color-primary-dark: #0060df;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary-dark {
  background-color: var(--color-primary-dark);
}

.text-white {
  color: white;
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}
</style>

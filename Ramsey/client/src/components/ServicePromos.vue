<script setup>
import { ref } from "vue";
import {
  BatteryChargingIcon,
  SettingsIcon,
  AlertTriangleIcon,
  ThermometerIcon,
} from "lucide-vue-next";

const promotions = ref([
  {
    title: "Spring Oil Change Special",
    description:
      "Full synthetic oil change with multi-point inspection and fluid top-off.",
    price: "$39.99",
    originalPrice: "$59.99",
    discount: "SAVE 33%",
  },
  {
    title: "Brake Service Package",
    description:
      "Complete brake pad replacement, rotor inspection, and system check.",
    price: "$149.99",
    originalPrice: "$199.99",
    discount: "SAVE 25%",
    icon: AlertTriangleIcon,
  },
  {
    title: "A/C System Check & Recharge",
    description:
      "Complete air conditioning system inspection and refrigerant recharge.",
    price: "$89.99",
    originalPrice: "$119.99",
    discount: "SAVE 25%",
    icon: ThermometerIcon,
  },
  {
    title: "Wheel Alignment Special",
    description: "Four-wheel alignment with suspension system inspection.",
    price: "$69.99",
    originalPrice: "$99.99",
    discount: "SAVE 30%",
    icon: SettingsIcon,
  },
  {
    title: "Battery Replacement",
    description: "New battery installation with electrical system check.",
    price: "$129.99",
    originalPrice: "$159.99",
    discount: "SAVE 19%",
    icon: BatteryChargingIcon,
  },
  {
    title: "Complete Tune-Up Package",
    description:
      "Comprehensive engine tune-up with spark plugs, filters, and performance check.",
    price: "$199.99",
    originalPrice: "$249.99",
    discount: "SAVE 20%",
  },
]);
</script>
<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl pb-5"
        >
          Spring Service Special
        </h1>
        <p class="mt-6 text-xl text-white">
          Get your vehicle ready for spring with our comprehensive maintenance
          package. Save up to 25% on all services this month only!
        </p>
      </div>
      <!-- Current Promotions -->
      <div class="py-12">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(promo, index) in promotions"
              :key="index"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
              id="Promo"
            >
              <div
                class="flex-shrink-0 h-48 bg-gray-800 relative"
                style="margin-bottom: 0px"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <component :is="promo.icon" class="h-20 w-20 text-gray-400" />
                </div>
                <div
                  class="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold"
                >
                  {{ promo.discount }}
                </div>
              </div>
              <div
                class="flex-1 bg-white p-6 flex flex-col justify-between"
                style="margin-bottom: 0px"
              >
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ promo.title }}
                  </h3>
                  <p class="mt-3 text-base text-gray-500">
                    {{ promo.description }}
                  </p>
                </div>
                <div class="flex items-center">
                  <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">
                      {{ promo.price }}
                    </p>
                    <p
                      class="text-sm text-gray-500 line-through"
                      v-if="promo.originalPrice"
                    >
                      {{ promo.originalPrice }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

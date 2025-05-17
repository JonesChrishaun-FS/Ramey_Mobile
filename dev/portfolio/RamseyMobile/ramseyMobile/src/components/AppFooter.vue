<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" />
  <UFooter class="bg-gray-900 text-gray-300">
    <div class="container px-4 py-12">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company info column -->
        <div>
          <div class="flex items-center mb-4">
            <Logo class="w-15 h-15" />
            <h2 class="text-white text-xl font-bold pl-3">Ramsey's Mobile</h2>
          </div>
          <p class="mb-4 text-sm">
            Building amazing web experiences with Vue.js. Our mission is to
            create beautiful, performant, and accessible applications.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Resource column -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-1 font-medium">
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/parts">Parts & Trade</router-link>
            </li>
            <li>
              <router-link to="/promos&deals">Promos</router-link>
            </li>
            <li>
              <router-link to="/projects">Projects</router-link>
            </li>
          </ul>
        </div>

        <!-- Hours column -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Hours</h3>
          <ul class="text-xs pb-5">
            <li>SUNDAY- EMERGENCY REPAIRS/TOWS ONLY(9A-1P)</li>
            <li>MONDAY- 9A-5P</li>
            <li>TUESDAY- CLOSED</li>
            <li>WEDNESDAY- 9A-5P</li>
            <li>THURSDAY- 9A-5P</li>
            <li>FRIDAY- 8A-1P</li>
            <li>SATURDAY- CLOSED</li>
          </ul>
        </div>

        <!-- Owner column -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">
            Owners & Location
          </h3>
          <p>
            Jeffrey Allen Ramsey, Sr. Owner/Manager/Member <br />
            Charlise Denise Ramsey, Owner/Managing Member/Secretary <br />
            1110 Freedom Drive Statesville, NC 28652
          </p>
        </div>
      </div>

      <!-- Bottom footer with newsletter and copyright -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Newsletter signup -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <div class="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
              />
              <button
                class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          <!-- Copyright -->
          <div class="text-sm text-right md:text-right">
            <p>
              © {{ new Date().getFullYear() }} Ramsey's Mobile Affordable
              Services, LLC.
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </UFooter>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
h3 {
  font-weight: 600;
}
li {
}
</style>

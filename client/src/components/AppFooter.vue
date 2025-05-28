<template>
  <USeparator color="secondary" size="xl" />
  <div class="bg-gray-900 text-gray-300" :style="footerBottom">
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
          <div class="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/p/Ramseys-Mobile-Affordable-Services-LLC-100085256292632/"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#fff"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Resource column -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4 pb-3">
            Owners & Location
          </h3>
          <ul class="text-xs pb-8">
            <li class="text-xl">Jeffrey Allen Ramsey Sr.</li>
            <li class="pb-3">Owner/Manager/Member</li>
            <li class="text-xl">Charlise Denise Ramsey</li>
            <li class="pb-3">Owner/Managing Member/Secretary</li>
            <li class="text-xl pb-3">
              1110 Freedom Drive Statesville, NC 28652
            </li>
            <li class="text-xl">(980) 223-2781</li>
          </ul>
        </div>

        <!-- Hours column -->
        <div>
          <h3 class="text-white text-lg font-semibold pb-3">Hours</h3>
          <ul class="text-xs pb-5">
            <li class="pb-3">SUNDAY- EMERGENCY REPAIRS/TOWS ONLY(9A-1P)</li>
            <li class="pb-3">MONDAY- 9A-5P</li>
            <li class="pb-3">TUESDAY- CLOSED</li>
            <li class="pb-3">WEDNESDAY- 9A-5P</li>
            <li class="pb-3">THURSDAY- 9A-5P</li>
            <li class="pb-3">FRIDAY- 8A-1P</li>
            <li class="pb-3">SATURDAY- CLOSED</li>
          </ul>
        </div>

        <!-- Owner column -->
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
          <div class="text-sm text-right md:text-right lg:text-right">
            <p>
              © {{ new Date().getFullYear() }} Ramsey's Mobile Affordable
              Services, LLC.
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const footerBottom = {
  marginBottom: "0px",
};
// No additional script needed for this component
</script>

<style scoped>
h3 {
  font-weight: 600;
}
li {
}
</style>

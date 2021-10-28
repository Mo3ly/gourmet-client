<template>
  <transition name="fade">
    <div v-if="show">
      <div class="fixed z-40 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div @click="show = !show" class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​

          <div class="relative rounded-3xl px-6 py-10 bg-pink-600 overflow-hidden shadow-xl sm:px-12 sm:py-20 transition transform inline-block align-top max-w-3xl sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline" data-toggle-target="toggleable toggleArea" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:enter="ease-out duration-300" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button @click="show = !show" type="button" class="relative z-50 cursor-pointer bg-transparent rounded-md text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 ring-offset-transparent" data-action="click->toggle#hide">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                <path class="text-pink-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                <path class="text-pink-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center mb-12">
                <span class="inline-flex items-center px-4 py-1 rounded-full sm:text-lg font-bold font-display bg-pink-100 text-pink-800 transform -rotate-3"> Table {{ table }}! </span>
                <h2 class="mt-6 text-3xl font-extrabold text-white tracking-tight sm:text-4.5xl font-display sm:leading-extra-tight">
                  Welcome to our new application!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ["table", "orders"],
    data() {
      return {
        show: false,
      };
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

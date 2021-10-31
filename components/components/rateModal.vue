<template>
  <!-- <transition name="fade"> -->
  <div v-if="show">
    <div class="fixed z-40 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div @click="show = !show" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​

        <div class="relative rounded-3xl px-6 py-10 bg-pink-600 overflow-hidden shadow-xl sm:px-12 sm:py-20 transition transform inline-block align-top max-w-3xl sm:align-middle" role="dialog" aria-modal="true">
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
              <span class="inline-flex items-center px-4 py-1 rounded-full sm:text-lg font-bold font-display bg-pink-100 text-pink-800 transform -rotate-3">
                Hey there!
              </span>
              <h2 class="mt-6 text-3xl font-extrabold text-white tracking-tight sm:text-4.5xl font-display sm:leading-extra-tight">
                Welcome to our new application!
              </h2>
              <!-- <p class="mt-6 mx-auto max-w-2xl text-lg text-pink-100">Twice a month I share the best Tailwind templates, UI kits and components in <strong>my newsletter</strong>. <strong>14</strong> Tailwind hackers find it useful. I'd love you to join.</p> -->
            </div>
            <!-- <form target="_blank" class="sm:mx-auto sm:max-w-lg sm:flex">
              <div class="relative w-full h-14 bg-white rounded-full max-w-xl lg:max-w-none mx-auto">
                <input class="rounded-full w-full h-14 bg-transparent py-0 sm:pl-6 pl-5 pr-16 sm:pr-32 outline-none border-2 border-gray-100 shadow-md hover:border-0 hover:ring-0 hover:outline-none focus:ring-pink-200 focus:border-pink-200" data-newsletter-target="email" required="required" placeholder="Enter your email" autocomplete="email" type="email" name="member[email]" id="member[email]" />
                <button type="submit" class="inline-flex items-center h-12 absolute right-1 top-1 outline-none bg-pink-600 text-white p-4 sm:py-2 sm:px-6 rounded-r-full rounded-bl-full sm:rounded-full text-sm transition duration-150 sm:text-base sm:font-medium hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="-ml-0.5 sm:-ml-1 sm:mr-2 h-5 w-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                  </svg>
                  <span class="hidden sm:inline-block">
                    Try it
                  </span>
                </button>
              </div>
            </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    created() {
      setTimeout(() => (this.show = false), 5000);
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

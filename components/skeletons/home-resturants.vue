<template>
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <div v-for="index in 5" :key="index" class="flex relative pt-2 pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 dark:bg-gray-700 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10"></div>
      <div class="flex-grow md:ps-8 ps-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-pink-100 skeleton-box text-pink-500 rounded-full inline-flex items-center justify-center">
          <div class="w-20 h-20 rounded-full object-cover object-center"></div>
        </div>
        <div class="flex-grow sm:ps-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 dark:text-gray-100 mb-1 text-xl bg-gray-300 rounded w-1/2 h-5  skeleton-box"></h2>
          <p class="leading-relaxed dark:text-gray-100 bg-gray-300 rounded w-96 h-5 skeleton-box"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skeleton-box {
    display: inline-block;
    position: relative;
    overflow: hidden;
    /* background-color: #dddbdd; */
  }
  .skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
    animation: shimmer 2s infinite;
    content: "";
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
</style>

<template>
  <div :dir="$dir()">
      <div class="text-center pt-8">
        <h1 class="text-9xl font-bold text-pink-500">404</h1>
        <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
        <p class="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. It might have been moved or deleted.</p>
        <NuxtLink :to="localePath('/')" class="bg-gradient-to-r from-pink-400 to-pink-300 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            RETURN TO HOME
        </NuxtLink>
        </div>
  </div>
</template>

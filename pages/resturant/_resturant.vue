<template>
  <div>
    <!-- Banner -->
    <section class="text-gray-600 bg-pink-300 bg-opacity-5 dark:bg-opacity-5 dark:bg-gray-200  border-b-2 dark:border-gray-500 dark:border-opacity-20 pattern-bg-typo">
      <div class="container py-0 mx-auto">
        <div class="flex items-center justify-center w-full space-s-3 pt-5 text-xs">
          <NuxtLink :to="localePath('/')" class=" px-3 bg-pink-200 text-pink-800 rounded-full">{{ $t("header.links[0].name") }}</NuxtLink>
          <NuxtLink :to="localePath('/resturants')" class="mr-3 ml-3 px-3 bg-pink-200 text-pink-800 rounded-full"> {{ $t("header.links[1].name") }}</NuxtLink>
          <span class="mr-3 ml-3 dark:text-gray-100">{{ $i18n.locale == "en" ? resturant.name_en : resturant.name_ar }} </span>
        </div>
        <div class="container items-center px-5 _pt-8 py-5 lg:px-20 animate__animated animate__jackInTheBox">
          <div class="flex flex-wrap">
            <div class="w-full mx-auto my-4 bg-white dark:bg-dark-surface dark:border-dark-border border rounded-lg shadow-xl lg:w-1/2">
              <div class="p-6 text-center">
                <div class="flex-shrink-0 w-24 h-24 -mt-12 bg-pink-100 rounded-full inline-flex items-center justify-center">
                  <img alt="melt" class="w-20 h-20 rounded-full shadow-xl object-cover object-center" :src="resturant.image" />
                </div>
                <h2 class="pt-4 mb-1 text-xs font-semibold tracking-widest text-black dark:text-gray-100 uppercase title-font">{{ $i18n.locale == "en" ? resturant.genere : resturant.genere }}</h2>
                <h4 class="mb-3 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-300 font-flower">
                  {{ $i18n.locale == "en" ? resturant.name_en : resturant.name_ar }}
                </h4>
                <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-pink-200 text-pink-800 rounded-full">{{ $t("resturant.about") }}</div>
                <p class="mb-3 text-sm leading-relaxed text-blueGray-500 dark:text-gray-100">
                  {{ $i18n.locale == "en" ? resturant.desc_en : resturant.desc_ar }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu -->
    <div class="">
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style="margin-top: -40px;" class="relative z-1 flex items-baseline justify-between py-4 _border-b _border-gray-200">
          <div class="flex space-s-6">
            <NuxtLink :to="localePath('/resturant/' + resturant.name_en)" :class="[!$route.path.includes('gallery') ? 'bg-pink-200 text-pink-800' : '']" class="text-xl font-extrabold bg-gray-200 rounded-full py-2 px-6 tracking-tight text-gray-900 hover:text-pink-500 transform duration-300 active:scale-90">
              <i class="gd-icons gd-icons-sm icon-components"></i>
              {{ $t("resturant.menu") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/resturant/' + resturant.name_en + '/gallery/')" :class="[$route.path.includes('gallery') ? 'bg-pink-200 text-pink-800' : '']" class="text-xl font-extrabold bg-gray-200 rounded-full py-2 px-6 tracking-tight text-gray-900 hover:text-pink-500 transform duration-300 active:scale-90">
              <i class="gd-icons  gd-icons-sm icon-image-02 "></i>
              {{ $t("resturant.gallery") }}
            </NuxtLink>
          </div>
        </div>

        <NuxtChild :key="$route.params.resturant" />
      </main>
    </div>
    <componentsQRCodeReaderModal v-if="!getTable" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    scrollToTop: true,
    async asyncData({ params, $axios, error, route, store }) {
      // set table if found
      if (route.query.table) store.commit("setUserTable", route.query.table);

      const resturant = await $axios
        .get(`/api/resturants/${params.resturant}`)
        .then((response) => {
          return response.data;
        })
        .catch((e) => {
          error({ statusCode: 404, message: "Page not found" });
        });
      return { resturant };
    },
    computed: {
      ...mapGetters(["getTable"]),
    },
  };
</script>

<style scoped>
  .menu-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }
  .menu-bar::-webkit-scrollbar {
    display: none;
  }
</style>

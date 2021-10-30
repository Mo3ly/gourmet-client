<template>
  <div>
    <div class="relative py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-6">
      <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white dark:text-transparent" preserveAspectRatio="none">
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>

      <!-- Banner -->
      <div class="relative overflow-hidden">
        <div class="mx-auto">
          <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32">
            <main class="mt-10 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left animate__animated animate__bounceInLeft animate__delay-1s">
                <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span class="relative inline-block px-2">
                    <div class="absolute inset-0 transform -skew-x-12 bg-pink-400"></div>
                    <span class="relative text-white">{{ $t("home.landing_title") }}</span>
                  </span>
                  <!-- <span class="block text-gray-900 dark:text-gray-100 xl:inline">{{ $t("home.landing_title") }}</span> -->
                  <span class="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-300 xl:inline">{{ $t("home.landing_title2") }}</span>
                </h1>
                <p class="mt-3 text-base dark:text-white  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {{ $t("home.landing_desc") }}
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="#map-keys" class="w-full flex items-center justify-center px-8 py-3 border  border-transparent text-base font-medium rounded-md animate-pulse text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10" v-smooth-scroll>
                      {{ $t("home.discover_btn") }}
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ms-3">
                    <NuxtLink :to="localePath('book')" class="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg md:px-10">
                      <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                      &nbsp; {{ $t("home.book_btn") }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 rtl-map lg:w-1/2 -transform -scale-100">
          <img class="animate__animated animate__jackInTheBox animate__delay-2s " src="~/static/images/layout/gd-map.png" alt=" gourmet map" />
        </div>
      </div>
    </div>

    <!-- Gourmet Video -->
    <!-- <div>
      <h1 class="sm:text-3xl text-2xl font-bold uppercase title-font text-center pt-10 text-pink-500 mt-2">{{ $t('name') }}</h1>
      <div class="m-10 p-5 shadow-md rounded bg-pink-200">
        <div class="aspect-w-16 aspect-h-8">
          <iframe src="https://www.youtube-nocookie.com/embed/TixsV6fSpRo?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0&origin=http://www.g-d.qa;&controls=0&playsinline=1&?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div> -->

    <!-- sliders -->
    <div>
      <components-rateModal />
    </div>

    <!-- How to order -->
    <div class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-6">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-pink-900 uppercase rounded-full bg-pink-200">
            How to
          </p>
        </div>
        <h2 class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="d0d83814-78b6-480f-9a5f-7f637616b267" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)" width="52" height="24"></rect>
            </svg>
            <span class="relative">Make</span>
          </span>
          an order
        </h2>
      </div>
      <div class="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div class="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div class="w-px h-full bg-gray-300 dark:bg-gray-700 lg:w-full lg:h-px"></div>
        </div>
        <div class="p-5 duration-300 transform bg-white dark:bg-gray-900 dark:border-gray-700 border rounded shadow-sm hover:-translate-y-2">
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Select your meal</p>
            <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-pink-400 bg-pink-50">
              1
            </p>
          </div>
          <p class="text-sm text-gray-900 dark:text-gray-100">
            Select your dishes from a variety of high quality restuants in our food court.
          </p>
        </div>
        <div class="p-5 duration-300 transform bg-white dark:bg-gray-900 dark:border-gray-700 border rounded shadow-sm hover:-translate-y-2">
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Which table?</p>
            <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-pink-accent-400 bg-pink-50">
              2
            </p>
          </div>
          <p class="text-sm text-gray-900 dark:text-gray-100">
            Tell the system the table number by scannig your table's barcode.
          </p>
        </div>
        <div class="p-5 duration-300 transform bg-white dark:bg-gray-900 dark:border-gray-700 border rounded shadow-sm hover:-translate-y-2">
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Cart</p>
            <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-pink-accent-400 bg-pink-50">
              3
            </p>
          </div>
          <p class="text-sm text-gray-900 dark:text-gray-100">
            Place your order located in the Cart after entering your name and table number.
          </p>
        </div>
        <div class="p-5 duration-300 transform bg-white dark:bg-gray-900 dark:border-gray-700 border rounded shadow-sm hover:-translate-y-2">
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Congrats</p>
            <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-pink-accent-400 bg-pink-50">
              4
            </p>
          </div>
          <p class="text-sm text-gray-900 dark:text-gray-100">
            Your order has been placed and will be served to you as fast as possible.
          </p>
        </div>
      </div>
      <div class="text-center">
        <nuxt-link :to="localePath('resturants')" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto text-pink-700 bg-pink-100 hover:bg-pink-200 focus:shadow-outline focus:outline-none">
          View Resturants
        </nuxt-link>
      </div>
    </div>

    <!-- Resturants -->
    <section id="map-keys" class="text-gray-600 body-font mt-10">
      <h1 class="sm:text-3xl text-2xl font-bold uppercase title-font text-center pt-10 text-pink-500">
        <span class="relative inline-block px-2">
          <div class="absolute inset-0 transform -skew-x-12 bg-pink-400"></div>
          <span class="relative text-white">{{ $t("home.gd_resturants") }}</span>
        </span>
      </h1>

      <div v-if="$fetchState.pending || $fetchState.error">
        <skeletons-home-resturants />
      </div>

      <div v-else class="container px-5 py-12 mx-auto flex flex-wrap">
        <div v-for="resturant in resturants" :key="resturant.id" class="flex relative pt-2 pb-10 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 dark:bg-gray-700 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">{{ resturant.id }}</div>
          <div class="flex-grow md:ps-8 ps-6 flex sm:items-center items-start flex-col sm:flex-row">
            <NuxtLink :to="localePath({ path: 'resturant/' + resturant.name_en })">
              <div class="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <img class="w-20 h-20 rounded-full object-cover object-center" :src="resturant.image" />
              </div>
            </NuxtLink>
            <div class="flex-grow sm:ps-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 dark:text-gray-100 mb-1 text-xl">
                <NuxtLink class="text-pink-500" :to="localePath({ path: 'resturant/' + resturant.name_en })">{{ $i18n.locale == "en" ? resturant.name_en : resturant.name_ar }}</NuxtLink>
              </h2>
              <p class="leading-relaxed dark:text-gray-100">{{ $i18n.locale == "en" ? resturant.desc_en : resturant.desc_ar }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        api: process.env.API,
        resturants: [],
      };
    },
    activated() {
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch();
        console.log("refetched the resturants data");
      }
    },
    async fetch() {
      this.resturants = await this.$axios
        .get("/api/resturants")
        .then((response) => {
          return response.data;
        })
        .catch((e) => console.log(e));
      console.log("fetched resturants data");
    },
  };
</script>

<style scoped>
  [dir="rtl"] .rtl-map {
    left: 0px !important;
  }

  [dir="ltr"] .rtl-map {
    right: 0px !important;
  }
</style>

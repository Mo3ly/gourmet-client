<template>
    <div>
        <layout-banner>
          <template v-slot:breadcrumb>
            <div class="ps-3">{{ $t('resturant.resturants') }}</div>
          </template>
          <template v-slot:content>
            <span>Choose your taste from a variety of top level restaurants.</span>
            <div class="pb-3 pt-4">
              <div class="bg-white flex items-center rounded-md shadow">
                  <input type="text" id="search" v-model="searchQuery" :placeholder="$t('common.search')" class="rounded-l-md w-full py-4 px-6 text-gray-700 leading-tight border-none focus:outline-none focus:ring-0" autocomplete="off">
                  <div class="p-3">
                      <button @click="searchQuery != null ? searchQuery = null : null" class="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 focus:outline-none w-7 h-7 flex items-center justify-center">
                          
                          <i v-if="searchQuery" class="gd-icons icon-simple-remove"></i>
                          <i v-else class="gd-icons icon-zoom-split"></i>
                      </button>
                  </div>
              </div>
            </div>
          </template>
        </layout-banner>
        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto max-w-7x1">
            <div class="flex flex-wrap w-full mb-4 p-4">
                <!-- <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 class="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900" >
                      {{ $t('resturant.resturants') }}
                  </h1>
                  <div class="h-1 w-20 bg-pink-500 rounded"></div>
                </div>
                <div class="w-2/3 mx-auto">
                   <div class="pb-3 pt-4">
                    <div class="bg-white flex items-center rounded-md shadow">
                        <input type="text" id="search" v-model="searchQuery" :placeholder="$t('common.search')" class="rounded-l-md w-full py-4 px-6 text-gray-700 leading-tight border-none focus:outline-none focus:ring-0" autocomplete="off">
                        <div class="p-3">
                            <button @click="searchQuery != null ? searchQuery = null : null" class="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 focus:outline-none w-7 h-7 flex items-center justify-center">
                                
                                <i v-if="searchQuery" class="gd-icons icon-simple-remove"></i>
                                <i v-else class="gd-icons icon-zoom-split"></i>
                            </button>
                        </div>
                    </div>
                </div>
                </div> -->
            </div>
            <div class="flex flex-wrap items-center justify-center">
                <div v-for="resturant in resultQuery" :key="resturant.id" class="flex-shrink-0 m-6 relative overflow-hidden bg-pink-500 rounded-lg max-w-xs shadow-lg">
                  <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                  </svg>
                  <div class="relative pt-10 px-10 flex items-center justify-center">
                    <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                    <img class="relative rounded shadow h-24" v-if="resturant.image" :src="resturant.image" alt="">
                    <div v-else class="relative rounded bg-gray-200 shadow w-20"/>
                  </div>
                  <div class="relative text-white px-6 pb-6 mt-6">
                    <span class="block opacity-75 -mb-1">{{  resturant.genere }}</span>
                    <div class="flex justify-between">
                      <span class="block font-semibold text-xl">{{ $i18n.locale == 'en' ? resturant.name_en : resturant.name_ar }}</span>
                      <router-link :to="localePath('/resturant/' + resturant.name_en)" class="block bg-white rounded-full text-pink-500 text-xs font-bold px-3 py-2 leading-none flex items-center">View</router-link>
                    </div>
                  </div>
                </div>
            </div>
            <!-- <div class="flex flex-wrap -m-4">
                <div
                v-for="resturant in resultQuery"
                :key="resturant.id"
                class="xl:w-1/3 md:w-1/2 p-4"
                >
                <div class="bg-white p-6 rounded-lg">
                  <router-link :to="localePath('/resturant/' + resturant.name_en)">
                    <img
                    class="
                        lg:h-60
                        xl:h-56
                        md:h-64
                        sm:h-72
                        xs:h-72
                        h-72
                        rounded
                        w-full
                        object-cover object-center
                        mb-6
                    "
                    :src="resturant.image"
                    alt="Image Size 720x400"
                    />
                    </router-link>
                    <h3 class="tracking-widest text-pink-800 text-xs font-medium title-font bg-pink-200 rounded inline-block px-2">
                      {{ resturant.genere }}
                    </h3>
                    <router-link :to="'/resturant/' + resturant.name_en">
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                          {{ $i18n.locale == 'en' ? resturant.name_en : resturant.name_ar }}
                      </h2>
                    </router-link>
                    <p class="leading-relaxed text-base">{{ $i18n.locale == 'en' ? resturant.desc_en : resturant.desc_ar }}</p>
                </div>
                </div>
            </div> -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,
      table: null,
      api: process.env.API,
      resturants: [],
    };
  },
  mounted() {
    if(localStorage.table)
      this.table = localStorage.table
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
      console.log('refetched the resturants data');
    }
  },
  async asyncData({ params, $axios, error, route, store  }) {
      // set table if found
      if(route.query.table)
        store.commit('setUserTable', route.query.table)
  },
  async fetch() {
      this.resturants = await this.$axios.get('/api/resturants')
        .then((response) => {
          return response.data
        })
      .catch(e => console.log(e))
      console.log('fetched resturants data');
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resturants.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name_en.toLowerCase().includes(v));
        });
      } else {
        return this.resturants;
      }
    },
  },
};
</script>
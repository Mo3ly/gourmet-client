<template>
  <div>
    <!-- Resturants navigation bar -->
    <div class="border-b dark:border-gray-500 dark:border-opacity-20 flow-root">
      <span v-if="showResturants" class=" h3 float-start font-bold text-gray-800 dark:text-gray-100 p-1">{{ $t("resturant.resturants") }}</span>
      <button class="text-gray-500  float-end" @click="showResturants = !showResturants">
        <span v-if="showResturants">{{ $t("resturant.hide") }} <i class="gd-icons icon-minimal-up"></i></span>
        <span v-else>{{ $t("resturant.show") }} <i class="gd-icons icon-minimal-down"></i></span>
      </button>
    </div>
    <div>
      <transition name="fade">
        <div class="mt-2 overflow-y-none overflow-x-auto w-full border-b dark:border-gray-500 dark:border-opacity-20 opacity-50 visit:opacity-100 hover:opacity-100 transition duration-300 border-gray-200 menu-bar" v-if="showResturants">
          <div class="border-b border-opacity-0">
            <div class="-mb-px flex px-4 space-s-8">
              <div v-for="resturant in resturants" :key="resturant.name_en" class=" w-24">
                <nuxt-link :to="localePath(`/resturant/${resturant.name_en}`)">
                  <img class=" h-16 rounded w-full object-cover object-center" :src="resturant.image" :alt="resturant.name_en" />
                  <button :class="[$route.params.resturant == resturant.name_en ? 'text-pink-500 border-pink-500' : 'text-gray-900 dark:text-gray-100 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2  text-sm text-center font-semibold w-24 outline-none']">
                    {{ $i18n.locale == "en" ? resturant.name_en : resturant.name_ar }}
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Menu mobile navigation bar -->
    <div class="mt-2 lg:hidden overflow-y-none overflow-x-auto w-full sticky border-b dark:border-gray-500 dark:border-opacity-20 border-gray-200 menu-bar top-0 shadow-sm bg-white dark:bg-dark-surface">
      <div class="border-b border-opacity-0">
        <div v-if="resturant.categories.length" class="-mb-px flex px-4 space-s-8">
          <div v-for="category in resultQuery" :key="category.id">
            <button :href="`#${category.name_en}`" :class="[category.name_en === currentlyActiveToc ? 'text-pink-500 border-pink-500' : 'text-gray-900 dark:text-gray-100 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-semibold outline-none']" v-smooth-scroll="{ offset: 0 }">
              {{ $i18n.locale == "en" ? category.name_en : category.name_ar }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <section aria-labelledby="products-heading" class="pt-6 pb-24">
      <h2 id="products-heading" class="sr-only">Products</h2>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
        <!-- pc menu -->
        <div v-if="resturant.categories.length" class="hidden lg:block pt-4">
          <h3 class="sr-only">food menu</h3>
          <ul role="list" class="text-base font-medium pc-menu text-gray-900 dark:text-gray-100 space-y-4 pb-6 border-e border-gray-200 dark:divide-gray-500 dark:divide-opacity-20 sticky top-3">
            <li :class="[category.name_en === currentlyActiveToc ? 'border-e-2 pl-4 border-pink-500 text-pink-500 mb-5' : 'pl-4 mb-5', 'hover:text-pink-500 transform transition hover:scale-95']" v-for="category in resultQuery" :key="category.id">
              <a :href="`#${category.name_en}`" v-smooth-scroll>
                {{ $i18n.locale == "en" ? category.name_en : category.name_ar }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div class="lg:col-span-2 menuContent" ref="menuContent">
          <!-- Mobile checkout button -->
          <div v-if="getCartCount > 0" class="fixed bottom-0 left-0 m-auto lg:hidden w-full bg-gray-50 dark:bg-dark-surface p-2">
            <nuxt-link :to="localePath('/cart')" :disabled="getCartCount < 1" class=" justify-center text-center block rounded-md border mb-3 border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 w-full sm:text-sm">
              {{ $t("cart.name") }} — {{ getCartTotalQuantity }} {{ $t("cart.item") }} &nbsp; <span class="text-pink-500 bg-white dark:bg-dark-surface rounded-full px-1 text-xs"> {{ getCartTotal }} {{ $t("common.currency") }} </span>
            </nuxt-link>
          </div>
          <!-- Search bar -->
          <div class="pb-3 pt-4">
            <div v-if="resturant.categories.length" class="bg-white  dark:bg-dark-surface flex items-center rounded-md shadow">
              <input type="text" id="search" v-model="searchQuery" :placeholder="$t('common.search')" class="rounded-l-md w-full py-4 px-6 dark:bg-dark-surface dark:text-gray-100 text-gray-700 leading-tight border-none focus:outline-none focus:ring-0" autocomplete="off" />
              <div class="p-3">
                <button @click="searchQuery != null ? (searchQuery = null) : null" class="bg-pink-500 text-white dark:bg-dark-surface  rounded-full p-2 hover:bg-pink-400 focus:outline-none w-7 h-7 flex items-center justify-center">
                  <i v-if="searchQuery" class="gd-icons icon-simple-remove"></i>
                  <i v-else class="gd-icons icon-zoom-split"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="resturant.categories.length">
            <div v-for="category in resultQuery" :key="category.id" :id="category.name_en" class="pt-4">
              <!-- Sections -->
              <div class="w-full h-32 bg-opacity-30 bg-pink-200 dark:bg-opacity-40 rounded-xl mb-3 pattern-bg-food">
                <h2 class="ps-8 pt-12 text-4xl font-bold drop-shadow-lg text-gray-800 dark:text-gray-300">
                  {{ $i18n.locale == "en" ? category.name_en : category.name_ar }}
                </h2>
              </div>
              <div>
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-500 dark:divide-opacity-20">
                  <li v-for="product in category.products" :key="product.name_en">
                    <menu-product :product="product" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Cart -->
        <div v-if="resturant.categories.length" class="pt-4 hidden lg:block md:block">
          <div class="p-3 bg-pink-200 bg-opacity-30 dark:bg-opacity-40 font-semibold  rounded-md text-gray-800 dark:text-gray-300 text-xl"><i class="gd-icons icon-basket-simple pb-1"></i> {{ $t("cart.name") }}</div>
          <div class="col-span-2">
            <div v-if="getCartCount == 0" class="mt-6">{{ $t("cart.empty") }}</div>
            <div v-for="item in getCart" :key="item.id">
              <menu-cart-product :item="item" />
            </div>
            <div class=" mt-6 pt-6 border-t dark:border-gray-500 dark:border-opacity-20">
              <div class="flow-root">
                <span class="text-sm font-medium text-gray-400 mr-1 float-start">{{ $t("cart.total") }}</span>
                <span class="text-normal font-semibold text-gray-800 float-end dark:text-gray-100">{{ getCartTotal }} {{ $t("common.currency") }}</span>
              </div>
              <nuxt-link v-if="getCartCount > 0" :to="localePath('/cart')" class="bg-pink-500 hover:bg-pink-400 block mt-4 text-white w-full text-center font-bold py-2 px-4 rounded"> {{ $t("cart.checkout") }} </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    data() {
      return {
        api: process.env.API,
        searchQuery: null,
        resturants: [],
        products: [],
        showResturants: true,
        currentlyActiveToc: "",
        observer: null,
        observerOptions: {
          root: this.$refs.menuContent,
          threshold: 0,
        },
      };
    },
    methods: {
      ...mapActions(["deleteCartItem", "setUserTable"]),
    },
    computed: {
      ...mapGetters(["getCart", "getCartTotal", "getCartCount", "getCartTotalQuantity"]),
      resultQuery() {
        if (this.searchQuery) {
          // filter the products
          let locale = this.$i18n.locale;
          return this.resturant.categories.filter((category) => category.products.some((product) => (locale === "ar" ? product.name_ar.toLowerCase().includes(this.searchQuery) : product.name_en.toLowerCase().includes(this.searchQuery))));
        } else {
          return this.resturant.categories;
        }
      },
    },
    mounted() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            this.currentlyActiveToc = id;
          }
        });
      }, this.observerOptions);

      document.querySelectorAll(".menuContent div[id]").forEach((section) => {
        this.observer.observe(section);
      });
    },
    beforeDestroy() {
      this.observer.disconnect();
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
    async asyncData({ params, $axios, error }) {
      // get resturant
      const resturant = await $axios
        .get(`/api/resturants/${params.resturant}`)
        .then((response) => {
          return response.data;
        })
        .catch((e) => {
          error({ statusCode: 404, message: "Page not found" });
        });

      // // get products
      // await $axios.get('/api/products')
      // .then((response) => {
      //     store.commit('setProducts', response.data)
      //     console.log('fetched products data');
      // })
      // .catch(error())

      return { resturant };
    },
    head() {
      let name = this.$t("name");
      let locale = this.$i18n.locale;
      return {
        title: locale == "en" ? this.resturant.name_en : this.resturant.name_ar,
        titleTemplate: "%s — " + name,
        meta: [
          {
            hid: "description",
            name: "description",
            content: locale == "en" ? this.resturant.desc_en : this.resturant.desc_ar,
          },
        ],
      };
    },
  };
</script>
<style scoped>
  ::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

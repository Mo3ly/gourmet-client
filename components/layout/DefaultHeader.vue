<template>
  <div>
    <header :class="$route.path === '/' || $route.path === '/ar' ? '' : 'border-b-2 dark:border-gray-500 dark:border-opacity-20'">
      <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 left-0 right-0 z-30">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <div v-if="$route.path !== '/' && $route.path !== '/ar'">
              <button class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-pink-500 -bg-pink-600 border-pink-500 hover:text-pink-400 focus:outline-none" @click="backward">
                <i class="gd-icons icon-double-left" />
              </button>
            </div>
            <div v-else>
              <layout-aside-menu />
            </div>
          </div>
          <!-- Big logo -->
          <div v-if="$route.path === '/' || $route.path === '/ar'" class="h-10 mb-5 relative z-10">
            <router-link :to="localePath('/')">
              <img class="hidden lg:block md:block animate__animated animate__backInDown w-20" src="~/static/images/logo/logo.svg" alt="Gouremnt logo" />
            </router-link>
          </div>
          <div v-else>
            <router-link :to="localePath('/')">
              <img class="hidden lg:block md:block w-20" src="~/static/images/logo/logo-text.svg" alt="Gouremnt logo text" />
            </router-link>
          </div>

          <!--/ Big logo -->
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <router-link :to="localePath('/')">
                <img v-if="$route.path === '/' || $route.path === '/ar'" class="block h-20 mt-5 md:hidden lg:hidden sm:hidden animate__animated animate__backInDown w-20" src="~/static/images/logo/logo.svg" alt="Gouremnt logo" />
                <img v-else class="block md:hidden lg:hidden sm:hidden animate__animated animate__backInDown  w-20" src="~/static/images/logo/logo-text.svg" alt="Gouremnt logo" />
              </router-link>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex header-links space-s-4">
                <NuxtLink v-for="link in $t('header.links')" :key="link.slug" :to="localePath(link.slug)" class="px-3 py-2 text-gray-500 hover:text-pink-500 text-base font-medium" exact>
                  {{ link.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="absolute animate__animated animate__flipInX inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Dark mode -->
            <div class="hidden md:block lg:block">
              <dark-mode-toggler />
            </div>
            <!--/ Dark mode -->

            <!-- Language -->
            <div>
              <ui-language-switcher></ui-language-switcher>
            </div>
            <!-- Language -->

            <!-- Auth -->
            <nuxt-link :to="localePath('/login')" v-if="!$auth.loggedIn" class="text-center h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none me-2">
              <div class="h-full w-full bg-gray-200"><i class="gd-icons icon-key-25"></i></div>
            </nuxt-link>

            <div class="relative me-2" v-else>
              <button @click="dropdownOpen = !dropdownOpen" class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none ">
                <div class="h-full w-full"><i class="gd-icons icon-single-02 text-gray-400"></i></div>
                <span class="sr-only">user's drop down menu</span>
              </button>

              <div v-if="dropdownOpen" v-click-outside="closeDropDownMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                <div class="block px-4 py-2 text-sm font-semibold text-gray-700  bg-gray-200">Welcome, {{ $auth.user.name }}</div>
                <nuxt-link :to="localePath('/admin')" v-if="$auth.hasScope('admin') || $auth.hasScope('cashier')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white">Admin panel</nuxt-link>
                <div @click="logout" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white cursor-pointer">Logout</div>
              </div>
            </div>
            <!--/ Auth -->

            <!-- Cart -->
            <nuxt-link :to="localePath('/cart')" v-if="$route.path != '/' && $route.path != '/ar'" class="group -m-2 p-2 flex items-center">
              <i class="gd-icons icon-basket-simple flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true"></i>
              <span class="ms-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 dark:text-white">{{ cartCount }}</span>
              <span class="sr-only">items in cart, view bag</span>
            </nuxt-link>
            <!--/ Cart -->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resturants", href: "/resturants" },
    { name: "Events", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "About", href: "#" },
  ];

  export default {
    components: {
      DarkModeToggler: () => import("../ui/DarkModeToggle.vue"),
      IconMenu: () => import("../icons/IconMenu.vue"),
    },
    data() {
      return {
        navigation,
        dropdownOpen: false,
      };
    },
    methods: {
      backward() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
      },
      async logout() {
        this.$auth
          .logout()
          .then((response) => console.log(response))
          .catch((e) => (this.error = e.response.data.message));
      },
      closeDropDownMenu() {
        this.dropdownOpen = false;
      },
    },
    computed: {
      ...mapGetters({
        cartCount: "getCartTotalQuantity",
      }),
    },
  };
</script>

<style scoped>
  .header-links a.nuxt-link-exact-active {
    @apply text-pink-500 border-b-2 border-pink-500;
  }
</style>

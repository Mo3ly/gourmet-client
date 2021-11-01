<template>
  <div>
    <div class="overlay" v-if="show"></div>

    <div v-click-outside="clickOutsideHandler" class="navigation-drawer fixed block left-0 top-0 z-20 bg-white dark:bg-gray-800" :class="{ 'navigation-drawer--open': show }">
      <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="w-72 h-screen">
          <div class="flex items-center justify-start mx-6 mt-10">
            <img class="h-10" src="~/static/images/logo/logo.svg" />
            <span class="text-gray-600 dark:text-gray-300 ms-4 text-2xl font-bold">
              {{ $t("aside.menu") }}
            </span>
          </div>
          <nav class="mt-10 px-6">
            <NuxtLink v-for="link in $t('header.links')" :key="link.slug" :disabled="link.disabled" :to="localePath({ path: link.slug })" class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-3 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 " exact>
              <img width="20" height="20" class="m-auto fill-current text-gray-600" :src="require(`~/assets/icons/${link.icon}.svg`)" />
              <span class="mx-4 text-noraml font-normal">
                {{ link.name }}
              </span>
              <span class="flex-grow text-right"> </span>
            </NuxtLink>

            <div class="mt-8">
              <p class="text-gray-600 dark:text-gray-400 w-full border-b-2 pb-2 dark:border-gray-600 border-gray-600 mb-2 text-sm font-normal flow-root">
                <span class="float-start">{{ $t("aside.mode") }}</span>
                <span class="float-end">{{ $t("aside.language") }}</span>
              </p>
              <div class="flow-root">
                <dark-mode-toggler class="float-start" />
                <language-switcher class="float-end -mt-3" />
              </div>
            </div>
          </nav>
          <div class="absolute bottom-0 my-5 text-center mx-auto w-full">
            <a class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 font-extralight text-xs" href="mailto:mo3lyyy@gmail.com"> {{ $t("aside.signature") }} </a>
          </div>
        </div>
      </div>
    </div>

    <button class="w-10 h-10 lg:hidden transform active:scale-95 inline-flex animate__animated animate__flipInX items-center justify-center p-2 rounded-md text-pink-400 hover:text-pink-500" @click.prevent.stop="toggle">
      <span class="sr-only">Open main menu</span>
      <IconMenu v-if="!show" class="block stroke-current transition-colors duration-300 ease-linear w-6 h-6" />
      <TimesIcon v-else class="block h-5 fill-current transition-colors duration-300 ease-linear" />
    </button>
  </div>
</template>

<script>
  import IconMenu from "../icons/IconMenu";
  import TimesIcon from "~/assets/icons/times.svg?inline";
  import ChevronDownIcon from "~/assets/icons/chevron-down.svg?inline";
  import ChevronRightIcon from "~/assets/icons/chevron-right.svg?inline";

  export default {
    components: {
      DarkModeToggler: () => import("../ui/DarkModeToggle.vue"),
      LanguageSwitcher: () => import("../ui/LanguageSwitcher.vue"),
      IconMenu,
      TimesIcon,
      ChevronDownIcon,
      ChevronRightIcon,
    },
    props: {},
    data() {
      return {
        show: false,
      };
    },
    computed: {},
    methods: {
      toggle() {
        this.show = !this.show;
      },
      clickOutsideHandler() {
        if (this.show) {
          this.show = false;
        }
      },
      async logout() {
        this.$auth
          .logout()
          .then((response) => console.log(response))
          .catch((e) => (this.error = e.response.data.message));
      },
    },
  };
</script>

<style scoped>
  .navigation-drawer {
    transform: translateX(calc(-100% - 30px));
    transition-duration: 0.2s;
    transition-property: transform;
    bottom: 0;
    top: 0;
  }

  @screen lg {
    top: theme("spacing.24");
  }

  .navigation-drawer--open {
    transform: translateX(0);
    transition-delay: 0s;
  }

  .navigation-drawer--open .navigation-drawer_group {
    transform: translateX(0);
  }

  .content-wrapper {
    margin-right: auto;
    padding: 0 2rem;
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    cursor: pointer;
  }

  .navigation-drawer a.nuxt-link-exact-active {
    @apply border-e-2 border-gray-600 dark:border-gray-300 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-600;
  }
</style>

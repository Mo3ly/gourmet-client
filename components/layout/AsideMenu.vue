<template>
  <div>
    <div class="overlay" v-if="show"></div>

    <div
      v-click-outside="clickOutsideHandler"
      class="navigation-drawer h-full block lg:hidden fixed left-0 z-20 w-5/6 sm:w-3/4 shadow-2xl"
      :class="{ 'navigation-drawer--open': show }"
    >
      <div
        class="mx-auto h-full bg-white text-gray-900 dark:text-gray-100 dark:bg-dark-surface transition-colors duration-300 ease-linear border-l light:border-light-border dark:border-dark-border"
      >
        <div class="content-wrapper h-full">
          <div class="overflow-y-auto h-full pt-4">
            <div class="flex items-center mx-auto w-full">
              <nav class="flex lg:pt-1 xl:pt-0 w-full">
                <ul class="flex flex-col w-full border-b dark:border-dark-border mb-3 pb-3">
                  <div class="pb-3 border-b dark:border-dark-border mb-6">
                    {{$t('main_menu')}}
                  </div>
                  <!-- Auth -->
                  <li class="text-center">
                    <div v-if="!$auth.loggedIn">
                      <nuxt-link to="/login"><i class="gd-icons icon-key-25"></i> Login</nuxt-link>
                      <!-- <nuxt-link to="/register"> </nuxt-link> -->
                    </div>
                    <div v-if="$auth.loggedIn">
                      <h2 :to="localePath('home')" class="block">Welcome {{ $auth.user.name }} </h2>
                      <button @click="logout">Logout</button>
                    </div>
                    <div v-if="$auth.hasScope('admin') || $auth.hasScope('cashier')">
                      <nuxt-link to="/admin">admin panel </nuxt-link>
                    </div>
                  </li>
                  <!--/ Auth -->
                  <li
                    v-for="link in $t('header.links')"
                    :key="link.slug"
                    class="py-2 rounded-lg mb-2 transition-transform duration-150 ease-linear transform active:scale-90"
                    @click="show = false"
                  >
                    <NuxtLink
                      v-if="!link.href"
                      :disabled="link.disabled"
                      class="block font-medium hover:no-underline ease-linear"
                      :to="
                        localePath({
                          name: link.slug,
                          params: { book: link.param_book, slug: link.param_slug }
                        })
                      "
                      exact
                    >
                      <i class="gd-icons icon-basket-simple pb-2" aria-hidden="true"></i> &nbsp;
                      {{ link.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
               
            </div> 
            <div>
                <div class="flex ">
                  <span class="pt-2 me-6">Mode: </span>
                  <dark-mode-toggler />
                </div>
                <div class="flex ">
                  <span class="pt-5">Language: </span>
                  <language-switcher />
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <button class="w-10 h-10 lg:hidden transform active:scale-95 inline-flex animate__animated animate__flipInX items-center justify-center p-2 rounded-md text-pink-400 hover:text-pink-500"
    @click.prevent.stop="toggle">
        <span class="sr-only">Open main menu</span>
        <IconMenu
        v-if="!show"
        class="block stroke-current transition-colors duration-300 ease-linear w-6 h-6"
      />
      <TimesIcon
        v-else
        class="block h-5 fill-current transition-colors duration-300 ease-linear"
      />
    </button>
  </div>
</template>

<script>
import IconMenu from '../icons/IconMenu'
import TimesIcon from '~/assets/icons/times.svg?inline'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'
import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'

export default {
  components: {
    DarkModeToggler: () => import('../ui/DarkModeToggle.vue'),
    LanguageSwitcher: () => import('../ui/LanguageSwitcher.vue'),
    IconMenu,
    TimesIcon,
    ChevronDownIcon,
    ChevronRightIcon
  },
  props: {
  },
  data() {
    return {
      show: false
    }
  },
  computed: {

  },
  methods: {
    toggle(){
      this.show = !this.show;
    },
    clickOutsideHandler() {
      if (this.show) {
        this.show = false
      }
    },
    async logout(){
        this.$auth.logout()
        .then(response => console.log(response))
        .catch(e => this.error = e.response.data.message)
    }
  }
}
</script>

<style scoped>
.navigation-drawer {
	 transform: translateX(calc(-100% - 30px));
	 transition-duration: 0.2s;
	 transition-property: transform;
	 transition-timing-function: theme('transitionTimingFunction.ease-in-out-material-sharp');
	 bottom: 0; /*theme('spacing.16');*/
	 top: 0; /*theme('spacing.16');*/
}
 @screen lg {
	 top: theme('spacing.24');
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
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

/* active link */
.navigation-drawer a.nuxt-link-exact-active {
    @apply text-pink-500 border-b border-pink-500
}
</style>
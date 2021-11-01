<template>
  <button class="relative overflow-hidden px-3 lg:px-4 flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-900 rounded h-10 outline-none ease-linear transform active:scale-95 transition-transform duration-100" @click="toggleDarkTheme">
    <span class="relative overflow-hidden w-5 h-5 flex items-center justify-center">
      <MoonIcon class="w-5 h-5 absolute" :class="$colorMode.preference === 'light' ? 'show' : 'hide'" />
      <SunIcon class="w-5 h-5 absolute" :class="$colorMode.preference === 'dark' ? 'show' : 'hide'" />
    </span>
    <div class="hidden lg:inline-block ms-2">
      <transition name="from-bottom-to-bottom" mode="out-in">
        <span v-if="$colorMode.preference === 'light'" key="dark" class="inline-block font-medium">
          {{ $t("common.dark") }}
        </span>
        <span v-else-if="$colorMode.preference === 'dark'" key="light" class="inline-block font-medium">
          {{ $t("common.light") }}
        </span>
      </transition>
    </div>
  </button>
</template>

<script>
  export default {
    components: {
      SunIcon: () => import("~/assets/icons/sun.svg?inline"),
      MoonIcon: () => import("~/assets/icons/moon.svg?inline"),
    },
    props: [],
    data() {
      return {
        //
      };
    },
    methods: {
      toggleDarkTheme() {
        this.$colorMode.preference = this.$colorMode.preference === "light" ? "dark" : "light";
      },
    },
  };
</script>

<style lang="css" scoped>
  button {
    outline: none;
  }

  .show {
    animation: show-icon 300ms forwards;
  }

  .hide {
    animation: hide-icon 300ms forwards;
  }

  @keyframes show-icon {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes hide-icon {
    from {
      opacity: 1;
      transform: scaleY(1);
    }

    to {
      opacity: 0;
      transform: scaleY(0);
    }
  }

  .from-bottom-to-bottom-enter-active {
    opacity: 1;
    transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .from-bottom-to-bottom-leave-active {
    opacity: 1;
    transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .from-bottom-to-bottom-enter {
    opacity: 0;
    transform: scaleY(0);
  }

  .from-bottom-to-bottom-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
</style>

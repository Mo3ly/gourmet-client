<template>
  <div class=" min-h-screen flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-20 w-auto" src="~/static/images/logo/logo.svg" alt="gourmet" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-400">
          {{ $t("login.title") }}
        </h2>
      </div>
      <div class="" v-if="error">
        {{ error }}
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" :placeholder="$t('login.email')" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" :placeholder="$t('login.password')" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <nuxt-link :to="localePath('/register')" class="font-medium text-pink-600 hover:text-pink-500">
              {{ $t("login.register") }}
            </nuxt-link>
          </div>

          <div class="text-sm">
            <nuxt-link :to="localePath('/recover')" class="font-medium text-pink-600 hover:text-pink-500">
              {{ $t("login.recover") }}
            </nuxt-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i class="h-5 w-5 gd-icons icons-lock  text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
            </span>
            {{ $t("login.login") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "auth",
    transition: "slide-bottom",
    data() {
      return {
        email: "",
        password: "",
        error: null,
      };
    },
    methods: {
      async login() {
        this.$nuxt.$loading.start();
        //this.loading = false
        this.$auth
          .loginWith("laravelSanctum", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((r) => (r.status == 201 ? this.$swal({ icon: "success", text: "Logged in successfully!", timer: 3000, timerProgressBar: true }) : null))
          .catch((e) => this.$swal({ icon: "error", text: e.response.data.errors[0][0], timer: 3000, timerProgressBar: true }));
      },
    },
    beforeCreate() {
      if (this.$auth.loggedIn) this.$router.push({ name: "home" });
    },
    head() {
      let name = this.$t("name");
      let title = this.$t("login.meta.title");
      let description = this.$t("login.meta.description");
      return {
        title: title,
        titleTemplate: "%s — " + name,
        meta: [
          {
            hid: "description",
            name: "description",
            content: description,
          },
          // Open Graph
          {
            hid: "og:site_name",
            property: "og:site_name",
            content: name,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: title + " — " + name,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: description,
          },
          // Twitter Card
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: title + " — " + name,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: description,
          },
        ],
      };
    },
  };
</script>

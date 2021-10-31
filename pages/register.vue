<template>
  <div class="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-20 w-auto" src="~/static/images/logo/logo.svg" alt="gourmet" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-400">
          Create an account
        </h2>
        <span class="text-center text-gray-900 dark:text-gray-400 block">This feature is disabled during demo.</span>
      </div>
      <div class="" v-if="error">
        {{ error }}
      </div>
      <form class="mt-8 space-y-6 opacity-25" @submit.prevent="register" method="POST" disabled="true">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" v-model="username" name="username" type="text" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Username" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-800 dark:border-gray-600 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-800 dark:border-gray-600 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label for="password-repeat" class="sr-only">Password</label>
            <input id="password-repeat" name="password-repeat" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-800 dark:border-gray-600 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password repeat" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-400">
              Agree with our policy.
            </label>
          </div>

          <div class="text-sm">
            <nuxt-link :to="localePath('/login')" class="font-medium text-pink-600 hover:text-pink-500">
              Already have an accoun, login?
            </nuxt-link>
          </div>
        </div>

        <div>
          <button disabled="true" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i class="h-5 w-5 gd-icons icons-lock  text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "auth",
    data() {
      return {
        username: "",
        email: "",
        password: "",
        error: null,
      };
    },
    mounted() {
      this.$axios.$get("/sanctum/csrf-cookie");
    },
    methods: {
      async register() {
        this.$axios
          .post("/api/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          })
          .then((r) => (this.error = r.response.data.message))
          .catch((e) => (this.error = e.response.data.message));
      },
    },
    beforeCreate() {
      if (this.$auth.loggedIn) this.$router.push({ path: "/" });
    },
  };
</script>

<template>
  <div class=" min-h-screen flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-20 w-auto" src="~/static/images/logo/logo.svg" alt="gourmet" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
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
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <nuxt-link :to="localePath('/register')" class="font-medium text-pink-600 hover:text-pink-500">
              Create an account?
            </nuxt-link>
          </div>

          <div class="text-sm">
            <nuxt-link to="#" class="font-medium text-pink-600 hover:text-pink-500">
              Forgot your password?
            </nuxt-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i class="h-5 w-5 gd-icons icons-lock  text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
            </span>
            Sign in
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
          .then(this.$swal({ icon: "success", text: "Logged in successfully!", timer: 3000, timerProgressBar: true }))
          .catch((e) => (this.error = e.response.data.errors[0][0]));
      },
    },
    beforeCreate() {
      if (this.$auth.loggedIn) this.$router.push({ name: "home" });
    },
  };
</script>

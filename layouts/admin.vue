<template>
  <div>
    <div class="flex h-screen">
      <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

      <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex items-center justify-center mt-8">
          <div class="flex items-center">
            <nuxt-link aria-current="page" class="block active" :to="localePath('/')" style="outline: none;">
              <img class="w-20" src="~/static/images/logo/logo.svg" alt="Gouremnt logo" />
            </nuxt-link>
            <span class="text-white text-2xl mx-2 font-semibold">{{ $t("name") }}</span>
          </div>
        </div>

        <nav class="mt-10">
          <h3 class="text-xs uppercase text-gray-500 font-semibold pl-3">Pages</h3>
          <ul class="mt-3">
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-gray-900">
              <nuxt-link aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 hover:text-gray-200 active" :to="localePath('/admin')" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-400 text-blue-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path>
                    <path class="fill-current text-gray-600 text-blue-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path>
                    <path class="fill-current text-gray-400 text-blue-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path>
                  </svg>
                  <span class="text-sm font-medium">Dashboard</span>
                </div>
              </nuxt-link>
            </li>

            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link :to="localePath('/admin/bookings')" aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <circle class="fill-current text-gray-400 false" cx="18.5" cy="5.5" r="4.5"></circle>
                    <circle class="fill-current text-gray-600 false" cx="5.5" cy="5.5" r="4.5"></circle>
                    <circle class="fill-current text-gray-600 false" cx="18.5" cy="18.5" r="4.5"></circle>
                    <circle class="fill-current text-gray-400 false" cx="5.5" cy="18.5" r="4.5"></circle>
                  </svg>
                  <span class="text-sm font-medium">Bookings</span>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" :to="localePath('/admin/orders')" style="outline: none;">
                <div class="flex items-center justify-between">
                  <div class="flex flex-grow">
                    <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path class="fill-current text-gray-400 false" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"></path>
                      <path class="fill-current text-gray-700 false" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"></path>
                      <path class="fill-current text-gray-600 false" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"></path>
                    </svg>
                    <span class="text-sm font-medium">Orders</span>
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link :to="localePath('/admin/tables')" aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-600 false" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"></path>
                    <path class="fill-current text-gray-600 false" d="M1 1h22v23H1z"></path>
                    <path class="fill-current text-gray-400 false" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"></path>
                  </svg>
                  <span class="text-sm font-medium">Tables</span>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" :to="localePath('/admin/menu')" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-600 false" d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"></path>
                    <path class="fill-current text-gray-400 false" d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"></path>
                  </svg>
                  <span class="text-sm font-medium">Menu</span>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link :to="localePath('/admin/feedbacks')" aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-600 false" d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"></path>
                    <path class="fill-current text-gray-400 false" d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"></path>
                  </svg>
                  <span class="text-sm font-medium">Feedbacks</span>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link :to="localePath('/admin/messages')" aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-600 false" d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"></path>
                    <path class="fill-current text-gray-400 false" d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"></path>
                  </svg>
                  <span class="text-sm font-medium">Messages</span>
                </div>
              </nuxt-link>
            </li>
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 false">
              <nuxt-link :to="localePath('/admin/qrcode')" aria-current="page" class="block text-gray-200 hover:text-white transition duration-150 false active" style="outline: none;">
                <div class="flex flex-grow">
                  <svg class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path class="fill-current text-gray-600 false" d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"></path>
                    <path class="fill-current text-gray-400 false" d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"></path>
                    <path class="fill-current text-gray-600 false" d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"></path>
                    <path class="fill-current text-gray-400 false" d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"></path>
                  </svg>
                  <span class="text-sm font-medium">QR Codes</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-blue-800">
          <div class="flex items-center">
            <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <!-- <div class="relative mx-4 lg:mx-0">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>

              <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-blue-600" type="text" placeholder="Search" />
            </div> -->
          </div>

          <div class="flex items-center">
            <div class="relative">
              <button @click="notificationOpen = !notificationOpen" class="flex mx-4 text-gray-600 focus:outline-none">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div v-if="notificationOpen" @click="notificationOpen = false" class="fixed inset-0 h-full w-full z-10"></div>

              <div v-if="notificationOpen" class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10" style="width: 20rem">
                <div v-if="notifications.length > 0">
                  <a href="#" v-for="notification in notifications" :key="notification.id" class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2">
                    <img class="h-8 w-8 rounded-full object-cover mx-1" :src="notification.image" alt="avatar" />
                    <div v-html="notification.content"></div>
                  </a>
                </div>
                <div v-else>
                  <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2">
                    <p class="text-sm mx-2">There is no new notifications at the moment!</p>
                  </a>
                </div>
              </div>
            </div>

            <div class="relative">
              <button @click="dropdownOpen = !dropdownOpen" class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                <!-- <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80" alt="Your avatar" /> -->
                <div class="h-full w-full bg-gray-300"><i class="gd-icons icon-single-02 text-gray-800"></i></div>
              </button>

              <div v-if="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>

              <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                <nuxt-link :to="localePath('/')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white">Return to home</nuxt-link>
                <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white">Logout</a>
              </div>
            </div>
          </div>
        </header>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div class="container mx-auto px-6 py-8">
            <nuxt />
          </div>
        </main>
      </div>
    </div>
    <audio type="audio/mpeg" ref="notificationAudio" src="http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"></audio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sidebarOpen: false,
        dropdownOpen: false,
        notificationOpen: false,
        notifications: [
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80",
            content: `<p class="text-sm mx-2"><span class="font-bold" href="#">Guest</span> made an order at <b>21</b> table. 3h</p>`,
          },
        ],
      };
    },
    methods: {
      async logout() {
        this.$auth
          .logout()
          .then((response) => console.log(response))
          .catch((e) => (this.error = e.response.data.message));
      },
      notificationClip() {
        this.$refs.notificationAudio.addEventListener("canplaythrough", () => {
          this.$refs.notificationAudio.play();
        });
      },
    },
    mounted() {
      // orders
      this.$echo.channel("gourmet-orders").listen("OrderReceived", (response) => {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          html: `New Order #<b>${response.order_id}</b> for table ${response.table}.`,
        });
        this.notificationClip();
      });
      // bookings
      this.$echo.channel("gourmet-bookings").listen("BookingReceived", (response) => {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          html: `New booking #<b>${response.id}</b> for Client ${response.name}.`,
        });
        this.notificationClip();
      });
    },
    watch: {
      "$route.path"() {
        if (this.sidebarOpen) {
          this.sidebarOpen = !this.sidebarOpen;
        }
      },
    },
  };
</script>

<style scoped>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s;
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
  }

  .layout-enter-active,
  .layout-leave-active {
    transition: opacity 0.5s;
  }
  .layout-enter,
  .layout-leave-to {
    opacity: 0;
  }

  .slide-bottom-enter-active,
  .slide-bottom-leave-active {
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .slide-bottom-enter,
  .slide-bottom-leave-to {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }
  .bounce-enter-active {
    transform-origin: top;
    animation: bounce-in 0.8s;
  }
  .bounce-leave-active {
    transform-origin: top;
    animation: bounce-out 0.5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(0);
    }
  }
</style>

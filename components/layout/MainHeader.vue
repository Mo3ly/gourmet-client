<template>
        <div>
          <div class="relative pt-7 px-4 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span class="sr-only">Workflow</span>
                    <img v-if="!showSlimLogo" class="lg:mt-12 md:mt-12 sm:mt-12  z-10 relative w-20 animate__animated animate__backInDown" src="~/static/images/logo/logo.png" />
                    <img v-if="showSlimLogo" class=" animate__animated animate__backInDown" src="~/static/images/logo/logo-text.png" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <div class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                      <span class="sr-only">Open main menu</span>
                      <!-- <MenuIcon class="h-6 w-6" aria-hidden="true" /> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 animate__animated animate__zoomInDown">
                <NuxtLink :to="link.href" v-for="link in navigation" :key="link.name" class="font-medium text-gray-500 hover:text-gray-900"><i :class="link.icon"></i> {{ link.name }}</NuxtLink>
                <a href="#" class="font-medium text-pink-600 hover:text-pink-500 border border-l-4 rounded border-pink-600 p-2">Visit Us!</a>
              </div>
            </nav>
          </div>
        </div>
</template>

<script>
const navigation = [
  { name: 'Resturants', icon:"gd-icons icon-bullet-list-67", href: 'resturants' },
  { name: 'Events', icon:"", href: '#' },
  { name: 'Gallery', icon:"", href: '#' },
  { name: 'About us', icon:"", href: '#' },
];

export default {
  props:{
    showSlimLogo:{
        type: Boolean,
        default: false
    }
  },
  components: {
  },
  methods: {
  },
  data(){
      return {
          navigation,
      }
  }
}
</script>
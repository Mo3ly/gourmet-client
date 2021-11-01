<template>
  <div>
    <!-- <layout-banner>
            <template v-slot:breadcrumb>
              <span class="ps-3">Gallery</span>
            </template>
            <template v-slot:content>
                <span>Gourmet District Gallery</span>
            </template>
        </layout-banner> -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- <div class="relative bg-white overflow-hidden">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Gorment District
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              The secret of Happiness in Gourmet District is the food but we didn’t forget about the importance of entertainment. Music feeds the soul and the smile on your faces is our daily motivation.
            </p>
          </div>
          <div>
            <div class="mt-10">
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new1.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new2.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new8.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new4.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new5.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new6.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <img src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new7.jpg" alt="" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nuxt-link :to="localePath('/resturants')" class="inline-block text-center bg-pink-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700">
                Our Resturants
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <!-- <a href="/" aria-label="Item" class="mr-3">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50">
              <svg class="w-12 h-12 text-pink-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </a> -->
          <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            <span class="inline-block mb-2">{{ $t("gallery.GDgallery") }}</span>
            <div class="h-1 ms-auto duration-300 origin-left transform bg-pink-400 scale-x-30 group-hover:scale-x-100"></div>
          </h2>
        </div>
        <p class="w-full text-gray-700 dark:text-gray-500 lg:text-sm lg:max-w-md">"{{ $t("gallery.description") }}"</p>
      </div>
      <div class="relative">
        <components-gallery />
      </div>
      <div class="text-center">
        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-deep-purple-800">
          {{ $t("common.more") }}
          <svg class="inline-block w-3 ms-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  const gallery = [
    {
      image: "",
      alt: "",
      src: "",
    },
  ];

  export default {
    data() {
      return {
        gallery,
      };
    },
    head() {
      let name = this.$t("name");
      let title = this.$t("gallery.meta.title");
      let description = this.$t("gallery.meta.description");
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

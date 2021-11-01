<template>
  <div>
    <layout-banner>
      <template v-slot:breadcrumb>
        <span class="ps-3">{{ $t("events.events") }}</span>
      </template>
      <template v-slot:content>
        <span>{{ $t("events.bannerTitle") }}</span>
      </template>
    </layout-banner>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none md:mb-6 group">
          <span class="inline-block mb-1 sm:mb-4">
            {{ $t("events.events") }} &<br class="hidden md:block" />
            {{ $t("events.entertainment") }}
          </span>
          <div class="h-1 ms-auto duration-300 origin-left transform bg-pink-400 scale-x-30 group-hover:scale-x-100"></div>
        </h2>
        <p class="text-gray-700 dark:text-gray-500 lg:text-sm lg:max-w-md">"{{ $t("events.description") }}"</p>
      </div>
      <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a v-for="event in events" :key="event.name" href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" :src="event.imageSrc" :alt="event.imageAlt" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p class="text-sm font-medium tracking-wide text-white">
                <span class="block font-bold"> {{ event.name }} </span>
                {{ event.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center">
        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-700">
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
  const events = [
    {
      name: "Kids day",
      description: "An open day for your kids",
      imageSrc: "https://www.g-d.qa/wp-content/uploads/2021/07/event6.jpg",
      imageAlt: "event 1",
      href: "#",
    },
    {
      name: "Kids day",
      description: "An open day for your kids",
      imageSrc: "https://www.g-d.qa/wp-content/uploads/2021/07/event1.jpg",
      imageAlt: "event 1",
      href: "#",
    },
    {
      name: "Kids day",
      description: "An open day for your kids",
      imageSrc: "https://www.g-d.qa/wp-content/uploads/2021/07/event4.jpg",
      imageAlt: "event 1",
      href: "#",
    },
    {
      name: "Kids day",
      description: "An open day for your kids",
      imageSrc: "https://www.g-d.qa/wp-content/uploads/2021/07/event5.jpg",
      imageAlt: "event 1",
      href: "#",
    },
  ];

  export default {
    data() {
      return {
        events,
      };
    },
    head() {
      let name = this.$t("name");
      let title = this.$t("events.meta.title");
      let description = this.$t("events.meta.description");
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

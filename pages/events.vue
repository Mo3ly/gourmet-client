<template>
    <div>
        <layout-banner>
            <template v-slot:breadcrumb>
              <span class="ps-3">Event</span>
            </template>
            <template v-slot:content>
                <span>Events & Entertainment</span>
            </template>
        </layout-banner>

          <div class="bg-gray-100 bg-opacity-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto py-12 sm:py-16 lg:py-16 lg:max-w-none">
                <!-- <h2 class="text-2xl font-extrabold text-gray-900">Events</h2> -->

                <div class="mt-2 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                <div v-for="callout in callouts" :key="callout.name" class="group relative">
                    <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-full h-full object-center object-cover" />
                    </div>
                    <h3 class="mt-6 text-sm text-gray-500">
                    <a :href="callout.href">
                        <span class="absolute inset-0" />
                        {{ callout.name }}
                    </a>
                    </h3>
                    <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
                </div>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>


<script>
const callouts = [
  {
    name: 'Kids day',
    description: 'An open day for your kids',
    imageSrc: 'https://www.g-d.qa/wp-content/uploads/2021/07/event6.jpg',
    imageAlt: 'event 1',
    href: '#',
  },
  {
    name: 'Kids day',
    description: 'An open day for your kids',
    imageSrc: 'https://www.g-d.qa/wp-content/uploads/2021/07/event1.jpg',
    imageAlt: 'event 1',
    href: '#',
  },
  {
    name: 'Kids day',
    description: 'An open day for your kids',
    imageSrc: 'https://www.g-d.qa/wp-content/uploads/2021/07/event4.jpg',
    imageAlt: 'event 1',
    href: '#',
  },
]

export default {
  data() {
    return {
      callouts,
    }
  },
}
</script>

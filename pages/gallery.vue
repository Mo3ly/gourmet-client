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
        <div class="relative bg-white overflow-hidden">
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
                    <!-- Decorative image grid -->
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
]

export default {
    data() {
        return {
            gallery
        }
    }
}
</script>
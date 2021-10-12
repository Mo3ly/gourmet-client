<template>
    <div>
        <layout-banner>
            <template v-slot:breadcrumb>
              <span class="ps-3">About us</span>
            </template>
            <template v-slot:content>
                <span>About Gourmet District</span>
            </template>
        </layout-banner>

        <div class="container mx-auto px-4 mt-6">
            <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new2.jpg">
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div class="md:pr-12">
                        <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"><i class="gd-icons icon-book-bookmark gd-icons-lg"></i></div>
                        <h3 class="text-3xl font-semibold">Gourmet district</h3>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Establish at 2019, Gourmet District is a food district that is comprised of a total of variety of cuisines from all over the world – from European, to Middle Eastern to Asian.

                            For the first time in Doha, you can enjoy food exploration in just one place plus you get to enjoy the perfect European vibe from every corner plus a view of the West Bay Sea.
                        </p>
                        <ul class="list-none mt-6">
                        <li class="py-2">
                            <div class="flex items-center">
                                <div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span></div>
                                <div>
                                    <h4 class="text-blueGray-500">Very special place</h4>
                                </div>
                            </div>
                        </li>
                        <li class="py-2">
                            <div class="flex items-center">
                                <div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span></div>
                                <div>
                                    <h4 class="text-blueGray-500">Amazing variety of food</h4>
                                </div>
                            </div>
                        </li>
                        <li class="py-2">
                            <div class="flex items-center">
                                <div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span></div>
                                <div>
                                    <h4 class="text-blueGray-500">First food court in qatar</h4>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
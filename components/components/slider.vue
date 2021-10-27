<template>
  <div class="">
    <Slider animation="normal" v-model="sliderValue" :duration="5000" :speed="2000" :control-btn="false" :touch="true" :indicators="'center'">
      <SliderItem v-for="(i, index) in list" :key="index" @click="changeIndex(i)">
        <div class="bg-white- dark:bg-gray-800 w-full mx-auto p-8 mb-3">
          <div class="flex items-center md:items-start flex-col md:flex-row justify-center">
            <a href="#" class="block relative">
              <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" class="mx-auto object-cover rounded-full h-40 w-40 " />
            </a>
            <div class="w-full md:w-2/3">
              <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
                <span class="font-bold text-indigo-500">
                  “
                </span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                <span class="font-bold text-indigo-500">
                  ”
                </span>
              </p>
              <div class="flex mt-8 items-center justify-center">
                <span class="font-semibold text-indigo-500 mr-2 text-lg"> Jean Miguel {{ index }} </span>
                <span class="text-gray-400 text-xl font-light">
                  /
                </span>
                <span class="text-gray-400 text-md ml-2">
                  User of tail-kit
                </span>
              </div>
            </div>
          </div>
        </div>
      </SliderItem>
      <!-- <SliderItem v-for="(i, index) in list" :key="index" @click="changeIndex(1)" :style="i">
      <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
    </SliderItem> -->
    </Slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        sliderValue: 0,
      };
    },
    methods: {
      changeIndex(index) {
        this.sliderValue = index;
      },
    },
    mounted() {
      setTimeout(
        () =>
          (this.list = [
            {
              backgroundColor: "#3f51b5",
              width: "100%",
              height: "100%",
            },
            {
              backgroundColor: "#eee",
              width: "100%",
              height: "100%",
            },
            {
              backgroundColor: "#f44336",
              width: "100%",
              height: "100%",
            },
            {
              backgroundColor: "#eee",
              width: "100%",
              height: "100%",
            },
          ]),
        2000
      );
    },
  };
</script>

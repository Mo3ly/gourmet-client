<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-bold mb-3">QR Codes</h3>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="shadow sm:rounded-md sm:overflow-hidden md:col-span-1 bg-white">
        <div class="px-4 py-5 space-y-6 sm:p-6">
          <div class="col-span-6 sm:col-span-4">
            <label for="table_number" class="block text-sm font-medium text-gray-700">Table number</label>
            <input type="number" min="1" max="200" v-model="tableNumber" name="table_number" id="table_number" autocomplete="off" :class="[tableNumber === '' ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '']" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div class="col-span-6 sm:col-span-3 mt-3">
            <label for="resturant_name" class="block text-sm font-medium text-gray-700">Resturant</label>
            <select v-model="selectedResturant" id="resturant_name" name="resturant_name" autocomplete="off" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option v-for="resturant in resturants" :key="resturant">
                {{ resturant }}
              </option>
            </select>
          </div>

          <div>
            <span class="font-bold text-gray-800">Genereted URL:</span> <a :href="QRCode" target="_blank"> {{ QRCode }} </a>
          </div>

          <div class="py-3 text-right mt-2 space-s-3">
            <button @click="print" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Print
            </button>
            <!-- 
                <button @click="save" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Download
                </button>
              -->
          </div>
        </div>
      </div>
      <div class="shadow sm:rounded-md sm:overflow-hidden md:col-span-1 mt-5 md:mt-0 bg-white px-3">
        <div class="px-5 py-5 space-y-6 sm:p-6">
          <div class="text-lg text-gray-800 font-semibold">Printing guide for chrome:</div>
          <ul class="list-disc text-gray-800 ">
            <li>
              After clicing the print button the print dialog will appear.
            </li>
            <li>
              Click
              <b>"more settings"</b>.
            </li>
            <li>
              Tick
              <b>"Background graphics"</b>
              in options section.
            </li>
            <li>
              UnTick
              <b>"Headers and footers"</b>
              in options section.
            </li>
          </ul>
        </div>
      </div>
      <div class="shadow sm:rounded-md sm:overflow-hidden md:col-span-1 mt-5 md:mt-0">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div id="QRPrint" class="flex flex-wrap items-center justify-center">
            <div class="flex-shrink-0 _m-6 relative overflow-hidden bg-pink-500 _rounded-lg max-w-xs _shadow-lg">
              <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div class="relative pt-10 px-10 flex items-center justify-center">
                <vue-qr class="rounded" :logoSrc="require('~/static/images/logo/logo.svg')" :text="QRCode" :logoScale="0.2" :margin="5" :size="200" :colorDark="'#000000'" :colorLight="'#fce7f3'" :backgroundColor="'#fce7f3'" :logoBackgroundColor="'#fce7f3'"></vue-qr>
              </div>
              <div class="relative text-white text-center px-7 pb-5 mt-5">
                <span class="block opacity-75 -mt-2" v-if="this.selectedResturant !== 'resturants'"> {{ selectedResturant }}</span>
                <div class="bg-white  uppercase rounded-full text-pink-500 text-lg font-bold px-3 py-2 leading-none">Table #{{ tableNumber }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: "https://g-d.app/", //process.env.URL,
        resturants: ["resturants"], //"Little Italy", "Melt", "Dose Caffee", "Safarjal"
        selectedResturant: "resturants",
        tableNumber: 1,
      };
    },
    computed: {
      QRCode: function() {
        return this.selectedResturant === null || this.selectedResturant === "resturants" ? `${this.url}resturants?table=${this.tableNumber}` : `${this.url}resturant/${this.selectedResturant}?table=${this.tableNumber}`;
      },
    },
    methods: {
      async print() {
        await this.$htmlToPaper("QRPrint");
      },
    },
  };
</script>

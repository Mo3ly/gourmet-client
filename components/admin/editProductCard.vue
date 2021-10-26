<template>
  <div class="p-2 bg-gray-200 mb-3 rounded">
    <div class="text-black mb-2 font-bold">Edit {{ product.name_en }}</div>

    <div class="grid grid-cols-6 gap-6 mt-2">
      <div class="col-span-6 sm:col-span-3">
        <label for="name_en" class="block text-sm font-medium text-gray-700"> Name <span class="text-blue-700 text-xs">English</span> </label>
        <input type="text" v-model="name_en" name="name_en" id="name_en" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="name_ar" class="block text-sm font-medium text-gray-700"> Name <span class="text-blue-700 text-xs">Arabic</span> </label>
        <input type="text" v-model="name_ar" name="name_ar" id="name_ar" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
    </div>
    <div class="grid grid-cols-6 gap-6 mt-2">
      <div class="col-span-6 sm:col-span-3">
        <label for="price" class="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input type="number" v-model="price" name="price" id="price" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
      <div class="col-span-6 sm:col-span-3 ">
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Options
        </label>
        <div class="items-center flex space-s-4">
          <div class="flex items-center">
            <input id="isNew" name="isNew" v-model="isNew" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label for="isNew" class="ml-3 block text-sm font-medium text-gray-700">
              New
            </label>
          </div>
          <div class="flex items-center">
            <input id="isSpecial" name="isSpecial" v-model="isSpecial" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label for="isSpecial" class="ml-3 block text-sm font-medium text-gray-700">
              Special
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <label for="desc_en" class="block text-sm font-medium text-gray-700"> Description <span class="text-blue-700 text-xs">English</span> </label>
      <div class="mt-1">
        <textarea id="desc_en" v-model="desc_en" name="desc_en" rows="2" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description" />
      </div>
    </div>
    <div class="mt-4">
      <label for="desc_ar" class="block text-sm font-medium text-gray-700"> Description <span class="text-blue-700 text-xs">Arabic</span> </label>
      <div class="mt-1">
        <textarea id="desc_ar" v-model="desc_ar" name="desc_ar" rows="2" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description" />
      </div>
    </div>

    <div class="mt-4" @dragover.prevent @drop="onDrop">
      <label class="block text-sm font-medium text-gray-700">
        Resturant photo
      </label>
      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div class="space-y-1 text-center">
          <svg v-if="!previewImage" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <img v-else :src="previewImage" class="mx-auto h-20" />
          <div class="flex text-sm text-gray-600">
            <label v-if="!previewImage" for="image" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
              <span>Upload a file</span>
              <input id="image" @change="loadImage" accept="image/png, image/gif, image/jpeg, image/webp" name="image" type="file" class="sr-only" required="true" />
            </label>
            <p v-if="!previewImage" class="pl-1">or drag and drop</p>
            <button
              v-if="previewImage"
              @click="
                previewImage = null;
                image = null;
              "
              class="py-1 px-2 mx-auto text-blue-600 border border-blue-600 hover:text-blue-500 hover:border-blue-500 rounded"
            >
              Remove
            </button>
          </div>
          <p class="text-xs text-gray-500">
            PNG, JPG, GIF, WEBP up to 2MB
          </p>
          <p v-if="progress > 0" class="text-xs text-blue-600">Upload progress : {{ this.progress }}%</p>
        </div>
      </div>
    </div>
    <div class="px-1 py-3 sm:flex sm:flex-row-reverse">
      <button @click="saveProduct" type="button" ref="editProductButton" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
        Save
      </button>
      <button @click="hideMethod" type="button" class="mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["product", "hideMethod"],
    data() {
      return {
        progress: 0,
        name_en: this.product.name_en,
        name_ar: this.product.name_ar,
        desc_ar: this.product.desc_ar,
        desc_en: this.product.desc_en,
        price: this.product.price,
        isNew: this.product.isNew,
        isSpecial: this.product.isSpecial,
        image: null,
        previewImage: null,
      };
    },
    mounted() {
      this.$axios.$get("/sanctum/csrf-cookie");
    },
    methods: {
      async saveProduct() {
        this.$swal
          .fire({
            title: `Do you want to save the edits for (${this.product.name_en})?`,
            showCancelButton: true,
            confirmButtonText: "Save",
          })
          .then((result) => {
            if (result.isConfirmed) this.updateProduct();
          });
      },
      async updateProduct() {
        this.$refs.editProductButton.disabled = true;

        const config = {
          headers: { "content-type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => (this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)),
        };

        let formData = new FormData();

        formData.append("product_id", this.product.id);
        formData.append("name_en", this.name_en);
        formData.append("name_ar", this.name_ar);
        formData.append("desc_en", this.desc_en);
        formData.append("desc_ar", this.desc_ar);
        formData.append("price", this.price);
        formData.append("isNew", this.isNew);
        formData.append("isSpecial", this.isSpecial);
        if (this.image) formData.append("image", this.image);

        this.$axios
          .post("/api/products/update", formData, config)
          .then((r) => {
            if (r.data.success) {
              this.progress = 0;
              this.$swal.fire({ icon: "success", text: r.data.success, timer: 3000, timerProgressBar: true });
              this.$router.app.refresh();
              this.reset();
            }
            this.$refs.editProductButton.disabled = false;
          })
          .catch((e) => {
            this.progress = 0;
            if (e.response.status == 422) {
              this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
            }

            this.$refs.editProductButton.disabled = false;
          });
      },
      loadImage(e) {
        const image = e.target.files[0];
        const reader = new FileReader();
        this.image = image;
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
      },
      onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        const image = e.dataTransfer.files[0];
        this.image = image;
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
      },
      reset() {
        this.name_en = null;
        this.name_ar = null;
        this.desc_en = null;
        this.desc_ar = null;
        this.price = null;
        this.isNew = null;
        this.isSpecial = null;
        this.image = null;
        this.previewImage = null;
        this.hideMethod();
      },
    },
  };
</script>

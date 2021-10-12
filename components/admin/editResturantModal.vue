<template>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
            <transition enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div @click="hideModal" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>
            </transition>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <transition enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                            Edit {{ resturant.name_en }}
                        </h3>
                        <div class="grid grid-cols-6 gap-6 mt-2">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="name_en" class="block text-sm font-medium text-gray-700">
                                Name <span class="text-blue-700 text-xs">English</span>
                            </label>
                            <input v-model="name_en" type="text" placeholder="Name (english)"  name="name_en" id="name_en" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required="true"/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="name_ar" class="block text-sm font-medium text-gray-700">
                                Name <span class="text-blue-700 text-xs">Arabic</span>
                            </label>
                            <input v-model="name_ar" type="text" placeholder="Name (arabic)" name="name_ar" id="name_ar" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required="true"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="category" class="block text-sm font-medium text-gray-700">
                            Category 
                        </label>
                        <input v-model="category" type="text" placeholder="Category" name="category" id="category" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required="true"/>
                    </div>
                    <div class="mt-4">
                        <label for="desc_en" class="block text-sm font-medium text-gray-700">
                            Description <span class="text-blue-700 text-xs">English</span>
                        </label>
                        <div class="mt-1">
                            <textarea v-model="desc_en" id="desc_en" name="desc_en" rows="3" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description (english)" required="true"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="desc_ar" class="block text-sm font-medium text-gray-700">
                            Description <span class="text-blue-700 text-xs">Arabic</span>
                        </label>
                        <div class="mt-1">
                            <textarea v-model="desc_ar" id="desc_ar" name="desc_ar" rows="3" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description (arabic)" required="true"/>
                        </div>
                    </div>
                    <div class="mt-4"  @dragover.prevent @drop="onDrop">
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
                                <input id="image" @change="loadImage" accept="image/png, image/gif, image/jpeg, image/webp" name="image" type="file" class="sr-only" required="true"/>
                            </label>
                            <p v-if="!previewImage" class="pl-1">or drag and drop</p>
                            <button v-if="previewImage" @click="previewImage = null; image = null" class="py-1 px-2 mx-auto text-blue-600 border border-blue-600 hover:text-blue-500 hover:border-blue-500 rounded">Remove</button>
                            </div>
                            <p class="text-xs text-gray-500">
                            PNG, JPG, GIF, WEBP up to 2MB
                            </p>
                            <p v-if="progress > 0" class="text-xs text-blue-600">Upload progress : {{this.progress}}%</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="editResturant" ref="editResturantButton" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Edit
                    </button>
                    <button @click="hideModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </div>
            </transition>
        </div>
</template>

<script>
export default {
    props: ['resturant','hideModal'],
    data() {
        return {
            progress: 0,
            name_en: this.resturant.name_en,
            name_ar: this.resturant.name_ar,
            desc_en: this.resturant.desc_en,
            desc_ar: this.resturant.desc_ar,
            category: this.resturant.genere,
            image: null,
            previewImage: null,
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods: {
        async editResturant(){
        this.$refs.editResturantButton.disabled = true;

        const config = {
          headers: { 'content-type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        };

        let formData = new FormData();
        
        formData.append('resturant_id', this.resturant.id);
        formData.append('name_en', this.name_en);
        formData.append('name_ar', this.name_ar);
        formData.append('desc_en', this.desc_en);
        formData.append('desc_ar', this.desc_ar);
        formData.append('category', this.category);
        if(this.image != null)
            formData.append('image', this.image);

        this.$axios.post('/api/resturants/update',formData, config)
        .then(r => {
          if(r.data.success){
            this.progress = 0;
            this.$swal.fire({icon:'success', text: r.data.success});
            this.$router.app.refresh();
            this.reset();
          }
          this.$refs.editResturantButton.disabled = false;
        })
        .catch(e => {
          this.progress = 0;
          this.previewImage = null;
          this.image = null;
          if (e.response.status == 422){
            this.$swal.fire({icon:'error', text: e.response.data.message})
          }

          this.$refs.editResturantButton.disabled = false;
        })
      },
      loadImage(e){
          const image = e.target.files[0];
          const reader = new FileReader();
          this.image = image;
          reader.readAsDataURL(image);
          reader.onload = e =>{
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
        reader.onload = e =>{
            this.previewImage = e.target.result;
        };
      },
      reset(){
        this.name_en = null;
        this.name_ar = null;
        this.desc_en = null;
        this.desc_ar = null;
        this.category = null;
        this.image = null;
        this.previewImage = null;
      }
    }
}
</script>
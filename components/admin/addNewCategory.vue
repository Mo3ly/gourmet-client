<template>
    <div class="p-2 bg-gray-200 rounded mb-3">
        <div class="text-black mb-2 font-bold">Add New Category</div>
        <div class="grid grid-cols-6 gap-6 mt-2">
            <div class="col-span-6 sm:col-span-3">
                <label for="name_en" class="block text-sm font-medium text-gray-700">
                    Name <span class="text-blue-700 text-xs">English</span>
                </label>
                <input type="text" v-model="name_en" placeholder="Name (english)" name="name_en" id="name_en" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label for="name_ar" class="block text-sm font-medium text-gray-700">
                    Name <span class="text-blue-700 text-xs">Arabic</span>
                </label>
                <input type="text" v-model="name_ar" placeholder="Name (arabic)" name="name_ar" id="name_ar" autocomplete="off" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
        </div>

        <div class="py-3 sm:flex sm:flex-row-reverse mt-2">
            <button @click="addNewCategory" type="button" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Add
            </button>
            <button @click="hideCategory" type="button" class="mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['hideCategory', 'resturant'],
    data() {
        return {
            name_en: null,
            name_ar: null,
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods: {
        addNewCategory(){
            this.$swal.fire({
                title: 'Do you want to add this new category to the menu?',
                showCancelButton: true,
                confirmButtonText: 'Add',
            }).then((result) => {
                if (result.isConfirmed){
                    this.$axios.post('/api/categories/store', {
                        resturant_id : this.resturant.id,
                        name_en : this.name_en,
                        name_ar : this.name_ar
                    })
                    .then(r => {
                        if(r.data.success){
                            this.$swal.fire({icon:'success', text: r.data.success})
                            this.$router.app.refresh();
                            this.hideCategory();
                        }
                    })
                    .catch(e => {
                        if (e.response.status == 422){
                            this.$swal.fire({icon:'error', text: e.response.data.message})
                        }
                    })
                }
            })
        },
    }
}
</script>
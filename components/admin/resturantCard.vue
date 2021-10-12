<template>
<div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out" style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o');">
    <div class="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
    <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
        <div>
            <h3 class="text-center text-gray-200 drop-shadow text-lg">
                {{ resturant.name_en }}
            </h3>
            <div class="text-center content-center text-white text-3xl mt-2 font-bold">
                <img class="rounded shadow border-2 mx-auto border-white h-24" :src="resturant.image"/>
            </div>
            <div class="flex space-x-4 mt-4">
                <button @click="showEditResturant = !showEditResturant" class="block uppercase mx-auto shadow bg-white text-blue-600 focus:shadow-outline focus:outline-none text-xs py-1 px-2 rounded font-bold">
                    Edit
                </button>
                <button @click="showResturantCategories = !showResturantCategories" class="block uppercase mx-auto shadow bg-blue-800 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white text-xs py-1 px-2 rounded font-bold">
                    Manage
                </button>
                <button @click="deleteResturant" class="block uppercase mx-auto shadow bg-white text-red-600 focus:shadow-outline focus:outline-none text-xs py-1 px-2 rounded font-bold">
                    Delete
                </button>
            </div>
        </div>
    </div>

    <!-- Edit resturant modal -->
    <div v-if="showEditResturant" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <admin-edit-resturant-modal :resturant="resturant" :hideModal="hideEditResturantModal" />
    </div>
    
    <!--  resturant categories modal -->
    <div v-if="showResturantCategories" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
            <transition enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div @click="showResturantCategories = false" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>
            </transition>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <transition enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-bold mb-5 text-gray-800" id="modal-title">
                            {{ resturant.name_en }} Menu
                        </h3>
                    
                        <!-- categories -->
                        <div v-for="category in resturant.categories" :key="category.id" >
                            <admin-resturant-category-card :category="category"/>
                        </div>

                        <!-- New category-->
                        <div @click="collapseNewCategory = !collapseNewCategory" class="relative w-full h-12 cursor-pointer mt-4 bg-cover bg-center group rounded-lg mb-3 overflow-hidden shadow-lg transition duration-300 ease-in-out" style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o');">
                            <div class="absolute inset-0 bg-red-500 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <span class="text-white text-lg font-medium">Add new category</span>
                            </div>
                        </div>
                        <!--/ New category-->

                        <!-- New category dialog -->
                        <div v-if="collapseNewCategory">
                            <admin-add-new-category :hideCategory="hideNewCategory" :resturant="resturant" />
                        </div>
                        <!--/ New category dialog -->
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="showResturantCategories = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Done
                    </button>
                    <button @click="showResturantCategories = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </div>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['resturant'],
    data() {
        return {
            showEditResturant: false,
            showResturantCategories: false,
            collapseNewCategory: false,
            collapseCategory: false,
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods: {
        async deleteResturant(){
            this.$swal.fire({
                title: `Do you want to delete ${this.resturant.name_en}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed){
                    this.$axios.post('/api/resturants/destroy', {
                        resturant_id : this.resturant.id
                    })
                    .then(r => {
                        if(r.data.success){
                            this.$swal.fire({icon:'success', text: r.data.success})
                            this.$router.app.refresh()
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
        hideNewCategory(){
            this.collapseNewCategory = false;
        },
        hideEditResturantModal(){
            this.showEditResturant = false;
        }
    }
}
</script>
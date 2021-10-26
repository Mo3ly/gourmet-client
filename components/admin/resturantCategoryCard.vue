<template>
  <div>
    <div class="relative w-full h-12 bg-cover bg-center group rounded-lg mb-3 overflow-hidden shadow-lg transition duration-300 ease-in-out" style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o');">
      <div class="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
      <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
        <span class="text-white text-lg font-medium">{{ category.name_en }} — {{ category.name_ar }}</span>
        <div class="flex space-s-2 ml-2 float-end justify-end">
          <div class="bg-white rounded px-2 flex items-center space-s-2">
            <button @click="collapseAddNewProduct = !collapseAddNewProduct" class="w-4 transform text-red-400 hover:text-red-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
            </button>

            <button @click="collapseEditCategory = !collapseEditCategory" class="w-4 transform text-red-400 hover:text-red-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>

            <button @click="deleteCategory" class="w-4 transform text-red-400 hover:text-red-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          <button @click="collapseCategory = !collapseCategory" class="w-4 transform text-white hover:text-red-500 hover:scale-110">
            ⇕
          </button>
        </div>
      </div>
    </div>

    <!-- Edit category -->
    <div v-if="collapseEditCategory">
      <admin-edit-category-card :category="category" :hideEditCategory="hideEditCategory" />
    </div>
    <!--/ Edit category -->

    <!-- Add new product -->
    <div v-if="collapseAddNewProduct">
      <admin-add-new-product :category="category" :hide="hideNewProductForm" />
    </div>
    <!--/ Add new product -->

    <!-- Products-->
    <div v-if="collapseCategory">
      <div v-for="product in category.products" :key="product.id">
        <admin-resturant-product-card :product="product" />
      </div>
    </div>
    <!-- /Products-->
  </div>
</template>

<script>
  export default {
    props: ["category"],
    data() {
      return {
        collapseCategory: false,
        collapseEditCategory: false,
        collapseAddNewProduct: false,
      };
    },
    methods: {
      deleteCategory() {
        this.$swal
          .fire({
            title: "Do you want to delete this category?",
            showCancelButton: true,
            confirmButtonText: "Delete",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$axios
                .post("/api/categories/destroy", {
                  category_id: this.category.id,
                })
                .then((r) => {
                  if (r.data.success) {
                    this.$swal.fire({ icon: "success", text: r.data.success, timer: 3000, timerProgressBar: true });
                    this.$router.app.refresh();
                  }
                })
                .catch((e) => {
                  if (e.response.status == 422) {
                    this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
                  }
                });
            }
          });
      },
      hideEditCategory() {
        this.collapseEditCategory = false;
      },
      hideNewProductForm() {
        this.collapseAddNewProduct = false;
      },
    },
  };
</script>

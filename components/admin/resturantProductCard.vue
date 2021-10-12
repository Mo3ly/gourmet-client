<template>
<div>
    <div class="py-4 flex hover:bg-gray-100 dark:hover:bg-dark-surface rounded-xl px-1">
        <div class="me-4 flex-1 flex flex-col">
            <div>
                <div class="flex justify-between text-base font-semibolds text-gray-900 dark:text-gray-100">
                    <h3>
                        {{ product.name_en}} - {{ product.name_ar }}
                    </h3>
                    <p class="ms-4 text-pink-500"> {{ product.price }} {{ $t('common.currency') }} </p>
                </div>
                <p class="mt-1 text-sm text-gray-500">
                    {{ product.desc_en }} - {{ product.desc_ar }} 
                </p>
            </div>
            <div class="flex-1 flex items-end justify-between text-sm">
                <div class="flex">
                    <svg v-if="product.isSpecial" width="30" height="32" viewBox="0 0 33 32" fill="currentColor"><path d="M16.628 1l4.24 2.589 5.03.276 1.831 4.464 3.9 3.036L30.35 16l1.278 4.635-3.899 3.036-1.83 4.464-5.03.276L16.629 31l-4.24-2.589-5.031-.276-1.83-4.464-3.9-3.036L2.907 16l-1.279-4.635 3.9-3.036 1.83-4.464 5.03-.276L16.628 1z" fill="#F7C903"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.107.146a1 1 0 011.043 0l4.025 2.458 4.779.262a1 1 0 01.87.62l1.73 4.218 3.689 2.872a1 1 0 01.35 1.055L31.387 16l1.206 4.37a1 1 0 01-.35 1.054l-3.69 2.872-1.729 4.219a1 1 0 01-.87.619l-4.78.262-4.024 2.457a1 1 0 01-1.043 0l-4.025-2.457-4.779-.262a1 1 0 01-.87-.62l-1.73-4.218-3.689-2.872a1 1 0 01-.35-1.055L1.87 16 .664 11.63a1 1 0 01.35-1.054l3.69-2.872 1.729-4.219a1 1 0 01.87-.619l4.78-.262L16.106.146zM12.388 3.59l-5.03.276-1.83 4.464-3.9 3.036L2.907 16l-1.279 4.635 3.9 3.036 1.83 4.464 5.03.276L16.628 31l4.24-2.589 5.031-.276 1.83-4.464 3.9-3.036L30.35 16l1.278-4.635-3.898-3.036-1.831-4.464-5.03-.276L16.629 1l-4.24 2.589z" fill="#fff"></path><path d="M16.174 9.876c.18-.368.73-.368.91 0l1.7 3.483a.5.5 0 00.394.272l4.009.462c.423.05.593.547.28.823l-2.956 2.615a.463.463 0 00-.151.44l.776 3.77c.082.397-.363.705-.735.508l-3.529-1.867a.524.524 0 00-.487 0l-3.529 1.866c-.373.198-.818-.11-.736-.508l.777-3.768a.463.463 0 00-.15-.441l-2.958-2.615c-.312-.276-.142-.774.281-.823l4.008-.462a.5.5 0 00.395-.272l1.7-3.483z" fill="#fff"></path></svg>
                    <svg v-if="product.isNew" width="30" height="32" viewBox="0 0 32 32" fill="currentColor"><path d="M16 1l4.24 2.589 5.03.276 1.831 4.464L31 11.365 29.722 16 31 20.635l-3.899 3.036-1.83 4.464-5.03.276L16 31l-4.24-2.589-5.03-.276-1.831-4.464L1 20.635 2.278 16 1 11.365l3.899-3.036 1.83-4.464 5.03-.276L16 1z" fill="#E74C3C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.479.146a1 1 0 011.042 0l4.025 2.458 4.78.262a1 1 0 01.87.62l1.73 4.218 3.688 2.872a1 1 0 01.35 1.055L30.76 16l1.205 4.37a1 1 0 01-.35 1.054l-3.689 2.872-1.73 4.219a1 1 0 01-.87.619l-4.779.262-4.025 2.457a1 1 0 01-1.042 0l-4.025-2.457-4.78-.262a1 1 0 01-.87-.62l-1.73-4.218-3.688-2.872a1 1 0 01-.35-1.055L1.241 16 .036 11.63a1 1 0 01.35-1.054l3.689-2.872 1.73-4.219a1 1 0 01.87-.619l4.779-.262L15.479.146zm-3.72 3.443l-5.03.276L4.9 8.329 1 11.365 2.278 16 1 20.635l3.9 3.036 1.83 4.464 5.03.276L16 31l4.24-2.589 5.03-.276 1.831-4.464L31 20.635 29.722 16 31 11.365l-3.899-3.036-1.83-4.464-5.03-.276L16 1l-4.24 2.589z" fill="#fff"></path><path d="M10.174 14.969l1.195-.32 1.312 4.897-.945.253-2.986-2.2.75 2.799-1.188.318L7 15.82l.93-.249 2.994 2.198-.75-2.8zM14.032 19.183l-1.312-4.896 3.48-.933.264.987-2.237.599.25.93 2.097-.561.263.979-2.098.562.272 1.014 2.236-.6.265.987-3.48.932zM23.424 11.419l1.209-.324-.439 5.365-1.014.272-1.822-2.66-.261 3.219-1.021.273-3.056-4.43 1.3-.348 1.845 2.834.265-3.4.883-.236 1.895 2.88.216-3.445z" fill="#fff"></path></svg>
                </div>
                <div class="flex space-s-5">
                    <button @click="deleteProduct" type="button" class=" text-pink-600 hover:text-pink-500 mb-1">
                        Delete
                    </button>
                    <button @click="collapseEditProduct = !collapseEditProduct" type="button" class=" text-pink-600 hover:text-pink-500 px-2 rounded border-pink-500 border mb-1">
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <div class="flex-shrink-1 w-24 h-24 rounded-md overflow-hidden">
            <img v-if="product.image != null" :src="product.image" :alt="product.name_en" class="w-full h-full object-center object-cover" />
            <div class="w-full h-full bg-gray-400 bg-opacity-25" />
        </div>
    </div>

    <!-- Edit product -->
    <div v-if="collapseEditProduct">
        <admin-edit-product-card :product="product" :hideMethod="hideEditProduct"/>
    </div>
</div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            collapseEditProduct: false,
        }
    },
    methods: {
        deleteProduct(){
            this.$swal.fire({
                title: `Do you want to delete this product: (${this.product.name_en}) from the menu?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.post('/api/products/destroy', {
                        product_id : this.product.id
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
        hideEditProduct(){
            this.collapseEditProduct = false;
        }
    }
}
</script>
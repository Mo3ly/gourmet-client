<template>
  <div>
        <img v-if="product.image != null" :src="product.image" :alt="product.name_en" class="w-full h-64 object-center object-cover" />
        <div class="me-4 mt-4 flex-1 flex flex-col p-4">
            <div>
                <div class="flex justify-between text-base font-semibolds text-gray-900 dark:text-gray-100">
                <h3>
                    <a href="#"> {{ $i18n.locale == 'en' ? product.name_en : product.name_ar }}  </a>
                </h3>
                <p class="ms-4 text-pink-500"> {{ product.price }} {{ $t('common.currency') }} </p>
                </div>
                <p class="mt-1 text-sm text-gray-500">
                {{ $i18n.locale == 'en' ? product.desc_en : product.desc_ar }} 
                </p>
            </div>
            <div class="flex-1 flex items-end justify-between text-sm">
                <div>
                    <svg width="30" height="32" viewBox="0 0 33 32" fill="currentColor"><path d="M16.628 1l4.24 2.589 5.03.276 1.831 4.464 3.9 3.036L30.35 16l1.278 4.635-3.899 3.036-1.83 4.464-5.03.276L16.629 31l-4.24-2.589-5.031-.276-1.83-4.464-3.9-3.036L2.907 16l-1.279-4.635 3.9-3.036 1.83-4.464 5.03-.276L16.628 1z" fill="#F7C903"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.107.146a1 1 0 011.043 0l4.025 2.458 4.779.262a1 1 0 01.87.62l1.73 4.218 3.689 2.872a1 1 0 01.35 1.055L31.387 16l1.206 4.37a1 1 0 01-.35 1.054l-3.69 2.872-1.729 4.219a1 1 0 01-.87.619l-4.78.262-4.024 2.457a1 1 0 01-1.043 0l-4.025-2.457-4.779-.262a1 1 0 01-.87-.62l-1.73-4.218-3.689-2.872a1 1 0 01-.35-1.055L1.87 16 .664 11.63a1 1 0 01.35-1.054l3.69-2.872 1.729-4.219a1 1 0 01.87-.619l4.78-.262L16.106.146zM12.388 3.59l-5.03.276-1.83 4.464-3.9 3.036L2.907 16l-1.279 4.635 3.9 3.036 1.83 4.464 5.03.276L16.628 31l4.24-2.589 5.031-.276 1.83-4.464 3.9-3.036L30.35 16l1.278-4.635-3.898-3.036-1.831-4.464-5.03-.276L16.629 1l-4.24 2.589z" fill="#fff"></path><path d="M16.174 9.876c.18-.368.73-.368.91 0l1.7 3.483a.5.5 0 00.394.272l4.009.462c.423.05.593.547.28.823l-2.956 2.615a.463.463 0 00-.151.44l.776 3.77c.082.397-.363.705-.735.508l-3.529-1.867a.524.524 0 00-.487 0l-3.529 1.866c-.373.198-.818-.11-.736-.508l.777-3.768a.463.463 0 00-.15-.441l-2.958-2.615c-.312-.276-.142-.774.281-.823l4.008-.462a.5.5 0 00.395-.272l1.7-3.483z" fill="#fff"></path></svg>
                </div>
                <div class="flex">
                    <div class="custom-number-input h-6 w-12">
                      <div class="flex flex-row h-6 w-full rounded-lg bg-transparent">
                          <button @click="decreaseQuantity" data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-6 rounded-s cursor-pointer">
                              <span class="m-auto text-sm font-bold">-</span>
                          </button>
                          <span class="text-center border-0 p-1 w-8 h-full bg-gray-200 text-sm font-normal focus:text-black text-gray-700">
                              {{ quantity }}
                          </span>
                          <button @click="increaseQuantity" data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-6 rounded-e cursor-pointer">
                              <span class="m-auto text-sm font-bold">+</span>
                          </button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
            
        <div class="mb-2 mt-2 px-4">
            <label for="notes" class="block text-sm font-medium text-gray-700 dark:text-gray-100">
              {{ $t('cart.notes') }} 
            </label>
            <div class="mt-1">
              <textarea id="notes" v-model="productNotes" name="notes" rows="2" class="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border dark:bg-dark-surface border-gray-300 rounded-md" placeholder="" />
            </div>
            <p class="mt-2 text-sm text-gray-500">
              {{ $t('cart.brief') }} 
            </p>
        </div>
                
        <div class="bg-gray-50 px-4 py-4 text-center dark:bg-dark-surface">
            <button @click="addCartItem()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm">
                {{ $t('cart.add') }} &nbsp; <span class="text-pink-500 bg-white dark:bg-dark-surface rounded-full px-1 text-xs"> {{ quantity * product.price }} {{ $t('common.currency') }}</span>
            </button>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
    name: 'product',
    props: ['product', 'method'],
    data() {
        return {
          quantity: 1,
          productNotes: null,
        }
    },
    computed: {
      
    },
    methods: {
        ...mapActions(['addItemToCart']),
        displayMessage() {
            this.$swal({
                title: 'Cart Updated!',
                text: `${this.data.name} was added to your cart!`,
                icon: 'success',
                button: 'Ok',
            })
        },
        increaseQuantity() { this.quantity++ },
        decreaseQuantity() { this.quantity > 1 ? this.quantity-- : this.quantity},
        addCartItem(){
            this.addItemToCart({
                id: this.product.id,
                name_en: this.product.name_en,
                name_ar: this.product.name_ar,
                image: this.product.image,
                notes: this.productNotes,
                options: '',
                additions: '',
                price: this.product.price,
                quantity: this.quantity,
            });
            this.quantity = 1;
            this.productNotes = null;
            this.method();
        }
    },
}
</script>
<template>
    <div class="flex justify-between items-center mt-5 pt-3">
        <div class="flex items-center"> 
            <img :src="item.image" class="rounded-md w-10 h-10">
            <div class="flex flex-col ms-3"> 
                <span class="md:text-md text-sm dark:text-gray-100">
                    <span class="text-pink-500"> {{item.quantity}}x</span> {{ $i18n.locale == 'ar' ? item.name_ar : item.name_en}}
                </span>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="pe-3"> 
                <span class="text-xs font-medium dark:text-gray-100">{{item.price * item.quantity}} {{ $t('common.currency') }}</span> 
            </div>
            <div  class="pe-3 flex">
                    <div class="flex flex-row bg-transparent">
                        <button v-if="item.quantity == 1" @click="deleteCartItem(item.id)" data-action="decrement" class=" bg-red-300 text-red-600 hover:text-red-700 hover:bg-red-400 h-6 w-6 rounded-full  cursor-pointer">
                            <span class="m-auto text-sm font-bold">x</span>
                        </button>
                        <button v-else @click="decreaseQuantity" data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-6 w-6 rounded-full  cursor-pointer">
                            <span class="m-auto text-sm font-bold">-</span>
                        </button>
                        <span class="text-center border-0 p-1 w-6 h-6 bg-transparent text-sm font-normal focus:text-black text-gray-700 dark:text-white">
                            {{ item.quantity }}
                        </span>
                        <button @click="increaseQuantity" data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-6 w-6 rounded-full cursor-pointer">
                            <span class="m-auto text-sm font-bold">+</span>
                        </button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'cart-product',
    props: ['item'],
    data() {
        return {
          quantity: 1,
        }
    },
    methods:{
        ...mapActions(['deleteCartItem', 'updateCartItem']),
        increaseQuantity() { 
            this.quantity = this.item.quantity;
            this.quantity++;
            this.updateCartItem({'id': this.item.id, 'quantity': this.quantity})
        },
        decreaseQuantity() { 
            this.quantity = this.item.quantity;
            this.quantity > 1 ? this.quantity-- : this.quantity,
            this.updateCartItem({'id': this.item.id, 'quantity': this.quantity})
        },
    },
}
</script>
<template>
  <div class="h-screen">
    <div class="py-5">
        <div class="max-w-md mx-auto rounded-lg md:max-w-5xl">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <div class="md:grid md:grid-cols-3 gap-2 ">
                        <div class="col-span-2 p-5">
                            <div class="pt-4">
                                <div class="p-3 bg-pink-200 bg-opacity-30 dark:bg-opacity-80 font-semibold  rounded-md text-gray-800 text-xl">
                                <i class="gd-icons icon-basket-simple pb-1"></i> {{ $t('cart.name') }}
                                </div>
                                <div class="col-span-2">
                                    <div v-if="getCartCount == 0" class="mt-6">{{ $t('cart.empty') }}</div>
                                    <div v-for="item in getCart" :key="item.id">
                                        <menu-cart-product :item="item"/>
                                    </div>
                                    <div class=" mt-6 pt-6 border-t">
                                        <div class="flow-root"> 
                                            <span class="text-sm font-medium text-gray-400 mr-1 float-start">{{ $t('cart.total') }}</span> 
                                            <span class="text-normal font-semibold text-gray-800 dark:text-white float-end ">{{ getCartTotal }} {{ $t('common.currency') }}</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-5 bg-dark-surface rounded overflow-visible"> 
                            <div v-if="allowPayment">
                                <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span> <span class="text-xs text-gray-400 ">Card Type</span>
                                <div class="overflow-visible flex justify-between items-center mt-2">
                                    <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10"> <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                        <div class="flex justify-between items-center pt-4 "> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> </div>
                                        <div class="flex justify-between items-center mt-3"> <span class="text-xs text-gray-200">Mohamed Aly</span> <span class="text-xs text-gray-200">12/18</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center flex-col"> <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" /> <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span> </div>
                                </div>
                                <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Name on Card</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Mohamed Aly"> </div>
                                <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Card Number</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****"> </div>
                                <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                                    <div class="col-span-2 "> <label class="text-xs text-gray-400">Expiration Date</label>
                                        <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy"> </div>
                                    </div>
                                    <div class=""> <label class="text-xs text-gray-400">CVV</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="XXX"> </div>
                                </div> 
                            </div>
                            <span class="text-white" v-if="getTable">Table: {{ getTable }}</span>
                            <button @click="checkout(getCart, getTable)" :disabled="getCartCount < 1" class="bg-pink-500 hover:bg-pink-400 mt-4 text-white w-full font-bold py-2 px-4 rounded"> {{ $t('cart.checkout') }} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            api: process.env.API,
            allowPayment: false,
            // currentTable: null,
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
        //   if(localStorage.table)
        //     this.currentTable = localStorage.table
    },
    methods:{
        ...mapActions(['deleteCartItem', 'emptyCart']),
        inRange(x, min, max) {
            return ((x-min)*(x-max) <= 0);
        },
        async checkout(cart, table) {
            // disable cart button untill this request is done
            if (this.getCartCount == 0) 
                return;

            const { value: tableNumber } = table != null && this.inRange(table, 1, 50) ? { value: table }: 
                await this.$swal.fire({
                    title: this.$i18n.locale == 'en' ? 'Input table number' : 'ادخل رقم الطاولة',
                    input: 'number',
                    confirmButtonText: this.$i18n.locale == 'en' ? 'Confirm' : 'تأكيد',
                    inputLabel: this.$i18n.locale == 'en' ? 'Your table number' : 'رقم طاولتك',
                    inputPlaceholder: this.$i18n.locale == 'en' ? 'Enter your table number': 'ادخل رقم الطاولة',
                    inputValidator: (result) => {
                        if (!this.inRange(result, 1, 50))
                            return this.$i18n.locale == 'en' ?
                                'You need to enter a valid table number' :
                                'خطأ في رقم الطاولة' 
                    }
                });
            console.log(tableNumber);
            if (tableNumber) { // != null && tableNumber != '' && tableNumber != undefined
                const { value: userName } = await this.$swal.fire({
                    title: this.$i18n.locale == 'en' ? 'Order confirmation for table #' + tableNumber : 'تأكيد الطلب لطاولة #' + tableNumber,
                    input: 'text',
                    confirmButtonText: this.$i18n.locale == 'en' ? 'Confirm' : 'تأكيد',
                    inputLabel: this.$i18n.locale == 'en' ? 'Your name (Not required)' : ' ادخل اسمك (اذا أحببت)',
                    inputPlaceholder: this.$i18n.locale == 'en' ? 'Enter your name (not required)': 'اسم العميل (غير مطلوب)',
                })

                // detect the region and make this part in the backend not the front
                let apiKey = '6971c77e924746e6a46c71d1b66ee441';
                let userData = await this.$axios.get('https://api.bigdatacloud.net/data/ip-geolocation-full?key=' + apiKey, {baseUrl: null}).then((r) => {  
                    return r;
                }).catch(e => console.log(e));
                
                let userIP = null;
                if(userData != '' && userData != null && userData != undefined) 
                    userIP = userData.data.ip
                else 
                    userIP = 'empty';

                let formattedCart = [];
                cart.forEach(item => 
                    formattedCart.push({
                        'id': item.id, 
                        'quantity': item.quantity, 
                        'notes' : item.notes ?? null,
                        'options': 'nothing',
                        'additions': 'nothing',
                    })
                )
                // console.log(formattedCart);
                // console.log(userName);
                // order
                this.$axios.post('/api/orders/store' ,{
                    username: userName != '' ? userName : 'guest',
                    table: tableNumber,
                    ip: userIP,
                    products: formattedCart,
                })
                .then(r => 
                    this.emptyCart(),
                    // check if the order is done then show it
                    this.$swal({
                        title: this.$i18n.locale == 'en' ? `Woow dear ${userName != '' ? userName : 'guest'},` : `واااو عزيزي ${userName != '' ? userName : 'العميل'},`,
                        text: this.$i18n.locale == 'en' ? `Your order has been made successfully!` : '.تم تنفيذ طلبك بنجاح وسيتم تحضيره في أسرع وقت',
                        //icon: 'success',
                        button: this.$i18n.locale == 'en' ? 'Done' : 'حسناً',
                        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                        backdrop: `
                            rgba(236, 72, 153,0.1)
                            url("https://institute.careerguide.com/wp-content/uploads/2020/09/AcidicUnfoldedGoldenretriever-max-1mb.gif")
                            left top
                            no-repeat
                        `,
                        timer: 5000,
                        timerProgressBar: true,
                        didDestroy: this.$router.push({ path: 'resturants' })
                    }),
                    
                )
                .catch(e => console.log(e))
            }
        }
    },
    computed: {
        ...mapGetters(['getCart', 'getCartTotal', 'getCartCount', 'getTable']),
    },
    head() {
        let name = this.$t('name');
        let locale = this.$i18n.locale;
        return {
            title: 'cart',
            titleTemplate: '%s — ' + name,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: locale == 'en' ? 'cart desc' : 'سلة المشتريات',
                },
            ]
        }
    },
}
</script>
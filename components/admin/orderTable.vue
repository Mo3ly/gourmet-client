<template>
  <div class="flex flex-col justify-between overflow-hidden transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
    <div class="p-5 cursor-pointer" @click="show = true">
      <div :class="[latestOrder != undefined && latestOrder.status == 'received' ? 'bg-indigo-50 text-purple-800' : latestOrder != undefined && latestOrder.status == 'approved' ? 'bg-yellow-100 text-yellow-800' : latestOrder != undefined && latestOrder.status == 'done' ? 'bg-green-100 text-green-800' : latestOrder != undefined && latestOrder.status == 'cancelled' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800']" class="flex justify-between mb-3">
        <span class="font-semibold">Table {{ table }}</span>
        <span class="text-sm" v-if="latestOrder">{{ latestOrder.date.split(" ").pop() }}</span>
      </div>
      <p class="font-normal" v-if="latestOrder">
        Ordered <span class="font-semibold">{{ latestOrder.products.length }}</span> item(s)
      </p>
      <p class="font-normal text-gray-400" v-else>No order</p>
    </div>
    <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-purple-400 group-hover:scale-x-100"></div>

    <!-- table orders modal -->
    <div v-if="show">
      <div class="fixed z-40 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-5 text-center sm:block sm:p-0">
          <div @click="show = false" class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​

          <div class="relative rounded-3xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 transition transform inline-block align-top max-w-3xl sm:align-middle" role="dialog" aria-modal="true">
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button @click="show = false" type="button" class="relative z-50 cursor-pointer bg-transparent rounded-md text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 ring-offset-transparent">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                <path class="text-indigo-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                <path class="text-indigo-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <span class="inline-flex items-center px-4 py-1 rounded-full sm:text-lg font-bold font-display bg-pink-100 text-indigo-800 transform -rotate-3"> Table {{ table }} </span>
                <h2 class="mt-6 text-xl sm:text-2xl font-medium text-white tracking-tight font-display sm:leading-extra-tight">
                  <span> This table had {{ tableOrders != null && tableOrders != undefined && tableOrders.length > 0 ? tableOrders.length : "no" }} order(s) for today. </span>
                </h2>
              </div>
              <div v-if="tableOrders" class="mt-3">
                <table class="table p-2 bg-indigo-50">
                  <tbody>
                    <tr v-for="order in tableOrders" :key="order.id" class="text-gray-700">
                      <td class="px-6 py-2 whitespace-no-wrap border-b border-indigo-200">
                        <div class="text-sm leading-5 text-gray-900">
                          <span>#{{ order.id }}</span>
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ order.name }}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap border-b border-indigo-200">
                        <div class="text-sm leading-5 text-gray-900">
                          <span>{{ order.products.length > 0 ? order.products.map((el) => parseInt(el.total_price)).reduce((a, b) => a + b) : 0 }} {{ $t("common.currency") }}</span>
                        </div>
                        <div class="text-sm leading-5 text-gray-500">@ {{ order.date.split(" ").pop() }}</div>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap border-b border-indigo-200">
                        <span :class="[order.status == 'received' ? 'bg-gray-100 text-gray-800' : order.status == 'approved' ? 'bg-yellow-100 text-yellow-800' : order.status == 'done' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']" class="px-2 uppercase inline-flex text-xs leading-5 font-semibold rounded-full">{{ order.status }}</span>
                      </td>
                      <td class="px-6 py-2 whitespace-no-wrap border-b border-indigo-200">
                        <div class="flex item-center justify-center">
                          <div v-if="order.products.length > 0" @click="orderDetails(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div @click="orderEdit(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <div @click="orderDelete(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    props: ["table", "orders"],
    data() {
      return {
        show: false,
      };
    },
    methods: {
      orderDetails(order) {
        let data = `
              <table class="min-w-full leading-normal mb-6">
                  <tbody>
        `;

        order.products.forEach(
          (el) =>
            (data += `
            <tr class="text-gray-700">
                <td class="border-b-2 p-4 dark:border-dark-5">
                    <div class="text-xs mb-2">
                      ${el.data.resturant}
                    </div>
                      <img class="rounded-md inline w-16 h-16" src="${el.data.image}"/> 
                    <div>
                      <span class="text-pink-500 text-sm">${el.quantity}x &nbsp; </span>
                      <span class="text-sm font-bold">${el.data.name_en}</span> —
                      <span class="text-sm font-bold text-pink-500">${el.total_price} QR</span>
                    </div>
                    <div>
                      <span class="text-sm pl-3"> <b>NOTES:</b> ${el.notes == null ? "Nothing" : el.notes} </span>
                    </div>
                </td>
            </tr>
          `)
        );

        data += `
              </tbody>
            </table>
          Total: <b>${order.products.map((el) => parseInt(el.total_price)).reduce((a, b) => a + b)} QR</b> . <span class="px-2 bg-gray-200 text-gray-800 text-center text-base rounded-full">${order.products.map((el) => parseInt(el.quantity)).reduce((a, b) => a + b)} items </span>
        `;

        this.$swal.fire({
          title: `Order #${order.id} . <span class="text-base text-pink-500">Table: ${order.table}</span>`,
          html: data,
        });
      },

      async orderEdit(order) {
        const { value: orderStatus } = await this.$swal.fire({
          title: "Select order status",
          input: "select",
          inputOptions: {
            received: "received",
            approved: "approved",
            cancelled: "cancelled",
            done: "done",
          },
          inputPlaceholder: "Select a status",
          showCancelButton: true,
          inputValidator: (result) => {
            return !result && "You have to select a status";
          },
        });

        if (orderStatus) {
          order.status = orderStatus;
          this.$axios
            .post("/api/orders/update", {
              order_id: order.id,
              status: orderStatus,
            })
            .then((r) => {
              if (r.data.success) {
                this.$swal.fire(`Order #${order.id} status has chaged to: ${orderStatus}`);
                this.$router.app.refresh();
              }
            })
            .catch((e) => {
              if (e.response.status == 422) {
                this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
              }
            });
        }
      },

      orderDelete(order) {
        this.$swal
          .fire({
            title: `Do you want to delete this order #${order.id}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$axios
                .post("/api/orders/destroy", {
                  order_id: order.id,
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
    },
    computed: {
      tableOrders() {
        return this.orders != undefined && this.orders != null ? this.orders.filter((o) => o.table == this.table) : null;
      },

      latestOrder() {
        return this.orders != undefined && this.orders != null ? this.orders.filter((o) => o.table == this.table)[0] : null;
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

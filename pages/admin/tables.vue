<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-bold">Resturant Tables</h3>
    <span class="text-gray-400"> Date: {{ getDate }}</span>
    <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-indigo-100">
          <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
        </svg>
      </div>

      <div class="relative grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        <div v-for="i in 50" :key="i">
          <admin-order-table :table="i" :orders="orders" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        api: process.env.API,
        currentPage: 1,
        orders: [],
        searchQuery: null,
      };
    },
    computed: {
      getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();

        today = dd + "/" + mm + "/" + yyyy;
        return today;
      },
    },
    mounted() {
      this.$echo.channel("gourmet-orders").listen("OrderReceived", (response) => {
        this.$axios
          .get("/api/orders/id/" + response.order_id)
          .then((order) => {
            if (this.currentPage == 1) this.$router.app.refresh();
            else this.orders.unshift(order.data);
          })
          .catch((e) => console.log(e));
      });
    },
    activated() {
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch();
        console.log("refetched the orders data");
      }
    },
    async fetch() {
      await this.$axios
        .get("/api/orders/today")
        .then((response) => {
          this.orders = response.data;
        })
        .catch((e) => console.log(e));
    },
  };
</script>

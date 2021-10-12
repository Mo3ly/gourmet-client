<template>
    <div>
        <h3 class="text-gray-700 text-3xl font-bold">
            Resturant Menu's       
        </h3>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-6">
            <div v-for="resturant in resturants" :key="resturant.name" >
                <admin-resturant-card :resturant="resturant" />
            </div>
            <admin-add-resturant-modal/>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      api: process.env.API,
      resturants: [],
      method : false
    };
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
      console.log('refetched the resturants data');
    }
  },
  async fetch() {
      this.resturants = await this.$axios.get('/api/resturants')
        .then((response) => {
          return response.data
        })
      .catch(e => console.log(e))
      console.log('fetched resturants data');
  },
}
</script>
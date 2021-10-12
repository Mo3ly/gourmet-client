<template>
  <div style="box-shadow: #00000020 0px -1px 4px 0px;" class="bg-white rounded-t-3xl w-full sticky z-50  bottom-0" v-if="show">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex space-s-5 items-center mx-auto">
          <NuxtLink to="resturants" class="flex p-2 rounded-lg -bg-gray-200">
            <i class="gd-icons icon-components text-black" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="/" class="flex p-2 rounded-lg -bg-gray-200">
            <i class="gd-icons-md gd-icons icon-world text-pink-500" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="about" class="flex p-2 rounded-lg -bg-gray-200">
            <i class="gd-icons icon-basket-simple text-black" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>
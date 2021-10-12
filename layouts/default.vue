<template>
  <div :dir="$dir()">
    <!-- <components-header-alert/> -->
    <layout-default-header></layout-default-header>
    <main>
      <Nuxt />
    </main>
    <layout-footer></layout-footer>
    <components-scrollToTop></components-scrollToTop>
    <!-- <layout-mobile-navigation/> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
      return {
          // table: null,
      }
  },
  mounted() {
    // if(localStorage.table)
    //   this.table = localStorage.table
  },
  watch: {
      // table(newTable){
      //     console.log("updated table number: " + newTable);
      //     if(this.$route.query.table){
      //         this.table = this.$route.query.table;
      //         localStorage.table = this.table;
      //     }
      // }
  },
  methods: {
    ...mapActions['setTable']
  }
}
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

@media (display-mode: standalone) {
  footer{
    display: none;
  }
  ::-webkit-scrollbar  {
      display: none;
      height: 0;
      width: 0;
  }
}
</style>

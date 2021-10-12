import Vue from 'vue'
import clickOutside from './click-outside'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.directive('click-outside', clickOutside)
Vue.use(VueSmoothScroll)

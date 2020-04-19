import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import vuex from 'vuex'
Vue.use(vuex)

import axios from 'axios'
import '../public/css/iconfont/iconfont.css';
Vue.prototype.axios = axios;

//import Scroller from '@/components/Scroller'
//Vue.component('Scroller',Scroller)

import Loading from '@/components/Loading'
Vue.component('Loading',Loading)

Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')

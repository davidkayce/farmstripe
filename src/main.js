import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = 'https://api.farmstripe.com'
axios.defaults.timeout = 6000

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

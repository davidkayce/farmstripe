import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = process.env.API_ENDPOINT
axios.defaults.timeout = 6000

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

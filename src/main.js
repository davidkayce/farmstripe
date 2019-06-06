import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from 'axios'
import "./registerServiceWorker"

import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))

Vue.use(VueProgressBar, {
  color: 'rgb(52, 89, 72)',
  failedColor: 'rgb(255, 86, 97)',
  height: '3px'
})

// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = "https://api.farmstripe.com"
axios.defaults.timeout = 6000
const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken
}

// Setting reponse interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) { // Handling expired api tokens
    store.dispatch('logOut')
    router.push('/sign-in')
  } else {
    return Promise.reject(error)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

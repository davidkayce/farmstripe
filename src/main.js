import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(VueProgressBar, {
  color: 'rgb(52, 89, 72)',
  failedColor: 'red',
  height: '2px'
})

// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = process.env.API_ENDPOINT
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

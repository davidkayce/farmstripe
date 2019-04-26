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
const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken
}

// Setting reponse interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    alert('Your session has expired, redirecting you to the login page')
    store.dispatch('logOut')
    router.push('/sign-in')
  } else {
    return Promise.reject(error)
  }
})

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init({
      offset: 200
    })
  },
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

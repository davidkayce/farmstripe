import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = process.env.API_ENDPOINT
const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken
}

// Global directives
Vue.directive('currency', {
  bind (el, binding) {
    if (binding.value === 'naira') {
      el.innerHTML = '&#8358;'
    } else if (binding.value === 'dollars') {
      el.innerHTML = '&#36;'
    }
  }
})

// Global filters
// Vue.filter('numeric', {
//   if (value) {
//     return (value || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
//   }
// })

// Vue.filter('date', {
//   if (value) {
//     return (String(value)).format('MM/DD/YYYY')
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

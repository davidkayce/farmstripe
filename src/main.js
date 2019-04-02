// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken
}

// Setting API URL based on environment for http requests
axios.defaults.baseURL = process.env.API_ENDPOINT

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
Vue.filter('numeric', {
  if (value) {
    return (value || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
})

Vue.filter('date', {
  if (value) {
    return (String(value)).format('MM/DD/YYYY')
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

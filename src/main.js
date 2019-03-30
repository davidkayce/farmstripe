// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

// Global variable
Vue.prototype.$signedIn = false

// Setting API URL based on environment for http requests
Axios.defaults.baseURL = process.env.API_ENDPOINT

// Global directives
Vue.directive('currency', {
  bind (el, binding) {
    el.style.fontSize = '13px'
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
  template: '<App/>',
  components: { App }
})

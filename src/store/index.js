import Vue from 'vue'
import Vuex from 'vuex'
import Farms from './modules/farms'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Farms
  }
})

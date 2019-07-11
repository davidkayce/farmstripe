import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    farms: []
  },
  getters: {
    allFarms: state => state.farms
  },
  mutations: {
    setFarms: (state, allFarms) => (state.farms = allFarms)
  },
  actions: {
    async getAllFarms ({ commit }) {
      try {
        const response = await axios.get('/farms.json')
        const allFarms = response.data
        commit('setFarms', allFarms)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
})

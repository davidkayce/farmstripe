import axios from 'axios'

export default {
  state: {
    farms: []
  },

  getters: {
    allFarms: state => state.farms
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
  },

  mutations: {
    setFarms: (state, allFarms) => (state.farms = allFarms)
  }
}

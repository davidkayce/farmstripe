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
      const response = await axios.get('/farms.json')
      const allFarms = response.data
      commit('setFarms', allFarms)
    }
  },

  mutations: {
    setFarms: (state, allFarms) => (state.farms = allFarms)
  }
}

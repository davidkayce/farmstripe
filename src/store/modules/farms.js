import Axios from 'axios'

export default {
  state: {
    farms: {},
    singleFarm: {}
  },

  getters: {
    allFarms: state => state.farms,
    singleFarm: state => state.singleFarm
  },

  actions: {
    async getAllFarms ({ commit }) {
      try {
        const response = await Axios.get('/farms')
        console.log(response.data)
        commit('setFarms', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getSingleFarm  ({ commit }, id) {
      try {
        const response = await Axios.get(`/farms/${id}`)
        console.log(response.data)
        commit('setSingleFarm', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setFarms: (state, farms) => (state.farms = farms),
    setSingleFarm: (state, singleFarm) => (state.singleFarm = singleFarm)
  }
}

import Axios from 'axios'

export default {
  state: {
    investments: {},
    singleInvestment: {}
  },

  getters: {
    allInvestments: state => state.investments,
    singleInvestment: state => state.singleInvestment
  },

  actions: {
    async getInvestments ({ commit }) {
      try {
        const response = await Axios.get('/investments')
        console.log(response.data)
        commit('setInvestments', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getSingleInvestment ({ commit }, id) {
      try {
        const response = await Axios.get(`/investments/${id}`)
        console.log(response.data)
        commit('setSingleInvestment', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async createInvestment ({ commit }, id, units) {
      try {
        const response = await Axios.post(`/investments/${id}`, units)
        console.log(response.data)
        commit('setInvestments', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setInvestments: (state, investments) => (state.investments = investments),
    setSingleInvestment: (state, singleInvestment) => (state.singleInvestment = singleInvestment)
  }
}

import axios from 'axios'
export default {
  state: {
    wallet: {}
  },

  getters: {
    getWallet: state => state.wallet
  },

  actions: {
    async createInvestment ({ commit }, id, units) {
      try {
        const response = await axios.post(`/investments/${id}`, units)
        commit('updateInvestments', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getWalletInfo ({ commit }) {
      try {
        const response = await axios.get('/wallet.json')
        const wallet = response.data
        commit('setWallet', wallet)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setWallet: (state, wallet) => (state.wallet = wallet)
    // updateInvestments: (state, investments) => (state.investments = investments),
  }
}

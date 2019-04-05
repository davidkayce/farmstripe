import axios from 'axios'
export default {
  state: {
    wallet: {}
  },

  getters: {
    getWallet: state => state.wallet
  },

  actions: {
    async getWalletInfo ({ commit }) {
      try {
        const response = await axios.get('/wallet')
        const wallet = response.data
        console.log(wallet)
        commit('setWallet', wallet)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setWallet: (state, wallet) => (state.wallet = wallet)
  }
}

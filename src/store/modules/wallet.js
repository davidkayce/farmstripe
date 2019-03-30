import Axios from 'axios'

export default {
  state: {
    wallet: {}
  },

  getters: {
    wallet: state => state.wallet
  },

  actions: {
    async getWallet ({ commit }) {
      try {
        const response = await Axios.get('/wallet')
        console.log(response.data)
        commit('setWallet', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setWallet: (state, wallet) => (state.wallet = wallet)
  }
}

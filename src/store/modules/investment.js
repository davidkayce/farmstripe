import axios from 'axios'
export default {
  state: {
    investments: {},
    singleInvestment: {},
    wallet: {}
  },

  getters: {
    allInvestments: state => state.investments,
    singleInvestment: state => state.singleInvestment,
    getWallet: state => state.wallet
  },

  actions: {
    async getInvestments ({ commit }) {
      try {
        const response = await axios.get('/investments.json')
        const investments = response.data
        console.log(investments)
        commit('setInvestments', investments)
      } catch (error) {
        console.log(error)
      }
    },

    async getSingleInvestment ({ commit }, id) {
      try {
        const response = await axios.get(`/investments/${id}`)
        const singleInvestment = response.data
        console.log(singleInvestment)
        commit('setSingleInvestment', singleInvestment)
      } catch (error) {
        console.log(error)
      }
    },

    async createInvestment ({ commit }, id, units) {
      try {
        const response = await axios.post(`/investments/${id}`, units)
        console.log(response.data)
        commit('updateInvestments', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getWalletInfo ({ commit }) {
      try {
        const response = await axios.get('/wallet.json')
        const wallet = response.data
        console.log(wallet)
        commit('setWallet', wallet)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setInvestments: (state, investments) => (state.investments = investments),
    setSingleInvestment: (state, singleInvestment) => (state.singleInvestment = singleInvestment),
    setWallet: (state, wallet) => (state.wallet = wallet)
    // updateInvestments: (state, investments) => (state.investments = investments),
  }
}

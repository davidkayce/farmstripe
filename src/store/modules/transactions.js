import axios from 'axios'
export default {
  state: {
    wallet: {},
    investments: {},
    transactions: {}
  },

  getters: {
    getWallet: state => state.wallet,
    getInvestments: state => state.investments,
    getTransactions: state => state.transactions
  },

  actions: {
    async createInvestment ({ commit }, data) {
      try {
        const response = await axios.post(`/investments`, data)
        console.log(response.data)
        this.getWalletInfo()
      } catch (error) {
        console.log(error)
      }
    },

    async createDeposit ({ commit }, amount) {
      try {
        const response = await axios.post(`/deposits`, amount)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async createPayout ({ commit }, amount) {
      try {
        const response = await axios.post(`/deposits`, amount)
        const wallet = response.data
        commit('setWallet', wallet)
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
    },

    async getTransactions ({ commit }) {
      try {
        const response = await axios.get('/transactions.json')
        console.log(response.data)
        const transactions = response.data
        commit('setTransactions', transactions)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setWallet: (state, wallet) => (state.wallet = wallet),
    setTransactions: (state, transactions) => (state.transactions = transactions)
    // updateInvestments: (state, investments) => (state.investments = investments),
  }
}

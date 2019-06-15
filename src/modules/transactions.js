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
      await axios.post(`/investments`, data)
      this.getWalletInfo()
    },

    async createDeposit ({ commit }, amount) {
      await axios.post(`/deposits`, amount)
    },

    async createPayout ({ commit }, amount) {
      await axios.post(`/withdraws`, amount)
    },

    async getWalletInfo ({ commit }) {
      const response = await axios.get('/wallet.json')
      const wallet = response.data
      commit('setWallet', wallet)
    },

    async getTransactions ({ commit }) {
      const response = await axios.get('/transactions.json')
      const transactions = response.data
      commit('setTransactions', transactions)
    }
  },

  mutations: {
    setWallet: (state, wallet) => (state.wallet = wallet),
    setTransactions: (state, transactions) => (state.transactions = transactions)
  }
}

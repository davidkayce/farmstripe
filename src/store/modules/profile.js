import axios from 'axios'
export default {
  state: {
    userInfo: {}
  },

  getters: {
    getUserInfo: state => state.userInfo
  },

  actions: {
    async getProfile ({ commit }) {
      try {
        const response = await axios.get('/profile')
        console.log(response.data)
        commit('setUserInfo', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateProfile (data) {
      try {
        const response = await axios.put('/users', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateAccount (data) {
      try {
        const response = await axios.put('/account', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setUserInfo: (state, userInfo) => (state.userInfo = userInfo)
  }
}

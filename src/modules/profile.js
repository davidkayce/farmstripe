import axios from 'axios'

export default {
  actions: {
    async updateProfile ({ commit }, data) {
      await axios.put('/users', data)
    },

    async updateAccount ({ commit }, data) {
      await axios.put('/account', data)
    }
  }
}

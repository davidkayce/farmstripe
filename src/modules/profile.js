import axios from 'axios'

export default {
  actions: {
    async updateProfile ({ commit }, data) {
      try {
        await axios.put('/users', data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateAccount ({ commit }, data) {
      try {
        await axios.put('/account', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

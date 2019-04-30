import axios from 'axios'
export default {
  actions: {
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
  }
}

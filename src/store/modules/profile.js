import axios from 'axios'
import Noty from 'noty'

export default {
  actions: {
    async updateProfile ({ commit }, data) {
      try {
        const response = await axios.post('/users', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
        new Noty({
          text: 'Some notification text'
        }).show()
      }
    },

    async updateAccount ({ commit }, data) {
      try {
        const response = await axios.post('/account', data)
        console.log(response.data)
      } catch (error) {
        console.log(error.error.message)
      }
    }
  }
}

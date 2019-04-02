import axios from 'axios'
export default {
  state: {
    signedIn: false,
    userInfo: {}
  },

  getters: {
    // what sends information to the component
    userState: state => state.signedIn
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

    async signUp (data) {
      try {
        const response = await axios.post('/register', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async signIn (data) {
      try {
        const response = await axios.post('/login', data)
        console.log(response.data)
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
    // updates central state
    setUserInfo: (state, userInfo) => (state.userInfo = userInfo)
  }
}

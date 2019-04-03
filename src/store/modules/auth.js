import axios from 'axios'

export default {
  state: {
    signedIn: true,
    accessToken: localStorage.getItem('access_token') || ''
  },

  getters: {
    userState: state => state.signedIn
  },

  actions: {

    async signUp (data) {
      console.log('Reached the sign up api')
      try {
        const response = await axios.post('/register', data)
        console.log(response.data)
        // commit('setUserInfo', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async signIn (data) {
      console.log('Reached the sign in api')
      try {
        const response = await axios.post('/login', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mutations: {
    setSignedIn: (state, signedIn) => (state.signedIn = signedIn)
  }
}

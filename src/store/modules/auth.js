import axios from 'axios'

export default {
  state: {
    signedIn: false,
    accessToken: localStorage.getItem('access_token') || '',
    userData: {}
  },

  getters: {
    userState: state => state.signedIn,
    getUser: state => state.userData
  },

  actions: {
    async getProfile ({ commit }) {
      try {
        const response = await axios.get('/profile.json')
        console.log(response.data)
        const user = response.data.user
        commit('auth_success', user)
      } catch (error) {
        console.log(error)
      }
    },

    async signUp (data) {
      try {
        const response = await axios.post('/register', data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    async signIn ({ commit }, data) {
      try {
        const response = await axios.post('/login', data)
        const token = response.data.access_token
        localStorage.setItem('access_token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('login', token)
      } catch (error) {
        console.log(error)
        localStorage.removeItem('access_token')
      }
    },

    async logOut ({ commit }) {
      console.log('Logging you out')
      commit('logout')
      localStorage.removeItem('access_token')
      delete axios.defaults.headers.common['Authorization']
    }
  },

  mutations: {
    auth_success (state, user) {
      state.userData = user
    },

    login (state, token) {
      state.accessToken = token
      state.signedIn = true
    },

    logout (state) {
      state.token = ''
      state.signedIn = false
    }
  }
}

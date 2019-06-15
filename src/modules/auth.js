import axios from 'axios'

export default {
  state: {
    accessToken: localStorage.getItem('access_token') || '',
    userData: {}
  },

  getters: {
    getUser: state => state.userData
  },

  actions: {
    async getProfile ({ commit }) {
      const response = await axios.get('/profile.json')
      const user = response.data.user
      commit('auth_success', user)
    },

    async signUp ({ commit }, signUpData) {
      await axios.post('/register', signUpData)
    },

    async signIn ({ commit }, data) {
      try {
        const response = await axios.post('/login', data)
        const token = response.data.access_token
        const expiryDate = response.data.exp
        localStorage.setItem('access_token', token)
        localStorage.setItem('expiry_date', expiryDate)
        axios.defaults.headers.common['Authorization'] = token
        commit('login', token)
      } catch (error) {
        localStorage.removeItem('access_token')
      }
    },

    async logOut ({ commit }) {
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
    },

    logout (state) {
      state.token = ''
      state.userData = {}
    }
  }
}

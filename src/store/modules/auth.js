import axios from 'axios'

export default {
  state: {
    status: '',
    signedIn: true,
    accessToken: localStorage.getItem('access_token') || '',
    userData: {}
  },

  getters: {
    userState: state => state.signedIn,
    getUser: state => state.userData,
    getLoginStatus: state => state.status
  },

  actions: {

    async signUp ({ commit }, data) {
      console.log('Reached the sign up api')
      commit('auth_request')
      try {
        const response = await axios.post('/register', data)
        console.log(response.data)
        const user = response.data.user
        commit('auth_success', user)
      } catch (error) {
        console.log(error)
        commit('auth_error', error)
      }
    },

    async signIn ({ commit }, data) {
      console.log('Reached the sign in api')
      commit('auth_request')
      try {
        const response = await axios.post('/login', data)
        console.log(response.data)
        const token = response.data.token
        localStorage.setItem('access_token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('login', token)
      } catch (error) {
        console.log(error)
        commit('auth_error', error)
        localStorage.removeItem('access_token')
      }
    },

    async logOut ({ commit }, data) {
      console.log('Logging you out')
      commit('logout')
      localStorage.removeItem('access_token')
      delete axios.defaults.headers.common['Authorization']
    }
  },

  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },

    auth_success (state, user) {
      state.userData = user
      state.status = 'success'
    },

    auth_error (state) {
      state.status = 'error'
    },

    login (state, token) {
      state.status = 'success'
      state.accessToken = token
      state.signedIn = true
    },

    logout (state) {
      state.status = ''
      state.token = ''
      state.signedIn = false
    }
  }
}

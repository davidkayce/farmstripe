import Vue from 'vue'
import Vuex from 'vuex'
import Farms from './modules/farms'
import Investments from './modules/investment'
import Wallet from './modules/wallet'
import Profile from './modules/profile'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Farms,
    Investments,
    Wallet,
    Profile,
    Auth
  }
})

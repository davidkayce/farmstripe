import Vue from "vue";
import Vuex from "vuex";
import Farms from './modules/farms'
import Transactions from './modules/transactions'
import Profile from './modules/profile'
import Auth from './modules/auth'


Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Farms,
    Transactions,
    Profile,
    Auth
  }
});

<template>
  <main>
    <nav>
      <input type="checkbox" id="nav" class="hidden">
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>

      <div class="logo">
        <router-link to="/"><img src="~@/assets/icons/icon-logo-white-text.png" alt="farmstripe logo"></router-link>
      </div>

      <div class="nav-wrapper">
        <ul>
          <li><router-link to="/dashboard" active-class="active" exact class="large_devices"> Portfolio </router-link></li>
          <li><router-link to="/dashboard/wallets" active-class="active" class="large_devices"> Wallet </router-link></li>
          <li><router-link to="/dashboard/profile" active-class="active" class="large_devices"> Profile </router-link></li>
          <li class="large_devices" @click="switchLargeNav" >Oluchi Hassan</li>
          <li 
          class="small_devices" 
          @click="switchSmallNav" 
          :class="smallNav? 'nav_on':''">O.H</li>
        </ul>
      </div>
    </nav>

    <div 
    class="small_menu" 
    v-if="smallNav"
    :style="smallNav? { boxShadow: '5px 5px 5px rgba(52, 89, 72, 0.3)' } : { boxShadow: '3px 3px 15px 0 rgba(52, 89, 72, 0.3)'}">
      <ul>
        <li>Oluchi Hassan</li>
        <li><router-link to="/dashboard" active-class="small_active" exact>Portfolio </router-link></li>
        <li><router-link to="/dashboard/wallets" active-class="small_active"> Wallet </router-link></li>
        <li><router-link to="/dashboard/profile" active-class="small_active">Profile </router-link></li>
        <li @click="logOut">Sign Out</li>
      </ul>
    </div>

    <div class="large_menu" v-if="largeNav">
      <p @click="logOut"> Sign Out </p>
    </div>
    <announcement></announcement>

    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  import Announcement from '../shared/components/announcement'
  export default {
    name: 'dashboard',
    components: {
      'announcement': Announcement
    },
    data () {
      return {
        smallNav: false,
        largeNav: false
      }
    },
    computed: {

    },
    methods: {
      switchSmallNav () {
        this.smallNav = !this.smallNav
      },
      switchLargeNav () {
        this.largeNav = !this.largeNav
      },
      logOut () {
        this.$store.dispatch('logOut').then(() => this.$router.push('/'))
      }
    },
    created () {
      this.$store.dispatch('getProfile')
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import './dashboard.scss';
</style>
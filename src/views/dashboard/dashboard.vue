<template>
  <main>
    <nav>
      <div class="logo">
        <img src="~@/assets/icons/icon-logo-all-green.png" alt="farmstripe logo" loading="lazy">
      </div>

      <div class="nav-wrapper">
        <ul>
          <li><router-link to="/dashboard" active-class="active" exact class="large_devices"> Portfolio </router-link></li>
          <li><router-link to="/dashboard/wallets" active-class="active" class="large_devices"> Wallet </router-link></li>
          <li><router-link to="/dashboard/profile" active-class="active" class="large_devices"> Profile </router-link></li>
          <li class="large_devices" @click="switchLargeNav">{{fullName}}</li>
          <li 
          class="small_devices" 
          @click="switchSmallNav" 
          :class="smallNav? 'nav_on':''">{{fullName | initials}}</li>
        </ul>
        <div class="large_menu" v-if="largeNav"><p @click="logOut"> Sign Out </p></div>
      </div>
    </nav>

    <transition name="dash">
      <div 
      class="small_menu" 
      v-if="smallNav"
      :style="smallNav? { boxShadow: '5px 5px 5px rgba(52, 89, 72, 0.3)' } : { boxShadow: '3px 3px 15px 0 rgba(52, 89, 72, 0.3)'}">
        <ul>
          <li>{{fullName}}</li>
          <li><router-link to="/dashboard" active-class="small_active" exact>Portfolio </router-link></li>
          <li><router-link to="/dashboard/wallets" active-class="small_active"> Wallet </router-link></li>
          <li><router-link to="/dashboard/profile" active-class="small_active">Profile </router-link></li>
          <li @click="logOut">Sign Out</li>
        </ul>
      </div>
    </transition>

    <announcement></announcement>
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'dashboard',
    components: {
      'announcement': () => import('@/components/announcement')
    },
    data () {
      return {
        smallNav: false,
        largeNav: false
      }
    },
    computed: {
      fullName () {
        return this.$store.getters.getUser.name
      }
    },
    filters: {
      initials (fullName) {
        if (fullName) {
          let n = fullName.split(' ')
          let t = ''
          let r = 0
          for (r in n) t += n[r][0] + '. '
          r++
          return t.toUpperCase()
        }
      }
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
  @import './dashboard.scss';

  .dash-enter {
    opacity: 0;
    transform: translateY(-2rem);
  }
  .dash-enter-active {
    transition: opacity 0.4s, transform 0.2s;
  }
  .dash-leave-active {
    transition: opacity 0.1s, transform 0.2s;
    transform: translateY(-2rem);
    opacity: 0;
  }
</style>
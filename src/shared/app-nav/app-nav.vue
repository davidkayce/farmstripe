<template>
  <main>
    <div class="nav-content">
      <div class="logo">
        <router-link to="/">
          <img src="~@/assets/icons/icon-logo-all-green.png" alt="Farmstripe logo">
        </router-link>
      </div>

      <ul>
        <li><router-link :to="farmLink"> Available Farms </router-link></li>
        <li><router-link :to="howLink">How it works</router-link></li>
        <li><router-link to="/contact-us">Contact us</router-link></li>
      </ul>
    </div>

  </main>
</template>

<script>
  export default {
    name: 'appNav',
    data () {
      return {
        howLink: {
          name: 'home',
          hash: '#how'
        },
        farmLink: {
          name: 'home',
          hash: '#farms'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~styles";
  @import "./app-nav.scss";
</style>


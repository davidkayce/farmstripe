<template>
  <main>
    <div class="nav-content">
      <div class="logo">
        <router-link to="/">
          <img src="~@/assets/icons/icon-logo-all-green.png" alt="Farmstripe logo">
        </router-link>
      </div>

      <ul>
        <li><router-link to="{ name: 'home', hash: '#how' }">How it works</router-link></li>
        <li><router-link to="/contact-us">Contact us</router-link></li>
        <li><router-link to="/sign-in"><button class="btn">Get Started</button></router-link></li>
      </ul>
    </div>

  </main>
</template>

<script>
  export default {
    name: 'appNav'
  }
</script>

<style lang="scss" scoped>
  @import "~styles";
  @import "./app-nav.scss";
</style>


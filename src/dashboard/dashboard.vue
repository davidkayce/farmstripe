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
          <li><router-link to="/dashboard" active-class="active" exact> Portfolio </router-link></li>
          <li><router-link to="/dashboard/wallets" active-class="active"> Wallet </router-link></li></li>
          <li><router-link to="/dashboard/profile" active-class="active"> Profile </router-link></li></li>
          <li>Oluchi Hassan</li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'dashboard',
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import './dashboard.scss';
</style>
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
        <img src="~@/assets/icons/icon-logo-white-text.png" alt="farmstripe logo">
      </div>

      <div class="nav-wrapper">
        <ul>
          <li><router-link to="/dashboard" class="nav-link"> Portfolio </router-link></li>
          <li><router-link to="/dashboard/wallets" class="nav-link"> Wallet </router-link></li></li>
          <li><router-link to="/dashboard/profile"> Profile </router-link></li></li>
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
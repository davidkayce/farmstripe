<template>
  <main>
    <div class="about__component">
      <div class="images">
        <img src="~@/assets/images/green-beans.png" alt="">
        <img src="~@/assets/images/corn.png" alt="">
      </div>

      <section class="header">
        <h1>How it works</h1>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae dolores quasi natus voluptates nesciunt ad sed corporis mollitia aliquid ea, impedit numquam</p>
      </section>

      <section class="content">
        <div class="item fstr__card">
          <img src="~@/assets/icons/icon-account.png" alt="">
          <h3>Create an account</h3>
          <p>Create an account in less than a minute</p>
        </div>

        <div class="item fstr__card">
          <img src="~@/assets/icons/icon-sponsor.png" alt="">
          <h3>Sponsor a Farm</h3>
          <p>Pick from the variety of farms available to you to make your investment</p>
        </div>

        <div class="item fstr__card">
          <img src="~@/assets/icons/icon-track.png" alt="">
          <h3>Track your investment</h3>
          <p>Track the process of your investment on your dashboard</p>
        </div>

        <div class="item fstr__card">
          <img src="~@/assets/icons/icon-returns.png" alt="">
          <h3>Get great returns</h3>
          <p>Get your returns at the time when due, no hassles</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import AppNav from '../../shared/app-nav/app-nav'
  import AppFooter from '../../shared/app-footer/app-footer'

  export default {
    name: 'how-it-works',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'how-it-works.scss';
</style>


<template>
  <main>
    <div class="about__component" >
      <div class="images">
        <img 
        src="~@/assets/images/green-beans.png" alt="" 
        data-aos="slide-right" 
        data-aos-delay="100" 
        data-aos-mirror="true">

        <img 
        src="~@/assets/images/corn.png" alt="" 
        data-aos="slide-left" 
        data-aos-delay="100" 
        data-aos-mirror="true">
      </div>

      <section class="header" data-aos="fade-up">
        <h1>How it works</h1>
        <div class="line"></div>
        <p>Farmstripe is committed to making your agro-investments as easy and fluid as possible. No more long processes and agonizing protocols</p>
      </section>

      <section class="content">
        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="50">
          <img src="~@/assets/icons/icon-account.png" alt="">
          <h3>Create an account</h3>
          <p>Create an account in less than a minute</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="100">
          <img src="~@/assets/icons/icon-sponsor.png" alt="">
          <h3>Sponsor a Farm</h3>
          <p>Pick from the variety of farms available to you to make your investment</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="150">
          <img src="~@/assets/icons/icon-track.png" alt="">
          <h3>Track your investment</h3>
          <p>Track the process of your investment on your dashboard</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="200">
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


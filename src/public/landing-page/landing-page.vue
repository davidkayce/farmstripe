<template>
  <main>
    <app-nav></app-nav>

    <header>
      <div class="c__overlay">
        <div class="c__content">
          <h2>Empowering farmers, one community at a time</h2>
          <h4>We keep the food chain going by empowering farmers</h4>
          <div class="mailing-list"> 
            <p>Join over <strong>500</strong> partners already signed up for early access to the next round</p>
            <input type="text" class="transparent" placeholder="Contact email address">
            <router-link to="/sign-in"><button class="btn">Empower a farmer now</button></router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- <div class="images">
      <img src="~@/assets/images/green-bush.png" alt="">
      <img src="~@/assets/images/potatoes.png" alt="">
      <img src="~@/assets/images/green-beans.png" alt="">
    </div> -->

    <why-farmstripe></why-farmstripe>
    <available-farms></available-farms>
    <how-it-works></how-it-works>
    <metrics></metrics>
    <mailing-list></mailing-list>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import AppNav from '../../shared/app-nav/app-nav'
  import AppFooter from '../../shared/app-footer/app-footer'
  import AvailableFarms from '../../shared/available-farms/available-farms'
  import Metrics from '../metrics-section/metrics'
  import MailingList from '../join-mailing-list/mailing-list'
  import WhyFarmstripe from '../why-farmstripe/why-farmstripe'
  import HowItWorks from '../how-it-works/how-it-works'

  export default {
    name: 'home',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter,
      'available-farms': AvailableFarms,
      'metrics': Metrics,
      'mailing-list': MailingList,
      'why-farmstripe': WhyFarmstripe,
      'how-it-works': HowItWorks
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./landing-page.scss";
</style>
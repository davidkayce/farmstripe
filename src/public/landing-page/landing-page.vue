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

    <available-farms></available-farms>
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

  export default {
    name: 'landingPage',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter,
      'available-farms': AvailableFarms,
      'metrics': Metrics,
      'mailing-list': MailingList
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./landing-page.scss";
</style>
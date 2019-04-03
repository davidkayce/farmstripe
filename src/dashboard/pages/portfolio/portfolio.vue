<template>
  <main>
    <div class="main__section">
      <h1>Welcome back Oluchi</h1>
      
      <div> 
        <div class="portfolio__info">
          <div class="portfolio__blocks">
            <p class="portfolio__options">RETURNS ON INVESTMENTS </p>
            <p class="portfolio__value">&#8358; 00.00</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options">INVESTMENT</p>
            <p class="portfolio__value">&#8358; 00.00</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options"> WALLET BALANCE </p>
            <p class="portfolio__value">&#8358; 00.00</p>
          </div>
        </div>
      </div>

      <h3>Your investments</h3>

      <div> 
        <div class="investment__info" @click="infoModal">
          <div class="investment__blocks">
            <p class="investment__title">Maize Farm </p>
            <p class="investment__units">&#8358; 100,000.00 &bull; 2 units </p>
            <p><span class="rate">30%</span> <span class="returns"> Returns</span> </p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Start Date</em></p>
            <p class="tenure__value">15 April 2019</p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Yield Date</em></p>
            <p class="tenure__value">15 September 2019</p>
          </div>
        </div>
      </div>
    </div>

    <info-modal v-if="infoModalVisible" @close="close"></info-modal>

    <div class="sidebar">
      <div class="mobile">
        <router-link to="/dashboard/available-farms"><button class="btn">See available farms</button></router-link>
      </div>

      <div class="large__screen">
        <h4>Available farms</h4>
        <dash-farms></dash-farms>
      </div>
    </div>
  </main>
</template>

<script>
  import InfoModal from '../../../modals/investment-info-modal'
  import DashboardFarms from '../../dashboard-farms'
  export default {
    name: 'portfolio',
    components: {
      'info-modal': InfoModal,
      'dash-farms': DashboardFarms
    },
    data: function () {
      return {
        infoModalVisible: false
      }
    },
    methods: {
      close () {
        this.infoModalVisible = false
      },
      infoModal () {
        this.infoModalVisible = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'portfolio.scss';
</style>
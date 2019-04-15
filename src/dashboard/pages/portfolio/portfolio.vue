<template>
  <main>
    <div class="main__section">
      <h1>Hello Oluchi !</h1>      
      <div> 
        <div class="portfolio__info">
          <div class="portfolio__blocks">
            <p class="portfolio__options">RETURNS ON INVESTMENTS </p>
            <p class="portfolio__value">&#8358; {{wallet.total_expected_returns.toFixed(2)}}</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options">INVESTMENT</p>
            <p class="portfolio__value">&#8358; {{wallet.total_investment.toFixed(2)}}</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options"> WALLET BALANCE </p>
            <p class="portfolio__value">&#8358; {{wallet.balance.toFixed(2)}}</p>
          </div>
        </div>
      </div>

      <h3>Your investments</h3>

      <div class="investment__card"> 
        <div class="investment__info">
          <div class="investment__blocks">
            <p class="investment__title">Maize Farm <span class="farm__id">FSH-456</span></p>
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
        <div>
          <button class="btn btn--link" @click="progress"> See Investment Progress </button>
        </div>
        <section class="progress_bar" v-if="showProgress">
          <ul>
            <li class="passed">Setting up</li>
            <li class="active_first">Planting</li>
            <li>Harvest</li>
            <li>Returns</li>
          </ul>
        </section>
      </div>
    </div>

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
  import DashboardFarms from '../../dashboard-farms'
  export default {
    name: 'portfolio',
    components: {
      'dash-farms': DashboardFarms
    },
    data: function () {
      return {
        showProgress: false
      }
    },
    computed: {
      wallet () {
        return this.$store.getters.getWallet
      }
    },
    methods: {
      progress () {
        this.showProgress = !this.showProgress
      }
    },
    created () {
      this.$store.dispatch('getWalletInfo')
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'portfolio.scss';
</style>
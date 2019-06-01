<template>
  <main>
    <div class="main__section">
      <h1>Hello {{user? user[0]: ''}} !</h1>      
      <div> 
        <div class="portfolio__info">
          <div class="portfolio__blocks">
            <p class="portfolio__options">RETURNS ON INVESTMENTS </p>
            <p class="portfolio__value">&#8358; {{wallet.total_expected_returns ? wallet.total_expected_returns.toLocaleString() : '0.00'}}</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options">INVESTMENTS</p>
            <p class="portfolio__value">&#8358; {{wallet.total_investment ? wallet.total_investment.toLocaleString() : '0.00'}}</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options"> WALLET BALANCE </p>
            <p class="portfolio__value">&#8358; {{wallet.balance? wallet.balance.toLocaleString() : '0.00'}}</p>
          </div>
        </div>
      </div>

      <h3>Your investments</h3>

      <div  v-if="wallet.investments.length === 0">
        <p> <em>You do not have any investments. Please click on any of the available farms to create an investment</em></p>
      </div>

      <div v-else>
        <transition-group name="slide-in" tag="div">
        <div 
        class="investment__card" 
        v-for="investment in wallet.investments" :key="investment.id"> 
          <div class="investment__info">
            <div class="investment__blocks">
              <p class="investment__title">{{investment.farm.name}} farm <span class="farm__id">{{ investment.farm.id.toUpperCase()}}</span></p>
              <p class="investment__units">&#8358; {{investment.total.toLocaleString()}} &bull; {{investment.units}} units </p>
              <p><span class="rate">{{investment.farm.returns}}%</span> <span class="returns"> Returns</span> </p>
            </div>

            <div class="investment__blocks">
              <p class="investment__tenure"><em>Start Date</em></p>
              <p class="tenure__value">{{investment.created_at | moment("MMMM Do YYYY")}}</p>
            </div>

            <div class="investment__blocks">
              <p class="investment__tenure"><em>Yield Date</em></p>
              <p class="tenure__value">{{investment.created_at | moment("add", investment.farm.yield_duration+" months","MMMM Do YYYY")}}</p>
            </div>
          </div>
          <div>
            <button class="btn btn--link" @click="progress(investment.id)"> See Investment Progress </button>
          </div>
          <transition name="fade">
            <section class="progress_bar" v-if="investment.id === progressId & showProgress">
              <ul>
                <li class="passed">Setting up</li>
                <li class="active_first">Planting</li>
                <li>Harvest</li>
                <li>Returns</li>
              </ul>
            </section>
          </transition>
        </div>
        </transition-group>
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
        showProgress: false,
        progressId: 0
      }
    },
    computed: {
      wallet () {
        return this.$store.getters.getWallet
      },
      user () {
        let name = this.$store.getters.getUser.name
        if (name) {
          return name.split(' ')
        }
      }
    },
    methods: {
      progress (investmentId) {
        this.progressId = investmentId
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

  .fade-enter {
    opacity: 0;
    transform: translateY(-3rem);
  }
  .fade-enter-active {
    transition: opacity 0.2s, transform 0.2s;
  }
  .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
    transform: translateY(-3rem);
    opacity: 0;
  }
  
  .slide-in-enter {
    transform: translateY(-2rem);
    opacity: 0;
  }
  .slide-in-enter-active {
    transition: all .2s ease;
  }
</style>
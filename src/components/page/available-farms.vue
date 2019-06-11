<template>
  <main data-aos="fade-up">
    <h1>Available Farms</h1>
    <div class="line"></div>
    <p class="title__info">Select a farm you would like to sponsor from the available farms and the number of units you want, then proceed to pay the sponsorship fee on our secure platform, payment will be reflected in your account immediately.</p>
    
    <div class="card__container">
      <div 
      class="farm__card" 
      data-aos="fade-up"
      v-for="farm in farms.slice(0, 6)" 
      @click="showModal(farm)" 
      :key="farm.id">  
        <div class="farm__details" :style="{ background: 'url(' + farm.image_url + ')'}">
          <div class="overlay">
            <div class="farm__title">
              <p>{{farm.name}}</p>
              <p><strong>{{ Date.now() <= farm.investment_deadline ? (farm.available_units >= 1 ? 'AVAILABLE':'SOLD OUT') : 'UNAVAILABLE'}}</strong></p>
            </div>
            <p class="rate">
              <span class="farm__rate">{{farm.returns}}%</span> returns
            </p>
            <p>{{farm.available_units + ' units'}} available</p>
          </div>
        </div>
        <footer>
          <p>{{farm.id.toUpperCase()}}</p>
          <p><span><strong>&#8358; {{farm.cost_per_unit.toLocaleString()}}</strong></span> per unit </p>
          <p>{{farm.returns}}% returns in {{farm.yield_duration}} months</p>
        </footer>
      </div>
    </div>

    <farm-modal v-if="isModalVisible" @close="closeModal" :farm="currentFarm"></farm-modal>
  </main>
</template>

<script>
  export default {
    name: 'availableFarms',
    components: {
      'farm-modal': () => import('../utils/farm-modal')
    },
    data () {
      return {
        isModalVisible: false,
        currentFarm: {}
      }
    },
    computed: {
      farms () {
        return this.$store.getters.allFarms
      }
    },
    methods: {
      showModal (farm) {
        this.isModalVisible = true
        this.currentFarm = farm
      },
      closeModal () {
        this.isModalVisible = false
      }
    },
    created () {
      this.$store.dispatch('getAllFarms')
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  color: $dgreen;
  text-align: right;
  margin: 7rem 14% 1.5rem 0;

  @media (min-width: $breakpoint-tablet) {
    margin: 15rem 14% 1.5rem 0;
  }
}

.line {
  background: $dgreen;
  display: flex;
  height: 3px;
  width: 15%;
  margin: 1rem 0 3rem 71%;

  @media (min-width: $breakpoint-desktop) {
    margin: 1rem 0 3rem 76%;
    width: 10%;
  }
}

.title__info {
  width: 70%;
  margin: 0 auto 2rem;
  text-align: right;
  font-size: 1.5rem;
  color: $grey-medium;
  letter-spacing: -0.5px;

  @media (min-width: $breakpoint-tablet) {
    width: 40%;
    margin: 0 47% 2rem;
  }

  @media (min-width: $breakpoint-desktop) {
    width: 40%;
    margin: 0 46% 2rem;
    font-size: 1.7rem;
  }
}

.card__container {
  overflow: auto;

  @media (min-width: $breakpoint-tablet) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    max-width: 80%;
    margin: 2rem auto;
  }

  @media (min-width: $breakpoint-desktop) {
    max-width: 75%;
    margin: 2rem auto;
  }

  @media (min-width: 1600px) {
    max-width: 108rem;
    margin: 2rem auto;
  }

  .farm__card {
    flex-basis: 0;
    width: 80%;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 15px 0 rgba(52, 89, 72, 0.15);
    background-color: #fff;
    margin: 2rem auto;

    &:focus,
    &:hover {
      -webkit-transform: translateY(-1rem);
      transform: translateY(-1rem);
      transition: all 0.2s ease-in-out;
    }

    @media (min-width: $breakpoint-tablet) {
      width: 92.5%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 100%;
    }

    @media (min-width: 1200px) {
      width: 90.5%;
    }

    .overlay {
      background-color: rgba(52, 89, 72, 0.8);
      height: 100%;
      padding: 2.5rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    .farm__details {
      background-size: cover;
      background-repeat: no-repeat;
      height: 20rem;
      color: $white;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      @media (min-width: $breakpoint-tablet) {
        width: 28rem;
      }

      @media (min-width: $breakpoint-desktop) {
        width: 32rem;
      }
  
      p {
        color: white;
        font-weight: 400;
        font-size: 1.5rem;
        opacity: 0.85;
      }

      .rate {
        .farm__rate {
          font-weight: 600;
          font-size: 4.5rem;
          margin-right: 0.5rem;
        }
      }
    }

    .farm__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem 0 3rem;
      
      p{
        &:first-of-type {
          opacity: 0.7;
          font-size: 2rem;
        }

        &:nth-of-type(2) {
          font-size: 1.2rem
        }
      }
    }

    footer {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      align-content: center;
  
      p {
        color: $grey-light;
        font-size: 1.3rem;
        padding: none;
        margin-bottom: 0.5rem;
  
        &:nth-of-type(2) {
          font-size: 1.5rem;
          color: $dgreen;
        }
      }
    }

    .available {
      display: inline-block;
      float: right;
      color: $fstrgreen;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
}
</style>

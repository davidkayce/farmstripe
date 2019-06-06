<template>
  <main>
    <div 
      class="farm__card" 
      data-aos="fade-up"
      v-for="farm in farms.slice(0, 6)" 
      @click="showModal(farm)" 
      :key="farm.id">  
        <div class="farm__details" :style="{ background: 'url(' + farm.image_url + ')' }">
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
    <farm-modal v-if="isModalVisible" @close="closeModal" :farm="currentFarm"></farm-modal>
  </main>
</template>

<script>
  export default {
    name: 'dashboardFarms',
    components: {
      'farm-modal': () => import('./modals/farm-modal')
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
  main {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 75rem;
    overflow: auto;
  }

  .farm__card {
    width: 80%;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 15px 0 rgba(52, 89, 72, 0.15);
    background-color: #fff;
    margin: 4rem auto;

    @media (min-width: $breakpoint-tablet) {
      width: 100%;
      margin: 2rem 0;
      max-width: 33.7rem;
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
        width: 26.5rem;
      }

      @media (min-width: $breakpoint-desktop) {
        width: 30.7rem;
      }

      @media (min-width: 1200px) {
        width: 33.7rem;
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

    .available {
      display: inline-block;
      color: $fstrgreen;
      font-weight: 600;
      font-size: 1.1rem;
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
</style>
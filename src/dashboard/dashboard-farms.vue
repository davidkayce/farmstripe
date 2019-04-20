<template>
  <main>
    <div class="farm__card" v-for="farm in farms.slice(0, 15)" @click="showModal(farm)" :key="farm.id">  
      <div class="farm__details">
        <div class="overlay">
        <div class="farm__title">
          <p>{{farm.name}}</p>
          <p><strong>{{farm.available? 'AVAILABLE':'SOLD OUT'}}</strong></p>
        </div>
        <p class="rate">
          <span class="farm__rate">{{farm.rate}}%</span> returns
        </p>
        <p>{{farm.available? farm.units + ' units' : 'No units'}} available</p>
      </div>
    </div>
    <footer>
      <p>{{farm.id}}</p>
      <p><span><strong>&#8358; {{farm.cost}}</strong></span> per unit </p>
      <p>{{farm.rate}}% returns in {{farm.time}}</p>
    </footer>
    </div>
    <farm-modal v-if="isModalVisible" @close="closeModal" :farm="currentFarm"></farm-modal>
  </main>
</template>

<script>
  import FarmModal from '../modals/farm-modal'

  export default {
    name: 'dashboardFarms',
    components: {
      'farm-modal': FarmModal
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';

  main {
    display: flex;
    flex-direction: column;
    margin: 0;
    overflow: hidden
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
    }

    .overlay {
      background-color: rgba(52, 89, 72, 0.8);
      height: 100%;
      padding: 2.5rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    .farm__details {
      background-image: url('~@/assets/images/maize-field.jpg');
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
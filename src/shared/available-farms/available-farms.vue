<template>
  <main>
    <h2>Available Farms</h2>
    <div class="line"></div>
    <div class="card__container">
      <!-- note that the slice below is to determine how many elements we are showing  -->
      <div class="farm__card" v-for="(farm, index) in farms.slice(0, 6)">
        <header>
          <p class="farm__title">{{farm.name}}</p>
          <p class="available">{{farm.available? 'AVAILABLE':'SOLD OUT'}}</p>
        </header>   
        <div class="farm__details">
          <div class="overlay">
            <h4>
              <span class="farm__rate">{{farm.rate}}%</span> in {{farm.time}}
            </h4>
            <p class="returns">returns</p>
            <p class="farm__cost"><span>&#8358; {{farm.cost}}</span> per unit </p>
            <button class="btn--transparent" @click="showModal(farm)">View farm</button>
          </div>
        </div>
      </div>
    </div>
    <farm-modal v-show="isModalVisible" @close="closeModal" :farm="currentFarm"></farm-modal>
  </main>
</template>

<script>
  import FarmModal from '../../components/modals/farm-modal'
  export default {
    name: 'availableFarms',
    components: {
      'farm-modal': FarmModal
    },
    data () {
      return {
        index: 0,
        isModalVisible: false,
        currentFarm: {},
        farms: [
          {
            name: 'Maize farm 1',
            description: 'This maize farm 1 sucks bull',
            available: true,
            rate: 30,
            time: '8 months',
            cost: 60000,
            units: 23
          },
          {
            name: 'Maize farm 2',
            description: 'This maize farm 2 sucks bull',
            available: false,
            rate: 20,
            time: '8 months',
            cost: 60000,
            units: 25
          },
          {
            name: 'Maize farm 3',
            description: 'This maize farm 3 sucks bull',
            available: true,
            rate: 30,
            time: '8 months',
            cost: 60000,
            units: 28
          }
        ]
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
  @import './available-farms.scss';
</style>
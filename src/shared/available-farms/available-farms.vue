<template>
  <main>
    <h1>Available Farms</h1>
    <div class="line"></div>
    <p class="title__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, accusantium. Saepe molestiae, sapiente aut at vel beatae</p>
    <div class="card__container">
      <!-- note that the slice below is to determine how many elements we are showing  -->
      <div class="farm__card" v-for="(farm, index) in farms.slice(0, 15)" @click="showModal(farm)">  
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
    </div>
    <farm-modal v-if="isModalVisible" @close="closeModal" :farm="currentFarm"></farm-modal>
  </main>
</template>

<script>
  import FarmModal from '../../modals/farm-modal'

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
            name: 'Maize',
            id: 'FSH-567',
            description: 'This maize farm 1 sucks bull',
            available: true,
            rate: 30,
            time: '6 months',
            cost: 50000,
            units: 8
          },
          {
            name: 'Maize',
            id: 'FHY-890',
            description: 'This maize farm 2 sucks bull',
            available: false,
            rate: 20,
            time: '6 months',
            cost: 50000,
            units: 25
          },
          {
            name: 'Maize',
            id: 'SDT-678',
            description: 'This maize farm 3 sucks bull',
            available: false,
            rate: 30,
            time: '6 months',
            cost: 50000,
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
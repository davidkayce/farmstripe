<template>
  <main>
    <h1>Available Farms</h1>
    <div class="line"></div>
    <p class="title__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, accusantium. Saepe molestiae, sapiente aut at vel beatae labore ducimus dolores sed dignissimos voluptas perferendis ad in explicabo, magnam reprehenderit placeat quae doloremque non veniam esse iste assumenda atque. Corporis, atque?</p>
    <div class="card__container">
      <!-- note that the slice below is to determine how many elements we are showing  -->
      <div class="farm__card" v-for="(farm, index) in farms.slice(0, 15)" @click="showModal(farm)">
        <header>
          <p class="farm__title">{{farm.name}}</p>
          <p class="available">{{farm.available? 'AVAILABLE':'SOLD OUT'}}</p>
        </header>   
        <div class="farm__details">
          <div class="overlay">
            <p>
              <span class="farm__rate">{{farm.rate}}%</span> <br> in {{farm.time}}
            </p>
            <p class="farm__cost"><span>&#8358; {{farm.cost}}</span> per unit </p>
          </div>
        </div>
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
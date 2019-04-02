<template>
  <main>
    <h1>Available Farms</h1>
    <div class="line"></div>
    <p class="title__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, accusantium. Saepe molestiae, sapiente aut at vel beatae</p>
    <div class="card__container">
      <!-- note that the slice below is to determine how many elements we are showing  -->
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
        isModalVisible: false,
        currentFarm: {},
        farms: this.$store.getters.allFarms
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
  @import '~styles';
  @import './available-farms.scss';
</style>
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
  import FarmModal from '../../modals/farm-modal'

  export default {
    name: 'availableFarms',
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

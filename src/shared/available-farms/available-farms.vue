<template>
  <main>
    <h2>Available Farms</h2>
    <div class="line"></div>
    <div class="card__container">
      <div class="farm__card">
        <header>
          <p class="farm__title">Maize farm</p>
          <p class="available">SOLD OUT</p>
        </header>   
        <div class="farm__details">
          <div class="overlay">
            <h4>
              <span class="farm__rate">30%</span> in 8 months
            </h4>
            <p class="returns">returns</p>
            <p class="farm__cost"><span>&#8358; 60,000</span> per unit </p>
            <button class="btn--transparent" @click="showModal">View farm</button>
          </div>
        </div>
      </div>

      <div class="farm__card">
        <header>
          <p class="farm__title">Cucumber farm</p>
          <p class="available">SOLD OUT</p>
        </header>   
        <div class="farm__details">
          <div class="overlay">
            <h4>
              <span class="farm__rate">22%</span> in 2 months
            </h4>
            <p class="returns">returns</p>
            <p class="farm__cost"><span>&#8358; 30,000</span> per unit </p>
            <button class="btn--transparent" @click="showModal">View farm</button>
          </div>
        </div>
      </div>

      <div class="farm__card">
        <header>
          <p class="farm__title">Soybeans farm</p>
          <p class="available">SOLD OUT</p>
        </header>   
        <div class="farm__details">
          <div class="overlay">
            <h4>
              <span class="farm__rate">35%</span> in 6 months
            </h4>
            <p class="returns">returns</p>
            <p class="farm__cost"><span>&#8358; 54,000</span> per unit </p>
            <button class="btn--transparent" @click="showModal">View farm</button>
          </div>
        </div>
        
      </div>
    </div>

    <farm-modal v-show="isModalVisible" @close="closeModal"></farm-modal>
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
        isModalVisible: false
      }
    },
    methods: {
      showModal () {
        this.isModalVisible = true
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
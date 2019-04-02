<template>
  <main>
    <div class="modal-backdrop" @click="close"></div>
      <div>
        <section class="blank-space"></section>
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <header>
            <h1>MZH-890</h1>
            <img
              class="close-icon"
              src="~@/assets/icons/icon-close.png"
              @click="close"
            />
          </header>

          <section class="modal-content --small">
            <section class="progress_bar">

            </section>
        
            <h3>How much would you like to withdraw?</h3>
            <span>You can make a minimum payment of <strong>&#8358;100</strong></span> 
          </section>

          <section class="footer">
            <button class="btn-modal" @click="close"> Done </button>
          </section>
        </div>
      </div>
  </main>
</template>

<script>
  export default {
    name: 'payout-modal',
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';

  h1 {
    color: $dgreen
  }

  h3 {
    margin-bottom: 2rem
  }

  span {
    color: $grey-medium;
    font-size: 1.3rem;
  }
</style>
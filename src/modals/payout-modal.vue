<template>
  <main>
    <div class="modal-backdrop" @click="close"></div>
      <div>
        <section class="blank-space"></section>
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <header>
            <h1>Request payout</h1>
            <img
              class="close-icon"
              src="~@/assets/icons/icon-close.png"
              @click="close"
            />
          </header>

          <section class="modal-content --small">
            <h3>How much would you like to withdraw?</h3>
            <p>
              Please note that withdrawals from your account would require a fee of 2% of the transaction amount. Thank you for investing with farmstripe
            </p>
            <input type="number" v-model="withdrawalAmount" placeholder="Amount to withdraw">
            <span>You can make a minimum payment of <strong>&#8358;100</strong></span> 
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            :disabled="withdrawalAmount < 100">
              Request Payout
            </button>
          </section>
        </div>
      </div>
  </main>
</template>

<script>
  // import vuex from '../store'
  import paystack from 'vue-paystack'

  export default {
    name: 'payout-modal',
    props: ['farm'],
    components: {
      paystack
    },
    data () {
      return {
        withdrawalAmount: 100
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

  input {
    margin-bottom: 2rem;

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
  }

  span {
    color: $grey-medium;
    font-size: 1.3rem;
  }
</style>
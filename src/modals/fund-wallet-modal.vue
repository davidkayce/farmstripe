<template>
  <main>
    <div class="modal-backdrop" @click="close"></div>
      <div>
        <section class="blank-space"></section>
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <header>
            <h1>Fund Wallet</h1>
            <img
              class="close-icon"
              src="~@/assets/icons/icon-close.png"
              @click="close"
            />
          </header>

          <section class="modal-content --small">
            <span>You can make a minimum payment of <strong>&#8358;100</strong> and a maximum payment of <strong>&#8358;500,000</strong> to fund your wallet.</span>
            <input type="number" v-model="fundAmount"> 
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            :disabled="withdrawalAmount < 100 && withdrawalAmount > 500000">
              <paystack
                v-if="signedIn && farm.available"
                :amount="amount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
                class="paystack"
              >Fund this wallet</paystack>
              k.jl
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
    name: 'fund-wallet-modal',
    // props: ['farm'],
    components: {
      paystack
    },
    data () {
      return {
        fundAmount: 100,
        paystackkey: 'pk_live_49d15ed209788db731d3170d87a47102a0330848',
        email: 'david@farmstripe.com',
        amount: 70000,
        reference: 'hjkfbhgjsnvmjkkngl'
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

  .modal {
    box-shadow: none;
  }

  h1 {
    color: $dgreen
  }

  h3 {
    margin-bottom: 2rem
  }

  input {
    margin: 2rem 0;

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
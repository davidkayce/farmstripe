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
            <p>Please note that you can make a minimum withdrawal of <strong>&#8358;1000</strong>. Withdrawals from your account would require a fee of 2% of the transaction amount.</p>
            <p>Thank you for investing with farmstripe.</p>
            <input type="number" v-model="withdrawalAmount" placeholder="Amount to withdraw"> 
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            :disabled="withdrawalAmount < 1000">
              Request Payout
            </button>
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
        withdrawalAmount: 1000
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
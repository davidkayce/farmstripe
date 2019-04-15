<template>
  <main>
    <div class="main__section">
      <h1>Transaction history</h1>
      <payout-modal v-if="payoutModalVisible" @close="closePayoutModal"></payout-modal>
      <fund-modal v-if="fundModalVisible" @close="closeFundModal"></fund-modal>
      <div> 
        <div class="transaction__info">
          <div class="transaction__left">
            <img src="~@/assets/icons/icon-logo.png" alt="transaction type">
          </div>
          
          <div class="transaction__right">
            <div class="transaction__blocks">
              <p class="transaction__title">FST-970012 </p>
              <p class="transaction__type">Wallet Funding </p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Created on</em></p>
              <p class="value">15 March 2019</p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Amount</em></p>
              <p class="value">&#8358; 55,000.00</p>
            </div>
          </div>
        </div>
      </div>

      <div> 
        <div class="transaction__info">
          <div class="transaction__left">
            <img src="~@/assets/icons/icon-logo.png" alt="transaction type">
          </div>
          
          <div class="transaction__right">
            <div class="transaction__blocks">
              <p class="transaction__title">FST-970012 </p>
              <p class="transaction__type">Wallet Funding </p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Created on</em></p>
              <p class="value">15 March 2019</p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Amount</em></p>
              <p class="value">&#8358; 55,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <div> 
        <div class="payment__info">
          <div class="payment__blocks">
            <p class="payment__options">WALLET BALANCE</p>
            <p class="payment__value">&#8358; {{wallet.balance.toFixed(2)}}</p>
          </div>
          <hr>
          <p class="payment__cta" @click="fundModal()">Fund Wallet</p>
        </div>
      </div>

      <div> 
        <div class="payment__info">
          <div class="payment__blocks">
            <p class="payment__options">TOTAL PAYOUT</p>
            <p class="payment__value">&#8358; 0.00</p>
          </div>
          <hr>
          <p class="payment__cta" @click="payoutModal()">Request payout</p>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script>
  import PayoutModal from '../../../modals/payout-modal'
  import FundModal from '../../../modals/fund-wallet-modal'
  export default {
    name: 'wallets',
    components: {
      'payout-modal': PayoutModal,
      'fund-modal': FundModal
    },
    data: function () {
      return {
        fundModalVisible: false,
        payoutModalVisible: false
      }
    },
    computed: {
      wallet () {
        return this.$store.getters.getWallet
      }
    },
    methods: {
      fundModal () {
        this.fundModalVisible = true
      },
      payoutModal () {
        this.payoutModalVisible = true
      },
      closePayoutModal () {
        this.payoutModalVisible = false
      },
      closeFundModal () {
        this.fundModalVisible = false
      }
    },
    created () {
      this.$store.dispatch('getWalletInfo')
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'wallets.scss'
</style>
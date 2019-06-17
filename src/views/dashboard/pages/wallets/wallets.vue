<template>
  <main>
    <div class="main__section">
      <h1>Transaction history</h1>
      <payout-modal
        v-if="payoutModalVisible"
        @close="closePayoutModal"
      ></payout-modal>
      <fund-modal
        v-if="fundModalVisible"
        @close="closeFundModal"
      ></fund-modal>

      <div
        v-if="transactions.length === 0"
        class="empty"
      >
        You have not made any transactions yet, please fund your wallet to begin investing in our available farms
      </div>

      <div v-else>
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
        >
          <div 
          class="transaction__info"
          :style="{borderColor : transaction.state === 'failed' ? 'red' : transaction.state === 'processing' ? 'orange' : 'lemon-green' }"
          >
            <div class="transaction__left">
              <img
                src="~@/assets/icons/icon-transfers.png"
                alt="transaction type"
                loading="lazy"
                :style="{transform : transaction.state === 'failed' ? 'rotate(180deg)' : '' }"
              >
            </div>

            <div class="transaction__right">
              <div class="transaction__blocks">
                <p class="transaction__title">{{transaction.id.toUpperCase()}}</p>
                <p class="transaction__type">{{transaction.type}} &bull; {{transaction.state}}</p>
              </div>

              <div class="transaction__blocks">
                <p class="transaction__options"><em>Created on</em></p>
                <p class="value">{{transaction.created_at | moment('MMMM Do YYYY')}}</p>
              </div>

              <div class="transaction__blocks">
                <p class="transaction__options"><em>Amount</em></p>
                <p class="value">&#8358; {{transaction.amount.toLocaleString()}}</p>
              </div>
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
            <p class="payment__value">&#8358; {{ wallet.balance? wallet.balance.toFixed(2) : '0.00'}}</p>
          </div>
          <hr>
          <p
            class="payment__cta"
            @click="fundModal()"
          >Fund Wallet</p>
        </div>
      </div>

      <div>
        <div class="payment__info">
          <div class="payment__blocks">
            <p class="payment__options">TOTAL PAYOUT</p>
            <p class="payment__value">&#8358; {{ wallet.total_withdraws? total_withdraws.toFixed(2) : '0.00'}}</p>
          </div>
          <hr>
          <p
            class="payment__cta"
            @click="payoutModal()"
          >Request payout</p>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
export default {
  name: 'wallets',
  components: {
    'payout-modal': () => import('@/components/modals/payout-modal'),
    'fund-modal': () => import('@/components/modals/fund-wallet-modal')
  },
  data () {
    return {
      fundModalVisible: false,
      payoutModalVisible: false
    }
  },
  computed: {
    wallet () {
      return this.$store.getters.getWallet
    },
    transactions () {
      return this.$store.getters.getTransactions
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
    try {
      this.$Progress.start()
      this.$store.dispatch('getWalletInfo')
      this.$store.dispatch('getTransactions')
      this.$Progress.finish()
    } catch (error) {
      this.$Progress.fail()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'wallets.scss';
</style>
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
              loading="lazy"
            />
          </header>

          <section class="modal-content --small">
            <p>
              <Feedback v-if="feedback.visible" :feedback="feedback"></Feedback>
            </p>
            <p>You can make a minimum payment of <strong>&#8358;1000</strong> and a maximum payment of <strong>&#8358;800,000</strong> to fund your wallet.</p>
            <p>Thank you for investing with farmstripe </p>
            <input type="number" v-model="fundAmount" @change="makeDeposit()"> 
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            :disabled="fundAmount < 1000 || fundAmount > 800000"
            @click="makeDeposit()">
              <paystack
                style="width: 100%"
                v-if="!(fundAmount < 1000 || fundAmount > 800000)"
                :amount="amount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="closePaystack"
                :embed="false"
                class="paystack"
              >Fund this wallet</paystack>
              {{(fundAmount < 1000 || fundAmount > 800000)? 'You cannot fund your wallet' : ''}}
            </button>
          </section>
        </div>
      </div>
  </main>
</template>

<script>
  import paystack from 'vue-paystack'

  export default {
    name: 'fund-wallet-modal',
    components: {
      paystack,
      Feedback: () => import('@/components/feedback')
    },
    data () {
      return {
        fundAmount: 1000,
        paystackkey: 'pk_live_1fde1b3d80095b1ab589bc2cdf4e75ddd13c7d3c',
        payload: {},
        reference: '',
        feedback: {
          visible: false,
          type: 'danger',
          message: ''
        }
      }
    },
    computed: {
      amount () {
        return this.fundAmount * 100
      },
      email () {
        return this.$store.getters.getUser.email
      }
    },
    methods: {
      close () {
        this.$emit('close')
        try {
          this.$Progress.start()
          this.$store.dispatch('getTransactions')
          this.$Progress.finish()
        } catch (error) {
          this.$Progress.fail()
        }
      },
      makeDeposit () {
        const data = {
          amount: this.fundAmount
        }
        this.$Progress.start()
        this.$store.dispatch('createDeposit', data)
          .then((res) => {
            this.payload = res.data
            this.reference = payload.txid
            this.$Progress.finish()
            this.closePaystack()
          }).catch((err) => {
            this.$Progress.fail()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Sorry, we are unable to fund your wallet right now, please try again.'
            setTimeout(() => {
              this.close()
            }, 2000);
          })
      },
      callback (response) {
        this.$store.dispatch('confirmDeposit', payload.id, response.reference)
        this.close()
      },
      closePaystack() {
        this.close()
      }
    }
  }
</script>

<style lang="scss" scoped>
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

  .paystack {
    color: $white;
    font-size: 1.5rem;
    font-weight: 600;
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none
    }
  }
</style>
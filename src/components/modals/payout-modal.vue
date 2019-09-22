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
              loading="lazy"
            />
          </header>

          <section class="modal-content --small">
            <p>
              <Feedback v-if="feedback.visible" :feedback="feedback"></Feedback>
            </p>
            <h3>How much would you like to withdraw?</h3>
            <p>Please note that you can make a minimum withdrawal of <strong>&#8358;1000</strong>. Withdrawals from your account would require a fee of 2% of the transaction amount.</p>
            <p>Thank you for investing with farmstripe.</p>
            <input type="number" v-model="amount" placeholder="Amount to withdraw"> 
          </section>
          <section class="footer">
            <button 
            class="btn-modal"
            @click="withdraw" 
            :disabled="amount < 1000">
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
        amount: 1000,
        feedback: {
          visible: false,
          type: 'danger',
          message: ''
        }
      }
    },
    components: {
      Feedback: () => import('@/components/feedback')
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
      withdraw () {
        const data = {
          amount: this.amount
        }
        this.$Progress.start()
        this.$store.dispatch('createPayout', data)
          .then(() => {
            this.$Progress.finish()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Your request for a withdrawal has reached us and would be reflected in your account shortly'
            setTimeout(() => {
              this.close()
            }, 2500)
          }).catch(() => {
            this.$Progress.fail()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Sorry, we are unable to process your withdrawal right now. Please confirm you have sufficient balance in your wallet and try again.'
            setTimeout(() => {
              this.close()
            }, 2800)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
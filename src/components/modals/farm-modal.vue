<template>
  <main>
    <div class="modal-backdrop" @click="close"></div>
    <transition name="modal-fade">
      <div>
        <section class="blank-space"></section>
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <header>
            <h1>{{farm.name}}</h1>
            <img
              class="close-icon"
              src="~@/assets/icons/icon-close.png"
              @click="close"
              loading="lazy"
            />
          </header>

          <section class="modal-content">
            <p>
              <Feedback v-if="feedback.visible" :feedback="feedback"></Feedback>
            </p>
            <p>
              {{farm.description}}
            </p>
            <div class="calculator ">
              <h3><strong>Investment Calculator</strong></h3>
              <label for="units">How many units do you want to buy</label>
              <input type="number" name="units" v-model="investUnits">
              <span>You pay <span class="investment">&#8358;{{(farm.cost_per_unit * investUnits).toLocaleString()}}</span>and get <span class="investment">&#8358;{{ ((farm.cost_per_unit * investUnits) * (1 + (farm.returns /100))).toLocaleString() }}</span> in {{farm.yield_duration}} months </span>
            </div>
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            @click="invest()"
            :disabled="!farm.available_units || investUnits < 1">
              {{(farm.available_units ? 'Invest in this Farm' : 'There is no available unit to invest')}}
            </button>
          </section>
        </div>
        <section class="blank-space"></section>
      </div>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'farm-modal',
    props: ['farm'],
    components: {
      Feedback: () => import('@/components/feedback')
    },
    data () {
      return {
        investUnits: 1,
        feedback: {
          visible: false,
          type: 'danger',
          message: ''
        }
      }
    },
    computed: {
      signedIn () {
        let token = localStorage.getItem('access_token') || null
        let exp = localStorage.getItem('expiry_date')
        if (token === null) {
          return false
        } else {
          if (Date.now() > exp) {
            localStorage.removeItem('access_token')
            return false
          } else {
            return true
          }
        }
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      invest () {
        const data = {
          farm_id: this.farm.id,
          units: this.investUnits
        }
        this.$Progress.start()
        this.$store.dispatch('createInvestment', data)
          .then(() => {
            this.$Progress.finish()
            this.feedback.visible = true
            this.feedback.type = 'success'
            this.feedback.message = 'You have successfully made an investment in this farm. You would be redirected to your wallets now'
            setTimeout(() => {
              this.close()
            }, 2500)
            this.$router.push('/dashboard/wallets')
          }).catch(() => {
            this.$Progress.fail()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Sorry, you cannot make an investment in this farm. Please confirm you have sufficient balance in your wallet and try again.'
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

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease
  }

  .calculator {
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 16px 39px -10px rgba(52, 89, 72, 0.3);

    h3 { 
      color: $dgreen;
      margin-bottom: 1.5rem;
    }

    span {
      color: $grey-medium;
      font-size: 1.3rem;

      .investment {
        font-size: 2rem;
        color: $dgreen;
        font-weight: 600;
        margin: 0 0.5rem;
      }
    }

    input {
      margin-bottom: 2rem;

      &::-webkit-inner-spin-button, 
      &::-webkit-outer-spin-button { 
        -webkit-appearance: none;
      }
    }
  }
</style>


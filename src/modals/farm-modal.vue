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
            />
          </header>

          <section class="modal-content">
            <p>
              {{farm.description}}
            </p>
            <div class="calculator ">
              <h3><strong>Investment Calculator</strong></h3>
              <label for="units">How many units do you want to buy</label>
              <input type="number" name="units" v-model="investUnits">
              <span>You pay <span class="investment">&#8358;{{farm.cost * investUnits}}</span>and get <span class="investment">&#8358;{{((farm.cost * investUnits) * (1 + (farm.rate /100))).toFixed(2)}}</span> in {{farm.time}} </span>
            </div>
          </section>
          <section class="footer">
            <button 
            class="btn-modal" 
            @click=" signedIn? '' : goSign()"
            :disabled="!farm.available">
              <paystack
                v-if="signedIn && farm.available"
                :amount="investAmount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
                class="paystack"
              >Invest in this farm</paystack>
              {{signedIn? (farm.available? '' : 'There is no available unit to invest') : 'Sign In to Invest'}}
            </button>
          </section>
        </div>
        <section class="blank-space"></section>
      </div>
    </transition>
  </main>
</template>

<script>
  import paystack from 'vue-paystack'

  export default {
    name: 'farm-modal',
    props: ['farm'],
    components: {
      paystack
    },
    data () {
      return {
        investUnits: 1,
        paystackkey: 'pk_test_f7fd88a95b0dbe1b377e97eb025d122d934ed673',
        email: 'david@farmstripe.com',
        reference: 'hjkfbhgjnbgskngl'
      }
    },
    computed: {
      investAmount () {
        console.log(this.investUnits)
        return this.investUnits * this.farm.cost * 100
      },
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
      goSign () {
        this.$router.push('/sign-in')
      },
      callback (response) {
        console.log(response)
        this.$router.push('/dashboard')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';

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


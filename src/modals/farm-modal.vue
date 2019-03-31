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
            <label for="units">How many units do you want to buy</label>
            <input type="number" name="units">
              Each unit of this farm goes for {{farm.cost}} <span v-currency="'naira'"></span>
              <h3>You pay</h3>  and get  after 
          </section>
          <section class="footer">
            <button class="btn-modal" @click=" signedIn? '' : goSign() ">
              <paystack
                v-if="signedIn"
                :amount="amount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
                class="paystack"
              >Invest in this farm</paystack>
              {{signedIn? '' : 'Sign In to Invest'}}
            </button>
          </section>
        </div>
        <section class="blank-space"></section>
      </div>
    </transition>
  </main>
</template>

<script>
  import vuex from '../store'
  import paystack from 'vue-paystack'

  export default {
    name: 'modal',
    props: ['farm'],
    components: {
      paystack
    },
    data () {
      return {
        signedIn: !vuex.getters.userState,
        paystackkey: 'pk_live_49d15ed209788db731d3170d87a47102a0330848',
        email: 'foobar@example.com',
        amount: 1000000,
        reference: 'hjkfbhsjfshf'
      }
    },
    methods: {
      close () {
        this.$emit('close')
        console.log('this shit is closed')
      },
      goSign () {
        console.log('you should go to the login page now')
      },
      callback (response) {
        console.log(response)
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

  //       &::before {
  // //       position: absolute;
  // //       content: "";
  // //       width: 45%;
  // //       height: 17%;
  // //       top: 23.2rem;
  // //       left: 0;
  // //       background-color: rgba(52, 89, 72, 0.3);
  // //       transform-origin: bottom right;
  // //       transform: skewY(-20deg)
  // //     }
  //   &::after {
  //     position: absolute;
  //     content: "";
  //     width: 120%;
  //     height: 70%;
  //     top: 10.3rem;
  //     left: 0;
  //     background-color: rgba(157, 203, 59, 0.3);
  //     transform-origin: bottom right;
  //     transform: skewY(-20deg)
  //   }

</style>


<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <section class="blank-space"></section>
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

        <section class="modal-description" id="modalDescription">
          <h1>{{farm.name}}</h1>
        </section>

        <section class="modal-calculator">
          <label for="units">How many units do you want to buy</label>
          <input type="number" name="units">
          Each unit of this farm goes for {{farm.cost}} <span v-currency="'naira'"></span>

          <h3>You pay</h3>  and get  after 
          <button class="btn"> Invest in this farm </button>
        </section>
      </div>
      <section class="blank-space"></section>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'info-modal',
    props: ['farm'],
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    position: relative;
    height: 40rem;
    width: 90%;
    max-height: 50rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background: $white;
    box-shadow: 0 16px 39px -10px rgba(157, 203, 59, 0.3);

    &::after {
      position: absolute;
      content: "";
      width: 120%;
      height: 70%;
      top: 10.3rem;
      left: 0;
      background-color: rgba(157, 203, 59, 0.3);
      transform-origin: bottom right;
      transform: skewY(-20deg)
    }

    @media (min-width: $breakpoint-tablet) {
      width: 55rem;
      height: 35rem;

      &::before {
        position: absolute;
        content: "";
        width: 45%;
        height: 15%;
        top: 20rem;
        left: 0;
        background-color: rgba(52, 89, 72, 0.3);
        transform-origin: bottom right;
        transform: skewY(-20deg)
      }
    }

    @media (min-width: $breakpoint-desktop) {
      width: 72rem;
      height: 40rem;

      &::before {
        position: absolute;
        content: "";
        width: 45%;
        height: 17%;
        top: 23.2rem;
        left: 0;
        background-color: rgba(52, 89, 72, 0.3);
        transform-origin: bottom right;
        transform: skewY(-20deg)
      }
    }
  }
</style>
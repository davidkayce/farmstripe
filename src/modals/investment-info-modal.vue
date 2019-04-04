<template>
  <main>
    <div class="modal-backdrop" @click="close"></div>
      <div>
        <section class="blank-space"></section>
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <header>
            <h1>MZH-890</h1>
            <img
              class="close-icon"
              src="~@/assets/icons/icon-close.png"
              @click="close"
            />
          </header>

          <section class="modal-content --small">

            <section class="progress_bar">
              <ul>
                <li class="passed">Setting up</li>
                <li class="active_first">Planting</li>
                <li>Harvest</li>
                <li>Returns</li>
              </ul>
            </section>
            
            <section class="info__content">

              <p>bmn vdxgjkvdncvx</p>
            </section>
          </section>

          <section class="footer">
            <button class="btn-modal" @click="close"> Done </button>
          </section>
        </div>
      </div>
  </main>
</template>

<script>
  export default {
    name: 'investment-modal',
    data () {
      return {
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

  span {
    color: $grey-medium;
    font-size: 1.3rem;
  }

  .modal{
    @media (min-width: $breakpoint-tablet) {}
  }

  .progress_bar {
    margin-bottom: 2rem;

    ul {
      counter-reset: step;
    }

    li {
      float: left;
      width: 25%;
      position: relative;
      color: $grey-light;
      font-size: 1.2rem;
      text-align: center;

      &:before {
        content: counter(step);
        counter-increment: step;
        width: 2.5rem;
        height: 2.5rem;
        display: block;
        text-align: center;
        font-size: 1.5rem; 
        border: 1px solid $grey-light;
        margin: 1.2rem auto;
        border-radius: 100%;
        color: $grey-light;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1.5px;
        background-color: $grey-light;
        top: 2.5rem;
        left: -45%;
        z-index: -1; // there is an issue here
      }

      &:first-child:after {
        content: none;
      }
    }

    .active_first {
      color: orange;
      font-weight: 600;
      font-size: 1.5rem;

      &:before {
        color: orange;
        border: 2px solid orange;
        font-weight: 600;
      }

      &:after{
        background-color: orange;
        height: 2.2px;
      }
    }

    .passed {
      color: $grey;

      &:before {
        color: $grey;
        border: 2px solid $grey;
        font-weight: 600;
      }

      &:after{
        background-color: $grey;
      }
    }
  }
</style>
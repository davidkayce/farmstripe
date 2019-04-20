<template>
  <main :class="{'danger': type === 'danger', 'success': type === 'success'}" v-if="visible">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        type: 'success',
        visible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  main {
    padding: 1.5rem;
    margin: 2rem 0;
    font-size: 1.3rem;
    height: fit-content;

    @media (min-width: $breakpoint-tablet) {
      width: 90%;
      margin: 2rem auto;
    }
  }

  .danger {
    border: 1px solid $danger;
    border-radius: 0.5rem;
    background-color: rgba(255, 86, 97, 0.15);
    color: $danger;
  }

  .success {
    border: 1px solid $fstrgreen;
    border-radius: 0.5rem;
    background-color: rgba(157, 203, 59, 0.15);
    color: $fstrgreen
  }
</style>


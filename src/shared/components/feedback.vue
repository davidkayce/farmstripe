<template>
  <main :class="type" v-if="visible">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        type: '',
        visible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  main {
    padding: 2rem;
    margin: 2rem 0;
  }

  danger {
    border: 1px solid $danger;
    border-radius: 0.5rem;
    background-color: rgba(255, 86, 97, 0.5)
  }

  success {
    border: 1px solid $success;
    border-radius: 0.5rem;
    background-color: rgba(28, 206, 116, 0.5)
  }
</style>


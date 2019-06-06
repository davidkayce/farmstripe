<template>
  <main :class="feedback.type">
    {{feedback.message}}
  </main>
</template>

<script>
  export default {
    props: ['feedback']
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 1.2rem;
    margin: 2rem 0;
    font-size: 1.3rem;
    height: fit-content;

    @media (min-width: $breakpoint-tablet) {
      width: 90%;
      margin: -1rem auto 1.5rem;
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


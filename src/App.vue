<template>
  <main>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <vue-progress-bar></vue-progress-bar>
    <notifications />
  </main>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import '~styles';

  .slide-enter {
    animation: slide-in 500ms ease-out forwards;
  }

  .slide-leave {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-3rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-3rem);
      opacity: 0;
    }
  }
</style>


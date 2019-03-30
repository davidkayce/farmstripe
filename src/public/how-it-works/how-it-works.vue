<template>
  <main>
    <div class="about__component" id="how">
      <h1>About Farmstripe</h1>
    </div>
  </main>
</template>

<script>
  import AppNav from '../../shared/app-nav/app-nav'
  import AppFooter from '../../shared/app-footer/app-footer'

  export default {
    name: 'how-it-works',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'how-it-works.scss';
</style>


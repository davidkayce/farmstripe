<template>
  <main>
    <div class="about__component" id="how">
      <section class="header">
        <h1>How it works</h1>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae dolores quasi natus voluptates nesciunt ad sed corporis mollitia aliquid ea, impedit numquam</p>
      </section>
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


<template>
  <main>
    <div class="about__component" id="how">
      <section class="header">
        <h1>How it works</h1>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae dolores quasi natus voluptates nesciunt ad sed corporis mollitia aliquid ea, impedit numquam</p>
      </section>
      <section class="content">
        <div class="item fstr__card">
          <h3>Create an account</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non ex commodi sit voluptatum impedit rerum. Illum ab necessitatibus error.</p>
        </div>
        <div class="item fstr__card">
          <h3>Sponsor a Farm</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non ex commodi sit voluptatum impedit rerum. Illum ab necessitatibus error.</p>
        </div>
        <div class="item fstr__card">
          <h3>Track your investment</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non ex commodi sit voluptatum impedit rerum. Illum ab necessitatibus error.</p>
        </div>
        <div class="item fstr__card">
          <h3>Get great returns</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non ex commodi sit voluptatum impedit rerum. Illum ab necessitatibus error.</p>
        </div>
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


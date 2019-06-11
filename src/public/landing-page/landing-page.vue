<template>
  <main>
    <app-nav></app-nav>
    <header>
      <div class="c__overlay">
        <div class="c__content">
          <h2>Empowering farmers, one community at a time</h2>
          <h4>We keep the food chain going by empowering farmers</h4>
          <div class="mailing-list"> 
            <p>Join over <strong>200</strong> partners already signed up for early access to the next farming cycle</p>
            <a href="https://app.farmstripe.com"><button class="btn">Empower a Farmer now</button></a>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <why-farmstripe></why-farmstripe>
      <div id="farms">
        <available-farms></available-farms>
      </div>
      <div id="how">
        <how-it-works></how-it-works>
      </div>
      <metrics></metrics>
    </div>
    <mailing-list></mailing-list>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'home',
    components: {
      'app-nav': () => import('../../shared/app-nav/app-nav'),
      'app-footer': () => import('../../shared/app-footer/app-footer'),
      'available-farms': () => import('../../shared/available-farms/available-farms'),
      'metrics': () => import('../metrics-section/metrics'),
      'mailing-list': () => import('../join-mailing-list/mailing-list'),
      'why-farmstripe': () => import('../why-farmstripe/why-farmstripe'),
      'how-it-works': () => import('../how-it-works/how-it-works')
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./landing-page.scss";
</style>

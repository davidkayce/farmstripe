<template>
  <main>
    <section class="metrics__component">
      <div class="section__header">
        <h1>Metrics</h1>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae dolores quasi natus voluptates nesciunt ad sed corporis mollitia aliquid</p>
      </div>

      <div class="section__content">
        <article>
          <img src="~@/assets/icons/icon-farming.png" alt="500 acres">
          <h3>Over 2000 Acres Farmed</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-food.png" alt=" 9000 sponsorships">
          <h3>1000 farm sponsorships</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-communities.png" alt="4000 farmers">
          <h3>2000+ farmers empowered</h3>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'metrics'
}
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./metrics.scss"
</style>


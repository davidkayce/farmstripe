<template>
  <main>
    <section class="metrics__component">
      <div class="section__header">
        <h1>Metrics</h1>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae dolores quasi natus voluptates nesciunt ad sed corporis mollitia aliquid ea, impedit numquam, recusandae omnis provident quia voluptatem ipsa. Consectetur.</p>
      </div>

      <div class="section__content">
        <article>
          <img src="~@/assets/icons/icon-farmland.png" alt="500 acres">
          <h3>Over 5000 Acres Farmed</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-funding.png" alt=" 9000 sponsorships">
          <h3>9000 farm sponsorships</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-farmer.png" alt="4000 farmers">
          <h3>4000+ farmers empowered</h3>
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


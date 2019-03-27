<template>
  <main class="metrics__component">
    <div class="section__header">
      <h2>Metrics</h2>
      <div class="line"></div>
      <p>Farmstripe provides the best value for both the partner and the farmer</p>
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


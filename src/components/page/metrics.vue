<template>
  <main>
    <section 
    class="metrics__component" 
    data-aos="fade-down" 
    data-aos-delay="150">
      <div class="section__header">
        <h1>Metrics</h1>
        <div class="line"></div>
        <p>We are proud to have accomplished the following milestones with the help of our sponsors</p>
      </div>

      <div class="section__content">
        <article>
          <img src="~@/assets/icons/icon-farming.png" alt="500 acres" loading="lazy">
          <h3>Over 2000 Acres Farmed</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-food.png" alt=" 9000 sponsorships" loading="lazy">
          <h3>1000 farm sponsorships</h3>
        </article>

        <article>
          <img src="~@/assets/icons/icon-communities.png" alt="4000 farmers" loading="lazy">
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
.metrics__component {
  padding: 8rem 2rem 3rem;
  display: flex;
  background-color: transparent;
  flex-direction: column;

  @media (min-width: $breakpoint-tablet) {
    padding: 20rem 2rem 8rem;
  }
  

  .section__header {
    margin: 1rem 1rem;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: $breakpoint-tablet) {
      margin: 1rem 7%;
    }

    @media (min-width: $breakpoint-desktop) {
      margin: 1rem 12%;
    }

    .line {
      background: $dgreen;
      height: 3px;
      width: 12%;
      margin: 1rem 88% 3rem;

      @media (min-width: $breakpoint-desktop) {
        margin: 1rem 94% 3rem;
        width: 6%;
      }
    }

    h1 {
      color: $dgreen;
    }

    p {
      font-size: 1.5rem;
      color: $grey-medium;
      letter-spacing: -0.5px;

      @media (min-width: $breakpoint-tablet) {
        margin: 0 50% 2rem;
        width: 50%
      }

      @media (min-width: $breakpoint-desktop) {
        font-size: 1.7rem;
      }
    }
  }

  .section__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      padding-top: 4rem;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 75%;
      margin: 0 auto;
    }

  }

  article {
    text-align: center;
    padding: 3.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;

    img {
      width: 40%;
      margin: auto;
    }

    h3 {
      font-weight: 600;
      color: $dgreen;
      padding: 3rem 0 2rem;
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>

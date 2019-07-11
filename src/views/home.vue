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
      'app-nav': () => import('@/components/page/app-nav'),
      'app-footer': () => import('@/components/page/app-footer'),
      'available-farms': () => import('@/components/page/available-farms'),
      'metrics': () => import('@/components/page/metrics'),
      'mailing-list': () => import('@/components/page/mailing-list'),
      'why-farmstripe': () => import('@/components/page/why-farmstripe'),
      'how-it-works': () => import('@/components/page/how-it-works')
    }
  }
</script>

<style lang="scss" scoped>
header {
  position: relative;
  background-image: url('~@/assets/images/maize-field.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;

  @media (min-width: $breakpoint-desktop) {
    background-position: center;
  }

  h2 {
    font-weight: 600;
    padding-bottom: 1rem;
    color: #fff;
    letter-spacing: -1.76px;
    font-size: 3.5rem;
    line-height: 1.2;

    @media (min-width: $breakpoint-desktop) {
      width: 60%;
      font-size: 5rem;
      padding-bottom: 3rem;
    }
  }

  h4 {
    color: $white;

    @media (min-width: $breakpoint-desktop) {
      font-size: 2rem;
    }
  }

  .c__overlay {
    background: rgba(52, 89, 72, 0.75);
    padding: 2rem;

    @media (min-width: $breakpoint-tablet) {
      padding: 13rem 2.5rem;
    }

    @media (min-width: $breakpoint-desktop) {
      padding: 16rem 2.5rem;
    }
  }

  .c__content {
    padding: 3rem 0;

    .mailing-list {
      margin: 5rem 0 0 0;

      p {
        color: $white;
        margin-bottom: 2.5rem;
      }

      input {
        width: 100%;
        display: block;
        margin-bottom: 2rem;

        @media (min-width: $breakpoint-desktop) {
          width: 40%;
        }
      }

      button {
        width: 100%;
        padding: 2rem;
        font-size: 1.5rem;
        font-weight: 600;

        @media (min-width: $breakpoint-desktop) {
          width: 40%;
        }
      }
    }

    @media (min-width: $breakpoint-tablet) {
      width: 65%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 92%;
      margin: auto;
      padding: 5rem 0;
    }
  }
}

.success {
  padding: 2.5rem;
  text-align: center;
  width: 100%;

  @media (min-width: $breakpoint-desktop) {
    width: 40%;
  }
}

.content {
  max-width: 1640px;
  margin: 0 auto;
}
</style>

<template>
  <main class="mailing-list">
    <div class="c__overlay">
      <div class="c__content">
        <div class="join__investors">
          <h2>Join our partners for priority access to the next farming cycle</h2>
        </div>

        <div class="get__email">
          <button class="btn"> <a href="https://priority.farmstripe.com" target="_blank" rel="noopener">Join for priority access</a></button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.mailing-list {
  background-image: url('~@/assets/images/merchant.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;

  @media (min-width: $breakpoint-desktop) {
    background-position: center;
  }

  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
    color: #fff;
    letter-spacing: -1.76px;
    font-size: 2.5rem;
    line-height: 1.2;

    @media (min-width: $breakpoint-desktop) {
      width: 90%;
      font-size: 4.5rem;
    }
  }

  .c__overlay {
    background: rgba(52, 89, 72, 0.85);
    padding: 2rem;

    @media (min-width: $breakpoint-tablet) {
      padding: 2rem 2rem;
    }
  }

  .c__content {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
      margin: 2rem 0;
    }

    button {
      width: 100%;
      padding: 2rem;
      font-size: 1.5rem;
      font-weight: 600;

      a {
        color: white;
      }
    }

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;

      .get__email {
        margin: 0 5rem;
        width: 55%
      }
    }

    @media (min-width: $breakpoint-desktop) {
      width: 92%;
      margin: auto;
      padding: 5rem 0;

      .get__email {
        width: 50%
      }
    }
  }
}
</style>

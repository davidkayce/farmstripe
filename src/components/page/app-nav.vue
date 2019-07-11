<template>
  <main>
    <div class="nav-content">
      <div class="logo">
        <router-link to="/">
          <img src="~@/assets/icons/icon-logo-all-green.png" alt="Farmstripe logo" loading="lazy">
        </router-link>
      </div>

      <ul>
        <li><router-link :to="farmLink"> Available Farms </router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
        <li><a href="https://priority.farmstripe.com" target="_blank" rel="noopener">Join Priority</a></li>
        <li><a href="https://app.farmstripe.com"><button class="btn">Get Started</button></a></li>
      </ul>
    </div>

  </main>
</template>

<script>
export default {
  data () {
    return {
      farmLink: {
        name: 'home',
        hash: '#farms'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  justify-content: space-between;
  position: sticky;
  padding: 1.5rem;
  color: $dgreen;
  background-color: rgba(255, 255, 255, 0.95);

  .nav-content {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;

    @media (min-width: $breakpoint-desktop) {
      width: 95%
    }
  }

  img {
    margin: 0.5rem;
    width: 13rem;

    @media (min-width: $breakpoint-tablet) {
      width: 16rem;
    }
  }

  @media (min-width: $breakpoint-tablet) {
    padding: 1.5rem;
    left: 0;
    top:0; 
    z-index:10;
  }
}

ul {
  display: flex;
  font-weight: 600;

  li {
    margin-right: 0.5rem;
    font-size: 1.3rem;

    &:not(:last-of-type) {
      display: none
    }

    a {
      color: $dgreen;
      font-weight: 600;
    }

    .btn{ 
      padding: 1.5rem 2rem;
      font-weight: 600;

      @media (min-width: $breakpoint-tablet) {
        padding: 1.5rem 3rem;
        font-size: 1.5rem;
      }
    }

    @media (min-width: $breakpoint-tablet) {
      font-size: 1.5rem;

      &:not(:last-of-type) {
        display: flex;
        margin-top: 1.5rem;
      }

      margin-right: 1.5rem;
    }

    @media (min-width: $breakpoint-desktop) {

      &:not(:last-of-type) {
        margin-right: 4rem;
      }
    }
  }
}
</style>


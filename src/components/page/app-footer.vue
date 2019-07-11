<template>
  <main class="footer">
    <div class="c__container d--flex">
      <div class="c__logo">
        <img src="~@/assets/icons/icon-logo-white-text.png" alt="Korapay Logo" loading="lazy">
        <div class="contact__details _lg">
          <p>
            1B, Adedeji Adekola Street,
            <br>Off Freedom Way, Lekki Phase 1,
            <br>Lagos, Nigeria.
          </p>
        </div>

        <div class="contact__details _lg">
          <p>In partnership with AFEX and Leadway Assurance Ltd.</p>
        </div>
      </div>

      <div class="c__footer-lists d--flex">
        <ul>
          <li>
            <p class="c__list_header color--fff">Legal</p>
          </li>
          <router-link to="/privacy-policy">
            <li>Terms and Conditions</li>
          </router-link>
        </ul>

        <ul>
          <li>
            <p class="c__list_header color--fff">Company</p>
          </li>
          <router-link :to="farmLink">
            <li>Available Farms</li>
          </router-link>
          <router-link :to="howLink">
            <li>How it works</li>
          </router-link>
          <router-link to="/contact-us">
            <li>Contact</li>
          </router-link>
        </ul>

        <ul>
          <li>
            <p class="c__list_header color--fff">Follow</p>
          </li>
          <li>
            <a href="https://twitter.com/FarmStripe" target="_blank" rel="noopener">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/farmstripe/" target="_blank" rel="noopener">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    <p class="c__small-text">Farmstripe Agrobusiness Ltd. All Rights Reserved (c) 2019.</p>
  </main>
</template>

<script>
export default {
  name: 'appFooter',
  data () {
    return {
      howLink: {
        name: 'home',
        hash: '#how'
      },
      farmLink: {
        name: 'home',
        hash: '#farms'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $dgreen;
  padding: 2rem;

  @media (min-width: $breakpoint-tablet) {
    padding: 3.5rem 2rem;
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 5rem 0;
  }

  .c__logo {
    padding: 2rem 0 3rem;
    width: 100%;

    img {
      width: 12rem;
    }

    @media (min-width: $breakpoint-tablet) {
      width: unset;
      padding: 0;

      img {
        width: 17rem;
      }
    }
  }

  .c__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: $breakpoint-desktop) {
      margin: 0 auto;
      width: 90%;
    }
  }

  .c__footer-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    @media (min-width: $breakpoint-tablet) {
      width: 55%;
    }

    @media (min-width: $breakpoint-desktop) {
      width: 40%;
    }
  }

  .c__list_header {
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
  }

  ul {
    width: 50%;
    margin-bottom: 3rem;

    @media (min-width: $breakpoint-tablet) {
      width: unset;
    }
  }

  li,
  a {
    font-size: 1.3rem;
    color:rgba(255, 255, 255, 0.7);
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .c__small-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    margin: 3rem 0 2rem;

    @media (min-width: $breakpoint-desktop) {
      width: 90%;
      margin: 5rem auto 0;
    }
  }

  .contact__details {

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2rem;
    }

    &._lg {
      margin-top: 2rem;
    }
  }
}
</style>
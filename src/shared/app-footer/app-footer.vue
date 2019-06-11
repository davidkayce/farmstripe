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
@import "~styles";
@import "./app-footer.scss";
</style>
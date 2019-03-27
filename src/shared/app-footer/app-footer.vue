<template>
  <main class="footer">
    <div class="c__container d--flex">
      <div class="c__logo">
        <img src="~@/assets/icons/icon-logo-white-text.png" alt="Korapay Logo">
        <div class="contact__details _lg">
            <p>1B, Adedeji Adekola Street,<br> Off Freedom Way, Lekki Phase 1,<br> Lagos, Nigeria.</p>
        </div>
      </div>

      <div class="c__footer-lists d--flex">
      <ul>
        <li><p class="c__list_header color--fff">Legal</p></li>
        <router-link to="/privacy-policy"><li>Terms and Conditions</li></router-link>
      </ul>

      <ul>
        <li><p class="c__list_header color--fff">Company</p></li>
        <router-link to="/about-us"><li>About</li></router-link>
        <router-link to="/contact-us"><li>Contact</li></router-link>
      </ul>

      <ul>
        <li><p class="c__list_header color--fff">Follow</p></li>
        <li><a href="#" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
      </ul>
    </div>
    </div>
    
    <p class="c__small-text">Farmstripe Agrotechnology Ltd. All Rights Reserved (c) 2019.</p>
  </main>
</template>

<script>
  export default {
    name: 'appFooter'
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./app-footer.scss";
</style>
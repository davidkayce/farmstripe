<template>
  <main>
    <app-nav></app-nav>
    <div class="content">
      <div class="contact__detail">
        <div class="contact__address">
          <h3>Farmstripe Agrotechnologies Limited</h3>
          <p>1B Adedeji Adekola Street,<br>Off Freedom Way, Lekki Phase 1.<br> Lagos, Nigeria.</p>
        </div>
        <div class="contact__connect">
          <p>
            <span>Contact our Support team on</span>
            <a href="tel:+2348157867808">+234 815 786 7808</a>,
          </p>
          <p>
            <span>or send us an email to</span>
            <a href="mailto:hello@farmstripe.com">hello@farmstripe.com</a>
          </p>
        </div>
      </div>
      <div class="contact__form">
        <div class="header">
          <h3>Drop us a line and we'll be in touch.</h3>
        </div>
        <div class="main-content">
          <form action="#" method="post">
            <div class="padding__vertical">
              <label for="fullname">Full Name</label>
              <input type="text" name="fullname">
            </div>
            <div class="padding__vertical">
              <label for="email">Email</label>
              <input type="email" name="email">
            </div>
            <div class="padding__vertical">
              <label for="message">Message</label>
              <textarea name="message" rows="5"></textarea>
            </div>
            <button class="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import AppNav from '../../shared/app-nav/app-nav'
  import AppFooter from '../../shared/app-footer/app-footer'

  export default {
    name: 'contact',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'contact.scss';
</style>


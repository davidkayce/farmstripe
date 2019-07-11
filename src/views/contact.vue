<template>
  <main>
    <app-nav></app-nav>
    <div class="images">
      <img src="~@/assets/images/green-bush.png" alt="500 acres" loading="lazy">
    </div>

    <div class="content">
      <div class="contact__detail">
        <div class="contact__address">
          <h3>Farmstripe Agrobusiness Limited</h3>
          <p>1B Adedeji Adekola Street,<br>Off Freedom Way, Lekki Phase 1.<br> Lagos, Nigeria.</p>
        </div>
        <div class="contact__connect">
          <p>
            <span>Contact our Support team on</span>
            <a href="tel:+2348157867808">+234 815 786 7808</a>,
          </p>
          <p>
            <span>or send us an email to</span>
            <a href="mailto:info@farmstripe.com">info@farmstripe.com</a>
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
              <input type="text" name="fullname" v-model="contactInfo.name">
            </div>
            <div class="padding__vertical">
              <label for="email">Email</label>
              <input type="email" name="email" v-model="contactInfo.email">
            </div>
            <div class="padding__vertical">
              <label for="message">Message</label>
              <textarea name="message" rows="5" v-model="contactInfo.message"></textarea>
            </div>
            <button class="btn" type="submit" @click.prevent="sendMessage">Send</button>
          </form>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        contactInfo: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    components: {
      'app-nav': () => import('@/components/page/app-nav'),
      'app-footer': () => import('@/components/page/app-footer')
    },
    methods: {
      sendMessage () {
        console.log('message sent')
      }
    }
  }
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  margin: 3rem auto ;
  z-index: 1;

  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
    justify-content: space-between;
    margin: 16rem auto 5rem;
  }
}

.contact__detail {
  text-align: center;

  @media (min-width: $breakpoint-tablet) {
    width: 35%;
    margin: 8rem 4rem 0 0;
    text-align: unset;
  }

  .contact__address {
    padding-bottom: 2rem;

    h5 {
      font-weight: 600;
    }

    p {
      color: #a8a8a8;
    }
  }

  .padding--top {
    padding-top: 2rem;
  }

  .contact__connect {
    padding-bottom: 2.5rem;

    span {
      font-weight: 600;
    }

    a {
      font-weight: 600;
      display: block;

      @media (min-width: $breakpoint-tablet) {
        display: unset;
      }
    }
  }

  .contact__social {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 40px;
      margin-left: -10px;
    }

    @media (min-width: $breakpoint-tablet) {
      justify-content: unset;
    }
  }
}

.contact__form {
  margin: 0 auto 3rem;
  border-radius: 5px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 12px 50px 0 rgba(0, 0, 0, 0.15);
  z-index: 5;


  @media (min-width: $breakpoint-tablet) {
    margin: 0 auto;
    width: 60%;
    box-shadow: 0 -10px 100px rgba(101, 99, 99, 0.15);
  }

  @media (min-width: $breakpoint-desktop) {
    width: 40%;
  }

  .header {
    padding: 2rem;
    background: $fstrgreen-light;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media (min-width: $breakpoint-desktop) {
      padding: 3rem 4rem;
    }

    h3 {
      color: rgba(155, 155, 155, 1);
      font-weight: 500;
      letter-spacing: -1px;
    }
  }

  .main-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    @media (min-width: $breakpoint-desktop) {
      padding: 2rem 4rem;
    }
  }

  input {
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
    margin-top: 2rem;
  }
}

.images {
  position: absolute;
  right: 0rem;

  @media (min-width: $breakpoint-tablet) {
    right: -6rem;
  }

  @media (min-width: $breakpoint-desktop) {
    right:  2rem;
  }

  img {
    width: 60rem;
    z-index: 1;
  }
}
</style>

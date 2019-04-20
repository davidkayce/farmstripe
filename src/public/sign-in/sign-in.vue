<template>
  <main>
    <div class="logo">
      <router-link to="/">
        <img src="~@/assets/icons/icon-logo-all-white.png" alt="Farmstripe logo" style="opacity: 0.8">
        <img src="~@/assets/icons/icon-logo-all-green.png" alt="Farmstripe logo" style="opacity: 0.8">
      </router-link>

      <p class="options" v-if="!signIn">
        <span class="hide">Already signed up ?</span> <button class="btn btn--link" @click="switchSign()"> Sign In</button>
      </p>

      <p class="options" v-else>
        <span class="hide">Don't have an account ?</span> <button class="btn btn--link" @click="switchSign()"> Sign Up</button>
      </p>
    </div>

    <div class="background">
      <div class="overlay"></div>
    </div>
    
    <div class="sign-in_container">
        <div class="icon">
          <img src="~@/assets/icons/icon-logo.png" alt="Farmstripe logo">
        </div>
        <Feedback>{{feedbackMessage}}</Feedback>

        <div class="input__field" v-if="signIn">
          <form>
            <div class="input__option">
              <input type="email" name="email" id="email" v-model="signInData.email">
              <label for="email">E-mail address</label>
            </div>

            <div class="input__option">
              <input type="password" name="password" id="password" v-model="signInData.password">
              <label for="password">Password</label>
            </div>
            <router-link to="/dashboard"><button type="submit" class="btn" @click="logIn"> Sign In </button></router-link>
          </form>
        </div>

        <div class="input__field" v-else>
          <form action="" autocomplete="random-text">
            <div class="input__option">
              <input type="text" name="full_name" id="full_name" v-model="signUpData.name">
              <label for="full_name">Full name</label>
            </div>
              
            <div class="input__option">
              <input type="email" name="email" id="email" v-model="signUpEmail">
              <label for="email">E-mail address</label>
            </div>

            <div class="input__option">
              <input type="password" name="password" id="password" v-model="signUpData.password">
              <label for="password">Password</label>
            </div>

            <div class="input__option">
              <input type="password" name="confirm_password" id="confirm_password" v-model="confirmPassword">
              <label for="confirm_password">Confirm password</label>
            </div>

            <p>
              By creating an account, you are agreeing to Farmstripe's <router-link to="/privacy-policy"> terms and conditions</router-link> regarding use of this service. 
            </p>
            <router-link to="/dashboard"><button type="submit" class="btn" @click="signUp" :disabled="isDisabled"> Sign Up for Priority Access</button></router-link>
          </form>
        </div>
    </div>
  </main>
</template>

<script>
  import Feedback from '../../shared/components/feedback'
  export default {
    name: 'signIn',
    components: {
      Feedback
    },
    data: function () {
      return {
        signIn: false,
        confirmPassword: '',
        feedbackMessage: 'Hey there!',
        signUpData: {
          name: '',
          password: '',
          password_digest: ''
        },
        signInData: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      isDisabled () {
        if (this.signUpData.password !== this.confirmPassword) {
          return true
        } else if (!this.signUpData.password || !this.confirmPassword) {
          return true
        } else if (!this.signUpData.name || !this.signUpData.email) {
          return true
        } else {
          return false
        }
      },
      signUpEmail: {
        get () {
          return this.$store.getters.getMailingEmail
        },
        set (value) {
          this.$store.commit('updateEmail', value)
        }
      }
    },
    methods: {
      switchSign () {
        this.signIn = !this.signIn
      },
      signUp () {
        this.$store.dispatch('signUp', this.signUpData)
          .then(() => this.$router.push('/sign-in'), this.signIn = true)
          .catch(err => console.log(err))
        this.$store.commit('updateEmail', '')
      },
      logIn () {
        this.$store.dispatch('signIn', this.signInData)
          .then(() => {
            this.$router.push('/dashboard/')
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import './sign-in.scss';
</style>
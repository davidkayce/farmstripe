<template>
  <main>
    <div class="background">
      <div class="logo">
        <router-link to="/">
          <img src="~@/assets/icons/icon-logo-all-green.png" alt="Farmstripe logo">
        </router-link>

        <p class="options" v-if="!signIn">
          <span class="hide">Already signed up ?</span> <button class="btn btn--link" @click="switchSign()"> Sign In</button>
        </p>

        <p class="options" v-else>
          <span class="hide">Don't have an account ?</span> <button class="btn btn--link" @click="switchSign()"> Sign Up</button>
        </p>
      </div>

      <div class="content">
        <div class="sign-in_container">
          <div class="icon">
            <img src="~@/assets/icons/icon-logo.png" alt="Farmstripe logo">
          </div>
          <div class="input__field" v-if="signIn">
            <form action="" autocomplete="off">

              <div class="input__option">
                <input type="email" name="email" id="email" v-model="userData.email">
                <label for="email">E-mail address</label>
              </div>

              <div class="input__option">
                <input type="password" name="password" id="password" v-model="userData.password">
                <label for="password">Password</label>
              </div>

              <router-link to="/dashboard"><button type="submit" class="btn">Sign In </button></router-link>
            </form>
          </div>

          <div class="input__field" v-else>
            <form action="" autocomplete="off">
              <div class="input__option">
                <input type="text" name="full_name" id="full_name" v-model="userData.name">
                <label for="full_name">Full name</label>
              </div>
              
              <div class="input__option">
                <input type="email" name="email" id="email" v-model="userData.email">
                <label for="email">E-mail address</label>
              </div>

              <div class="input__option">
                <input type="password" name="password" id="password" v-model="userData.password">
                <label for="password">Password</label>
              </div>

              <div class="input__option">
                <input type="password" name="confirm_password" id="confirm_password" v-model="confirmPassword">
                <label for="confirm_password">Confirm password</label>
              </div>

              <p>
                By creating an account, you are agreeing to Farmstripe's <router-link to="/privacy-policy"> terms and conditions</router-link> regarding use of this service. 
              </p>

              <router-link to="/dashboard"><button type="submit" class="btn"> Sign Up for Priority Access</button></router-link>
            </form>
          </div>
        </div>

        <div class="image">
          <div class="overlay">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugit? Ad perspiciatis quidem nobis commodi vel blanditiis quos itaque aspernatur officia iste, quod reiciendis! Minima vero consequuntur tenetur est earum!</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'signIn',
    data: function () {
      return {
        signIn: false,
        disabled: true,
        confirmPassword: '',
        userData: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    // watch: {
    //   if (this.userData.password !== this.confirmPassword) {
    //     this.disabled = true
    //   }
    // },
    methods: {
      switchSign () {
        this.signIn = !this.signIn
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import './sign-in.scss';
</style>
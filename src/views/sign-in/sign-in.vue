<template>
  <main>
    <div class="logo">
      <a href="https://www.farmstripe.com">
        <img
          src="~@/assets/icons/icon-logo-all-white.png"
          alt="Farmstripe logo"
          style="opacity: 0.8"
          loading="lazy"
        >
        <img
          src="~@/assets/icons/icon-logo-all-green.png"
          alt="Farmstripe logo"
          style="opacity: 0.8"
          loading="lazy"
        >
      </a>

      <p
        class="options"
        v-if="!signIn"
      >
        <span>Already signed up ?</span> <button
          class="btn btn--link"
          @click="switchSign()"
        > Sign In</button>
      </p>

      <p
        class="options"
        v-else
      >
        <span class="hide">Don't have an account ?</span> <button
          class="btn btn--link"
          @click="switchSign()"
        > Sign Up</button>
      </p>
    </div>

    <div class="background">
      <div class="overlay">
        <div class="quote">
          “ Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness. ”
          <br><br><span class="small__quote">— Thomas Jefferson.</span>
        </div>
      </div>
    </div>

    <div class="sign-in_container">
      <div class="icon">
        <img
          src="~@/assets/icons/icon-logo.png"
          alt="Farmstripe logo"
          loading="lazy"
        >
      </div>
      <Feedback
        v-if="feedback.visible"
        :feedback="feedback"
      ></Feedback>

      <div
        class="input__field"
        v-if="signIn"
      >
        <div class="input__option">
          <input
            type="email"
            name="email"
            id="email"
            v-model="signInData.email"
          >
          <label for="email">E-mail address</label>
        </div>

        <div class="input__option">
          <input
            type="password"
            name="password"
            id="password"
            v-model="signInData.password"
          >
          <label for="password">Password</label>
        </div>
        <router-link to="/dashboard"><button
            type="submit"
            class="btn"
            @click="logIn"
          > Sign In </button></router-link>

      </div>

      <div
        class="input__field"
        v-else
      >
        <div class="input__option">
          <input
            type="text"
            name="full_name"
            id="full_name"
            v-model="signUpData.name"
          >
          <label for="full_name">Full name</label>
        </div>

        <div class="input__option">
          <input
            type="email"
            name="email"
            id="email"
            v-model="signUpData.email"
          >
          <label for="email">E-mail address</label>
        </div>

        <div class="input__option">
          <input
            type="password"
            name="password"
            id="password"
            v-model="signUpData.password"
          >
          <label for="password">Password</label>
        </div>

        <div class="input__option">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            v-model="confirmPassword"
          >
          <label for="confirm_password">Confirm password</label>
        </div>

        <p>
          By creating an account, you are agreeing to Farmstripe's <a href="https://www.farmstripe.com/privacy-policy"> terms and conditions</a> regarding use of this service.
        </p>
        <button
          type="submit"
          class="btn"
          @click="signUp"
          :disabled="isDisabled"
        > Sign Up for Priority Access</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "signIn",
  components: {
    Feedback: () => import("@/components/feedback")
  },
  data: function() {
    return {
      signIn: false,
      confirmPassword: "",
      signUpData: {
        name: "",
        email: "",
        password: ""
      },
      signInData: {
        email: "",
        password: ""
      },
      feedback: {
        visible: false,
        type: "danger",
        message: ""
      }
    };
  },
  computed: {
    isDisabled() {
      if (this.signUpData.password !== this.confirmPassword) {
        return true;
      } else if (!this.signUpData.password || !this.confirmPassword) {
        return true;
      } else if (!this.signUpData.name || !this.signUpData.email) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    switchSign() {
      this.signIn = !this.signIn;
    },
    signUp() {
      this.$Progress.start();
      this.$store
        .dispatch("signUp", this.signUpData)
        .then(() => {
          const data = {
            email: this.signUpData.email,
            password: this.signUpData.password
          };
          this.$Progress.finish();
          this.$store
            .dispatch("signIn", data)
            .then(() => {
              this.$router.push("/dashboard");
            })
            .catch(err => {
              this.$Progress.fail();
              this.$router.push("/");
              this.signIn = true;
            });
        })
        .catch(err => {
          this.$Progress.fail();
          this.feedback.visible = true;
          this.feedback.type = "danger";
          this.feedback.message =
            "Sorry, we are unable to create your account right now, please try again.";
        });
    },
    logIn() {
      this.$Progress.start();
      this.$store
        .dispatch("signIn", this.signInData)
        .then(() => {
          this.$router.push("/dashboard");
          this.$Progress.finish();
        })
        .catch(err => {
          this.$Progress.fail();
          this.feedback.visible = true;
          this.feedback.type = "danger";
          this.feedback.message = "Invalid credentials, please try again";
        });
    }
  },
  watch: {
    confirmPassword() {
      if (this.signUpData.password !== this.confirmPassword) {
        this.feedback.visible = true;
        this.feedback.type = "danger";
        this.feedback.message =
          "Please ensure both password fields are the same";
      } else if (!this.confirmPassword && !this.signUpData.password) {
        this.feedback.visible = false;
      } else {
        this.feedback.visible = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./sign-in.scss";
</style>
<template>
  <main class="mailing-list">
    <div class="c__overlay">
      <div class="c__content">
        <div class="join__investors">
          <h2>Join over <strong>500</strong> partners for priority access to the next farming cycle</h2>
          <h4>Pilot for the first 1000 partners and farms launches in May, 2019.</h4>
        </div>

        <div class="get__email">
          <input type="text" class="transparent" placeholder="Contact email address" v-model="email">
          <router-link to="/sign-in"><button class="btn" @click="sendEmail">Get Started</button></router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'mailing-list',
    data () {
      return {
        email: ''
      }
    },
    methods: {
      sendEmail () {
        console.log('email sent')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./mailing-list.scss"
</style>

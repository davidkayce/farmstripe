<template>
  <main class="mailing-list">
    <div class="c__overlay">
      <div class="c__content">
        <div class="join__investors">
          <h2>Join over <strong>{{backers}}</strong> partners for priority access to the next farming cycle</h2>
        </div>

        <div class="get__email">
          <input type="email" class="transparent" placeholder="Contact email address" v-if="!processing" v-model="email">
          <button class="btn" @click="sendEmail" v-if="!done">{{processing? 'Please wait ...':'Join for priority access'}}</button>
          <div class="btn success" v-if="done"> Your submission has been received </div>
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
        email: '',
        processing: false,
        done: false
      }
    },
    computed: {
      backers () {
        return this.$store.getters.allBackers
      }
    },
    methods: {
      sendEmail () {
        this.processing = true
        setTimeout(this.getDone, 1500)
        setTimeout(this.reset, 3000)
      },
      getDone () {
        this.$store.dispatch('changeBackers')
        this.done = true
      },
      reset () {
        this.email = ''
        this.processing = false
        this.done = false
        this.$router.push('/sign-in')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import "./mailing-list.scss";
</style>

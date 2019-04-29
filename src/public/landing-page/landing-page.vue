<template>
  <main>
    <app-nav></app-nav>

    <header>
      <div class="c__overlay">
        <div class="c__content">
          <h2>Empowering farmers, one community at a time</h2>
          <h4>We keep the food chain going by empowering farmers</h4>
          <div class="mailing-list"> 
            <p>Join over <strong>{{backers}}</strong> partners already signed up for early access to the next farming cycle</p>
            <input type="email" class="transparent" placeholder="Contact email address" v-if="!done" v-model="email">
            <button class="btn" @click="sendEmail" v-if="!done">{{processing? 'Please wait ...':'Empower a Farmer now'}}</button>
            <div class="btn success" v-if="done"> Your submission has been received </div>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <why-farmstripe></why-farmstripe>
      <div id="farms">
        <available-farms></available-farms>
      </div>
      <div id="how">
        <how-it-works></how-it-works>
      </div>
      <metrics></metrics>
    </div>
    <mailing-list></mailing-list>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import AppNav from '../../shared/app-nav/app-nav'
  import AppFooter from '../../shared/app-footer/app-footer'
  import AvailableFarms from '../../shared/available-farms/available-farms'
  import Metrics from '../metrics-section/metrics'
  import MailingList from '../join-mailing-list/mailing-list'
  import WhyFarmstripe from '../why-farmstripe/why-farmstripe'
  import HowItWorks from '../how-it-works/how-it-works'

  export default {
    name: 'home',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter,
      'available-farms': AvailableFarms,
      'metrics': Metrics,
      'mailing-list': MailingList,
      'why-farmstripe': WhyFarmstripe,
      'how-it-works': HowItWorks
    },
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
  @import "./landing-page.scss";
</style>
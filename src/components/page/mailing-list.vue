<template>
  <main class="mailing-list">
    <div class="c__overlay">
      <div class="c__content">
        <div class="join__investors">
          <h2>Join our partners for priority access to the next farming cycle</h2>
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
    methods: {
      sendEmail () {
        this.processing = true
        setTimeout(this.getDone, 1500)
        setTimeout(this.reset, 3000)
      },
      getDone () {
        this.done = true
      },
      reset () {
        this.email = ''
        this.processing = false
        this.done = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.mailing-list {
  background-image: url('~@/assets/images/merchant.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;

  @media (min-width: $breakpoint-desktop) {
    background-position: center;
  }

  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
    color: #fff;
    letter-spacing: -1.76px;
    font-size: 2.5rem;
    line-height: 1.2;

    @media (min-width: $breakpoint-desktop) {
      width: 90%;
      font-size: 4.5rem;
    }
  }

  .c__overlay {
    background: rgba(52, 89, 72, 0.85);
    padding: 2rem;

    @media (min-width: $breakpoint-tablet) {
      padding: 2rem 2rem;
    }
  }

  .c__content {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
      margin: 2rem 0;
    }

    button {
      width: 100%;
      padding: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;

      .get__email {
        margin: 0 5rem;
        width: 55%
      }
    }

    @media (min-width: $breakpoint-desktop) {
      width: 92%;
      margin: auto;
      padding: 5rem 0;

      .get__email {
        width: 50%
      }
    }
  }
}

.success {
  padding: 2.5rem;
  text-align: center;
}
</style>

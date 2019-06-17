<template>
  <main>
   <div id="wrap">  
    <div class="frame">
      <input name="rad" type="radio" v-model="x" value="one">
      <input name="rad" type="radio" v-model="x" value="two">

      <div class="nav"></div>
      <div class="nav"></div>

      <div class="indicator"></div>

      <div class="inner">
        <div class="content">
          <div class="form">
            <p>
              <Feedback v-if="feedback.visible" :feedback="feedback"></Feedback>
            </p>
            <div v-if="x === 'one'">
              <p>Modify your personal details below</p>
              <div v-if="!password" class="first_option">
                <input type="text" name="name" placeholder="Your name" v-model="name">
                <input type="text" name="email" placeholder="Email" v-model="email">
                <input type="text" name="phone" placeholder="Phone" v-model="phone">
                
                <button 
                class="btn" 
                @click="updateUser"> Update details</button>

                <button class="btn btn--link" @click="password = true" :disabled=true> Change Password </button>
              </div>

              <div v-else class="second_option">
                <label for="oldPassword">Your old password</label>
                <input type="text" name="oldPassword">
                <label for="newPassword">New Password</label>
                <input type="text" name="newPassword">
                <button class="btn"> Change Password </button>
                <button class="btn btn--link" @click="password = false"> Back </button>
              </div>
            </div>

            <div v-if="x === 'two'" class="account">
              <p>Insert account details for withdrawals and payouts</p>
              <label for="receipientName">Receipients Name</label>
              <input type="text" name="receipientName" v-model="receipient">
              <label for="bank">Select Bank</label>
              <select name="bank" v-model="bank">
                <optgroup>
                  <option value="044">ACCESS BANK</option>
                  <option value="401">ASO SAVINGS AND LOANS</option>
                  <option value="317">CELLULANT</option>
                  <option value="023">CITIBANK</option>
                  <option value="559">CORONATION MERCHANT BANK</option>
                  <option value="310">CORPORETTI</option>
                  <option value="551">COVENANT MICROFINANCE BANK</option>
                  <option value="063">DIAMOND BANK</option>
                  <option value="050">ECOBANK NIGERIA</option>
                  <option value="562">EKONDO MICROFINANCE BANK</option>
                  <option value="084">ENTERPRISE BANK</option>
                  <option value="070">FIDELITY BANK</option>
                  <option value="608">FINATRUST MICROFINANCE BANK</option>
                  <option value="011">FIRST BANK OF NIGERIA</option>
                  <option value="214">FIRST CITY MONUMENT BANK</option>
                  <option value="085">FIRST INLAND BANK</option>
                  <option value="601">FSDH</option>
                  <option value="058">GUARANTY TRUST BANK</option>
                  <option value="030">HERITAGE BANK</option>
                  <option value="301">JAIZ BANK</option>
                  <option value="082">KEYSTONE BANK</option>
                  <option value="014">MAINSTREET BANK</option>
                  <option value="313">M-KUDI</option>
                  <option value="561">NEW PRUDENTIAL BANK</option>
                  <option value="552">NPF MFB</option>
                  <option value="327">PAGA</option>
                  <option value="329">PAYATTITUDE ONLINE</option>
                  <option value="101">PROVIDUS BANK</option>
                  <option value="403">SAFETRUST MORTGAGE BANK</option>
                  <option value="609">SEED CAPITAL MICROFINANCE BANK</option>
                  <option value="221">STANBIC IBTC BANK</option>
                  <option value="068">STANDARD CHARTERED BANK</option>
                  <option value="232">STERLING BANK</option>
                  <option value="032">UNION BANK OF NIGERIA</option>
                  <option value="033">UNITED BANK FOR AFRICA</option>
                  <option value="215">UNITY BANK</option>
                  <option value="566">VFD MICROFINANCE BANK</option>
                  <option value="035">WEMA BANK</option>
                  <option value="057">ZENITH BANK</option>
                </optgroup>
              </select>
              <label for="bankName">Receipients Account Number</label>
              <input type="number" name="accountNumber" v-model="number">
              <button class="btn"> Update Account </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </main>
</template>

<script>
  export default {
    name: 'profile',
    components: {
      Feedback: () => import('@/components/feedback')
    },
    data: function () {
      return {
        password: false,
        x: 'one',
        name: '',
        email: '',
        phone: '',
        receipient: '',
        bank: '',
        number: '',
        feedback: {
          visible: false,
          type: 'danger',
          message: ''
        }
      }
    },
    methods: {
      updateUser () {
        const data = {
          name: this.name === ''? this.$store.getters.getUser.name: this.name,
          email: this.email === ''? this.$store.getters.getUser.email: this.email,
          phone: this.phone
        }
        this.$Progress.start()
        this.$store.dispatch('updateProfile', data)
          .then(() => {
            this.$Progress.finish()
            this.feedback.visible = true
            this.feedback.type = 'success'
            this.feedback.message = 'Your profile details have been updated successfully'
            setTimeout(() => {
              this.feedback.visible = false
            }, 1200)
          })
          .catch((err) => {
            this.$Progress.fail()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Sorry, we could not change your profile information right now. Please try again.'
            setTimeout(() => {
              this.feedback.visible = false
            }, 1200)
          })
      },

      updateAccount () {
        const data = {
          name: this.receipient,
          bank: this.bank,
          number: this.number
        }
        this.$Progress.start()
        this.$store.dispatch('updateAccount', data)
          .then(() => {
            this.$Progress.finish()
            this.feedback.visible = true
            this.feedback.type = 'success'
            this.feedback.message = 'Your account details have been updated successfully'
            setTimeout(() => {
              this.feedback.visible = false
            }, 1200)
          })
          .catch((err) => {
            this.$Progress.fail()
            this.feedback.visible = true
            this.feedback.type = 'danger'
            this.feedback.message = 'Sorry, we could not change your account information right now. Please try again.'
            setTimeout(() => {
              this.feedback.visible = false
            }, 1200)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'profile.scss'
</style>
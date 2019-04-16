<template>
  <main>
   <div id="wrap">  
    <div class="frame">
      <input checked="checked" id="rad1" name="rad" type="radio">
      <input id="rad2" name="rad" type="radio">

      <div class="nav"></div>
      <div class="nav"></div>

      <div class="indicator"></div>

      <div class="inner">
        <div class="content">
          <div class="form">
            <p>Modify your personal details below</p>

            <input type="text" name="name" placeholder="Your name">
            <input type="text" name="name" placeholder="Email">
            <input type="text" name="name" placeholder="Phone">
            <button class="btn"> Update details</button>
            <button class="btn btn--link"> Change Password</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </main>
</template>

<script>
  import DashboardFarms from '../../dashboard-farms'

  export default {
    name: 'profile',
    components: {
      'dash-farms': DashboardFarms
    },
    data: function () {
      return {
        name: '',
        phone: '',
        email: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'profile.scss'
</style>
<template>
  <main>
   <div id="wrap">
    <input type="checkbox">
  
    <div class="frame">
      <input checked="checked" id="rad1" name="rad" type="radio">
      <input id="rad2" name="rad" type="radio">

      <div class="nav"></div>
      <div class="nav"></div>

      <div class="indicator"></div>

      <div class="inner">
        <div class="content">
          <h1 data-splitting="chars"></h1>
          <p>Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Integer tincidunt. Praesent turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.</p>
        </div>

        <div class="content">
          <h1 data-splitting="chars"></h1>
          <p>Morbi ac felis. Sed aliquam ultrices mauris. Quisque id odio. Cras sagittis. Fusce vulputate eleifend sapien.</p>
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
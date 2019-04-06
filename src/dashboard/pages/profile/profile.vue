<template>
  <main>
    <div class="main__section">
      <!-- <h1>Profile</h1> -->
      <div class="profile__info">
        <p class="profile__title">Personal Info </p>
           
        <label for="name">Name</label>
        <input type="text" name="name">

        <label for="name">Phone Number</label>
        <input type="text" name="phone_number">
            
        <label for="name">Email</label>
        <input type="text" name="email">

        <button class="btn-dark" @click="updateProfile">Update profile</button>
      </div>

      <div class="profile__info">
        <p class="profile__title">Bank details</p>
           
        <label for="recepient">Full name of Recepient</label>
        <input type="text" name="recepient">

        <label for="bank">Bank</label>
        <select name="bank" id="bank">
          <optgroup>
            <option value="">Select a bank</option>
            <option>Zenith Bank</option>
            <option>First Bank</option>
          </optgroup>
        </select>
            
        <label for="account_number">Account Number</label>
        <input type="text" name="account_number">

        <button class="btn-dark">Update bank details</button>
      </div>
    </div>

    <div class="sidebar">
      <div class="mobile">
        <router-link to="/dashboard/available-farms"><button class="btn">See available farms</button></router-link>
      </div>

      <div class="large__screen">
        <h4>Available farms</h4>
        <dash-farms></dash-farms>
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
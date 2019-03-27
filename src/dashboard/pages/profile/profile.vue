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

        <button class="btn-dark">Update profile</button>
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
        <h3>Available farms</h3>
        <div class="card__container">
          <div class="farm__card">
            <header>
              <p class="farm__title">Maize farm</p>
            </header>   
            <div class="farm__details">
              <div class="overlay">
                <p><span class="farm__rate">&#8358; 60,000</span> per unit </p>
                <p class="returns">returns</p>
                <h4>
                  <span class="farm__rate">30%</span> in 8 months
                </h4>
              </div>
            </div>
            <div class="farm__cta">
              <button class="btn btn--border"> View farm</button>
              <button class="btn-dark"> Invest</button>
            </div>
          </div>

          <div class="farm__card">
            <header>
              <p class="farm__title">Cucumber farm</p>
            </header>   
            <div class="farm__details">
              <div class="overlay">
                <p><span class="farm__rate">&#8358;30,000</span> per unit </p>
                <p class="returns">returns</p>
                <h4>
                  <span class="farm__rate">22%</span> in 2 months
                </h4>
              </div>
            </div>
            <div class="farm__cta">
              <button class="btn btn--border"> View farm</button>
              <button class="btn-dark"> Invest</button>
            </div>
          </div>

          <div class="farm__card">
            <header>
              <p class="farm__title">Soybeans farm</p>
            </header>   
            <div class="farm__details">
              <div class="overlay">
                <p><span class="farm__rate">&#8358; 54,000</span> per unit </p>
                <p class="returns">returns</p>
                <h4>
                  <span class="farm__rate">35%</span> in 6 months
                </h4>
              </div>
            </div>
            <div class="farm__cta">
              <button class="btn btn--border"> View farm</button>
              <button class="btn-dark"> Invest</button>
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
    data: function () {
      return {
        title: 'profile'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'profile.scss'

</style>
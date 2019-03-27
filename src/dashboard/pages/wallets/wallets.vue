<template>
  <main>
    <div class="main__section">
      <h1>Transaction history</h1>
      <div> 
        <div class="transaction__info">
          <div class="transaction__left">
            <img src="~@/assets/icons/icon-logo.png" alt="transaction type">
          </div>
          
          <div class="transaction__right">
            <div class="transaction__blocks">
              <p class="transaction__title">FST-970012 </p>
              <p class="transaction__type">Wallet Funding </p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Created on</em></p>
              <p class="value">15 March 2019</p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Amount</em></p>
              <p class="value">&#8358; 55,000.00</p>
            </div>
          </div>
        </div>
      </div>

      <div> 
        <div class="transaction__info">
          <div class="transaction__left">
            <img src="~@/assets/icons/icon-logo.png" alt="transaction type">
          </div>
          
          <div class="transaction__right">
            <div class="transaction__blocks">
              <p class="transaction__title">FST-970012 </p>
              <p class="transaction__type">Wallet Funding </p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Created on</em></p>
              <p class="value">15 March 2019</p>
            </div>

            <div class="transaction__blocks">
              <p class="transaction__options"><em>Amount</em></p>
              <p class="value">&#8358; 55,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <div> 
        <div class="payment__info">
          <div class="payment__blocks">
            <p class="payment__options">WALLET BALANCE</p>
            <p class="payment__value">&#8358; 30,000.00</p>
          </div>
          <hr>
          <p class="payment__cta">Fund Wallet</p>
        </div>
      </div>

      <div> 
        <div class="payment__info">
          <div class="payment__blocks">
            <p class="payment__options">TOTAL PAYOUT</p>
            <p class="payment__value">&#8358; 00.00</p>
          </div>
          <hr>
          <p class="payment__cta">Request payout</p>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script>
  export default {
    name: 'wallets',
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'wallets.scss'
</style>
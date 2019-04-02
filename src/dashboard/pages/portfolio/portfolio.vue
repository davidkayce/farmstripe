<template>
  <main>
    <div class="main__section">
      <h1>Welcome back Oluchi</h1>
      
      <div> 
        <div class="portfolio__info">
          <div class="portfolio__blocks">
            <p class="portfolio__options">RETURNS ON INVESTMENTS </p>
            <p class="portfolio__value">&#8358; 0.00</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options">INVESTMENT</p>
            <p class="portfolio__value">&#8358; 0.00</p>
          </div>
          <hr>
          <div class="portfolio__blocks">
            <p class="portfolio__options"> WALLET BALANCE </p>
            <p class="portfolio__value">&#8358; 0.00</p>
          </div>
        </div>
      </div>

      <h3>Your investments</h3>

      <div> 
        <div class="investment__info">
          <div class="investment__blocks">
            <p class="investment__title">Maize Farm: Jos, Plateau </p>
            <p class="investment__units">&#8358; 100,000.00 &bull; 2 units </p>
            <p><span class="rate">30%</span> <span class="returns"> Returns</span> </p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Start Date</em></p>
            <p class="tenure__value">15 April 2019</p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Yield Date</em></p>
            <p class="tenure__value">15 September 2019</p>
          </div>
        </div>
      </div>

      <div> 
        <div class="investment__info">
          <div class="investment__blocks">
            <p class="investment__title">Pineapple Farm: Onitsha, Anambra </p>
            <p class="investment__units">&#8358; 20,000.00 &bull; 4 units </p>
            <p><span class="rate">10%</span> <span class="returns"> Returns</span> </p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Start Date</em></p>
            <p class="tenure__value">15 April 2019</p>
          </div>

          <div class="investment__blocks">
            <p class="investment__tenure"><em>Yield Date</em></p>
            <p class="tenure__value">15 September 2019</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <div class="mobile">
        <router-link to="/dashboard/available-farms"><button class="btn">See available farms</button></router-link>
      </div>

      <div class="large__screen">
        <h4>Available farms</h4>
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
    name: 'portfolio',
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles';
  @import 'portfolio.scss';
</style>
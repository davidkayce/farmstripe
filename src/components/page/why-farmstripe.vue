<template>
  <main>
    <div class="section__header">
      <h1>Why Farmstripe ?</h1>
      <div class="line"></div>
    </div>

    <div class="content" data-aos="fade-up">
      <section>
        <article>
          <section class="article_header">
            <h2>We believe food production is essential for sustainable development</h2>
            <p>
              Our mission is to provide platform that ensures a future where challenges for farmers and consumers are subsidized leading to sustainable development of rural communities, reduced hunger and poverty alleviation through increase food production and security in Nigeria and Africa.
            </p>
            <p>
              To achieve this goal we are bound by our core values of <strong>Reliabilty, Accountability, Integrity, Service and Excellence (R.A.I.S.E.)</strong>

            </p>
          </section>
        </article>
        <figure><img src="~@/assets/images/why-farmstripe.png" alt="Our Vision" data-aos="fade-up" loading="lazy"></figure>
      </section>

      <section>
        <article>
          <section class="article_header">
            <h2>Our Focus</h2>
            <p>
              We are focused on the following:
            </p>

            <h4><strong>REDUCING HUNGER</strong></h4>
            <p>
              With Food importation at its height and Africa's growing population. Farmstripe is providing a solution to the continents challenges.
            </p>

            <h4><strong>DEVELOPING RURAL COMMUNITIES</strong></h4>
            <p>
              We work with farming communites and are driving real change by providing what they need to be better farmers and happier people.
            </p>

            <h4><strong>THE BEST RETURNS FOR YOU</strong></h4>
            <p>
              Our Subscribers get exciting returns. Our farmers maximize their yield and the nation has more food.
            </p>
          </section>
        </article>
        <figure><img src="~@/assets/images/our-focus.png" alt="Our focus" loading="lazy"></figure>
      </section>

      <section>
        <article>
          <section class="article_header">
            <h2>We are Safe and Insured</h2>
            <p>
              With Farmstripe your investment is in safe hands. Our platform was built with the security of your investment as priority and thats is why our farms are comprehensively insured by Leadway Assurance to mitigate against crop loss from flood, fire, windstorm ,aircraft , disease and outbreak of pests. 
            </p>
            <h4><strong>TRACK YOUR SPONSORSHIP</strong></h4>
            <p>
              The option of tracking the progress of the farm is available on the dashboard to enable the sponsor know at what stage the farm is operating.
            </p>
          </section>
        </article>
        <figure><img src="~@/assets/images/money-secured.png" alt="Your money is secured" loading="lazy"></figure>
      </section>
    </div>

    <div class="images">
      <img 
      src="~@/assets/images/cocoa.jpg" alt="" loading="lazy">
    </div>
  </main>
</template>

<style lang="scss" scoped>
main{
  padding: 8rem 2rem 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media (min-width: $breakpoint-tablet) {
    padding: 20rem 2rem 0;
    background: url('~@/assets/images/background-leaf.jpg');
    background-position: 4rem -5rem;
    background-repeat: no-repeat;

    @media (min-width: $breakpoint-desktop) {
      background-position: 14rem -9rem;
    }
  }

  .section__header {
    margin: 1rem 1rem;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: $breakpoint-tablet) {
      margin: 1rem 7%;
    }

    @media (min-width: $breakpoint-desktop) {
      margin: 1rem 12%;
    }

    .line {
      background: $dgreen;
      height: 3px;
      width: 15%;
      margin: 1rem 0 3rem;

      @media (min-width: $breakpoint-desktop) {
        width: 7%;
      }
    }

    h1 {
      color: $dgreen;
    }

    p {
      font-size: 1.5rem;
      color: $grey-medium;
      letter-spacing: -0.5px;

      @media (min-width: $breakpoint-desktop) {
        font-size: 1.7rem;
      }
    }
  }

  .content {
    width: 95%;
    margin: 3rem auto;
    z-index: 1;

    @media (min-width: $breakpoint-tablet) {
      padding: 0 4rem;
      max-height: 60rem;
      width: 100%;
      overflow-X: hidden;
      overflow-Y: auto;
      overflow: -moz-scrollbars-none;
      overflow-style: marquee,panner;
      -ms-overflow-style: none;

      &::-webkit-scrollbar { 
        width: 0 !important 
      }
    }
    
    @media (min-width: $breakpoint-desktop) {
      padding: 0 15rem;
    }

    section {
      display: flex;
      flex-direction: column;

      &:not(last-of-type) {
        margin-bottom: 3rem;
      }

      @media (min-width: $breakpoint-tablet) {
        flex-direction: row;
        justify-content: space-between;

        &:not(last-of-type) {
          margin-bottom: 12rem;
        }
      }

      figure {
        @media (min-width: $breakpoint-tablet) {
          width: 60%;
        }

        img{
          width: 35rem;
          margin-left: -3rem;
          
          @media (min-width: $breakpoint-tablet) {
            margin: 0 -10rem 0 0;
            width: 45rem;
          }

          @media (min-width: 1200px) {
            width: 70rem;
          }
        }
      }

      article {

        @media (min-width: $breakpoint-tablet) {
          width: 40%;
        }

        section {
          display: flex;
          flex-direction: column;
        }

        p {
          color: $grey-medium;
          font-weight: 100;
          margin: 1rem 0 2rem;
        }
      }
    }
  }

  .images {
    display: none;

    @media (min-width: $breakpoint-tablet) {
      display: block;
      position: absolute;
      top: 160rem;
      left: -8rem;
      img {
        width: 45rem;
      }
    }

    @media (min-width: $breakpoint-desktop) {
      top: 175rem;
      left: -4rem;
      img {
        width: 55rem;
      }
    }

    @media (min-width: 1200px) {
      img {
        width: 57rem;
        z-index: -5;
      }
    }
  }
}
</style>

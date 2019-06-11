<template>
  <main>
    <div class="about__component" >
      <div class="images">
        <img 
        src="~@/assets/images/green-beans.png" alt="green-beans"
        loading="lazy" 
        data-aos="slide-right" 
        data-aos-delay="100" 
        data-aos-mirror="true">

        <img 
        src="~@/assets/images/corn.png" alt="corn"
        loading="lazy" 
        data-aos="slide-left" 
        data-aos-delay="100" 
        data-aos-mirror="true">
      </div>

      <section class="header" data-aos="fade-up">
        <h1>How it works</h1>
        <div class="line"></div>
        <p>Farmstripe is committed to making your agro-investments as easy and fluid as possible. No more long processes and agonizing protocols</p>
      </section>

      <section class="content">
        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="50">
          <img src="~@/assets/icons/icon-account.png" alt="create-account" loading="lazy">
          <h3>Create an account</h3>
          <p>Create an account in less than a minute</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="100">
          <img src="~@/assets/icons/icon-sponsor.png" alt="sponsor-farm" loading="lazy">
          <h3>Sponsor a Farm</h3>
          <p>Pick from the variety of farms available to you to make your investment</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="150">
          <img src="~@/assets/icons/icon-track.png" alt="track-investment" loading="lazy">
          <h3>Track your investment</h3>
          <p>Track the process of your investment on your dashboard</p>
        </div>

        <div 
        class="item fstr__card" 
        data-aos="fade-up" 
        data-aos-delay="200">
          <img src="~@/assets/icons/icon-returns.png" alt="returns" loading="lazy">
          <h3>Get great returns</h3>
          <p>Get your returns at the time when due, no hassles</p>
        </div>
      </section>
    </div>
  </main>
</template>


<style lang="scss" scoped>
.about__component {
  position: relative;
  padding: 8rem 2rem 3rem;
  display: flex;
  background-color: transparent;
  flex-direction: column;

  @media (min-width: $breakpoint-tablet) {
    padding: 13rem 2rem 3rem;
  }

  .header {
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

      @media (min-width: $breakpoint-tablet) {
        width: 50%;
      }

      @media (min-width: $breakpoint-desktop) {
        font-size: 1.7rem;
      }
    }
  }

  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    margin: 2rem auto;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      width: 92%;
      padding-top: 3rem;
    }
    
    @media (min-width: $breakpoint-desktop) {
      width: 75%;
      margin: 0 auto;
    }
  
    .item{
      flex:0 0 23%;
      text-align: center;
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 2.5rem;
      justify-content: space-between;

      h3 {
        font-weight: 600;

      }

      p {
        margin: 2rem 0;
        font-size: 1.5rem;
        color: $grey-medium;
        letter-spacing: -0.5px;
      }

      img {
        width: 5rem;
        margin: 1rem 0;
      }
    }
  }
}

.images {
  position: absolute;
  top: 90%;
  left: -12%;
  display: none;

  @media (min-width: $breakpoint-tablet) {
    display: inline-block;
    img {
      &:first-of-type {
        width: 55rem;
        transform: rotate(-15deg); 
      }
  
      &:nth-of-type(2) {
        position: absolute;
        width: 45rem;
        left: 40rem;
        top: -50rem;
        transform: rotate(12deg);
        z-index: -56;
      }
    }
  }

  @media (min-width: $breakpoint-desktop) {
    display: inline-block;
    img {
      &:first-of-type {
        width: 62rem;
      }
  
      &:nth-of-type(2) {
        width: 55rem;
        left: 65rem;
        top: -54rem;
        transform: rotate(20deg);
      }
    }
  }

  @media (min-width: 1200px) {
    display: inline-block;
    img {
      &:first-of-type {
        width: 68rem;
        transform: rotate(-15deg); 
      }
  
      &:nth-of-type(2) {
        width: 65rem;
        left: 90rem;
      }
    }
  }
}
</style>

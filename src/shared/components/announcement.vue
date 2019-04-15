<template>
  <div class="container">
    <h1>Coming Soon!</h1>
    <p>From the next farming round, all users will have be able to get a percentage of the interest on their investments paid to them each month of the farming period. No more waiting to get your returns!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~styles';
.container {
  position: relative;
  padding: 2.5rem 3rem;
  width: 85%;
  margin: 1.5rem auto;
  border-radius: 1rem;
  color: $white;
  z-index: -999;
  background-image: linear-gradient(98deg, $dgreen, $green-dash, $fstrgreen)
}

p {
  color: $white;
  opacity: 0.8;
  margin-top: 1.5rem;
}

img {
  width: 35rem;
  position: absolute;
  left: -3rem;
  top: -7rem;
  opacity: 0.5
}
</style>


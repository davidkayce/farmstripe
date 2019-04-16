<template>
  <div class="container">
    <h3><strong> Coming Soon! </strong></h3>
    <p>From the next farming round, all users will have be able to get a percentage of the interest on their investments paid to them each month of the farming period.</p>
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
  padding: 2rem;
  width: 89%;
  margin: 1.5rem auto;
  border-radius: 0.5rem;
  color: $white;
  z-index: -999;
  background-image: linear-gradient(98deg, $dgreen, $green-dash, $fstrgreen)
}

h3 {
  display: inline;
  margin-right: 1.5rem;
}

p {
  display: inline;
  color: $white;
  font-size: 1.3rem;
}

img {
  width: 35rem;
  position: absolute;
  left: -3rem;
  top: -7rem;
  opacity: 0.5
}
</style>


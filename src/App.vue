<template>
  <div>
    <login></login>
    <particle></particle>
    <!-- <div id="bg"></div> -->
  </div>
</template>
<script>
import Login from "./components/login.vue";
import Particle from "./components/particles.vue";
export default {
  components: { Login, Particle },
  data() {
    return {};
  },
  mounted: function() {
    var particle = document.getElementById("particles");
    particle.style.width = document.documentElement.clientWidth + "px";
    particle.style.height = document.documentElement.clientHeight + "px";
  },
  methods: {}
};
</script>

<style lang="scss">
.login {
  z-index: 10;
}
.container {
  z-index: 1;
}
</style>

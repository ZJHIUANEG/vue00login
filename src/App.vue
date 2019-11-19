<template>
  <div>
    <login></login>
    <particle></particle>

    <!-- <router-link
      to="/canv"
      tag="button"
      style="width: 100px; height: 40px; position:absolute;z-index: 2000; top: 0; left: 0;"
      >go</router-link
    >
    <router-view></router-view> -->
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

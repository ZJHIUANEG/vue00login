<template>
  <div>
    <router-link to="/login" tag="button" class="loginbtn">登录</router-link>
    <canv></canv>

    <router-view></router-view>
  </div>
</template>
<script>
import Canv from "./components/canv.vue";
export default {
  components: { Canv }
};
</script>

<style lang="scss">
.loginbtn {
  width: 100px;
  height: 40px;
  z-index: 10;
  position: absolute;
}
.canva {
  z-index: 1;
  width: 100%;
  height: 660px;
  position: absolute;
}
.login {
  z-index: 20;
}
</style>

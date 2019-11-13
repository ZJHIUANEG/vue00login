<template>
  <div>
    <button @click="flag = !flag" class="loginbtn">登录</button>
    <canv></canv>
    <login v-if="flag" @func="show" @func1="close"></login>
  </div>
</template>
<script>
import Canv from "./components/canv.vue";
import Login from "./components/login.vue";
export default {
  components: { Canv, Login },
  data() {
    return {
      account: "",
      password: "",
      flag: false
    };
  },
  methods: {
    show(data1, data2) {
      this.account = data1;
      this.password = data2;
      console.log(this.account);
      console.log(this.password);
    },
    close() {
      this.flag = !this.flag;
    }
  }
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

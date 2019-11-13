<template>
  <div>
    <login></login>
    <div id="bg"></div>
  </div>
</template>
<script>
import Login from "./components/login.vue";
export default {
  components: { Login },
  data() {
    return {
      // account: "",
      // password: "",
      // flag: false
    };
  },
  mounted: function() {
    var bg = document.getElementById("bg");
    bg.style.width = document.documentElement.clientWidth + "px";
    bg.style.height = document.documentElement.clientHeight + "px";
  },
  methods: {
    // show(data1, data2) {
    //   this.account = data1;
    //   this.password = data2;
    //   console.log(this.account);
    //   console.log(this.password);
    // },
    // close() {
    //   this.flag = !this.flag;
    // }
  }
};
</script>

<style lang="scss">
#bg {
  background-color: #333;
}
</style>

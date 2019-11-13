<template>
  <div>
    <login></login>
    <img id="bg" src="./image/bg.jpg" alt />
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
    bg.style.width = document.documentElement.offsetWidth + "px";
    bg.style.height = document.documentElement.offsetHeight + "px";
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
</style>

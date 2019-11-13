<template>
  <div>
    <login></login>
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

<template>
  <transition appear>
    <div class="login">
      <h1>{{ title }}</h1>

      <div class="inputBox">
        <div :class="item.className" v-for="item in list" :key="item.id">
          <span>{{ item.icon }}</span>
          <input
            type="text"
            :placeholder="item.name"
            @click="inputActive(item.id)"
            @blur="clearActive()"
            v-model="item.model"
          />
        </div>
        <input type="button" value="立即登录" @click="getData" />
      </div>
      <img
        src="../image/叉.png"
        alt="关闭"
        @mouseover="flag = true"
        @mouseout="flag = false"
        @click="closeLogin"
      />
      <span v-if="flag" id="closetip">关闭</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["parentFlag"],
  data() {
    return {
      title: "站点登录",
      flag: false,
      list: [
        { id: 1, icon: "U", name: "账号", model: "", className: "" },
        { id: 2, icon: "P", name: "密码", model: "", className: "" }
      ]
    };
  },
  created() {
    this.clearActive();
  },
  methods: {
    clearActive() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].className = "account";
      }
    },
    inputActive: function(id) {
      var index = this.list.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      });
      this.clearActive();
      this.list[index].className = "account active";
    },
    getData() {
      if (this.list[0].model == "" || this.list[1].model == "") {
        console.log("请输入内容");
        return;
      }
      console.log("账号：" + this.list[0].model);
      console.log("密码：" + this.list[1].model);
      this.$emit("func", this.list[0].model, this.list[1].model);
      this.list[0].model = this.list[1].model = "";
    },
    closeLogin() {
      this.$emit("func1");
    }
  }
};
</script>

<style lang="scss" scoped>
// 背景色透明
.login {
  width: 340px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.712);
  top: 140px;
  left: 32%;
  position: absolute;
  box-shadow: 0 -15px 30px #0d6395;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    text-shadow: 0 0 1px #0e947a;
    color: #eefaff;
    font-weight: bold;
    font-size: 20px;
  }
  .inputBox {
    width: 300px;
    height: auto;
    font-size: 14px;
    margin: 20px 0 0 0;
    .account.active {
      background: #5c99bd;
    }
    .account {
      display: flex;
      flex-direction: row;
      line-height: 42px;
      width: 300px;
      height: 42px;
      margin: 5px 0;
      background: rgba(72, 192, 240, 0.637);
      span {
        font-weight: bold;
        font-size: 18px;
        color: #0c4a90;
        padding: 0 6px 0 8px;
        font-family: "adminthemesregular";
      }
      input[type="text"] {
        width: 260px;
        border: none;
        outline: none;
        background: none;
      }
    }

    input[type="button"] {
      width: 100%;
      height: 42px;
      cursor: pointer;
      color: #f4f4f4;
      font-size: 16px;
      background: #0c6690;
      outline: none;
      border: none;
    }
  }
  img {
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    position: absolute;
  }
  #closetip {
    width: 30px;
    height: 20px;
    top: 44px;
    right: 15px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    background-color: #fff;
    display: block;
    position: absolute;
  }
}
// 出场动画
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
.v-move {
  transition: all 0.8s ease;
}
.v-leave-active {
  position: absolute;
}
</style>

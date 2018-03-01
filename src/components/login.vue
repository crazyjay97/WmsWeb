<template>
  <div class="loginform">
    <mt-header fixed title="登陆"></mt-header>
    <div id="h_bannner">
    </div>
    <mt-field label="用户名" type="text" placeholder="请输入用户名" name="account" id="account" v-model="account"></mt-field>
    <mt-field label="密码" type="password" name="age" id="age" placeholder="请输入密码" v-model="pwd"></mt-field>
    <br>
    <mt-button type="primary" size="large" @click.native="toLogin">登陆</mt-button>
    <mt-button type="default" size="large" @click.native="toRegister">注册</mt-button>
  </div>
</template>
<script>
import store from "@/store/store";


export default {
  methods: {
    toLogin() {
      this.$ajax({
        method:"post",
        url:"http://localhost:8182/wms/user/login",
        data: {
          "account":this.account,
          "password":this.pwd
        }
      }).then(req => {
        store.state.user = req.data
        console.info(req)
      }).catch(err => {
        console.info(err)
      })
      //this.$router.push({ name: "homepage" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    }
  },
  data() {
    return {
      account: this.$route.params.account,
      pwd: this.$route.params.pwd
    };
  }
};
</script>
<style>
  #h_bannner{
    height: 300px;
  }
</style>

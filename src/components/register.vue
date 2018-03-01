<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
        <mt-field label="账号" placeholder="请输入帐号" v-model="account"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" v-model="pwd" placeholder="请输入密码" type="password"></mt-field>
        <mt-field label="密码" v-model="pwd_again" placeholder="请再次输入密码" type="password"></mt-field>
        <mt-button type="primary" size="large" @click.native="register">register</mt-button>
        <mt-button type="default" size="large" @click.native="cancel">cancel</mt-button>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  methods: {
    register() {
      if (
          (isNull(this.pwd) &
          isNull(this.pwd_again) &
          isNull(this.name) &
          isNull(this.account) &
          isNull(this.email)) == 0 
      ) {
        MessageBox.alert("输入框不可为空", "提示");
      } else if(this.pwd != this.pwd_again){
            MessageBox.alert("密码不一致,请重新输入", "提示");
      } else {
         this.$ajax({
          method: "post",
          url: "http://localhost:8182/wms/user/add",
          data: {
            name: this.name,
            account: this.account,
            password: this.pwd
          }
        }).then( res => {
            MessageBox.alert("注册成功!", "提示");
            this.$router.push({ name: "login" ,params: {
                "account": this.account,
                "pwd":this.pwd
            }});
        }).catch(err => {
            MessageBox.alert("注册失败!", "提示");
        })
      }
    },
    cancel() {
      this.$router.push({ name: "login" });
    }
  },
  data() {
    return {
      pwd: "",
      pwd_again: "",
      name: "",
      email: "",
      account: ""
    };
  }
};

function isNull(str) {
  if (str == "") {
    return 0;
  }
  return 1;
}
</script>
<style>

</style>


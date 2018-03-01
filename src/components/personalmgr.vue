<template>
  <div>
    <mt-header fixed title="个人信息"></mt-header>
    <mt-cell title="昵称" v-bind:value="store.state.user.name"></mt-cell>
    <mt-cell title="昵称" v-bind:value="store.state.user.account"></mt-cell>
    <mt-cell title="邮箱" v-bind:value="store.state.user.email"></mt-cell>
    <mt-cell title="公司" v-bind:value="store.state.user.company"  @click.native="show_company"></mt-cell>
    <mt-cell title="职位" v-bind:value="store.state.user.role"></mt-cell>
    <mt-button type="default" size="large">修改信息</mt-button>
  </div>
</template>
<script>
import store from "@/store/store";


export default {
  methods:{
    show_company(){
      
    }
  },
  data() {
    return {
      store
    };
  }
};
</script>
<style>
.mint-cell-title {
  text-align: left;
}
</style>



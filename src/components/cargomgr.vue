<template>
  <div> 
      <mt-header fixed title="物品种类管理"></mt-header>
      <mt-button type="primary" size="large" @click.native="toRegister">增加</mt-button>
      <mt-cell  :key="index" v-for="(d,index) in list" :title="d" :value="d">
           <mt-button type="primary" size="smail" @click.native="toRegister">删除</mt-button>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-cell>
      </mt-cell>
  </div>
</template>
<script>
import store from "@/store/store";

export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 10, 9, 1, 13, 2]
    };
  },
  store
};
</script>
<style>
.mint-cell-title {
  text-align: left;
}
</style>



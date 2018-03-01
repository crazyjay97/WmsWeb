<template>
    <div>
        <mt-header fixed title="选择或创建一个机构"></mt-header>
        <mt-button type="primary" size="large" @click.native="toLogin">找到你的机构</mt-button>
        <mt-field label="机构编号" type="password" name="age" id="age" placeholder="请输入编号" v-model="password"></mt-field>
    </div>
</template>

<script>
import companys from "@/data/companys";
export default {
  data() {
    return {
      companys
    };
  },
  methods: {}
};
</script>   

<style>
.mint-cell-title {
  text-align: left;
}
</style>

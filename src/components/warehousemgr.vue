<template>
  <div>
    <mt-header fixed title="仓库管理"></mt-header>
      <mt-button type="primary" size="large" @click.native="openAddBox">增加</mt-button>
      <mt-cell  :key="index" v-for="(d,index) in list" :title="d" :value="d">
          <mt-button type="primary" size="small" @click.native="detailsBox">详情</mt-button>
          <mt-button type="danger" size="small" @click.native="del">删除</mt-button>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="仓库名" placeholder="请输入仓库名" v-model="name"></mt-field>
        <mt-field label="仓库地址" placeholder="请输入仓库地址" v-model="name"></mt-field>
        <mt-button type="primary" size="large" @click.native="details">添加</mt-button>
      </mt-popup>
  </div>
</template>
<script>
import store from "@/store/store";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 10, 9, 1, 13, 2],
      addVisible: false,
      detailsVisible: false
    };
  },
  created() {},
  methods: {
    openAddBox() {
      this.addVisible = true;
    },
    detailsBox() {
    },
    add() {
      this.ajax({
        method: "post",
        url: ""
      });
    },
    del() {}
  }
};
</script>
<style>
.mint-button {
  margin-right: 3px;
}
</style>



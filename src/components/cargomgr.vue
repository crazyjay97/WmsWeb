<template>
  <div> 
      <mt-header fixed title="物品种类管理"></mt-header>
      <mt-button type="primary" size="large" @click.native="addBox">增加</mt-button>
      <mt-cell  :key="index" v-for="(d,index) in list" :title="d.name" :value="d">
           <mt-button type="primary" size="small" @click.native="del(d.id)">删除</mt-button>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="种类" placeholder="请输入种类" v-model="name"></mt-field>
        <mt-button type="primary" size="large" @click.native="add">添加</mt-button>
      </mt-popup>
  </div>
</template>
<script>
import store from "@/store/store";

export default {
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$ajax({
        method: "post",
        url: "/wms/cargo/queryByDeptId",
        data: "id=" + this.store.state.user.deptId
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addBox() {
      this.addVisible = !this.addVisible;
    },
    del(id) {
      this.$ajax({
        method: "post",
        url: "/wms/cargo/del",
        data: "id=" + id
      })
        .then(res => {
          this.loadData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    add() {
      this.$ajax({
        method: "post",
        url: "/wms/cargo/add",
        data: {
          name: this.name,
          deptId: this.store.state.user.deptId
        }
      })
        .then(res => {
          console.log(res);
          this.addVisible = false;
          this.loadData();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      store,
      addVisible: false,
      list: [],
      name: ""
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



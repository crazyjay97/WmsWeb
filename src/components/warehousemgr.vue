<template>
  <div>
    <mt-header fixed title="仓库管理"></mt-header>
      <mt-button type="primary" size="large" @click.native="openAddBox">增加</mt-button>
      <mt-cell  :key="index" v-for="(d,index) in list" :title="d.name" :value="d">
          <mt-button type="primary" size="small" @click.native="detailsBox(d.id)" >详情</mt-button>
          <mt-button type="danger" size="small" @click.native="del(d.id)">删除</mt-button>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-cell>
      </mt-cell>
      <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="仓库名" placeholder="请输入仓库名" v-model="name"></mt-field>
        <mt-field label="仓库地址" placeholder="请输入仓库地址" v-model="address"></mt-field>
        <mt-button type="primary" size="large" @click.native="add">添加</mt-button>
      </mt-popup>
  </div>
</template>
<script>
//import store from "@/store/store";
export default {
  data() {
    return {
      list: [],
      addVisible: false,
      detailsVisible: false,
      name: "",
      address: "",
      user: {}
    };
  },
  created() {
    this.user = this.$store.state.user;
    this.loadData();
  },
  methods: {
    openAddBox() {
      this.addVisible = true;
    },
    detailsBox(id) {
      this.$store.state.warehouse.id = id;
      this.$router.push({ name: "details" });
    },
    loadData() {
      if (undefined == this.user.deptId) {
        return;
      }
      this.$ajax({
        method: "post",
        url: "/api/wms/wh/queryByDeptId",
        data: "id=" + this.user.deptId
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
          MessageBox.alert("网络错误!", "提示");
        });
    },
    add() {
      this.$ajax({
        method: "post",
        url: "/api/wms/wh/add",
        data: {
          name: this.name,
          address: this.address,
          deptId: this.user.deptId
        }
      })
        .then(res => {
          this.addVisible = false;
          this.loadData();
        })
        .catch(err => {
          console.log(err);
          MessageBox.alert("网络错误!", "提示");
        });
    },
    del(id) {
      this.$ajax({
        method: "post",
        url: "/api/wms/wh/del",
        data: "id=" + id
      })
        .then(res => {
          this.loadData();
        })
        .catch(err => {
          console.log(err);
          MessageBox.alert("网络错误!", "提示");
        });
    }
  }
};
</script>
<style>
.mint-button {
  margin-right: 3px;
}
</style>



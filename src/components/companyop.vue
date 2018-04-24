<template>
    <div>
        <mt-header fixed title="员工管理"></mt-header>
        <mt-button type="primary" size="large" v-if="isAdmin != 0" @click.native="addBox" >添加员工</mt-button>
        <mt-cell  :key="index" v-for="(d,index) in list" :title="d.name" style="width:100%">
          <mt-button type="primary" v-if="isAdmin != 0" size="small" @click.native="del(d.relId)">删除</mt-button>
        </mt-cell>
        <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="员工账号" placeholder="请输入员工账号" v-model="account_add"></mt-field>
        <mt-button type="primary" size="large" @click.native="add">添加</mt-button>
        </mt-popup>
    </div>
</template>

<script>
import companys from "@/data/companys";
export default {
  created() {
    this.isAdmin = this.$store.state.user.isAdmin;
    this.loadData();
  },
  data() {
    return {
      isAdmin: 0,
      addVisible: false,
      list: [],
      account_add: ""
    };
  },
  methods: {
    addBox() {
      this.addVisible = true;
    },
    del(id) {
      this.$ajax({
        method: "post",
        url: "/api/wms/user/delUserFromDept",
        data: "id=" + id
      })
        .then(res => {
          this.loadData();
        })
        .catch.loadData(err => {
          console.log(err);
        });
    },
    add() {
      this.ajax({
        method: "post",
        url: "/api/wms/user/joinToDept",
        data: "account=" + account_add
      })
        .then(res => {
          this.loadData();
        })
        .catch.loadData(err => {
          console.log(err);
        });
    },
    loadData() {
      this.$ajax({
        method: "post",
        url: "/api/wms/user/queryByDeptId",
        data: "deptId=" + this.$store.state.user.deptId
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>   

<style>
.mint-cell-title {
  text-align: left;
}
</style>

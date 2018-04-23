<template>
  <div>
    <mt-header fixed title="个人信息"></mt-header>
    <mt-cell title="昵称" v-bind:value="store.state.user.name"></mt-cell>
    <mt-cell title="账户" v-bind:value="store.state.user.account"></mt-cell>
   <!--  <mt-cell title="邮箱" v-bind:value="store.state.user.email" v-model="test"></mt-cell> -->
    <mt-cell title="机构" v-bind:value="dept.name" v-if="dept != 0"></mt-cell>
    <mt-cell title="角色" v-if="dept != null && dept.isAdmin == 1">管理员</mt-cell>
    <mt-cell title="角色" v-if="dept != null && dept.isAdmin == 0">普通成员</mt-cell>
    <mt-button type="default" size="large">修改信息</mt-button>
    <mt-button type="primary" size="large" v-if="dept == 0" @click.native="addBox">创建你的机构</mt-button>
    <mt-button type="primary" size="large" v-if="dept != 0" @click.native="show_company">查看机构详情</mt-button>

    <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="机构名称" placeholder="请输入机构名称" v-model="name_add"></mt-field>
        <mt-button type="primary" size="large" @click.native="add">添加</mt-button>
      </mt-popup>
  </div>
</template>
<script>
import store from "@/store/store";

export default {
  methods: {
    addBox() {
      this.addVisible = true;
    },
    show_company() {
      this.$router.push({ name: "companyop" });
    },
    add() {
      this.$ajax({
        method: "post",
        url: "/api/wms/department/add",
        data: {
          name: this.name_add,
          createBy: this.store.state.user.id
        }
      })
        .then(res => {
          this.addVisible = false;
        })
        .catch(err => {
          this.addVisible = true;
        });
    }
  },
  data() {
    return {
      name_add: "",
      addVisible: false,
      store,
      dept: 0
    };
  },
  created() {
    this.$ajax({
      method: "post",
      url: "/api/wms/department/queryByUserId",
      data: "id=" + store.state.user.id
    })
      .then(res => {
        this.store.state.user.deptId = res.data.id;
        this.dept = res.data;
        //this.$store.state.user.isAdmin = res.data.isAdmin;
      })
      .catch(err => {
        this.dept = 0;
      });
  }
};
</script>
<style>
.mint-cell-title {
  text-align: left;
}
</style>



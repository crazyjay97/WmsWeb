<template>
  <div>
    <mt-header fixed title="个人信息"></mt-header>
    <mt-cell title="昵称" v-bind:value="store.state.user.name"></mt-cell>
    <mt-cell title="账户" v-bind:value="store.state.user.account"></mt-cell>
   <!--  <mt-cell title="邮箱" v-bind:value="store.state.user.email" v-model="test"></mt-cell> -->
    <mt-cell title="机构" v-bind:value="dept.name"></mt-cell>
    <mt-cell title="角色" v-if="dept != null && dept.isAdmin == 1">管理员</mt-cell>
    <mt-cell title="角色" v-if="dept != null && dept.isAdmin == 0">普通成员</mt-cell>
    <mt-button type="default" size="large">修改信息</mt-button>
    <mt-button type="primary" size="large" v-if="dept != null">查看机构详情</mt-button>
    <mt-button type="default" size="large" v-if="dept == null">增加您的机构或绑定您的机构s</mt-button>
  </div>
</template>
<script>
import store from "@/store/store";

export default {
  methods: {
    show_company() {}
  },
  data() {
    return {
      store,
      dept: 0
    };
  },
  created() {
    this.$ajax({
      method: "post",
      url: "/api/wms/department/queryByUserId",
      data:"id="+store.state.user.id
    })
      .then(res => {
        this.store.state.user.deptId = res.data.id
        this.dept = res.data;
      })
      .catch(err => {
        this.dept = null;
      });
  }
};
</script>
<style>
.mint-cell-title {
  text-align: left;
}
</style>



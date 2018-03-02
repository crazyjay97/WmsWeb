<template>
    <div>
        <div id="home_app"> 
            <component  v-bind:is="selected"></component>
        </div>
        <mt-navbar v-model="selected" v-bind:fixed=true style="top:auto;bottom:0;">
            <mt-tab-item id="cargo">货物管理</mt-tab-item>
            <mt-tab-item id="warehouse">仓库管理</mt-tab-item>
            <mt-tab-item id="personal">个人信息</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
import Vue from "vue";
import warehousemgr from "@/components/warehousemgr";
import personalmgr from "@/components/personalmgr";
import cargomgr from "@/components/cargomgr";

export default {
  data() {
    return {
      selected: "personal"
    };
  },
  components: {
    cargo: cargomgr,
    warehouse: warehousemgr,
    personal: personalmgr
  }
};
</script>
<style>
.mint-tab-item {
  border-top: 3px solid;
  background-color: #79cbfa;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>


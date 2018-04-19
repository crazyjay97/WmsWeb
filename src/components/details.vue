<template>
  <div>
        <mt-button type="primary" size="large" @click.native="detailsBox">返回</mt-button>
        <mt-cell  :key="index" v-for="(d,index) in list" :title="d" :value="d" style="width:100%">
          <mt-button type="primary" size="small" @click.native="details">详情</mt-button>
          <mt-button type="danger" size="small" @click.native="del">删除</mt-button>
        </mt-cell>
        </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        
    }
};
</script>

<style>

</style>

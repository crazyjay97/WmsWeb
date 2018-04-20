<template>
  <div>
        <mt-header fixed title="物品种类管理"></mt-header>
        <mt-button type="primary" size="large" @click.native="backToHome">返回</mt-button>
        <mt-button type="primary" size="large" @click.native="addBox">增加</mt-button>
        <mt-cell  :key="index" v-for="(d,index) in list" :title="d.name" style="width:100%">
            数量{{d.num}}
          <mt-button type="primary" size="small" @click.native="appendBox(d.id,d.num)">入库</mt-button>
          <mt-button type="primary" size="small" @click.native="cutBox(d.id,d.num)">出库</mt-button>
        </mt-cell>
        <mt-popup
        v-model="addVisible"
        position="right">
        <mt-field label="数量" placeholder="请输入数量" v-model="count_add"></mt-field>
        <mu-select-field style="width:100%" v-model="pick" :labelFocusClass="['label-foucs']" label="选择货物种类">
         <mu-menu-item  v-for="(cargo,index) in cargos" :key="index" :value="cargo.id" :title="cargo.name" />
        </mu-select-field>
        <mt-button type="primary" size="large" @click.native="addCargo">添加</mt-button>
      </mt-popup>
       <mt-popup
        v-model="appendVisible"
        position="right">
        <mt-field label="增加" placeholder="请输入数量" v-model="count_add"></mt-field>
        <mt-button type="primary" size="large" @click.native="addCargo">添加</mt-button>
      </mt-popup>
      <mt-popup
        v-model="appendVisible"
        position="right">
        <mt-field label="入库" placeholder="请输入数量" v-model="count_append"></mt-field>
        <mt-button type="primary" size="large" @click.native="append">添加</mt-button>
      </mt-popup>
      <mt-popup
        v-model="cutVisible"
        position="right">
        <mt-field label="出库" placeholder="请输入数量" v-model="count_cut"></mt-field>
        <mt-button type="primary" size="large" @click.native="cut">移除</mt-button>
      </mt-popup>
  </div>
</template>

<script>
export default {
  methods: {
    appendBox(a, b) {
      this.c_id = a;
      this.c_num = b;
      this.appendVisible = true;
    },
    cutBox(a, b) {
      this.c_id = a;
      this.c_num = b;
      this.cutVisible = true;
    },
    append() {
      this.$ajax({
        method: "post",
        url: "/api/wms/cargo/updateRel",
        data: {
          id: this.c_id,
          num: parseInt(this.c_num) + parseInt(this.count_append)
        }
      })
        .then(res => {
          this.appendVisible = false;
          this.loadData();
          this.count_append = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    cut() {
      this.$ajax({
        method: "post",
        url: "/api/wms/cargo/updateRel",
        data: {
          id: this.c_id,
          num: parseInt(this.c_num) - parseInt(this.count_cut)
        }
      })
        .then(res => {
          this.cutVisible = false;
          this.loadData();
          this.count_cut = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadData() {
      this.$ajax({
        method: "post",
        url: "/api/wms/cargo/queryByWhId",
        data: "id=" + this.$store.state.warehouse.id
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    backToHome() {
      this.$router.push({ name: "homepage" });
    },
    addBox() {
      this.addVisible = true;
    },
    addCargo() {
      this.$ajax({
        method: "post",
        url: "/api/wms/cargo/joinToWh",
        data: {
          wdId: this.$store.state.warehouse.id,
          cargoId: this.pick,
          num: this.count_add
        }
      }).then(res => {
        this.addVisible = false;
        this.loadData();
      });
    }
  },
  data() {
    return {
      c_id: "",
      c_num: "",
      appendVisible: false,
      cutVisible: false,
      count_append: "",
      count_cut: "",
      pick: "",
      cargos: [],
      list: [],
      addVisible: false,
      count_add: "",
      slots: [
        {
          flex: 1,
          values: []
        }
      ]
    };
  },
  created() {
    this.loadData();
    this.$ajax({
      method: "post",
      url: "/api/wms/cargo/queryByDeptId",
      data: "id=" + this.$store.state.user.deptId
    })
      .then(res => {
        console.log("+++++++++++++++");
        console.log(res);
        this.cargos = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.picker-item {
  color: #0077ef;
}
.mu-text-field-label {
  color: black;
  font-size: 20px;
}
</style>

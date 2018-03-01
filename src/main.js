// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import storeConfig from '@/store/store'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.use(VueResource)
Vue.use(mintui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: storeConfig,
  components: { App },
  template: '<App/>'
})

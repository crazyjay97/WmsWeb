import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import homepage from '@/components/homepage'
import cargomgr from '@/components/cargomgr'
import personalmgr from '@/components/personalmgr'
import warehousemgr from '@/components/warehousemgr'
import companyop from '@/components/companyop'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/cargomgr',
      name: 'cargomgr',
      component: cargomgr
    },
    {
      path: '/personalmgr',
      name: 'personalmgr',
      component: personalmgr
    },
    {
      path: '/warehousemgr',
      name: 'warehousemgr',
      component: warehousemgr
    },
    {
      path: '/companyop',
      name: 'companyop',
      component: companyop
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})

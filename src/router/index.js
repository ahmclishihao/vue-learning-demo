import Vue from 'vue'
import Router from 'vue-router'

import UserManage from '@/page/UserManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userManage',
      name: 'UserManager',
      component: UserManage
    }
  ]
})

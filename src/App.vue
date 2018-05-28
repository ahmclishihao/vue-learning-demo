<template>
  <div id="app">
    <div>
      <p>当前路由：{{$route.path}}</p>
    </div>
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" :router="true">
        <el-menu-item index="/filmManage">电影中心</el-menu-item>
        <el-submenu index="/userManage">
          <template slot="title">系统管理</template>
          <el-menu-item index="/userManage">会员列表</el-menu-item>
          <el-menu-item index="/permissionManage">权限列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/userManage'
    }
  }
}
</script>

<style>

</style>

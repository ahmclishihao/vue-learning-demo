<template>
  <div>
    <el-row>
      <el-form :inline="true" >
        <el-form-item label="搜索条件：">
          <el-input
            v-model="searchData"
            prefix-icon="el-icon-search"
            placeholder="用户名 / 手机号 / 性别"
            size="small" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="search">
            立即搜索
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" size="small" @click="deleteBath">
            批量删除
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-table
        :data="userList"
        :stripe="true"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="birthday"
          label="生日">
        </el-table-column>
        <el-table-column
          prop="type"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="favorites"
          label="爱好">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import UserManagerApi from '@/api/UserManageApi'

export default {
  name: 'UserManage',
  data () {
    return {
      searchData: '',
      userList: []
    }
  },
  created: function () {
    UserManagerApi.getUserList((data) => {
      this.userList = data
    })
  },
  methods: {
    search: function () {
      console.log(this.searchData)
      this.$message(`立即搜索 ${this.searchData}`)
    },
    deleteBath: function () {
      this.$message.error('批量删除')
    }
  }
}
</script>

<style scoped>

</style>

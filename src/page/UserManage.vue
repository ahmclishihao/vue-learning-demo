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
        <el-form-item>
          <el-button type="success" size="small" @click="dialogVisible = true">
            添加用户
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-table
        ref="userListTable"
        :data="userList"
        stripe
        style="width: 100%"
        @selection-change="selectUserChange">
        <el-table-column
          type="selection">
        </el-table-column>
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
        <el-table-column
          fixed="right"
          label="更多"
          >
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="getUserList"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        :total="userListTotal"
      >
      </el-pagination>
    </el-row>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="50%">
      <user-add ref='addUserForm' @addSuccess="addSuccess"></user-add>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UserManagerApi from '@/api/UserManageApi'
import UserAdd from '@/page/UserAdd'

export default {
  name: 'UserManage',
  components: {
    'user-add': UserAdd
  },
  data () {
    return {
      searchData: '',
      userList: [],
      userListTotal: 0,
      pageSize: 5,
      pageNum: 1,
      dialogVisible: false,
      deleteUser: []
    }
  },
  created: function () {
    this.getUserList(1)
  },
  methods: {
    search: function () {
      this.$message(`立即搜索 ${this.searchData}`)
    },
    deleteBath: function () {
      console.log(this.deleteUser)
      this.$message.error(`批量删除 ${this.deleteUser}`)
    },
    getUserList: function (pageNum) {
      UserManagerApi.getUserList(pageNum, this.pageSize).then((response) => {
        this.userList = response.data.data
        this.userListTotal = response.data.total
      })
    },
    addUser () {
      this.$refs['addUserForm'].addUser()
    },
    addSuccess () {
      this.dialogVisible = false
      this.getUserList(this.pageNum)
    },
    selectUserChange (val) {
      this.deleteUser.length = 0
      val.map((user) => {
        this.deleteUser.push(user.id)
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <el-form :model="formData" :rules="formRules" ref="userForm">
    <el-form-item label="姓名" :label-width="formLabelWidth" prop="name" inline>
      <el-input v-model="formData.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth" >
      <el-input-number v-model="formData.age" :min="0" :max="200" label="请输入年龄"></el-input-number>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
      <el-cascader
        expand-trigger="hover"
        :options="options"
        :change-on-select="true"
        v-model="formData.address">
      </el-cascader>
    </el-form-item>
    <el-form-item label="生日" :label-width="formLabelWidth" prop="birthday">
      <el-date-picker
        v-model="formData.birthday"
        type="date"
        value-format="yyyy-MM-dd"
        format="yyyy 年 MM 月 dd 日"
        placeholder="选择出生日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="性别" :label-width="formLabelWidth" prop="type">
      <el-select v-model="formData.type" placeholder="选择性别">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="爱好" :label-width="formLabelWidth" prop="favorites">
      <el-checkbox-group v-model="formData.favorites">
        <el-checkbox v-for="fav in defaultFavorites" :label="fav" :key="fav"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<script>
import UserManageApi from '@/api/UserManageApi'

export default {
  name: 'UserAdd',
  props: [],
  data () {
    return {
      formLabelWidth: '20%',
      defaultFavorites: ['唱歌', '跳舞', '画画'],
      formData: {
        name: '',
        age: 0,
        address: [],
        birthday: '',
        type: '',
        favorites: []
      },
      formRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择地址', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        favorites: [
          { required: true, message: '请选择爱好', trigger: 'change' }
        ]
      },
      options: [
        {
          value: 'js',
          label: '江苏',
          children: [
            {
              value: 'nj',
              label: '南京',
              children: [
                {
                  value: 'jn',
                  label: '江宁'
                },
                {
                  value: 'xw',
                  label: '玄武'
                },
                {
                  value: 'pk',
                  label: '浦口'
                }
              ]
            }
          ]
        },
        {
          value: 'bj',
          label: '北京'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    addUser () {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          // 添加用户刷新当前页
          UserManageApi.addUser(this.formData)
            .then((response) => {
              if (response.data.code) {
                this.$message.success(response.data.message)
                // 向上抛出添加成功的事件
                this.$emit('addSuccess')
              } else {
                this.$message.error('添加失败')
              }
            })
        } else {
          this.$message.error('请准确填写数据')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="hello">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    <mt-field label="邮箱" state="error" v-model="email"></mt-field>
    <mt-field label="邮箱" state="warning" v-model="email"></mt-field>
    <mt-field label="验证码" v-model="captcha">
      <img height="45px" src='https://www.baidu.com/img/baidu_jgylogo3.gif' width="100px">
    </mt-field>
    <mt-button @click='getFormParams'>点我获取数据</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'MintUI',
  data () { 
    return {
      username:'admin',
      email:'254174981@qq.com',
      password:'123',
      website:'https://www.google.com',
      number:10000000000000000,
      phone:'17681360302',
      birthday:'2017-07-07',
      introduction:'新的异世界，新的热血，新的异界王，下一个百万异界王就是你啦！'
    }
  },
  created: function () {
    Toast('欢迎回来 ' + this.username)
  },
  methods: {
    getFormParams: function (){
      Toast(this.username + ' ' + this.birthday);
    }
  }
}
</script>

<style scoped>

</style>

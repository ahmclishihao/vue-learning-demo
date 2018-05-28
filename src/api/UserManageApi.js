import BaseApi from './BaseApi'
import axios from 'axios'

/**
 * 获取所有的用户列表
 */
function getUserList (func) {
  axios.get(BaseApi.basePath + '/userList')
    .then(function (response) {
      console.log(response)
      if (func) {
        func(response.data)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default {
  getUserList: getUserList
}

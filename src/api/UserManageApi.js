/* eslint-disable */
import axios from './BaseApi'
import Qs from 'qs'

/**
 * 分页获取用户列表
 */
function getUserList (pageNum, pageSize) {
  return axios.get(`/userList?pageNum=${pageNum}&pageSize=${pageSize}`)
    .catch((error) => {
      console.log(error)
    })
}

/**
 * 添加一个用户
 * @param user
 * @returns {Promise<AxiosResponse<any>>}
 */
function addUser (user) {
  return axios.post('/addUser',Qs.stringify(user))
    .catch((error) => {
      console.log(error)
    })
}

export default {
  getUserList: getUserList,
  addUser: addUser
}

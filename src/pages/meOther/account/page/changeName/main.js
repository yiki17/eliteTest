import Vue from 'vue'
import changeName from './changeName'

const app = new Vue(changeName)

app.$mount()

export default {
  config: {
    navigationBarTitleText: '修改用户名'
  }
}
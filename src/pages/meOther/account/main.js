import Vue from 'vue'
import Account from './account'

const app = new Vue(Account)

app.$mount()

export default {
  config: {
    navigationBarTitleText: '账户信息'
  }
}
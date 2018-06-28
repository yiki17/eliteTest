import Vue from 'vue'
import Me from './me'

const app = new Vue(Me)
app.$mount()

export default {
  config: {
    // enablePullDownRefresh: true
    navigationBarTitleText: '个人中心'
  }
}

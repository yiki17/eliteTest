import Vue from 'vue'
import checkPhone from './checkPhone'

const app = new Vue(checkPhone)

app.$mount()

export default {
  config: {
    navigationBarTitleText: '修改手机号'
  }
}
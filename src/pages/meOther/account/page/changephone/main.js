import Vue from 'vue'
import changePhone from './changePhone'

const app = new Vue(changePhone)

app.$mount()

export default {
  config: {
    navigationBarTitleText: '修改手机号'
  }
}
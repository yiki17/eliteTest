import Vue from 'vue'
import Home from './home'

const app = new Vue(Home)
app.$mount()

export default {
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '代购营'
  }
}

import Vue from 'vue'
import Webview from './webview'

const app = new Vue(Webview)

app.$mount()

export default {
  config: {
    navigationBarTitleText: '百科页面'
  }
}

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      backgroundColorTop: '#eeeeee',
      navigationBarBackgroundColor: '#AB956D',
      navigationBarTitleText: '前端烟雨人',
      navigationBarTextStyle: '#fff',
      backgroundColor: "#eeeeee",
      enablePullDownRefresh:true
    },
    tabBar: {
      color: '#b7b7b7',
      selectedColor: '#AB956D',
      backgroundColor: '#f5f5f5',
      borderStyle: '#f5f5f5',
      list: [{
        pagePath: 'pages/index/main',
        text: '主页',
        iconPath: 'static/images/12.png',
        selectedIconPath: 'static/images/11.png'
      }, {
        pagePath: 'pages/category/index/main',
        text: '分类',
        iconPath: 'static/images/22.png',
        selectedIconPath: 'static/images/21.png'
      },{
        pagePath: 'pages/question/main',
        text: '题库',
        iconPath: 'static/images/32.png',
        selectedIconPath: 'static/images/31.png'
      }, {
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: 'static/images/42.png',
        selectedIconPath: 'static/images/41.png'
      }]
    }
  }
}

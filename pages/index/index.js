//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function (){
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {

        console.log(res)

         that.setData({
           banner: res.data.top_stories,
           list: res.data.stories
         })
      }
    })
    this.index = 1
  }
})

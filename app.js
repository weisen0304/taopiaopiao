//app.js
// import { hot } from 'component/home/hot/hot'
App({
  // hot,
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // onLoad: function () {
  //   // 调用应用实例的方法获取全局数据
  //   let app = getApp()
  //   // “注册”组件
  //   new app.LoginPannel()
  //   app._getUserInfo((userInfo) => {
  //     //更新数据
  //     this.setData({
  //       userInfo: userInfo
  //     })
  //   })
  // },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
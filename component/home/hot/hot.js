Page({
  data: {
    movie: ''
  },
  onLoad: function () {
    // new Login()  //注册组件
    // new city()
    // new swiper()
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost:8080/movie/coming/',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data.data.returnValue)
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          movie: res.data.data.data.returnValue,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
      }
    })
  }
})
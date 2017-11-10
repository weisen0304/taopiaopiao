// component/home/city/city.js
Page({
  data:{},
  onLoad:function(options){
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost:8080/movie/city',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data.data.returnValue)
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        // that.setData({
        //   zhihu: res.data.stories,
        //   //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        // })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
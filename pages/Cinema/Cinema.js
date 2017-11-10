Page({
  data: {
    city: 'sh',
    address: '',
    loading: true
  },
  onLoad: function () {
    getLoading: {
      var that = this
      setTimeout(() => {
        that.setData({
          loading: false
        })
      }, 3000)
    }
    console.log(this.loading)
  },
  onReady: function () {
    getCity: {
      setTimeout(() => {
        var that = this
        wx.request({
          url: 'http://localhost:8080/movie/cinema/?city=sh',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(res.data.data.data.returnValue.regionCinemas.浦东新区)
            that.setData({
              // city: res.data.data.data.returnValue
              address: res.data.data.data.returnValue.regionCinemas.浦东新区
            })
          }
        })
      }, 3000)
    }
  }
})
// import { LoginPanel } from '../../component/login/login'
// import { city } from '../../component/home/city/city'
// import { swiper } from '../../component/home/swiper/swiper'
// import { hot } from '../../component/home/hot/hot'

var app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    showCity: false,
    showVideo: false,
    showIndex: false,
    showHot: true,
    navbar: ['正在热映', '即将上映'],
    currentTab: 0,
    movie: '',
    city: '',
    hot: '',
    cityName: '北京',
    imgs: [],
    selnav: true,
    clickLoadStatus: 'start',
    offset: 0,
    limit: 20,
    total: 0,
    loadingLists: [],
    loading: true
  },
  navbarTap: function (e) {
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  cityBtn: function (event) {
    this.setData({
      showCity: !this.data.showCity
    })
  },
  VideoBtn: function (event) {
    this.setData({
      showVideo: !this.data.showVideo
    })
  },
  scroll: function (e) {
  },
  chooseCity: function (event) {
    // this.videoCtx = wx.createVideoContext('myVideo')
    // console.log(event.target.offsetTop)
    this.setData({
      showCity: !this.data.showCity,
      cityName: event.currentTarget.id
    })
  },
  chooseIndex: function (event) {
    // console.log(event)
    // var currentId = event.currentTarget.top
    wx.createSelectorQuery().select('#C').boundingClientRect(function (rect) {
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
      // console.log(rect.top)
      wx.pageScrollTo({
        scrollTop: 0
      })
    }).exec()
  },
  scroll: function (e) {
    console.log(e)
  },
  closeCity: function () {
    this.setData({
      showCity: !this.data.showCity
    })
  },
  closeVideo: function (event) {
    if (event.currentTarget.id === 'mask') {
      this.setData({
        showVideo: !this.data.showVideo
      })
    }
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
    // console.log(this.videoCtx)
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
    this.setData({
      showVideo: !this.data.showVideo
    })
  },
  clickLoadMore: function () {
    if (this.clickLoadStatus != 'complete') {
      this.setData({
        clickLoadStatus: 'loading'
      })
      setTimeout(() => {
        var that = this
        wx.request({
          url: 'http://localhost:8080/movie/coming/',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(res)
            that.setData({
              // city: res.data.data.data.returnValue
            })
          }
        })
      }, 3000)
    }
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
  },
  onReady: function () {
    getCity: {
      setTimeout(() => {
        var that = this
        wx.request({
          url: 'http://localhost:8080/movie/city/',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            // console.log(res.data.data.data.returnValue.A)
            that.setData({
              city: res.data.data.data.returnValue
            })
          }
        })
      }, 3000)
    }
    getHot: {
      setTimeout(() => {
        var that = this
        wx.request({
          url: 'http://localhost:8080/movie/coming/',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            // console.log(res.data.data.data.returnValue)
            that.setData({
              movie: res.data.data.data.returnValue
            })
          }
        })
      }, 3000)
    }
    gotSwiper: {
      setTimeout(() => {
        var that = this
        wx.request({
          url: 'http://localhost:8080/movie/swiper/',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            // console.log(res.data.data.data.returnValue)
            that.setData({
              imgs: res.data.data.data.returnValue
            })
          }
        })
      }, 3000)
    }
  },
  onPageScroll: function () {
    // console.log('滚动中')
  },
  onPullDownRefresh: function () {
    console.log('刷新中')
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    console.log('已经到底部')
  },
  onShareAppMessage: function () {
    console.log('请在右上角分享')
  }
})
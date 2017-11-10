Page({
  data: {
    imgUrls: [
      '../../../images/img_1.jpg',
      '../../../images/img_2.jpg',
      '../../../images/img_3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
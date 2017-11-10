# 淘票票


        这是之前vue.js 写的淘票票，惊奇的发现小程序也可以实现相同的界面及功能，无论是node.js搭建服务器
    到数据抽离，再到页面实现，整个过程都与vue.js 写的淘票票单页面应用差不多，不过，缺点就是小程序提供的
    api有限，不能使用window和document，也就是说它不可以使用原生js，最重要的是jquery等等，所以遇到像vue
    全家桶的话，只能慢慢琢磨要怎么去实现，加油吧！少年。

# 小程序仿淘票票+node.js模拟本地数据
    小程序自带的wxml、wxss、js、json等结合框架、api、node.js

# 演示
    基本如图

![](https://github.com/1205403102/taopiaopiao/blob/master/video.gif)  

# 项目运行

    使用微信开发工具，新建项目，导入项目，进行预览，手机使用二维码可查看

# 组件

    电影主页及分页
    影院主页及分页
    viedo组件
    city组件
    swiper组件
    loading组件

# 构建

# 目录结构

    │  app.js
    │  app.json
    │  app.wxss
    │  list.txt
    │  project.config.json
    │  README.md
    │  video.gif
    |  server
    │  
    ├─component
    │  ├─home
    │  │  ├─city
    │  │  │      city.js
    │  │  │      city.json
    │  │  │      city.wxml
    │  │  │      city.wxss
    │  │  │      
    │  │  ├─coming
    │  │  │      coming.wxml
    │  │  │      coming.wxss
    │  │  │      
    │  │  ├─hot
    │  │  │      hot.js
    │  │  │      hot.wxml
    │  │  │      hot.wxss
    │  │  │      
    │  │  ├─swiper
    │  │  │      swiper.js
    │  │  │      swiper.wxml
    │  │  │      swiper.wxss
    │  │  │      
    │  │  └─video
    │  │          video.js
    │  │          video.wxml
    │  │          video.wxss
    │  │          
    │  ├─login
    │  │      login.js
    │  │      login.wxml
    │  │      login.wxss
    │  │      
    │  └─login-pannel
    │          login-pannel.js
    │          login-pannel.json
    │          login-pannel.wxml
    │          login-pannel.wxss
    │          
    ├─images
    │      3DIMAX.png
    │      film.png
    │      film1.png
    │      home.png
    │      img_1.jpg
    │      img_2.jpg
    │      img_3.jpg
    │      item_1.jpg
    │      loading.gif
    │      logo.png
    │      me.png
    │      me1.png
    │      movie.png
    │      movie1.png
    │      player.png
    │      start.png
    │      
    ├─pages
    │  ├─Cinema
    │  │      Cinema.js
    │  │      Cinema.json
    │  │      Cinema.wxml
    │  │      Cinema.wxss
    │  │      
    │  ├─home
    │  │  ├─coming
    │  │  ├─MovieDetail
    │  │  │      MovieDetail.js
    │  │  │      MovieDetail.json
    │  │  │      MovieDetail.wxml
    │  │  │      MovieDetail.wxss
    │  │  │      
    │  │  └─will
    │  │          will.js
    │  │          will.json
    │  │          will.wxml
    │  │          will.wxss
    │  │          
    │  ├─id
    │  │      id.js
    │  │      id.json
    │  │      id.wxml
    │  │      id.wxss
    │  │      
    │  ├─index
    │  │      index.js
    │  │      index.json
    │  │      index.wxml
    │  │      index.wxss
    │  │      
    │  ├─loading
    │  │      loading.js
    │  │      loading.wxml
    │  │      loading.wxss
    │  │      
    │  ├─loadmore
    │  │      loadmore.js
    │  │      loadmore.wxml
    │  │      loadmore.wxss
    │  │      
    │  ├─logs
    │  │      logs.js
    │  │      logs.json
    │  │      logs.wxml
    │  │      logs.wxss
    │  │      
    │  ├─user
    │  │      user.js
    │  │      user.json
    │  │      user.wxml
    │  │      user.wxss
    │  │      
    │  └─video
    │          video.js
    │          video.json
    │          video.wxml
    │          video.wxss



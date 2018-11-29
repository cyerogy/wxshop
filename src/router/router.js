module.exports = [{
    path: "pages/index/index",
    name: 'index',
    config: {
      "navigationBarTitleText": "商城首页",
      "usingComponents": {
        "van-tabbar": "/static/vant/tabbar/index",
        "van-tabbar-item": "/static/vant/tabbar-item/index",
        "van-panel": "/static/vant/panel/index",
        "van-card": "/static/vant/card/index",
        "van-button": "/static/vant/button/index",
        "van-checkbox": "/static/vant/checkbox/index",
        "van-stepper": "/static/vant/stepper/index",
        "van-row": "/static/vant/row/index",
        "van-col": "/static/vant/col/index",
        "van-submit-bar": "/static/vant/submit-bar/index"
      }
    }
  },
  {
    path: "pages/index/message",
    name: 'message',
    config: {
      "navigationBarTitleText": "消息",
      "usingComponents": {
        "van-tabbar": "/static/vant/tabbar/index",
        "van-tabbar-item": "/static/vant/tabbar-item/index"
      }
    }
  }
];

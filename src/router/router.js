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
        "van-submit-bar": "/static/vant/submit-bar/index",
        "van-dialog": "/static/vant/dialog/index",
        "van-search": "/static/vant/search/index",
        "van-badge": "/static/vant/badge/index",
        "van-badge-group": "/static/vant/badge-group/index"
      }
    }
  },
  {
    path: "pages/goods/detail",
    name: 'goodsdetail',
    config: {
      "navigationBarTitleText": "商品详情"
    }
  },
  {
    path: "pages/goods/list",
    name: 'goodslist',
    config: {
      "navigationBarTitleText": "产品分类列表",
      "enablePullDownRefresh": true,
      "usingComponents": {
        "van-tab": "/static/vant/tab/index",
        "van-tabs": "/static/vant/tabs/index"
      }
    }
  }
];

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
  }, {
    path: "pages/goods/detail",
    name: 'goodsdetail',
    config: {
      "navigationBarTitleText": "商品详情",
      "usingComponents": {
        "van-popup": "/static/vant/popup/index",
        "van-cell": "/static/vant/cell/index",
        "van-cell-group": "/static/vant/cell-group/index",
        "van-icon": "/static/vant/icon/index",
        "van-goods-action": "/static/vant/goods-action/index",
        "van-goods-action-icon": "/static/vant/goods-action-icon/index",
        "van-goods-action-button": "/static/vant/goods-action-button/index",
        "van-button": "/static/vant/button/index",
        "van-stepper": "/static/vant/stepper/index",
        "van-row": "/static/vant/row/index",
        "van-col": "/static/vant/col/index",
        "van-tab": "/static/vant/tab/index",
        "van-tabs": "/static/vant/tabs/index"
      }
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
  }, {
    path: "pages/chart/index",
    name: 'chartindex',
    config: {
      "navigationBarTitleText": "客服对话",
      "usingComponents": {
        "van-cell-group": "/static/vant/cell-group/index",
        "van-cell": "/static/vant/cell/index",
        "van-button": "/static/vant/button/index",
        "van-field": "/static/vant/field/index"
      }
    }
  }
];

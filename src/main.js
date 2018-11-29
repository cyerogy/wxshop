import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'
import fly from './http/api'
import "../static/vant/common/index.wxss"
Vue.config.productionTip = false
Vue.prototype.$http = fly;
App.mpType = 'app';

Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()

import Vue from 'vue'
import App from './App'
import fly from './http/api'

Vue.config.productionTip = false
Vue.prototype.$http = fly;
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

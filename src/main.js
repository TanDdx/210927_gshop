import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
}
})

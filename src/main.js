import Vue from 'vue'
import App from './App.vue'
import router from './router'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用图片懒加载
Vue.use(VueLazyLoad)

new Vue({ 
  render: h => h(App),
  router,
}).$mount('#app')

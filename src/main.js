import Vue from 'vue'
// import App from './App.vue'
import App from '@/components/数据管理案例.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

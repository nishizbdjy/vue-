import Vue from 'vue'
// import App from './App.vue'
import App from '@/components/axios常用的api.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

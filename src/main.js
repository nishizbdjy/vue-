import Vue from 'vue'
// import App from './App.vue'
import App from '@/components/局部自定义指令.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

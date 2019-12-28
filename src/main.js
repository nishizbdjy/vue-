import Vue from 'vue'
// import App from './App.vue'
import App from '@/components/v-pre、v-once、v-cloak.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

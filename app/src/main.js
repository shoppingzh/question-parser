import Vue from 'vue'
import App from './App.vue'
import Editor from '@/components/Editor'

Vue.use(Editor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

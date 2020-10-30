import Vue from 'vue'
import App from './App.vue'
import Editor from '@/components/Editor'
import QuestionView from '@/components/QuestionView'

Vue.use(Editor)
Vue.use(QuestionView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

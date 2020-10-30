import QuestionView from './main'

QuestionView.install = function(Vue) {
  Vue.component(QuestionView.name, QuestionView)
}

export default QuestionView

import Editor from './main'

Editor.install = function(Vue) {
  Vue.component(Editor.name, Editor)
}

export default Editor

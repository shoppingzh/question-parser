<template>
  <div class="page">
    <div class="page__left">
      <editor
        v-model="text"
        placeholder="请输入内容"
        :tinymce-options="editorOptions" />
    </div>
    <div class="page__right">
      <question-view
        v-for="(question, index) in questions"
        :key="index"
        :question="question" />
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils'
import { parseArea } from '@/parser/util'
import Parser from '@/parser/style1'
import template from '@/config/template.txt'


export default {
  data() {
    this.editorOptions = {
      paste_as_text: true,
      paste_data_images: true,
      images_upload_url: 'http://localhost:3000/file/upload'
    }
    return {
      text: template,
      questions: []
    }
  },
  created() {
    this.$watch('text', debounce(function(newVal) {
      this.questions.splice(0)
      const areas = parseArea(newVal)
      areas.forEach(html => {
        const parser = new Parser(html)
        this.questions.push(parser.parse())
      })
    }, 1000), {
      immediate: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    align-items: stretch;
    > div {
      padding: 0 10px;
    }
    &__left, &__right {
      flex: 6;
    }
    .question-view {
      padding: 0 20px;
      margin-bottom: 50px;
      border: 1px solid #eee;
    }
  }
</style>

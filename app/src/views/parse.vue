<template>
  <div>
    <editor
      v-model="text"
      placeholder="请输入内容"
      :tinymce-options="editorOptions" />
  </div>
</template>

<script>
import { debounce } from '@/utils'
import { parse } from '@/parser'
// import template from '@/config/template.txt'


export default {
  data() {
    this.editorOptions = {
      paste_as_text: true,
      paste_data_images: true,
      images_upload_url: 'http://localhost:3000/file/upload'
    }
    return {
      text: ''
    }
  },
  created() {
    this.$watch('text', debounce(function(newVal) {
      console.log(parse(newVal))
    }, 1000))
  }
}
</script>

<style>

</style>

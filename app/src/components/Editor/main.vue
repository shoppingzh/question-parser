<template>
  <textarea ref="textarea" />
</template>

<script>
export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    text: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      window.tinymce.init({
        target: this.$refs.textarea,
        height: 600,
        menubar: [],
        plugins: 'code paste',
        toolbar: 'code paste',
        language: 'zh_CN',
        branding: false,
        paste_word_valid_elements: 'p',
        setup: (editor) => {
          this.editor = editor
          editor.on('init', () => {
            editor.setContent(this.text, { format: 'html' })
          })
          this.editor.on('NodeChange input', () => {
            this.text = editor.getContent()
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  textarea {
    visibility: hidden;
  }
</style>
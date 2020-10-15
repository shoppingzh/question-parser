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
    },
    tinymceOptions: {
      type: Object,
      default: () => ({})
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
        plugins: 'code image paste',
        toolbar: 'code image',
        language: 'zh_cn',
        branding: false,
        ...this.tinymceOptions,
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
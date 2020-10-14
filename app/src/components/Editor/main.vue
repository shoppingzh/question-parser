<template>
  <textarea ref="textarea" />
</template>

<script>
export default {
  name: 'Editor',
  created() {

  },
  mounted() {
    window.tinymce.init({
      target: this.$refs.textarea,
      menubar: null,
      plugins: 'code',
      toolbar: null,
      branding: false,
      auto_focus: true
    })
  }
}
</script>

<style scoped>
  textarea {
    visibility: hidden;
  }
</style>
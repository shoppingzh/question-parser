<template>
  <div class="question-view">
    <p v-html="question.content"></p>
    <p
      v-for="item in question.items"
      :key="item.label">
      <label>
        <input type="radio"> {{ item.content }}
      </label>  
    </p>
    <p v-if="question.analysis">
      <strong>解析：</strong>
      <span v-html="question.analysis"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'QuestionView',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  computed: {
    text() {
      return JSON.stringify(this.question)
    }
  }
}
</script>

<style>

</style>

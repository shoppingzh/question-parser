<template>
  <div>
    <editor v-model="text" placeholder="请输入内容" />
  </div>
</template>

<script>
import { debounce } from '@/utils'
import { parse } from '@/parser'

export default {
  data() {
    return {
      text: ''
    }
  },
  created() {
    this.$watch('text', debounce(function(newVal) {
      // console.log(newVal.split(/\n|\r\n|\r/))
      console.log(parse(newVal))
    }, 1000))
  }
}
</script>

<style>

</style>

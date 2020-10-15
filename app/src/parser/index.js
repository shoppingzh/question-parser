import { parseArea, parseLines } from './base'

/**
 * 解析选择项
 * @param {String} text 文本
 */
export function parseChoise(text) {
  const items = []
  const regExp = new RegExp(/([A-z0-9])\s*[.、]\s*(.*)/g)
  let result = null
  while ((result = regExp.exec(text))) {
    items.push({
      title: result[1],
      content: result[2]
    })
  }
  return items
}

/**
 * 解析正确答案
 * @param {String} text 文本
 */
export function parseCorrectAnswer(text) {
  const regExp = new RegExp(/(正确)?答案\s?[:：]\s*(.*)/g)
  const result = regExp.exec(text)
  return result ? result[2] : null
}

/**
 * 解析题目
 * @param {String} text 题目文本
 */
export function parse(text) {
  parseArea(text).forEach(area => {
    parseLines(area).forEach(line => {
      console.log(line)
    })
    console.log('============== END ==============')
  })
  return null
}

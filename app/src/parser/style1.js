import { parseLines } from './util'


/**
 * 解析试题的真实类型
 * @param {String} text 文本
 */
function parseRealType(text) {
  const result = new RegExp(/[\\[【](.*?)[\]】]/).exec(text)
  return result ? result[1] : null
}

/**
 * 解析选择题(单选|多选|判断)的正确答案
 * @param {String} text 文本
 */
function parseChoiceAnswer(text) {
  const result = new RegExp(/[(（]([A-Z对错]+)[)）]/).exec(text)
  return result ? result[1] : null
}

/**
 * 解析分数
 * @param {String} text 文本
 */
function parseScore(text) {
  const result = new RegExp(/[(（](\d+)分[)）]/).exec(text)
  return result ? result[1] : null
}

/**
 * 解析单行单选项
 * @param {String} text 文本
 */
function parseChoiceItem(text) {
  const result = new RegExp(/^\s*([A-Z])、(.*)$/).exec(text)
  return result ? {
    label: result[1],
    content: result[2]
  } : null
}

/**
 * 解析答案解析
 * @param {String} text 文本
 */
function parseAnalysis(text) {
  const result = new RegExp(/^\s*(答案)?解析\s*[:：](.*)$/).exec(text)
  return result ? result[2] : null
}


export default class Parser {

  constructor(html) {
    this.html = html
    this.init()
  }

  init() {
    this.lines = parseLines(this.html)
    console.log(this)
  }

  parse() {
    const type = parseRealType(this.lines[0])
    console.log(type)
    const content = parseChoiceAnswer(this.lines[0])
    console.log(content)
    const score = parseScore(this.lines[0])
    console.log(score)
    const items = []
    const contentLines = []
    this.lines.forEach(line => {
      const item = parseChoiceItem(line)
      if (item) {
        items.push(item)
        return
      }
      const analysis = parseAnalysis(line)
      if (analysis) {
        this.analysis = analysis
        return
      }
      if (!items.length && !analysis) {
        contentLines.push(line)
      }
    })
    this.items = items
    return {
      items,
      content: contentLines.join('<br>'),
      analysis: this.analysis
    }
  }

}
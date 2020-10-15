
/**
 * 将html片段转换为多行文本
 * @param {String} html html片段
 * @returns {Array<String>}
 */
export function parseLines(html) {
  const lines = []

  const pLineRegExp = new RegExp(/<p.*?>(.*)?<\/p>/g)
  const pLines = []
  let result = null
  while((result = pLineRegExp.exec(html))) {
    const content = result[1]
    pLines.push(content)
  }
  pLines.forEach(pLine => {
    lines.push(...pLine.split(/<br.*?>/))
  })
  return lines
}

/**
 * 通过空行解析多个内容区域
 * @param {String} html html片段
 */
export function parseArea(html) {
  return html.split(/(?:(?:<p.*?>(?:&nbsp;)+<\/p>)|(?:<br.*?>){2,})/).filter(part => part && part.trim())
}

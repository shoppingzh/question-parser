/**
 * 通过空行解析多个内容区域
 * @param {String} html html片段
 */
export function parseArea(html) {
  html = html.replace(/\s/g, '').replace(/<br\s*\/>/gi, '\n\n').replace(/&nbsp;/gi, ' ').replace(/<p.*?>/g, '\n').replace(/<\/p>/g, '\n\n')
  return html.split(/\n{3,}/gi).filter(part => part.trim())
}

/**
 * 将html片段转换为多行文本
 * @param {String} html html片段
 * @returns {Array<String>}
 */
export function parseLines(html) {
  return html.split(/\n+/g).filter(line => line.trim())
}

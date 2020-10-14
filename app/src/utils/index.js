
/**
 * 防抖
 * @param {Function} fn 回调
 * @param {Number} delay 等待时间
 */
export function debounce(fn, delay) {
  var timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...arguments)
    }, delay)
  }
}

/**
 * 节流
 * @param {Function} fn 回调
 * @param {Number} delay 等待时间
 */
export function throttle(fn, delay) {
  var timer = null
  var runnable = true
  return function() {
    if (!runnable) {
      return
    }
    runnable = false
    fn.call(this, ...arguments)
    timer = setTimeout(() => {
      runnable = true
      clearTimeout(timer)
    }, delay)
  }
}
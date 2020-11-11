/**
 * 过滤对象中为空的属性
 *
 * @param obj
 * @returns {*}
 * @example
 *
 * filterEmptyPropObj({name: 'foo', sex: ''})
 * // => {name: 'foo'}
 */
function filterEmptyPropObj (obj) {
  if (!(typeof obj === 'object')) return

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) &&
      (obj[key] === null || obj[key] === undefined || obj[key] === '')) {
      delete obj[key]
    }
  }
  return obj
}

export default filterEmptyPropObj

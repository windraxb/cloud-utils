/**
 * 字节转换为B，KB，MB
 * @param {Number} bytes
 * @returns {string}
 * @example
 *
 * bytesToSize(10000)
 * // => 9.8 KB
 */
function bytesToSize(bytes) {
  var sizes = ['B', 'KB', 'MB'];
  if (bytes === 0)  return 'n/a';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i]
}

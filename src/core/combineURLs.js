/**
 * url字符串拼接
 *
 * @param {string} baseURL
 * @param {string} relativeURLs
 * @returns {string} The combined URL
 */
function combineURLs (baseURL, ...relativeURLs) {
  const length = relativeURLs.length
  if (length > 0) {
    const relativeUrlsArr = relativeURLs.map((item) => item.replace(/^\/+/, '').replace(/\/+$/, ''))
    let relativeUrlStr = relativeUrlsArr.join('/')
    if (relativeURLs[length - 1].slice(-1) === '/') {
      relativeUrlStr += '/'
    }
    return baseURL.replace(/\/+$/, '') + '/' + relativeUrlStr
  } else {
    return baseURL
  }
}

export default combineURLs

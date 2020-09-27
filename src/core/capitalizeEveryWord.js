/**
 * 大写每个单词的首字母
 *
 * @param str
 * @returns {string}
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

export default capitalizeEveryWord;

/**
 * 为数字加上单位：万或亿
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 返回的小数点后最多的位数，默认为 2
 * @returns {string | *}  加上单位后的数字
 *
 * @example
 * addChineseUnit(1000.01)
 * // => 1000.01
 *
 * addChineseUnit(10000)
 * // => 1万
 *
 * addChineseUnit(99000)
 * // => 9.9万
 *
 * addChineseUnit(566000)
 * // => 56.6万
 *
 * addChineseUnit(5660000)
 * // => 566万
 *
 * addChineseUnit(44440000)
 * // => 4444万
 *
 * addChineseUnit(11111000)
 * // => 1111.1万
 *
 * addChineseUnit(444400000)
 * // => 4.44亿
 *
 * addChineseUnit(400000000000000000000000)
 * // => 3999.99万亿亿
 *
 * addChineseUnit(4000000000000000000000000)
 * // => 4亿亿亿
 */
function addChineseUnit (number, decimalDigit) {
  var addWan = function (integer, number, mutiple, decimalDigit) {
    var digit = getDigit(integer)
    if (digit > 3) {
      var remainder = digit % 8
      remainder = remainder >= 5 ? 4 : remainder
      return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万'
    } else {
      return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit)
    }
  }

  var getDigit = function (integer) {
    integer = Math.abs(integer)
    var digit = -1
    while (integer >= 1) {
      digit++
      integer = integer / 10
    }
    return digit
  }

  return (function (number, decimalDigit) {
    decimalDigit = decimalDigit == null ? 2 : decimalDigit
    var integer = Math.floor(number)
    var digit = getDigit(integer)
    var unit = []
    if (digit > 3) {
      var multiple = Math.floor(digit / 8)
      if (multiple >= 1) {
        var tmp = Math.round(integer / Math.pow(10, 8 * multiple))
        unit.push(addWan(tmp, number, 8 * multiple, decimalDigit))
        for (let i = 0; i < multiple; i++) {
          unit.push('亿')
        }
        return unit.join('')
      } else {
        return addWan(integer, number, 0, decimalDigit)
      }
    } else {
      return parseFloat(number).toFixed(decimalDigit)
    }
  }(number, decimalDigit))
}

export default addChineseUnit

/**
 * 数字金额大写转换,最多支持千亿
 *
 * @param n {number} 数字金额
 * @returns {string}
 * @example
 *
 * changeMoneyToChinese(100111);
 * => "壹拾万零壹佰壹拾壹元整"
 *
 * changeMoneyToChinese(7.52);
 * => "柒元伍角贰分"
 *
 * changeMoneyToChinese(951434677682.00);
 * => "玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整"
 */
function changeMoneyToChinese (n) {
  n = +n
  if (isNaN(n)) {
    console.warn('params type error')
    return
  }

  if ((n > 0 && n.toString().length > 12) || (n < 0 && n.toString().length > 13)) {
    throw new Error('number is too large')
  }

  var fraction = ['角', '分']
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  var head = +n < 0 ? '欠' : ''
  n = Math.abs(+n)
  var s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(shiftRight(n, 1 + i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(shiftLeft(n, 1))
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }

  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

//  向右移位
function shiftRight (number, digit) {
  digit = parseInt(digit, 10)
  var value = number.toString().split('e')
  return +(value[0] + 'e' + (value[1] ? (+value[1] + digit) : digit))
}

function shiftLeft (number, digit) {
  digit = parseInt(digit, 10)
  var value = number.toString().split('e')
  return +(value[0] + 'e' + (value[1] ? (+value[1] - digit) : -digit))
}

export default changeMoneyToChinese

function accSub(arg1, arg2) {
  var r1 = 0;
  var r2 = 0;
  var m;
  var n;

  try {
    arg1.toString().split('.')[1] && (r1 = arg1.toString().split('.')[1].length)
  } catch (e) {
    console.error(e);
  }

  try {
    arg2.toString().split('.')[1] && (r2 = arg2.toString().split('.')[1].length)
  } catch (e) {
    console.error(e);
  }

  m = Math.pow(10, Math.max(r1, r2));
  n = Math.max(r1, r2)

  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

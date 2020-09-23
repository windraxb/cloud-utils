/**
 * 加法函数，用来得到精确的加法结果<br>
 * javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1加上arg2的精确结果
 * @example
 *
 * accAdd(0.1, 0.2)
 * // => 0.3
 */
export declare function accAdd(arg1: number, arg2: number): number;
/**
 * 乘法函数，用来得到精确的乘法结果<br>
 * javascript的乘法结果会由误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}  arg1乘arg2的精确结果
 * @example
 *
 * accMul(0.222, 0.3333)
 * // => 0.0739926
 */
export declare function accMul(arg1: number, arg2: number): number;

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
/**
 * 除法函数，用来得到精确的除法结果<br>
 * javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1除以arg2的精确结果
 * @example
 *
 * accDiv(0.2, 0.3)
 * // => 0.6666666666666666
 */
export declare function accMul(arg1: number, arg2: number): number;
/**
 * 减法函数，用来得到精确的减法结果<br>
 * javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1减去arg2的精确结果
 * @example
 *
 * accSub(0.3, 0.2)
 * // => 0.1
 */
export declare function accSub(arg1: number, arg2: number): number;
/**
 * 为数字加上单位：万或亿
 *
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 返回的小数点后最多的位数，默认为 2
 * @return {string} 加上单位后的数字（计算结果有时会有精度问题）
 * @example
 *
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
export declare function addChineseUnit(number: number, decimalDigit: number): string;

/**
 * dom操作，元素添加某个class
 *
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * addClass(document.querySelector('.box'), 'flex1');
 * // => <div class="box flex flex1"></div>
 */
export declare function addClass(el: HTMLElement, cls: string): void;

/**
 * Anagrams of string（带有重复项）
 * 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。
 *
 * @since 1.2.1
 * @param str
 * @returns {*}
 * @example
 *
 * anagrams('abc');
 * // => ['abc','acb','bac','bca','cab','cba']
 */
export declare function anagrams(str: string): Array<string>;

/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param {string} bytes
 * @returns {*}
 * @example
 *
 * bytesToSize(10000)
 * // => 9.8 KB
 */
export declare function bytesToSize(bytes: string): string;

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
export declare function capitalizeEveryWord(str: string): string;

/**
 * 数字金额大写转换
 *
 * @param n
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
export declare function changeMoneyToChinese(n: number): string;

/**
 * 版本比较
 *
 * @param v1 老版本
 * @param v2 新版本
 * @returns {number} v1 > v2 => 1, v1 < v2 => -1, v1 === v2 => 0
 * @example
 *
 * compareVersion('10.1.8', '10.0.4');
 * // => 1
 * compareVersion('10.0.1', '10.0.1');
 * // => 0
 * compareVersion('10.1.1', '10.2.2');
 * // => -1
 */
export declare function compareVersion(v1: string, v2: string): boolean;

/**
 * base64转blob
 *
 * @param {string} dataURL
 * @returns {*}
 * @example
 *
 * const URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUvPjwvZGVmcz48cGF0aCBkPSJNOTU5LjQzNiAyNDMuNUwzNzcuNDEzIDg3MC4yNyA2NC4wMiA0NjcuMzQ0bDExNC43MjctOTcuOTMgMTk4LjY2NiAyMDcuMDYgNDkyLjQ4Mi00MjIuNTEgODkuNTQgODkuNTM3em0wIDAiIGZpbGw9IiM0M2E5ZjEiLz48L3N2Zz4=';
 *
 * dataURLToBlob(URI);
 * // => Blob {size: 248, type: "image/svg+xml"}
 */
export declare function dataURLToBlob(dataURL: string): any;

/**
 * 深层克隆对象
 *
 * @param obj {object}
 * @returns {*}
 * @example
 *
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a);
 * // => a !== b, a.obj !== b.obj
 */
export declare function deepClone(obj: object): any;

/**
 * url字符串拼接
 *
 * @param {string} baseURL
 * @param {string[]} relativeURLs
 * @returns {string} The combined URL
 */
export declare function combineURLs(baseURL: string, ...relativeURLs: string[]): string;

/**
 * Dom 操作，元素是包含某个 class
 *
 * @param el HTML元素
 * @param cls css类名
 * @returns {boolean}
 * @example
 *
 * <div class="box flex"></div>
 * hasClass(document.querySelector('.box'), 'flex');
 * // => true
 */
export declare function hasClass(el: HTMLElement, cls: string): boolean;

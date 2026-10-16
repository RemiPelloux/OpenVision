var __wakaru_require_common_cache;
export function require_common() {
if (__wakaru_require_common_cache) return __wakaru_require_common_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_common_cache = module2;
"use strict";
function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
function isObject5(subject) {
    return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
function extend2(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function repeat(string5, count2) {
    var result = "", cycle;
    for(cycle = 0; cycle < count2; cycle += 1){
        result += string5;
    }
    return result;
}
function isNegativeZero(number4) {
    return number4 === 0 && Number.NEGATIVE_INFINITY === 1 / number4;
}
module2.exports.isNothing = isNothing;
module2.exports.isObject = isObject5;
module2.exports.toArray = toArray;
module2.exports.repeat = repeat;
module2.exports.isNegativeZero = isNegativeZero;
module2.exports.extend = extend2;

return module2.exports;
}

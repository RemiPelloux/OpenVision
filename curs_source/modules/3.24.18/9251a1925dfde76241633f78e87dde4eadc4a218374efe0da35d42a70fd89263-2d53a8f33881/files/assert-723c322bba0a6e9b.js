var __wakaru_require_assert_cache;
export function require_assert() {
if (__wakaru_require_assert_cache) return __wakaru_require_assert_cache;
var exports2 = {};
__wakaru_require_assert_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.assertFloat32 = exports2.assertUInt32 = exports2.assertInt32 = exports2.assert = void 0;
function assert4(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
exports2.assert = assert4;
var FLOAT32_MAX2 = 34028234663852886e22;
var FLOAT32_MIN2 = -34028234663852886e22;
var UINT32_MAX3 = 4294967295;
var INT32_MAX3 = 2147483647;
var INT32_MIN3 = -2147483648;
function assertInt322(arg) {
    if (typeof arg !== "number") throw new Error("invalid int 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX3 || arg < INT32_MIN3) throw new Error("invalid int 32: " + arg);
}
exports2.assertInt32 = assertInt322;
function assertUInt322(arg) {
    if (typeof arg !== "number") throw new Error("invalid uint 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX3 || arg < 0) throw new Error("invalid uint 32: " + arg);
}
exports2.assertUInt32 = assertUInt322;
function assertFloat322(arg) {
    if (typeof arg !== "number") throw new Error("invalid float 32: " + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > FLOAT32_MAX2 || arg < FLOAT32_MIN2) throw new Error("invalid float 32: " + arg);
}
exports2.assertFloat32 = assertFloat322;

return exports2;
}

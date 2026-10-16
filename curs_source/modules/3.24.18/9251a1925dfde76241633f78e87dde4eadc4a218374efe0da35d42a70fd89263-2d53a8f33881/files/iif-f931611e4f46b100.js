import { require_defer } from "./defer.js";
var __wakaru_require_iif_cache;
export function require_iif() {
if (__wakaru_require_iif_cache) return __wakaru_require_iif_cache;
var exports2 = {};
__wakaru_require_iif_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.iif = void 0;
var defer_js_1 = require_defer();
function iif(condition, trueResult, falseResult) {
    return (0, defer_js_1.defer)(()=>condition() ? trueResult : falseResult);
}
exports2.iif = iif;

return exports2;
}

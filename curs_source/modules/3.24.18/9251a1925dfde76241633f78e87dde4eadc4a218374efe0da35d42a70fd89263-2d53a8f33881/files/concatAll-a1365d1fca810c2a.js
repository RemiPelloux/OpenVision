import { require_mergeAll } from "./mergeAll.js";
var __wakaru_require_concatAll_cache;
export function require_concatAll() {
if (__wakaru_require_concatAll_cache) return __wakaru_require_concatAll_cache;
var exports2 = {};
__wakaru_require_concatAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.concatAll = void 0;
var mergeAll_js_1 = require_mergeAll();
function concatAll() {
    return (0, mergeAll_js_1.mergeAll)(1);
}
exports2.concatAll = concatAll;

return exports2;
}

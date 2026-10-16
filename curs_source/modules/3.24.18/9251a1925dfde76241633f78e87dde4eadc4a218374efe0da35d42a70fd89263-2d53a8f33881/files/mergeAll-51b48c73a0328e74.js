import { require_mergeMap } from "./mergeMap.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_mergeAll_cache;
export function require_mergeAll() {
if (__wakaru_require_mergeAll_cache) return __wakaru_require_mergeAll_cache;
var exports2 = {};
__wakaru_require_mergeAll_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeAll = void 0;
var mergeMap_js_1 = require_mergeMap();
var identity_js_1 = require_identity();
function mergeAll2(concurrent = Infinity) {
    return (0, mergeMap_js_1.mergeMap)(identity_js_1.identity, concurrent);
}
exports2.mergeAll = mergeAll2;

return exports2;
}

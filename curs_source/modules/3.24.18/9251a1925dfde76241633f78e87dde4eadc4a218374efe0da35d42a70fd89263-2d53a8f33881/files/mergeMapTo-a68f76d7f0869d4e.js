import { require_mergeMap } from "./mergeMap.js";
var __wakaru_require_mergeMapTo_cache;
export function require_mergeMapTo() {
if (__wakaru_require_mergeMapTo_cache) return __wakaru_require_mergeMapTo_cache;
var exports2 = {};
__wakaru_require_mergeMapTo_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeMapTo = void 0;
var mergeMap_js_1 = require_mergeMap();
function mergeMapTo(innerObservable, concurrent) {
    return (0, mergeMap_js_1.mergeMap)(()=>innerObservable, concurrent);
}
exports2.mergeMapTo = mergeMapTo;

return exports2;
}

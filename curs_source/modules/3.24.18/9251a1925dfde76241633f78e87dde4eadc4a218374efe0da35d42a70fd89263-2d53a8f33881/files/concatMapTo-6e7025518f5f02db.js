import { require_concatMap } from "./concatMap.js";
var __wakaru_require_concatMapTo_cache;
export function require_concatMapTo() {
if (__wakaru_require_concatMapTo_cache) return __wakaru_require_concatMapTo_cache;
var exports2 = {};
__wakaru_require_concatMapTo_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.concatMapTo = void 0;
var concatMap_js_1 = require_concatMap();
function concatMapTo(innerObservable) {
    return (0, concatMap_js_1.concatMap)(()=>innerObservable);
}
exports2.concatMapTo = concatMapTo;

return exports2;
}

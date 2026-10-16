import { require_mergeMap } from "./mergeMap.js";
var __wakaru_require_concatMap_cache;
export function require_concatMap() {
if (__wakaru_require_concatMap_cache) return __wakaru_require_concatMap_cache;
var exports2 = {};
__wakaru_require_concatMap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.concatMap = void 0;
var mergeMap_js_1 = require_mergeMap();
function concatMap(project2) {
    return (0, mergeMap_js_1.mergeMap)(project2, 1);
}
exports2.concatMap = concatMap;

return exports2;
}

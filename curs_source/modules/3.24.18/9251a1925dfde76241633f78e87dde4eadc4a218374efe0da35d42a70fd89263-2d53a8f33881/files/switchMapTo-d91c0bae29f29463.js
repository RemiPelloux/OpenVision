import { require_switchMap } from "./switchMap.js";
var __wakaru_require_switchMapTo_cache;
export function require_switchMapTo() {
if (__wakaru_require_switchMapTo_cache) return __wakaru_require_switchMapTo_cache;
var exports2 = {};
__wakaru_require_switchMapTo_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.switchMapTo = void 0;
var switchMap_js_1 = require_switchMap();
function switchMapTo(innerObservable) {
    return (0, switchMap_js_1.switchMap)(()=>innerObservable);
}
exports2.switchMapTo = switchMapTo;

return exports2;
}

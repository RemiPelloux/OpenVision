import { require_Observable } from "../Observable.js";
var __wakaru_require_empty_cache;
export function require_empty() {
if (__wakaru_require_empty_cache) return __wakaru_require_empty_cache;
var exports2 = {};
__wakaru_require_empty_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.EMPTY = void 0;
var Observable_js_1 = require_Observable();
exports2.EMPTY = new Observable_js_1.Observable((subscriber)=>subscriber.complete());

return exports2;
}

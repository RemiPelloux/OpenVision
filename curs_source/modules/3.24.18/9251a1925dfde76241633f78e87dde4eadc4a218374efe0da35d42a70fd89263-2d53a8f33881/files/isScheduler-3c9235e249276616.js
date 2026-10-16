import { require_Observable } from "../Observable.js";
var __wakaru_require_isScheduler_cache;
export function require_isScheduler() {
if (__wakaru_require_isScheduler_cache) return __wakaru_require_isScheduler_cache;
var exports2 = {};
__wakaru_require_isScheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.isScheduler = void 0;
var Observable_js_1 = require_Observable();
function isScheduler(value) {
    return value && (0, Observable_js_1.isFunction)(value.schedule);
}
exports2.isScheduler = isScheduler;

return exports2;
}

import { require_Observable } from "../Observable.js";
var __wakaru_require_rx_cache;
export function require_rx() {
if (__wakaru_require_rx_cache) return __wakaru_require_rx_cache;
var exports2 = {};
__wakaru_require_rx_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.rx = void 0;
var Observable_js_1 = require_Observable();
function rx(source, ...fns) {
    return fns.reduce(pipeReducer, (0, Observable_js_1.from)(source));
}
exports2.rx = rx;
function pipeReducer(prev, fn) {
    return fn(prev);
}

return exports2;
}

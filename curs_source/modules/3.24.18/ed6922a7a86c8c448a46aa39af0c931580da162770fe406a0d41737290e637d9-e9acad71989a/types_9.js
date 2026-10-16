import { x } from "./tslib.es6.js";
var __wakaru_qKs_cache;
export function qKs() {
if (__wakaru_qKs_cache) return __wakaru_qKs_cache;
var e = {};
__wakaru_qKs_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.DiagLogLevel = void 0;
var t;
(function(n) {
    n[n.NONE = 0] = "NONE", n[n.ERROR = 30] = "ERROR", n[n.WARN = 50] = "WARN", n[n.INFO = 60] = "INFO", n[n.DEBUG = 70] = "DEBUG", n[n.VERBOSE = 80] = "VERBOSE", n[n.ALL = 9999] = "ALL";
})(t = e.DiagLogLevel || (e.DiagLogLevel = {}));

return e;
}

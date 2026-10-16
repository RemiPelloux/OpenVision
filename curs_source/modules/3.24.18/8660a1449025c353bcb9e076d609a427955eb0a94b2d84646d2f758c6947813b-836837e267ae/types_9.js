import { E } from "./tslib.es6.js";
var __wakaru__5a_cache;
export function _5a() {
if (__wakaru__5a_cache) return __wakaru__5a_cache;
var t = {};
__wakaru__5a_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.DiagLogLevel = void 0;
var e;
(function(n) {
    n[n.NONE = 0] = "NONE", n[n.ERROR = 30] = "ERROR", n[n.WARN = 50] = "WARN", n[n.INFO = 60] = "INFO", n[n.DEBUG = 70] = "DEBUG", n[n.VERBOSE = 80] = "VERBOSE", n[n.ALL = 9999] = "ALL";
})(e = t.DiagLogLevel || (t.DiagLogLevel = {}));

return t;
}

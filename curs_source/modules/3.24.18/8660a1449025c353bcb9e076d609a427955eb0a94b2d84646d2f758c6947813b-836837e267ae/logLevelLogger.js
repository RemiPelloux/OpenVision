import { E } from "./tslib.es6.js";
import { _5a } from "./types_9.js";
var __wakaru_z31_cache;
export function z31() {
if (__wakaru_z31_cache) return __wakaru_z31_cache;
var t = {};
__wakaru_z31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.createLogLevelDiagLogger = void 0;
var e = _5a();
function n(i, r) {
    i < e.DiagLogLevel.NONE ? i = e.DiagLogLevel.NONE : i > e.DiagLogLevel.ALL && (i = e.DiagLogLevel.ALL), r = r || {};
    function s(o, a) {
        const l = r[o];
        return typeof l == "function" && i >= a ? l.bind(r) : function() {};
    }
    return {
        error: s("error", e.DiagLogLevel.ERROR),
        warn: s("warn", e.DiagLogLevel.WARN),
        info: s("info", e.DiagLogLevel.INFO),
        debug: s("debug", e.DiagLogLevel.DEBUG),
        verbose: s("verbose", e.DiagLogLevel.VERBOSE)
    };
}
t.createLogLevelDiagLogger = n;

return t;
}

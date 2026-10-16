import { x } from "./tslib.es6.js";
import { qKs } from "./types_9.js";
var __wakaru_Egv_cache;
export function Egv() {
if (__wakaru_Egv_cache) return __wakaru_Egv_cache;
var e = {};
__wakaru_Egv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.createLogLevelDiagLogger = void 0;
var t = qKs();
function n(i, r) {
    i < t.DiagLogLevel.NONE ? i = t.DiagLogLevel.NONE : i > t.DiagLogLevel.ALL && (i = t.DiagLogLevel.ALL), r = r || {};
    function s(o, a) {
        const c = r[o];
        return typeof c == "function" && i >= a ? c.bind(r) : function() {};
    }
    return {
        error: s("error", t.DiagLogLevel.ERROR),
        warn: s("warn", t.DiagLogLevel.WARN),
        info: s("info", t.DiagLogLevel.INFO),
        debug: s("debug", t.DiagLogLevel.DEBUG),
        verbose: s("verbose", t.DiagLogLevel.VERBOSE)
    };
}
e.createLogLevelDiagLogger = n;

return e;
}

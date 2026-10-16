import { FCn } from "./global-utils.js";
import { E } from "./tslib.es6.js";
var __wakaru_q31_cache;
export function q31() {
if (__wakaru_q31_cache) return __wakaru_q31_cache;
var t = {};
__wakaru_q31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.DiagComponentLogger = void 0;
var e = FCn(), n = class {
    constructor(r){
        this._namespace = r.namespace || "DiagComponentLogger";
    }
    debug(...r) {
        return i("debug", this._namespace, r);
    }
    error(...r) {
        return i("error", this._namespace, r);
    }
    info(...r) {
        return i("info", this._namespace, r);
    }
    warn(...r) {
        return i("warn", this._namespace, r);
    }
    verbose(...r) {
        return i("verbose", this._namespace, r);
    }
};
t.DiagComponentLogger = n;
function i(r, s, o) {
    const a = (0, e.getGlobal)("diag");
    if (a) return o.unshift(s), a[r](...o);
}

return t;
}

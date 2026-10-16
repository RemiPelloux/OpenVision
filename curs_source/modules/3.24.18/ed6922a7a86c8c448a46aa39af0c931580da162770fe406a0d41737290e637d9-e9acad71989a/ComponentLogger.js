import { D$t } from "./global-utils.js";
import { x } from "./tslib.es6.js";
var __wakaru_Tgv_cache;
export function Tgv() {
if (__wakaru_Tgv_cache) return __wakaru_Tgv_cache;
var e = {};
__wakaru_Tgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.DiagComponentLogger = void 0;
var t = D$t(), n = class {
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
e.DiagComponentLogger = n;
function i(r, s, o) {
    const a = (0, t.getGlobal)("diag");
    if (a) return o.unshift(s), a[r](...o);
}

return e;
}

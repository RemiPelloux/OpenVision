import { Q31 } from "./NoopTracerProvider.js";
import { H6p } from "./ProxyTracer.js";
import { E } from "./tslib.es6.js";
var __wakaru_W6p_cache;
export function W6p() {
if (__wakaru_W6p_cache) return __wakaru_W6p_cache;
var t = {};
__wakaru_W6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.ProxyTracerProvider = void 0;
var e = H6p(), n = Q31(), i = new n.NoopTracerProvider, r = class {
    getTracer(s, o, a) {
        var l;
        return (l = this.getDelegateTracer(s, o, a)) !== null && l !== void 0 ? l : new e.ProxyTracer(this, s, o, a);
    }
    getDelegate() {
        var s;
        return (s = this._delegate) !== null && s !== void 0 ? s : i;
    }
    setDelegate(s) {
        this._delegate = s;
    }
    getDelegateTracer(s, o, a) {
        var l;
        return (l = this._delegate) === null || l === void 0 ? void 0 : l.getTracer(s, o, a);
    }
};
t.ProxyTracerProvider = r;

return t;
}

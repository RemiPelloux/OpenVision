import { Mgv } from "./NoopTracerProvider.js";
import { _Nu } from "./ProxyTracer.js";
import { x } from "./tslib.es6.js";
var __wakaru_bNu_cache;
export function bNu() {
if (__wakaru_bNu_cache) return __wakaru_bNu_cache;
var e = {};
__wakaru_bNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.ProxyTracerProvider = void 0;
var t = _Nu(), n = Mgv(), i = new n.NoopTracerProvider, r = class {
    getTracer(s, o, a) {
        var c;
        return (c = this.getDelegateTracer(s, o, a)) !== null && c !== void 0 ? c : new t.ProxyTracer(this, s, o, a);
    }
    getDelegate() {
        var s;
        return (s = this._delegate) !== null && s !== void 0 ? s : i;
    }
    setDelegate(s) {
        this._delegate = s;
    }
    getDelegateTracer(s, o, a) {
        var c;
        return (c = this._delegate) === null || c === void 0 ? void 0 : c.getTracer(s, o, a);
    }
};
e.ProxyTracerProvider = r;

return e;
}

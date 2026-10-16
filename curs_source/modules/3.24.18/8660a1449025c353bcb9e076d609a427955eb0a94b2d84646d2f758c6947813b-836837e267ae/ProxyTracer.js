import { $6p } from "./NoopTracer.js";
import { E } from "./tslib.es6.js";
var __wakaru_H6p_cache;
export function H6p() {
if (__wakaru_H6p_cache) return __wakaru_H6p_cache;
var t = {};
__wakaru_H6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.ProxyTracer = void 0;
var e = $6p(), n = new e.NoopTracer, i = class {
    constructor(r, s, o, a){
        this._provider = r, this.name = s, this.version = o, this.options = a;
    }
    startSpan(r, s, o) {
        return this._getTracer().startSpan(r, s, o);
    }
    startActiveSpan(r, s, o, a) {
        const l = this._getTracer();
        return Reflect.apply(l.startActiveSpan, l, arguments);
    }
    _getTracer() {
        if (this._delegate) return this._delegate;
        const r = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return r ? (this._delegate = r, this._delegate) : n;
    }
};
t.ProxyTracer = i;

return t;
}

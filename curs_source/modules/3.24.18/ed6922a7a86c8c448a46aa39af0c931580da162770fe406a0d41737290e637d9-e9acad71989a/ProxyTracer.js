import { vNu } from "./NoopTracer.js";
import { x } from "./tslib.es6.js";
var __wakaru__Nu_cache;
export function _Nu() {
if (__wakaru__Nu_cache) return __wakaru__Nu_cache;
var e = {};
__wakaru__Nu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.ProxyTracer = void 0;
var t = vNu(), n = new t.NoopTracer, i = class {
    constructor(r, s, o, a){
        this._provider = r, this.name = s, this.version = o, this.options = a;
    }
    startSpan(r, s, o) {
        return this._getTracer().startSpan(r, s, o);
    }
    startActiveSpan(r, s, o, a) {
        const c = this._getTracer();
        return Reflect.apply(c.startActiveSpan, c, arguments);
    }
    _getTracer() {
        if (this._delegate) return this._delegate;
        const r = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return r ? (this._delegate = r, this._delegate) : n;
    }
};
e.ProxyTracer = i;

return e;
}

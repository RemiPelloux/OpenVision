import { W6p } from "./ProxyTracerProvider.js";
import { j6p } from "./context-utils.js";
import { BCn } from "./diag.js";
import { FCn } from "./global-utils.js";
import { S5a } from "./spancontext-utils.js";
import { E } from "./tslib.es6.js";
var __wakaru_mN1_cache;
export function mN1() {
if (__wakaru_mN1_cache) return __wakaru_mN1_cache;
var t = {};
__wakaru_mN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.TraceAPI = void 0;
var e = FCn(), n = W6p(), i = S5a(), r = j6p(), s = BCn(), o = "trace", a = class tPb {
    constructor(){
        this._proxyTracerProvider = new n.ProxyTracerProvider, this.wrapSpanContext = i.wrapSpanContext, this.isSpanContextValid = i.isSpanContextValid, this.deleteSpan = r.deleteSpan, this.getSpan = r.getSpan, this.getActiveSpan = r.getActiveSpan, this.getSpanContext = r.getSpanContext, this.setSpan = r.setSpan, this.setSpanContext = r.setSpanContext;
    }
    static getInstance() {
        return this._instance || (this._instance = new tPb), this._instance;
    }
    setGlobalTracerProvider(c) {
        const u = (0, e.registerGlobal)(o, this._proxyTracerProvider, s.DiagAPI.instance());
        return u && this._proxyTracerProvider.setDelegate(c), u;
    }
    getTracerProvider() {
        return (0, e.getGlobal)(o) || this._proxyTracerProvider;
    }
    getTracer(c, u) {
        return this.getTracerProvider().getTracer(c, u);
    }
    disable() {
        (0, e.unregisterGlobal)(o, s.DiagAPI.instance()), this._proxyTracerProvider = new n.ProxyTracerProvider;
    }
};
t.TraceAPI = a;

return t;
}

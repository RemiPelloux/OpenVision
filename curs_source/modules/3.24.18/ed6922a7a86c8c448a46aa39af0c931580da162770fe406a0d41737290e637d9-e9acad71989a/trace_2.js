import { bNu } from "./ProxyTracerProvider.js";
import { fNu } from "./context-utils.js";
import { M$t } from "./diag.js";
import { D$t } from "./global-utils.js";
import { YKs } from "./spancontext-utils.js";
import { x } from "./tslib.es6.js";
var __wakaru_Kgv_cache;
export function Kgv() {
if (__wakaru_Kgv_cache) return __wakaru_Kgv_cache;
var e = {};
__wakaru_Kgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.TraceAPI = void 0;
var t = D$t(), n = bNu(), i = YKs(), r = fNu(), s = M$t(), o = "trace", a = class vCm {
    constructor(){
        this._proxyTracerProvider = new n.ProxyTracerProvider, this.wrapSpanContext = i.wrapSpanContext, this.isSpanContextValid = i.isSpanContextValid, this.deleteSpan = r.deleteSpan, this.getSpan = r.getSpan, this.getActiveSpan = r.getActiveSpan, this.getSpanContext = r.getSpanContext, this.setSpan = r.setSpan, this.setSpanContext = r.setSpanContext;
    }
    static getInstance() {
        return this._instance || (this._instance = new vCm), this._instance;
    }
    setGlobalTracerProvider(l) {
        const u = (0, t.registerGlobal)(o, this._proxyTracerProvider, s.DiagAPI.instance());
        return u && this._proxyTracerProvider.setDelegate(l), u;
    }
    getTracerProvider() {
        return (0, t.getGlobal)(o) || this._proxyTracerProvider;
    }
    getTracer(l, u) {
        return this.getTracerProvider().getTracer(l, u);
    }
    disable() {
        (0, t.unregisterGlobal)(o, s.DiagAPI.instance()), this._proxyTracerProvider = new n.ProxyTracerProvider;
    }
};
e.TraceAPI = a;

return e;
}

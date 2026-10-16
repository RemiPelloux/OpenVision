"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TraceAPI = void 0;
const n = require("./module-7976.js"), o = require("./module-5615.js"), s = require("./module-8420.js"), i = require("./module-3276.js"), a = require("./module-71.js"), c = "trace";
class u {
    constructor(){
        this._proxyTracerProvider = new o.ProxyTracerProvider, this.wrapSpanContext = s.wrapSpanContext, this.isSpanContextValid = s.isSpanContextValid, this.deleteSpan = i.deleteSpan, this.getSpan = i.getSpan, this.getActiveSpan = i.getActiveSpan, this.getSpanContext = i.getSpanContext, this.setSpan = i.setSpan, this.setSpanContext = i.setSpanContext;
    }
    static getInstance() {
        return this._instance || (this._instance = new u), this._instance;
    }
    setGlobalTracerProvider(e) {
        const t = (0, n.registerGlobal)(c, this._proxyTracerProvider, a.DiagAPI.instance());
        return t && this._proxyTracerProvider.setDelegate(e), t;
    }
    getTracerProvider() {
        return (0, n.getGlobal)(c) || this._proxyTracerProvider;
    }
    getTracer(e, t) {
        return this.getTracerProvider().getTracer(e, t);
    }
    disable() {
        (0, n.unregisterGlobal)(c, a.DiagAPI.instance()), this._proxyTracerProvider = new o.ProxyTracerProvider;
    }
}
exports.TraceAPI = u;

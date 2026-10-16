"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ProxyTracer = void 0;
const n = new (require("./module-91866.js")).NoopTracer;
exports.ProxyTracer = class {
    constructor(e, t, r, n){
        this._provider = e, this.name = t, this.version = r, this.options = n;
    }
    startSpan(e, t, r) {
        return this._getTracer().startSpan(e, t, r);
    }
    startActiveSpan(e, t, r, n) {
        const o = this._getTracer();
        return Reflect.apply(o.startActiveSpan, o, arguments);
    }
    _getTracer() {
        if (this._delegate) return this._delegate;
        const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e ? (this._delegate = e, this._delegate) : n;
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ProxyTracerProvider = void 0;
const n = require("./module-7826.js"), o = new (require("./module-6887.js")).NoopTracerProvider;
exports.ProxyTracerProvider = class {
    getTracer(e, t, r) {
        var o;
        return null !== (o = this.getDelegateTracer(e, t, r)) && void 0 !== o ? o : new n.ProxyTracer(this, e, t, r);
    }
    getDelegate() {
        var e;
        return null !== (e = this._delegate) && void 0 !== e ? e : o;
    }
    setDelegate(e) {
        this._delegate = e;
    }
    getDelegateTracer(e, t, r) {
        var n;
        return null === (n = this._delegate) || void 0 === n ? void 0 : n.getTracer(e, t, r);
    }
};

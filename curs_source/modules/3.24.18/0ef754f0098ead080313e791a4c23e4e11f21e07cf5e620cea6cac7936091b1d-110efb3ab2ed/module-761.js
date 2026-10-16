"use strict";
const { AsyncResource: t } = require("./module-290.js"), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: r } = require("./module-7902.js"), i = require("./module-9361.js"), { addSignal: l, removeSignal: d } = require("./module-9909.js");
class m extends t {
    constructor(e, a){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof a) throw new s("invalid callback");
        const { signal: n, opaque: t, responseHeaders: o } = e;
        if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = t || null, this.responseHeaders = o || null, this.callback = a, this.abort = null, l(this, n);
    }
    onConnect(e, a) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = a;
    }
    onHeaders() {
        throw new r("bad connect", null);
    }
    onUpgrade(e, a, n) {
        const { callback: t, opaque: s, context: o } = this;
        d(this), this.callback = null;
        let r = a;
        null != r && (r = "raw" === this.responseHeaders ? i.parseRawHeaders(a) : i.parseHeaders(a)), this.runInAsyncScope(t, null, null, {
            statusCode: e,
            headers: r,
            socket: n,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: a, opaque: n } = this;
        d(this), a && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(a, null, e, {
                opaque: n
            });
        }));
    }
}
module.exports = function e(a, n) {
    if (void 0 === n) return new Promise((n, t)=>{
        e.call(this, a, (e, a)=>e ? t(e) : n(a));
    });
    try {
        const e = new m(a, n);
        this.dispatch({
            ...a,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof n) throw e;
        const t = a && a.opaque;
        queueMicrotask(()=>n(e, {
                opaque: t
            }));
    }
};

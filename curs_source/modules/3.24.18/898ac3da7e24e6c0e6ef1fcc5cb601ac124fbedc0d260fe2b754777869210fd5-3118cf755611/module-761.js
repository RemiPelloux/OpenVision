"use strict";
const { AsyncResource: t } = require("./module-290.js"), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: r } = require("./module-7902.js"), i = require("./module-9361.js"), { addSignal: A, removeSignal: l } = require("./module-9909.js");
class c extends t {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof n) throw new s("invalid callback");
        const { signal: a, opaque: t, responseHeaders: o } = e;
        if (a && "function" != typeof a.on && "function" != typeof a.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = t || null, this.responseHeaders = o || null, this.callback = n, this.abort = null, A(this, a);
    }
    onConnect(e, n) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = n;
    }
    onHeaders() {
        throw new r("bad connect", null);
    }
    onUpgrade(e, n, a) {
        const { callback: t, opaque: s, context: o } = this;
        l(this), this.callback = null;
        let r = n;
        null != r && (r = "raw" === this.responseHeaders ? i.parseRawHeaders(n) : i.parseHeaders(n)), this.runInAsyncScope(t, null, null, {
            statusCode: e,
            headers: r,
            socket: a,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: n, opaque: a } = this;
        l(this), n && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(n, null, e, {
                opaque: a
            });
        }));
    }
}
module.exports = function e(n, a) {
    if (void 0 === a) return new Promise((a, t)=>{
        e.call(this, n, (e, n)=>e ? t(e) : a(n));
    });
    try {
        const e = new c(n, a);
        this.dispatch({
            ...n,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof a) throw e;
        const t = n && n.opaque;
        queueMicrotask(()=>a(e, {
                opaque: t
            }));
    }
};

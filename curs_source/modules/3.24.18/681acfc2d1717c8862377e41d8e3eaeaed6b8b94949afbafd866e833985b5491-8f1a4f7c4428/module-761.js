"use strict";
const { AsyncResource: n } = require("./module-290.js"), { InvalidArgumentError: r, RequestAbortedError: o, SocketError: s } = require("./module-7902.js"), i = require("./module-9361.js"), { addSignal: a, removeSignal: c } = require("./module-9909.js");
class l extends n {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        if ("function" != typeof t) throw new r("invalid callback");
        const { signal: A, opaque: n, responseHeaders: o } = e;
        if (A && "function" != typeof A.on && "function" != typeof A.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n || null, this.responseHeaders = o || null, this.callback = t, this.abort = null, a(this, A);
    }
    onConnect(e, t) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = t;
    }
    onHeaders() {
        throw new s("bad connect", null);
    }
    onUpgrade(e, t, A) {
        const { callback: n, opaque: r, context: o } = this;
        c(this), this.callback = null;
        let s = t;
        null != s && (s = "raw" === this.responseHeaders ? i.parseRawHeaders(t) : i.parseHeaders(t)), this.runInAsyncScope(n, null, null, {
            statusCode: e,
            headers: s,
            socket: A,
            opaque: r,
            context: o
        });
    }
    onError(e) {
        const { callback: t, opaque: A } = this;
        c(this), t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: A
            });
        }));
    }
}
module.exports = function e(t, A) {
    if (void 0 === A) return new Promise((A, n)=>{
        e.call(this, t, (e, t)=>e ? n(e) : A(t));
    });
    try {
        const e = new l(t, A);
        this.dispatch({
            ...t,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof A) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>A(e, {
                opaque: n
            }));
    }
};

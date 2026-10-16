"use strict";
const { AsyncResource: a } = require("./module-290.js"), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: r } = require("./module-7902.js"), i = require("./module-9361.js"), { addSignal: A, removeSignal: c } = require("./module-9909.js");
class l extends a {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof n) throw new s("invalid callback");
        const { signal: t, opaque: a, responseHeaders: o } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = a || null, this.responseHeaders = o || null, this.callback = n, this.abort = null, A(this, t);
    }
    onConnect(e, n) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = n;
    }
    onHeaders() {
        throw new r("bad connect", null);
    }
    onUpgrade(e, n, t) {
        const { callback: a, opaque: s, context: o } = this;
        c(this), this.callback = null;
        let r = n;
        null != r && (r = "raw" === this.responseHeaders ? i.parseRawHeaders(n) : i.parseHeaders(n)), this.runInAsyncScope(a, null, null, {
            statusCode: e,
            headers: r,
            socket: t,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: n, opaque: t } = this;
        c(this), n && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(n, null, e, {
                opaque: t
            });
        }));
    }
}
module.exports = function e(n, t) {
    if (void 0 === t) return new Promise((t, a)=>{
        e.call(this, n, (e, n)=>e ? a(e) : t(n));
    });
    try {
        const e = new l(n, t);
        this.dispatch({
            ...n,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof t) throw e;
        const a = n && n.opaque;
        queueMicrotask(()=>t(e, {
                opaque: a
            }));
    }
};

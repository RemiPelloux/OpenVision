"use strict";
const { AsyncResource: n } = require("./module-290.js"), { InvalidArgumentError: r, RequestAbortedError: o, SocketError: s } = require("./module-7902.js"), a = require("./module-9361.js"), { addSignal: i, removeSignal: c } = require("./module-9909.js");
class l extends n {
    constructor(e, A){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        if ("function" != typeof A) throw new r("invalid callback");
        const { signal: t, opaque: n, responseHeaders: o } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n || null, this.responseHeaders = o || null, this.callback = A, this.abort = null, i(this, t);
    }
    onConnect(e, A) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = A;
    }
    onHeaders() {
        throw new s("bad connect", null);
    }
    onUpgrade(e, A, t) {
        const { callback: n, opaque: r, context: o } = this;
        c(this), this.callback = null;
        let s = A;
        null != s && (s = "raw" === this.responseHeaders ? a.parseRawHeaders(A) : a.parseHeaders(A)), this.runInAsyncScope(n, null, null, {
            statusCode: e,
            headers: s,
            socket: t,
            opaque: r,
            context: o
        });
    }
    onError(e) {
        const { callback: A, opaque: t } = this;
        c(this), A && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(A, null, e, {
                opaque: t
            });
        }));
    }
}
module.exports = function e(A, t) {
    if (void 0 === t) return new Promise((t, n)=>{
        e.call(this, A, (e, A)=>e ? n(e) : t(A));
    });
    try {
        const e = new l(A, t);
        this.dispatch({
            ...A,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof t) throw e;
        const n = A && A.opaque;
        queueMicrotask(()=>t(e, {
                opaque: n
            }));
    }
};

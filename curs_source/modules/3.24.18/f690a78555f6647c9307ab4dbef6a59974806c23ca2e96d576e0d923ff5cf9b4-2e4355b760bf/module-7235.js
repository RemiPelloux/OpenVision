"use strict";
const { InvalidArgumentError: n, RequestAbortedError: r, SocketError: o } = require("./module-7902.js"), { AsyncResource: s } = require("./module-290.js"), a = require("./module-9361.js"), { addSignal: i, removeSignal: c } = require("./module-9909.js"), l = require("./module-2613.js");
class g extends s {
    constructor(e, A){
        if (!e || "object" != typeof e) throw new n("invalid opts");
        if ("function" != typeof A) throw new n("invalid callback");
        const { signal: t, opaque: r, responseHeaders: o } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = r || null, this.callback = A, this.abort = null, this.context = null, i(this, t);
    }
    onConnect(e, A) {
        if (!this.callback) throw new r;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, A, t) {
        const { callback: n, opaque: r, context: o } = this;
        l.strictEqual(e, 101), c(this), this.callback = null;
        const s = "raw" === this.responseHeaders ? a.parseRawHeaders(A) : a.parseHeaders(A);
        this.runInAsyncScope(n, null, null, {
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
        const e = new g(A, t);
        this.dispatch({
            ...A,
            method: A.method || "GET",
            upgrade: A.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof t) throw e;
        const n = A && A.opaque;
        queueMicrotask(()=>t(e, {
                opaque: n
            }));
    }
};

"use strict";
const { InvalidArgumentError: n, RequestAbortedError: r, SocketError: o } = require("./module-7902.js"), { AsyncResource: s } = require("./module-290.js"), i = require("./module-9361.js"), { addSignal: a, removeSignal: c } = require("./module-9909.js"), l = require("./module-2613.js");
class u extends s {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new n("invalid opts");
        if ("function" != typeof t) throw new n("invalid callback");
        const { signal: A, opaque: r, responseHeaders: o } = e;
        if (A && "function" != typeof A.on && "function" != typeof A.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = r || null, this.callback = t, this.abort = null, this.context = null, a(this, A);
    }
    onConnect(e, t) {
        if (!this.callback) throw new r;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, t, A) {
        const { callback: n, opaque: r, context: o } = this;
        l.strictEqual(e, 101), c(this), this.callback = null;
        const s = "raw" === this.responseHeaders ? i.parseRawHeaders(t) : i.parseHeaders(t);
        this.runInAsyncScope(n, null, null, {
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
        const e = new u(t, A);
        this.dispatch({
            ...t,
            method: t.method || "GET",
            upgrade: t.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof A) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>A(e, {
                opaque: n
            }));
    }
};

"use strict";
const { InvalidArgumentError: a, RequestAbortedError: s, SocketError: o } = require("./module-7902.js"), { AsyncResource: r } = require("./module-290.js"), i = require("./module-9361.js"), { addSignal: A, removeSignal: c } = require("./module-9909.js"), l = require("./module-2613.js");
class d extends r {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new a("invalid opts");
        if ("function" != typeof n) throw new a("invalid callback");
        const { signal: t, opaque: s, responseHeaders: o } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new a("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = n, this.abort = null, this.context = null, A(this, t);
    }
    onConnect(e, n) {
        if (!this.callback) throw new s;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, n, t) {
        const { callback: a, opaque: s, context: o } = this;
        l.strictEqual(e, 101), c(this), this.callback = null;
        const r = "raw" === this.responseHeaders ? i.parseRawHeaders(n) : i.parseHeaders(n);
        this.runInAsyncScope(a, null, null, {
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
        const e = new d(n, t);
        this.dispatch({
            ...n,
            method: n.method || "GET",
            upgrade: n.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof t) throw e;
        const a = n && n.opaque;
        queueMicrotask(()=>t(e, {
                opaque: a
            }));
    }
};

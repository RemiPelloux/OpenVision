"use strict";
const { InvalidArgumentError: r, RequestAbortedError: s, SocketError: o } = require("./module-95521.js"), { AsyncResource: n } = require(90290), i = require("./module-9361.js"), { addSignal: E, removeSignal: Q } = require("./module-9909.js"), g = require(42613);
class C extends n {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new r("invalid opts");
        if ("function" != typeof e) throw new r("invalid callback");
        const { signal: t, opaque: s, responseHeaders: o } = A;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = e, this.abort = null, this.context = null, E(this, t);
    }
    onConnect(A, e) {
        if (!this.callback) throw new s;
        this.abort = A, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(A, e, t) {
        const { callback: r, opaque: s, context: o } = this;
        g.strictEqual(A, 101), Q(this), this.callback = null;
        const n = "raw" === this.responseHeaders ? i.parseRawHeaders(e) : i.parseHeaders(e);
        this.runInAsyncScope(r, null, null, {
            headers: n,
            socket: t,
            opaque: s,
            context: o
        });
    }
    onError(A) {
        const { callback: e, opaque: t } = this;
        Q(this), e && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(e, null, A, {
                opaque: t
            });
        }));
    }
}
module.exports = function A(e, t) {
    if (void 0 === t) return new Promise((t, r)=>{
        A.call(this, e, (A, e)=>A ? r(A) : t(e));
    });
    try {
        const A = new C(e, t);
        this.dispatch({
            ...e,
            method: e.method || "GET",
            upgrade: e.protocol || "Websocket"
        }, A);
    } catch (A) {
        if ("function" != typeof t) throw A;
        const r = e && e.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
};

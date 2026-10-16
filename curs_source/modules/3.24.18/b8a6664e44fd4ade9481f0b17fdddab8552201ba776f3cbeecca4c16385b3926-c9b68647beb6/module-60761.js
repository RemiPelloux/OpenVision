"use strict";
const { AsyncResource: r } = require(90290), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: n } = require("./module-95521.js"), i = require("./module-9361.js"), { addSignal: E, removeSignal: Q } = require("./module-9909.js");
class g extends r {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new s("invalid opts");
        if ("function" != typeof e) throw new s("invalid callback");
        const { signal: t, opaque: r, responseHeaders: o } = A;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = r || null, this.responseHeaders = o || null, this.callback = e, this.abort = null, E(this, t);
    }
    onConnect(A, e) {
        if (!this.callback) throw new o;
        this.abort = A, this.context = e;
    }
    onHeaders() {
        throw new n("bad connect", null);
    }
    onUpgrade(A, e, t) {
        const { callback: r, opaque: s, context: o } = this;
        Q(this), this.callback = null;
        let n = e;
        null != n && (n = "raw" === this.responseHeaders ? i.parseRawHeaders(e) : i.parseHeaders(e)), this.runInAsyncScope(r, null, null, {
            statusCode: A,
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
        const A = new g(e, t);
        this.dispatch({
            ...e,
            method: "CONNECT"
        }, A);
    } catch (A) {
        if ("function" != typeof t) throw A;
        const r = e && e.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
};

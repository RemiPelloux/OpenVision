"use strict";
const r = require(56970), { AsyncResource: s } = require(16698), { InvalidArgumentError: o, SocketError: n } = require("./module-38238.js"), i = require("./module-55201.js"), { addSignal: a, removeSignal: Q } = require("./module-65893.js");
class g extends s {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new o("invalid opts");
        if ("function" != typeof e) throw new o("invalid callback");
        const { signal: t, opaque: r, responseHeaders: s } = A;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = r || null, this.responseHeaders = s || null, this.callback = e, this.abort = null, a(this, t);
    }
    onConnect(A, e) {
        this.reason ? A(this.reason) : (r(this.callback), this.abort = A, this.context = e);
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
        const r = e?.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
};

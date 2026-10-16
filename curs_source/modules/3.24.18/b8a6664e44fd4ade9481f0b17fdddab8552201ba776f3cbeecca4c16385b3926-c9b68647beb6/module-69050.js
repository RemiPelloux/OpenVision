"use strict";
const r = require("./module-74260.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-95521.js"), n = require("./module-9361.js"), { getResolveErrorBodyCallback: i } = require("./module-25872.js"), { AsyncResource: E } = require(90290), { addSignal: Q, removeSignal: g } = require("./module-9909.js");
class C extends E {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new s("invalid opts");
        const { signal: t, method: r, opaque: o, body: i, onInfo: E, responseHeaders: g, throwOnError: C, highWaterMark: B } = A;
        try {
            if ("function" != typeof e) throw new s("invalid callback");
            if (B && ("number" != typeof B || B < 0)) throw new s("invalid highWaterMark");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === r) throw new s("invalid method");
            if (E && "function" != typeof E) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (A) {
            throw n.isStream(i) && n.destroy(i.on("error", n.nop), A), A;
        }
        this.responseHeaders = g || null, this.opaque = o || null, this.callback = e, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = E || null, this.throwOnError = C, this.highWaterMark = B, n.isStream(i) && i.on("error", (A)=>{
            this.onError(A);
        }), Q(this, t);
    }
    onConnect(A, e) {
        if (!this.callback) throw new o;
        this.abort = A, this.context = e;
    }
    onHeaders(A, e, t, s) {
        const { callback: o, opaque: E, abort: Q, context: g, responseHeaders: C, highWaterMark: B } = this, a = "raw" === C ? n.parseRawHeaders(e) : n.parseHeaders(e);
        if (A < 200) return void (this.onInfo && this.onInfo({
            statusCode: A,
            headers: a
        }));
        const I = ("raw" === C ? n.parseHeaders(e) : a)["content-type"], c = new r({
            resume: t,
            abort: Q,
            contentType: I,
            highWaterMark: B
        });
        this.callback = null, this.res = c, null !== o && (this.throwOnError && A >= 400 ? this.runInAsyncScope(i, null, {
            callback: o,
            body: c,
            contentType: I,
            statusCode: A,
            statusMessage: s,
            headers: a
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: A,
            headers: a,
            trailers: this.trailers,
            opaque: E,
            body: c,
            context: g
        }));
    }
    onData(A) {
        const { res: e } = this;
        return e.push(A);
    }
    onComplete(A) {
        const { res: e } = this;
        g(this), n.parseHeaders(A, this.trailers), e.push(null);
    }
    onError(A) {
        const { res: e, callback: t, body: r, opaque: s } = this;
        g(this), t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, A, {
                opaque: s
            });
        })), e && (this.res = null, queueMicrotask(()=>{
            n.destroy(e, A);
        })), r && (this.body = null, n.destroy(r, A));
    }
}
module.exports = function A(e, t) {
    if (void 0 === t) return new Promise((t, r)=>{
        A.call(this, e, (A, e)=>A ? r(A) : t(e));
    });
    try {
        this.dispatch(e, new C(e, t));
    } catch (A) {
        if ("function" != typeof t) throw A;
        const r = e && e.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
}, module.exports.RequestHandler = C;

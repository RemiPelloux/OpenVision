"use strict";
const n = require("./module-4260.js"), { InvalidArgumentError: r, RequestAbortedError: o } = require("./module-7902.js"), s = require("./module-9361.js"), { getResolveErrorBodyCallback: a } = require("./module-5872.js"), { AsyncResource: i } = require("./module-290.js"), { addSignal: c, removeSignal: l } = require("./module-9909.js");
class g extends i {
    constructor(e, A){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        const { signal: t, method: n, opaque: o, body: a, onInfo: i, responseHeaders: l, throwOnError: g, highWaterMark: E } = e;
        try {
            if ("function" != typeof A) throw new r("invalid callback");
            if (E && ("number" != typeof E || E < 0)) throw new r("invalid highWaterMark");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === n) throw new r("invalid method");
            if (i && "function" != typeof i) throw new r("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw s.isStream(a) && s.destroy(a.on("error", s.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = o || null, this.callback = A, this.res = null, this.abort = null, this.body = a, this.trailers = {}, this.context = null, this.onInfo = i || null, this.throwOnError = g, this.highWaterMark = E, s.isStream(a) && a.on("error", (e)=>{
            this.onError(e);
        }), c(this, t);
    }
    onConnect(e, A) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = A;
    }
    onHeaders(e, A, t, r) {
        const { callback: o, opaque: i, abort: c, context: l, responseHeaders: g, highWaterMark: E } = this, u = "raw" === g ? s.parseRawHeaders(A) : s.parseHeaders(A);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: u
        }));
        const d = ("raw" === g ? s.parseHeaders(A) : u)["content-type"], I = new n({
            resume: t,
            abort: c,
            contentType: d,
            highWaterMark: E
        });
        this.callback = null, this.res = I, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(a, null, {
            callback: o,
            body: I,
            contentType: d,
            statusCode: e,
            statusMessage: r,
            headers: u
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: u,
            trailers: this.trailers,
            opaque: i,
            body: I,
            context: l
        }));
    }
    onData(e) {
        const { res: A } = this;
        return A.push(e);
    }
    onComplete(e) {
        const { res: A } = this;
        l(this), s.parseHeaders(e, this.trailers), A.push(null);
    }
    onError(e) {
        const { res: A, callback: t, body: n, opaque: r } = this;
        l(this), t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: r
            });
        })), A && (this.res = null, queueMicrotask(()=>{
            s.destroy(A, e);
        })), n && (this.body = null, s.destroy(n, e));
    }
}
module.exports = function e(A, t) {
    if (void 0 === t) return new Promise((t, n)=>{
        e.call(this, A, (e, A)=>e ? n(e) : t(A));
    });
    try {
        this.dispatch(A, new g(A, t));
    } catch (e) {
        if ("function" != typeof t) throw e;
        const n = A && A.opaque;
        queueMicrotask(()=>t(e, {
                opaque: n
            }));
    }
}, module.exports.RequestHandler = g;

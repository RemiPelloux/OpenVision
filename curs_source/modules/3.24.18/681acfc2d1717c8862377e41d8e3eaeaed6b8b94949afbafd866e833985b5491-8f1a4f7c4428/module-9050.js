"use strict";
const n = require("./module-4260.js"), { InvalidArgumentError: r, RequestAbortedError: o } = require("./module-7902.js"), s = require("./module-9361.js"), { getResolveErrorBodyCallback: i } = require("./module-5872.js"), { AsyncResource: a } = require("./module-290.js"), { addSignal: c, removeSignal: l } = require("./module-9909.js");
class u extends a {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        const { signal: A, method: n, opaque: o, body: i, onInfo: a, responseHeaders: l, throwOnError: u, highWaterMark: g } = e;
        try {
            if ("function" != typeof t) throw new r("invalid callback");
            if (g && ("number" != typeof g || g < 0)) throw new r("invalid highWaterMark");
            if (A && "function" != typeof A.on && "function" != typeof A.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === n) throw new r("invalid method");
            if (a && "function" != typeof a) throw new r("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw s.isStream(i) && s.destroy(i.on("error", s.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = o || null, this.callback = t, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = a || null, this.throwOnError = u, this.highWaterMark = g, s.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), c(this, A);
    }
    onConnect(e, t) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, A, r) {
        const { callback: o, opaque: a, abort: c, context: l, responseHeaders: u, highWaterMark: g } = this, E = "raw" === u ? s.parseRawHeaders(t) : s.parseHeaders(t);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: E
        }));
        const h = ("raw" === u ? s.parseHeaders(t) : E)["content-type"], d = new n({
            resume: A,
            abort: c,
            contentType: h,
            highWaterMark: g
        });
        this.callback = null, this.res = d, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(i, null, {
            callback: o,
            body: d,
            contentType: h,
            statusCode: e,
            statusMessage: r,
            headers: E
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: E,
            trailers: this.trailers,
            opaque: a,
            body: d,
            context: l
        }));
    }
    onData(e) {
        const { res: t } = this;
        return t.push(e);
    }
    onComplete(e) {
        const { res: t } = this;
        l(this), s.parseHeaders(e, this.trailers), t.push(null);
    }
    onError(e) {
        const { res: t, callback: A, body: n, opaque: r } = this;
        l(this), A && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(A, null, e, {
                opaque: r
            });
        })), t && (this.res = null, queueMicrotask(()=>{
            s.destroy(t, e);
        })), n && (this.body = null, s.destroy(n, e));
    }
}
module.exports = function e(t, A) {
    if (void 0 === A) return new Promise((A, n)=>{
        e.call(this, t, (e, t)=>e ? n(e) : A(t));
    });
    try {
        this.dispatch(t, new u(t, A));
    } catch (e) {
        if ("function" != typeof A) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>A(e, {
                opaque: n
            }));
    }
}, module.exports.RequestHandler = u;

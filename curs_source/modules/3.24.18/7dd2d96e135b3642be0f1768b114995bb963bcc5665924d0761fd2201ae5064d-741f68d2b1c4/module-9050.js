"use strict";
const a = require("./module-4260.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-7902.js"), r = require("./module-9361.js"), { getResolveErrorBodyCallback: i } = require("./module-5872.js"), { AsyncResource: A } = require("./module-290.js"), { addSignal: c, removeSignal: l } = require("./module-9909.js");
class d extends A {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        const { signal: t, method: a, opaque: o, body: i, onInfo: A, responseHeaders: l, throwOnError: d, highWaterMark: m } = e;
        try {
            if ("function" != typeof n) throw new s("invalid callback");
            if (m && ("number" != typeof m || m < 0)) throw new s("invalid highWaterMark");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === a) throw new s("invalid method");
            if (A && "function" != typeof A) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw r.isStream(i) && r.destroy(i.on("error", r.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = o || null, this.callback = n, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = A || null, this.throwOnError = d, this.highWaterMark = m, r.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), c(this, t);
    }
    onConnect(e, n) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, t, s) {
        const { callback: o, opaque: A, abort: c, context: l, responseHeaders: d, highWaterMark: m } = this, u = "raw" === d ? r.parseRawHeaders(n) : r.parseHeaders(n);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: u
        }));
        const g = ("raw" === d ? r.parseHeaders(n) : u)["content-type"], p = new a({
            resume: t,
            abort: c,
            contentType: g,
            highWaterMark: m
        });
        this.callback = null, this.res = p, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(i, null, {
            callback: o,
            body: p,
            contentType: g,
            statusCode: e,
            statusMessage: s,
            headers: u
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: u,
            trailers: this.trailers,
            opaque: A,
            body: p,
            context: l
        }));
    }
    onData(e) {
        const { res: n } = this;
        return n.push(e);
    }
    onComplete(e) {
        const { res: n } = this;
        l(this), r.parseHeaders(e, this.trailers), n.push(null);
    }
    onError(e) {
        const { res: n, callback: t, body: a, opaque: s } = this;
        l(this), t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: s
            });
        })), n && (this.res = null, queueMicrotask(()=>{
            r.destroy(n, e);
        })), a && (this.body = null, r.destroy(a, e));
    }
}
module.exports = function e(n, t) {
    if (void 0 === t) return new Promise((t, a)=>{
        e.call(this, n, (e, n)=>e ? a(e) : t(n));
    });
    try {
        this.dispatch(n, new d(n, t));
    } catch (e) {
        if ("function" != typeof t) throw e;
        const a = n && n.opaque;
        queueMicrotask(()=>t(e, {
                opaque: a
            }));
    }
}, module.exports.RequestHandler = d;

"use strict";
const t = require("./module-4260.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-7902.js"), r = require("./module-9361.js"), { getResolveErrorBodyCallback: i } = require("./module-5872.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: d, removeSignal: m } = require("./module-9909.js");
class c extends l {
    constructor(e, a){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        const { signal: n, method: t, opaque: o, body: i, onInfo: l, responseHeaders: m, throwOnError: c, highWaterMark: p } = e;
        try {
            if ("function" != typeof a) throw new s("invalid callback");
            if (p && ("number" != typeof p || p < 0)) throw new s("invalid highWaterMark");
            if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === t) throw new s("invalid method");
            if (l && "function" != typeof l) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw r.isStream(i) && r.destroy(i.on("error", r.nop), e), e;
        }
        this.responseHeaders = m || null, this.opaque = o || null, this.callback = a, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = l || null, this.throwOnError = c, this.highWaterMark = p, r.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), d(this, n);
    }
    onConnect(e, a) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = a;
    }
    onHeaders(e, a, n, s) {
        const { callback: o, opaque: l, abort: d, context: m, responseHeaders: c, highWaterMark: p } = this, A = "raw" === c ? r.parseRawHeaders(a) : r.parseHeaders(a);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: A
        }));
        const u = ("raw" === c ? r.parseHeaders(a) : A)["content-type"], g = new t({
            resume: n,
            abort: d,
            contentType: u,
            highWaterMark: p
        });
        this.callback = null, this.res = g, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(i, null, {
            callback: o,
            body: g,
            contentType: u,
            statusCode: e,
            statusMessage: s,
            headers: A
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: A,
            trailers: this.trailers,
            opaque: l,
            body: g,
            context: m
        }));
    }
    onData(e) {
        const { res: a } = this;
        return a.push(e);
    }
    onComplete(e) {
        const { res: a } = this;
        m(this), r.parseHeaders(e, this.trailers), a.push(null);
    }
    onError(e) {
        const { res: a, callback: n, body: t, opaque: s } = this;
        m(this), n && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(n, null, e, {
                opaque: s
            });
        })), a && (this.res = null, queueMicrotask(()=>{
            r.destroy(a, e);
        })), t && (this.body = null, r.destroy(t, e));
    }
}
module.exports = function e(a, n) {
    if (void 0 === n) return new Promise((n, t)=>{
        e.call(this, a, (e, a)=>e ? t(e) : n(a));
    });
    try {
        this.dispatch(a, new c(a, n));
    } catch (e) {
        if ("function" != typeof n) throw e;
        const t = a && a.opaque;
        queueMicrotask(()=>n(e, {
                opaque: t
            }));
    }
}, module.exports.RequestHandler = c;

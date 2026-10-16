"use strict";
const t = require("./module-4260.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-7902.js"), r = require("./module-9361.js"), { getResolveErrorBodyCallback: i } = require("./module-5872.js"), { AsyncResource: A } = require("./module-290.js"), { addSignal: l, removeSignal: c } = require("./module-9909.js");
class m extends A {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        const { signal: a, method: t, opaque: o, body: i, onInfo: A, responseHeaders: c, throwOnError: m, highWaterMark: d } = e;
        try {
            if ("function" != typeof n) throw new s("invalid callback");
            if (d && ("number" != typeof d || d < 0)) throw new s("invalid highWaterMark");
            if (a && "function" != typeof a.on && "function" != typeof a.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === t) throw new s("invalid method");
            if (A && "function" != typeof A) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw r.isStream(i) && r.destroy(i.on("error", r.nop), e), e;
        }
        this.responseHeaders = c || null, this.opaque = o || null, this.callback = n, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = A || null, this.throwOnError = m, this.highWaterMark = d, r.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), l(this, a);
    }
    onConnect(e, n) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, a, s) {
        const { callback: o, opaque: A, abort: l, context: c, responseHeaders: m, highWaterMark: d } = this, g = "raw" === m ? r.parseRawHeaders(n) : r.parseHeaders(n);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: g
        }));
        const u = ("raw" === m ? r.parseHeaders(n) : g)["content-type"], E = new t({
            resume: a,
            abort: l,
            contentType: u,
            highWaterMark: d
        });
        this.callback = null, this.res = E, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(i, null, {
            callback: o,
            body: E,
            contentType: u,
            statusCode: e,
            statusMessage: s,
            headers: g
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: g,
            trailers: this.trailers,
            opaque: A,
            body: E,
            context: c
        }));
    }
    onData(e) {
        const { res: n } = this;
        return n.push(e);
    }
    onComplete(e) {
        const { res: n } = this;
        c(this), r.parseHeaders(e, this.trailers), n.push(null);
    }
    onError(e) {
        const { res: n, callback: a, body: t, opaque: s } = this;
        c(this), a && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(a, null, e, {
                opaque: s
            });
        })), n && (this.res = null, queueMicrotask(()=>{
            r.destroy(n, e);
        })), t && (this.body = null, r.destroy(t, e));
    }
}
module.exports = function e(n, a) {
    if (void 0 === a) return new Promise((a, t)=>{
        e.call(this, n, (e, n)=>e ? t(e) : a(n));
    });
    try {
        this.dispatch(n, new m(n, a));
    } catch (e) {
        if ("function" != typeof a) throw e;
        const t = n && n.opaque;
        queueMicrotask(()=>a(e, {
                opaque: t
            }));
    }
}, module.exports.RequestHandler = m;

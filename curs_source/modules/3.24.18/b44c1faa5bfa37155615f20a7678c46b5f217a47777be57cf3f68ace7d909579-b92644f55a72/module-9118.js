"use strict";
const n = require("./module-5160.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-48762.js"), i = require("./module-83589.js"), { getResolveErrorBodyCallback: a } = require("./module-41724.js"), { AsyncResource: c } = require("./module-90290.js"), { addSignal: l, removeSignal: u } = require("./module-26921.js");
class d extends c {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        const { signal: r, method: n, opaque: o, body: a, onInfo: c, responseHeaders: u, throwOnError: d, highWaterMark: p } = e;
        try {
            if ("function" != typeof t) throw new s("invalid callback");
            if (p && ("number" != typeof p || p < 0)) throw new s("invalid highWaterMark");
            if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === n) throw new s("invalid method");
            if (c && "function" != typeof c) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (e) {
            throw i.isStream(a) && i.destroy(a.on("error", i.nop), e), e;
        }
        this.responseHeaders = u || null, this.opaque = o || null, this.callback = t, this.res = null, this.abort = null, this.body = a, this.trailers = {}, this.context = null, this.onInfo = c || null, this.throwOnError = d, this.highWaterMark = p, i.isStream(a) && a.on("error", (e)=>{
            this.onError(e);
        }), l(this, r);
    }
    onConnect(e, t) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, r, s) {
        const { callback: o, opaque: c, abort: l, context: u, responseHeaders: d, highWaterMark: p } = this, m = "raw" === d ? i.parseRawHeaders(t) : i.parseHeaders(t);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: m
        }));
        const h = ("raw" === d ? i.parseHeaders(t) : m)["content-type"], f = new n({
            resume: r,
            abort: l,
            contentType: h,
            highWaterMark: p
        });
        this.callback = null, this.res = f, null !== o && (this.throwOnError && e >= 400 ? this.runInAsyncScope(a, null, {
            callback: o,
            body: f,
            contentType: h,
            statusCode: e,
            statusMessage: s,
            headers: m
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: e,
            headers: m,
            trailers: this.trailers,
            opaque: c,
            body: f,
            context: u
        }));
    }
    onData(e) {
        const { res: t } = this;
        return t.push(e);
    }
    onComplete(e) {
        const { res: t } = this;
        u(this), i.parseHeaders(e, this.trailers), t.push(null);
    }
    onError(e) {
        const { res: t, callback: r, body: n, opaque: s } = this;
        u(this), r && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(r, null, e, {
                opaque: s
            });
        })), t && (this.res = null, queueMicrotask(()=>{
            i.destroy(t, e);
        })), n && (this.body = null, i.destroy(n, e));
    }
}
module.exports = function e(t, r) {
    if (void 0 === r) return new Promise((r, n)=>{
        e.call(this, t, (e, t)=>e ? n(e) : r(t));
    });
    try {
        this.dispatch(t, new d(t, r));
    } catch (e) {
        if ("function" != typeof r) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>r(e, {
                opaque: n
            }));
    }
}, module.exports.RequestHandler = d;

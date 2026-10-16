"use strict";
const n = require("./module-5160.js"), { InvalidArgumentError: s, RequestAbortedError: i } = require("./module-8762.js"), o = require("./module-3589.js"), { getResolveErrorBodyCallback: a } = require("./module-1724.js"), { AsyncResource: u } = require("./module-290.js"), { addSignal: c, removeSignal: l } = require("./module-6921.js");
class m extends u {
    constructor(t, e){
        if (!t || "object" != typeof t) throw new s("invalid opts");
        const { signal: r, method: n, opaque: i, body: a, onInfo: u, responseHeaders: l, throwOnError: m, highWaterMark: d } = t;
        try {
            if ("function" != typeof e) throw new s("invalid callback");
            if (d && ("number" != typeof d || d < 0)) throw new s("invalid highWaterMark");
            if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === n) throw new s("invalid method");
            if (u && "function" != typeof u) throw new s("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (t) {
            throw o.isStream(a) && o.destroy(a.on("error", o.nop), t), t;
        }
        this.responseHeaders = l || null, this.opaque = i || null, this.callback = e, this.res = null, this.abort = null, this.body = a, this.trailers = {}, this.context = null, this.onInfo = u || null, this.throwOnError = m, this.highWaterMark = d, o.isStream(a) && a.on("error", (t)=>{
            this.onError(t);
        }), c(this, r);
    }
    onConnect(t, e) {
        if (!this.callback) throw new i;
        this.abort = t, this.context = e;
    }
    onHeaders(t, e, r, s) {
        const { callback: i, opaque: u, abort: c, context: l, responseHeaders: m, highWaterMark: d } = this, f = "raw" === m ? o.parseRawHeaders(e) : o.parseHeaders(e);
        if (t < 200) return void (this.onInfo && this.onInfo({
            statusCode: t,
            headers: f
        }));
        const p = ("raw" === m ? o.parseHeaders(e) : f)["content-type"], h = new n({
            resume: r,
            abort: c,
            contentType: p,
            highWaterMark: d
        });
        this.callback = null, this.res = h, null !== i && (this.throwOnError && t >= 400 ? this.runInAsyncScope(a, null, {
            callback: i,
            body: h,
            contentType: p,
            statusCode: t,
            statusMessage: s,
            headers: f
        }) : this.runInAsyncScope(i, null, null, {
            statusCode: t,
            headers: f,
            trailers: this.trailers,
            opaque: u,
            body: h,
            context: l
        }));
    }
    onData(t) {
        const { res: e } = this;
        return e.push(t);
    }
    onComplete(t) {
        const { res: e } = this;
        l(this), o.parseHeaders(t, this.trailers), e.push(null);
    }
    onError(t) {
        const { res: e, callback: r, body: n, opaque: s } = this;
        l(this), r && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(r, null, t, {
                opaque: s
            });
        })), e && (this.res = null, queueMicrotask(()=>{
            o.destroy(e, t);
        })), n && (this.body = null, o.destroy(n, t));
    }
}
module.exports = function t(e, r) {
    if (void 0 === r) return new Promise((r, n)=>{
        t.call(this, e, (t, e)=>t ? n(t) : r(e));
    });
    try {
        this.dispatch(e, new m(e, r));
    } catch (t) {
        if ("function" != typeof r) throw t;
        const n = e && e.opaque;
        queueMicrotask(()=>r(t, {
                opaque: n
            }));
    }
}, module.exports.RequestHandler = m;

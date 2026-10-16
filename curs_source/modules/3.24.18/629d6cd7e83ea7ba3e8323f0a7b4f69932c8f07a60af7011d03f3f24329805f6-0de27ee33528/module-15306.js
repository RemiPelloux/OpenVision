"use strict";
const r = require(56970), { Readable: s } = require("./module-6564.js"), { InvalidArgumentError: o, RequestAbortedError: n } = require("./module-38238.js"), i = require("./module-55201.js"), { getResolveErrorBodyCallback: a } = require("./module-31904.js"), { AsyncResource: Q } = require(16698);
class g extends Q {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new o("invalid opts");
        const { signal: t, method: r, opaque: s, body: a, onInfo: Q, responseHeaders: g, throwOnError: E, highWaterMark: B } = A;
        try {
            if ("function" != typeof e) throw new o("invalid callback");
            if (B && ("number" != typeof B || B < 0)) throw new o("invalid highWaterMark");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === r) throw new o("invalid method");
            if (Q && "function" != typeof Q) throw new o("invalid onInfo callback");
            super("UNDICI_REQUEST");
        } catch (A) {
            throw i.isStream(a) && i.destroy(a.on("error", i.nop), A), A;
        }
        this.method = r, this.responseHeaders = g || null, this.opaque = s || null, this.callback = e, this.res = null, this.abort = null, this.body = a, this.trailers = {}, this.context = null, this.onInfo = Q || null, this.throwOnError = E, this.highWaterMark = B, this.signal = t, this.reason = null, this.removeAbortListener = null, i.isStream(a) && a.on("error", (A)=>{
            this.onError(A);
        }), this.signal && (this.signal.aborted ? this.reason = this.signal.reason ?? new n : this.removeAbortListener = i.addAbortListener(this.signal, ()=>{
            this.reason = this.signal.reason ?? new n, this.res ? i.destroy(this.res.on("error", i.nop), this.reason) : this.abort && this.abort(this.reason), this.removeAbortListener && (this.res?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null);
        }));
    }
    onConnect(A, e) {
        this.reason ? A(this.reason) : (r(this.callback), this.abort = A, this.context = e);
    }
    onHeaders(A, e, t, r) {
        const { callback: o, opaque: n, abort: Q, context: g, responseHeaders: E, highWaterMark: B } = this, c = "raw" === E ? i.parseRawHeaders(e) : i.parseHeaders(e);
        if (A < 200) return void (this.onInfo && this.onInfo({
            statusCode: A,
            headers: c
        }));
        const I = "raw" === E ? i.parseHeaders(e) : c, C = I["content-type"], h = I["content-length"], l = new s({
            resume: t,
            abort: Q,
            contentType: C,
            contentLength: "HEAD" !== this.method && h ? Number(h) : null,
            highWaterMark: B
        });
        this.removeAbortListener && l.on("close", this.removeAbortListener), this.callback = null, this.res = l, null !== o && (this.throwOnError && A >= 400 ? this.runInAsyncScope(a, null, {
            callback: o,
            body: l,
            contentType: C,
            statusCode: A,
            statusMessage: r,
            headers: c
        }) : this.runInAsyncScope(o, null, null, {
            statusCode: A,
            headers: c,
            trailers: this.trailers,
            opaque: n,
            body: l,
            context: g
        }));
    }
    onData(A) {
        return this.res.push(A);
    }
    onComplete(A) {
        i.parseHeaders(A, this.trailers), this.res.push(null);
    }
    onError(A) {
        const { res: e, callback: t, body: r, opaque: s } = this;
        t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, A, {
                opaque: s
            });
        })), e && (this.res = null, queueMicrotask(()=>{
            i.destroy(e, A);
        })), r && (this.body = null, i.destroy(r, A)), this.removeAbortListener && (e?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null);
    }
}
module.exports = function A(e, t) {
    if (void 0 === t) return new Promise((t, r)=>{
        A.call(this, e, (A, e)=>A ? r(A) : t(e));
    });
    try {
        this.dispatch(e, new g(e, t));
    } catch (A) {
        if ("function" != typeof t) throw A;
        const r = e?.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
}, module.exports.RequestHandler = g;

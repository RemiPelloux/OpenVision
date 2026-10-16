"use strict";
const { finished: n, PassThrough: r } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: s, RequestAbortedError: i } = require("./module-7902.js"), a = require("./module-9361.js"), { getResolveErrorBodyCallback: c } = require("./module-5872.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: u, removeSignal: g } = require("./module-9909.js");
class E extends l {
    constructor(e, t, A){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: n, method: r, opaque: s, body: i, onInfo: c, responseHeaders: l, throwOnError: g } = e;
        try {
            if ("function" != typeof A) throw new o("invalid callback");
            if ("function" != typeof t) throw new o("invalid factory");
            if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === r) throw new o("invalid method");
            if (c && "function" != typeof c) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw a.isStream(i) && a.destroy(i.on("error", a.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = s || null, this.factory = t, this.callback = A, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = c || null, this.throwOnError = g || !1, a.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), u(this, n);
    }
    onConnect(e, t) {
        if (!this.callback) throw new i;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, A, o) {
        const { factory: i, opaque: l, context: u, callback: g, responseHeaders: E } = this, h = "raw" === E ? a.parseRawHeaders(t) : a.parseHeaders(t);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: h
        }));
        let d;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const A = ("raw" === E ? a.parseHeaders(t) : h)["content-type"];
            d = new r, this.callback = null, this.runInAsyncScope(c, null, {
                callback: g,
                body: d,
                contentType: A,
                statusCode: e,
                statusMessage: o,
                headers: h
            });
        } else {
            if (null === i) return;
            if (d = this.runInAsyncScope(i, null, {
                statusCode: e,
                headers: h,
                opaque: l,
                context: u
            }), !d || "function" != typeof d.write || "function" != typeof d.end || "function" != typeof d.on) throw new s("expected Writable");
            n(d, {
                readable: !1
            }, (e)=>{
                const { callback: t, res: A, opaque: n, trailers: r, abort: o } = this;
                this.res = null, !e && A.readable || a.destroy(A, e), this.callback = null, this.runInAsyncScope(t, null, e || null, {
                    opaque: n,
                    trailers: r
                }), e && o();
            });
        }
        d.on("drain", A), this.res = d;
        return !0 !== (void 0 !== d.writableNeedDrain ? d.writableNeedDrain : d._writableState && d._writableState.needDrain);
    }
    onData(e) {
        const { res: t } = this;
        return !t || t.write(e);
    }
    onComplete(e) {
        const { res: t } = this;
        g(this), t && (this.trailers = a.parseHeaders(e), t.end());
    }
    onError(e) {
        const { res: t, callback: A, opaque: n, body: r } = this;
        g(this), this.factory = null, t ? (this.res = null, a.destroy(t, e)) : A && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(A, null, e, {
                opaque: n
            });
        })), r && (this.body = null, a.destroy(r, e));
    }
}
module.exports = function e(t, A, n) {
    if (void 0 === n) return new Promise((n, r)=>{
        e.call(this, t, A, (e, t)=>e ? r(e) : n(t));
    });
    try {
        this.dispatch(t, new E(t, A, n));
    } catch (e) {
        if ("function" != typeof n) throw e;
        const A = t && t.opaque;
        queueMicrotask(()=>n(e, {
                opaque: A
            }));
    }
};

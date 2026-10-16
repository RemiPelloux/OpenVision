"use strict";
const { finished: n, PassThrough: r } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: s, RequestAbortedError: a } = require("./module-7902.js"), i = require("./module-9361.js"), { getResolveErrorBodyCallback: c } = require("./module-5872.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: g, removeSignal: E } = require("./module-9909.js");
class u extends l {
    constructor(e, A, t){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: n, method: r, opaque: s, body: a, onInfo: c, responseHeaders: l, throwOnError: E } = e;
        try {
            if ("function" != typeof t) throw new o("invalid callback");
            if ("function" != typeof A) throw new o("invalid factory");
            if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === r) throw new o("invalid method");
            if (c && "function" != typeof c) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw i.isStream(a) && i.destroy(a.on("error", i.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = s || null, this.factory = A, this.callback = t, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a, this.onInfo = c || null, this.throwOnError = E || !1, i.isStream(a) && a.on("error", (e)=>{
            this.onError(e);
        }), g(this, n);
    }
    onConnect(e, A) {
        if (!this.callback) throw new a;
        this.abort = e, this.context = A;
    }
    onHeaders(e, A, t, o) {
        const { factory: a, opaque: l, context: g, callback: E, responseHeaders: u } = this, d = "raw" === u ? i.parseRawHeaders(A) : i.parseHeaders(A);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: d
        }));
        let I;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const t = ("raw" === u ? i.parseHeaders(A) : d)["content-type"];
            I = new r, this.callback = null, this.runInAsyncScope(c, null, {
                callback: E,
                body: I,
                contentType: t,
                statusCode: e,
                statusMessage: o,
                headers: d
            });
        } else {
            if (null === a) return;
            if (I = this.runInAsyncScope(a, null, {
                statusCode: e,
                headers: d,
                opaque: l,
                context: g
            }), !I || "function" != typeof I.write || "function" != typeof I.end || "function" != typeof I.on) throw new s("expected Writable");
            n(I, {
                readable: !1
            }, (e)=>{
                const { callback: A, res: t, opaque: n, trailers: r, abort: o } = this;
                this.res = null, !e && t.readable || i.destroy(t, e), this.callback = null, this.runInAsyncScope(A, null, e || null, {
                    opaque: n,
                    trailers: r
                }), e && o();
            });
        }
        I.on("drain", t), this.res = I;
        return !0 !== (void 0 !== I.writableNeedDrain ? I.writableNeedDrain : I._writableState && I._writableState.needDrain);
    }
    onData(e) {
        const { res: A } = this;
        return !A || A.write(e);
    }
    onComplete(e) {
        const { res: A } = this;
        E(this), A && (this.trailers = i.parseHeaders(e), A.end());
    }
    onError(e) {
        const { res: A, callback: t, opaque: n, body: r } = this;
        E(this), this.factory = null, A ? (this.res = null, i.destroy(A, e)) : t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: n
            });
        })), r && (this.body = null, i.destroy(r, e));
    }
}
module.exports = function e(A, t, n) {
    if (void 0 === n) return new Promise((n, r)=>{
        e.call(this, A, t, (e, A)=>e ? r(e) : n(A));
    });
    try {
        this.dispatch(A, new u(A, t, n));
    } catch (e) {
        if ("function" != typeof n) throw e;
        const t = A && A.opaque;
        queueMicrotask(()=>n(e, {
                opaque: t
            }));
    }
};

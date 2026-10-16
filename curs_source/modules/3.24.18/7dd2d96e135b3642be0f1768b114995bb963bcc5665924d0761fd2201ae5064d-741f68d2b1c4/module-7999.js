"use strict";
const { finished: a, PassThrough: s } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: r, RequestAbortedError: i } = require("./module-7902.js"), A = require("./module-9361.js"), { getResolveErrorBodyCallback: c } = require("./module-5872.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: d, removeSignal: m } = require("./module-9909.js");
class u extends l {
    constructor(e, n, t){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: a, method: s, opaque: r, body: i, onInfo: c, responseHeaders: l, throwOnError: m } = e;
        try {
            if ("function" != typeof t) throw new o("invalid callback");
            if ("function" != typeof n) throw new o("invalid factory");
            if (a && "function" != typeof a.on && "function" != typeof a.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new o("invalid method");
            if (c && "function" != typeof c) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw A.isStream(i) && A.destroy(i.on("error", A.nop), e), e;
        }
        this.responseHeaders = l || null, this.opaque = r || null, this.factory = n, this.callback = t, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = c || null, this.throwOnError = m || !1, A.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), d(this, a);
    }
    onConnect(e, n) {
        if (!this.callback) throw new i;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, t, o) {
        const { factory: i, opaque: l, context: d, callback: m, responseHeaders: u } = this, g = "raw" === u ? A.parseRawHeaders(n) : A.parseHeaders(n);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: g
        }));
        let p;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const t = ("raw" === u ? A.parseHeaders(n) : g)["content-type"];
            p = new s, this.callback = null, this.runInAsyncScope(c, null, {
                callback: m,
                body: p,
                contentType: t,
                statusCode: e,
                statusMessage: o,
                headers: g
            });
        } else {
            if (null === i) return;
            if (p = this.runInAsyncScope(i, null, {
                statusCode: e,
                headers: g,
                opaque: l,
                context: d
            }), !p || "function" != typeof p.write || "function" != typeof p.end || "function" != typeof p.on) throw new r("expected Writable");
            a(p, {
                readable: !1
            }, (e)=>{
                const { callback: n, res: t, opaque: a, trailers: s, abort: o } = this;
                this.res = null, !e && t.readable || A.destroy(t, e), this.callback = null, this.runInAsyncScope(n, null, e || null, {
                    opaque: a,
                    trailers: s
                }), e && o();
            });
        }
        p.on("drain", t), this.res = p;
        return !0 !== (void 0 !== p.writableNeedDrain ? p.writableNeedDrain : p._writableState && p._writableState.needDrain);
    }
    onData(e) {
        const { res: n } = this;
        return !n || n.write(e);
    }
    onComplete(e) {
        const { res: n } = this;
        m(this), n && (this.trailers = A.parseHeaders(e), n.end());
    }
    onError(e) {
        const { res: n, callback: t, opaque: a, body: s } = this;
        m(this), this.factory = null, n ? (this.res = null, A.destroy(n, e)) : t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: a
            });
        })), s && (this.body = null, A.destroy(s, e));
    }
}
module.exports = function e(n, t, a) {
    if (void 0 === a) return new Promise((a, s)=>{
        e.call(this, n, t, (e, n)=>e ? s(e) : a(n));
    });
    try {
        this.dispatch(n, new u(n, t, a));
    } catch (e) {
        if ("function" != typeof a) throw e;
        const t = n && n.opaque;
        queueMicrotask(()=>a(e, {
                opaque: t
            }));
    }
};

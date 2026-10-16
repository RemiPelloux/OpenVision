"use strict";
const { finished: n, PassThrough: s } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: i, RequestAbortedError: a } = require("./module-48762.js"), c = require("./module-83589.js"), { getResolveErrorBodyCallback: l } = require("./module-41724.js"), { AsyncResource: u } = require("./module-90290.js"), { addSignal: d, removeSignal: p } = require("./module-26921.js");
class m extends u {
    constructor(e, t, r){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: n, method: s, opaque: i, body: a, onInfo: l, responseHeaders: u, throwOnError: p } = e;
        try {
            if ("function" != typeof r) throw new o("invalid callback");
            if ("function" != typeof t) throw new o("invalid factory");
            if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new o("invalid method");
            if (l && "function" != typeof l) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw c.isStream(a) && c.destroy(a.on("error", c.nop), e), e;
        }
        this.responseHeaders = u || null, this.opaque = i || null, this.factory = t, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a, this.onInfo = l || null, this.throwOnError = p || !1, c.isStream(a) && a.on("error", (e)=>{
            this.onError(e);
        }), d(this, n);
    }
    onConnect(e, t) {
        if (!this.callback) throw new a;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, r, o) {
        const { factory: a, opaque: u, context: d, callback: p, responseHeaders: m } = this, h = "raw" === m ? c.parseRawHeaders(t) : c.parseHeaders(t);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: h
        }));
        let f;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const r = ("raw" === m ? c.parseHeaders(t) : h)["content-type"];
            f = new s, this.callback = null, this.runInAsyncScope(l, null, {
                callback: p,
                body: f,
                contentType: r,
                statusCode: e,
                statusMessage: o,
                headers: h
            });
        } else {
            if (null === a) return;
            if (f = this.runInAsyncScope(a, null, {
                statusCode: e,
                headers: h,
                opaque: u,
                context: d
            }), !f || "function" != typeof f.write || "function" != typeof f.end || "function" != typeof f.on) throw new i("expected Writable");
            n(f, {
                readable: !1
            }, (e)=>{
                const { callback: t, res: r, opaque: n, trailers: s, abort: o } = this;
                this.res = null, !e && r.readable || c.destroy(r, e), this.callback = null, this.runInAsyncScope(t, null, e || null, {
                    opaque: n,
                    trailers: s
                }), e && o();
            });
        }
        f.on("drain", r), this.res = f;
        return !0 !== (void 0 !== f.writableNeedDrain ? f.writableNeedDrain : f._writableState && f._writableState.needDrain);
    }
    onData(e) {
        const { res: t } = this;
        return !t || t.write(e);
    }
    onComplete(e) {
        const { res: t } = this;
        p(this), t && (this.trailers = c.parseHeaders(e), t.end());
    }
    onError(e) {
        const { res: t, callback: r, opaque: n, body: s } = this;
        p(this), this.factory = null, t ? (this.res = null, c.destroy(t, e)) : r && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(r, null, e, {
                opaque: n
            });
        })), s && (this.body = null, c.destroy(s, e));
    }
}
module.exports = function e(t, r, n) {
    if (void 0 === n) return new Promise((n, s)=>{
        e.call(this, t, r, (e, t)=>e ? s(e) : n(t));
    });
    try {
        this.dispatch(t, new m(t, r, n));
    } catch (e) {
        if ("function" != typeof n) throw e;
        const r = t && t.opaque;
        queueMicrotask(()=>n(e, {
                opaque: r
            }));
    }
};

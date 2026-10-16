"use strict";
const { finished: n, PassThrough: s } = require("./module-2203.js"), { InvalidArgumentError: i, InvalidReturnValueError: o, RequestAbortedError: a } = require("./module-8762.js"), u = require("./module-3589.js"), { getResolveErrorBodyCallback: c } = require("./module-1724.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: m, removeSignal: d } = require("./module-6921.js");
class f extends l {
    constructor(t, e, r){
        if (!t || "object" != typeof t) throw new i("invalid opts");
        const { signal: n, method: s, opaque: o, body: a, onInfo: c, responseHeaders: l, throwOnError: d } = t;
        try {
            if ("function" != typeof r) throw new i("invalid callback");
            if ("function" != typeof e) throw new i("invalid factory");
            if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new i("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new i("invalid method");
            if (c && "function" != typeof c) throw new i("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (t) {
            throw u.isStream(a) && u.destroy(a.on("error", u.nop), t), t;
        }
        this.responseHeaders = l || null, this.opaque = o || null, this.factory = e, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a, this.onInfo = c || null, this.throwOnError = d || !1, u.isStream(a) && a.on("error", (t)=>{
            this.onError(t);
        }), m(this, n);
    }
    onConnect(t, e) {
        if (!this.callback) throw new a;
        this.abort = t, this.context = e;
    }
    onHeaders(t, e, r, i) {
        const { factory: a, opaque: l, context: m, callback: d, responseHeaders: f } = this, p = "raw" === f ? u.parseRawHeaders(e) : u.parseHeaders(e);
        if (t < 200) return void (this.onInfo && this.onInfo({
            statusCode: t,
            headers: p
        }));
        let h;
        if (this.factory = null, this.throwOnError && t >= 400) {
            const r = ("raw" === f ? u.parseHeaders(e) : p)["content-type"];
            h = new s, this.callback = null, this.runInAsyncScope(c, null, {
                callback: d,
                body: h,
                contentType: r,
                statusCode: t,
                statusMessage: i,
                headers: p
            });
        } else {
            if (null === a) return;
            if (h = this.runInAsyncScope(a, null, {
                statusCode: t,
                headers: p,
                opaque: l,
                context: m
            }), !h || "function" != typeof h.write || "function" != typeof h.end || "function" != typeof h.on) throw new o("expected Writable");
            n(h, {
                readable: !1
            }, (t)=>{
                const { callback: e, res: r, opaque: n, trailers: s, abort: i } = this;
                this.res = null, !t && r.readable || u.destroy(r, t), this.callback = null, this.runInAsyncScope(e, null, t || null, {
                    opaque: n,
                    trailers: s
                }), t && i();
            });
        }
        h.on("drain", r), this.res = h;
        return !0 !== (void 0 !== h.writableNeedDrain ? h.writableNeedDrain : h._writableState && h._writableState.needDrain);
    }
    onData(t) {
        const { res: e } = this;
        return !e || e.write(t);
    }
    onComplete(t) {
        const { res: e } = this;
        d(this), e && (this.trailers = u.parseHeaders(t), e.end());
    }
    onError(t) {
        const { res: e, callback: r, opaque: n, body: s } = this;
        d(this), this.factory = null, e ? (this.res = null, u.destroy(e, t)) : r && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(r, null, t, {
                opaque: n
            });
        })), s && (this.body = null, u.destroy(s, t));
    }
}
module.exports = function t(e, r, n) {
    if (void 0 === n) return new Promise((n, s)=>{
        t.call(this, e, r, (t, e)=>t ? s(t) : n(e));
    });
    try {
        this.dispatch(e, new f(e, r, n));
    } catch (t) {
        if ("function" != typeof n) throw t;
        const r = e && e.opaque;
        queueMicrotask(()=>n(t, {
                opaque: r
            }));
    }
};

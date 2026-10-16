"use strict";
const { finished: t, PassThrough: s } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: r, RequestAbortedError: i } = require("./module-7902.js"), l = require("./module-9361.js"), { getResolveErrorBodyCallback: d } = require("./module-5872.js"), { AsyncResource: m } = require("./module-290.js"), { addSignal: c, removeSignal: p } = require("./module-9909.js");
class A extends m {
    constructor(e, a, n){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: t, method: s, opaque: r, body: i, onInfo: d, responseHeaders: m, throwOnError: p } = e;
        try {
            if ("function" != typeof n) throw new o("invalid callback");
            if ("function" != typeof a) throw new o("invalid factory");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new o("invalid method");
            if (d && "function" != typeof d) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw l.isStream(i) && l.destroy(i.on("error", l.nop), e), e;
        }
        this.responseHeaders = m || null, this.opaque = r || null, this.factory = a, this.callback = n, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = d || null, this.throwOnError = p || !1, l.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), c(this, t);
    }
    onConnect(e, a) {
        if (!this.callback) throw new i;
        this.abort = e, this.context = a;
    }
    onHeaders(e, a, n, o) {
        const { factory: i, opaque: m, context: c, callback: p, responseHeaders: A } = this, u = "raw" === A ? l.parseRawHeaders(a) : l.parseHeaders(a);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: u
        }));
        let g;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const n = ("raw" === A ? l.parseHeaders(a) : u)["content-type"];
            g = new s, this.callback = null, this.runInAsyncScope(d, null, {
                callback: p,
                body: g,
                contentType: n,
                statusCode: e,
                statusMessage: o,
                headers: u
            });
        } else {
            if (null === i) return;
            if (g = this.runInAsyncScope(i, null, {
                statusCode: e,
                headers: u,
                opaque: m,
                context: c
            }), !g || "function" != typeof g.write || "function" != typeof g.end || "function" != typeof g.on) throw new r("expected Writable");
            t(g, {
                readable: !1
            }, (e)=>{
                const { callback: a, res: n, opaque: t, trailers: s, abort: o } = this;
                this.res = null, !e && n.readable || l.destroy(n, e), this.callback = null, this.runInAsyncScope(a, null, e || null, {
                    opaque: t,
                    trailers: s
                }), e && o();
            });
        }
        g.on("drain", n), this.res = g;
        return !0 !== (void 0 !== g.writableNeedDrain ? g.writableNeedDrain : g._writableState && g._writableState.needDrain);
    }
    onData(e) {
        const { res: a } = this;
        return !a || a.write(e);
    }
    onComplete(e) {
        const { res: a } = this;
        p(this), a && (this.trailers = l.parseHeaders(e), a.end());
    }
    onError(e) {
        const { res: a, callback: n, opaque: t, body: s } = this;
        p(this), this.factory = null, a ? (this.res = null, l.destroy(a, e)) : n && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(n, null, e, {
                opaque: t
            });
        })), s && (this.body = null, l.destroy(s, e));
    }
}
module.exports = function e(a, n, t) {
    if (void 0 === t) return new Promise((t, s)=>{
        e.call(this, a, n, (e, a)=>e ? s(e) : t(a));
    });
    try {
        this.dispatch(a, new A(a, n, t));
    } catch (e) {
        if ("function" != typeof t) throw e;
        const n = a && a.opaque;
        queueMicrotask(()=>t(e, {
                opaque: n
            }));
    }
};

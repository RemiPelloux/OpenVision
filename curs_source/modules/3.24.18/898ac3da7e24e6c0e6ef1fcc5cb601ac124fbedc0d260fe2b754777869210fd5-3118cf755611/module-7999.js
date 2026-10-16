"use strict";
const { finished: t, PassThrough: s } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: r, RequestAbortedError: i } = require("./module-7902.js"), A = require("./module-9361.js"), { getResolveErrorBodyCallback: l } = require("./module-5872.js"), { AsyncResource: c } = require("./module-290.js"), { addSignal: m, removeSignal: d } = require("./module-9909.js");
class g extends c {
    constructor(e, n, a){
        if (!e || "object" != typeof e) throw new o("invalid opts");
        const { signal: t, method: s, opaque: r, body: i, onInfo: l, responseHeaders: c, throwOnError: d } = e;
        try {
            if ("function" != typeof a) throw new o("invalid callback");
            if ("function" != typeof n) throw new o("invalid factory");
            if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new o("invalid method");
            if (l && "function" != typeof l) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (e) {
            throw A.isStream(i) && A.destroy(i.on("error", A.nop), e), e;
        }
        this.responseHeaders = c || null, this.opaque = r || null, this.factory = n, this.callback = a, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = l || null, this.throwOnError = d || !1, A.isStream(i) && i.on("error", (e)=>{
            this.onError(e);
        }), m(this, t);
    }
    onConnect(e, n) {
        if (!this.callback) throw new i;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, a, o) {
        const { factory: i, opaque: c, context: m, callback: d, responseHeaders: g } = this, u = "raw" === g ? A.parseRawHeaders(n) : A.parseHeaders(n);
        if (e < 200) return void (this.onInfo && this.onInfo({
            statusCode: e,
            headers: u
        }));
        let E;
        if (this.factory = null, this.throwOnError && e >= 400) {
            const a = ("raw" === g ? A.parseHeaders(n) : u)["content-type"];
            E = new s, this.callback = null, this.runInAsyncScope(l, null, {
                callback: d,
                body: E,
                contentType: a,
                statusCode: e,
                statusMessage: o,
                headers: u
            });
        } else {
            if (null === i) return;
            if (E = this.runInAsyncScope(i, null, {
                statusCode: e,
                headers: u,
                opaque: c,
                context: m
            }), !E || "function" != typeof E.write || "function" != typeof E.end || "function" != typeof E.on) throw new r("expected Writable");
            t(E, {
                readable: !1
            }, (e)=>{
                const { callback: n, res: a, opaque: t, trailers: s, abort: o } = this;
                this.res = null, !e && a.readable || A.destroy(a, e), this.callback = null, this.runInAsyncScope(n, null, e || null, {
                    opaque: t,
                    trailers: s
                }), e && o();
            });
        }
        E.on("drain", a), this.res = E;
        return !0 !== (void 0 !== E.writableNeedDrain ? E.writableNeedDrain : E._writableState && E._writableState.needDrain);
    }
    onData(e) {
        const { res: n } = this;
        return !n || n.write(e);
    }
    onComplete(e) {
        const { res: n } = this;
        d(this), n && (this.trailers = A.parseHeaders(e), n.end());
    }
    onError(e) {
        const { res: n, callback: a, opaque: t, body: s } = this;
        d(this), this.factory = null, n ? (this.res = null, A.destroy(n, e)) : a && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(a, null, e, {
                opaque: t
            });
        })), s && (this.body = null, A.destroy(s, e));
    }
}
module.exports = function e(n, a, t) {
    if (void 0 === t) return new Promise((t, s)=>{
        e.call(this, n, a, (e, n)=>e ? s(e) : t(n));
    });
    try {
        this.dispatch(n, new g(n, a, t));
    } catch (e) {
        if ("function" != typeof t) throw e;
        const a = n && n.opaque;
        queueMicrotask(()=>t(e, {
                opaque: a
            }));
    }
};

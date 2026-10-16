"use strict";
const { finished: r, PassThrough: s } = require(2203), { InvalidArgumentError: o, InvalidReturnValueError: n, RequestAbortedError: i } = require("./module-95521.js"), E = require("./module-9361.js"), { getResolveErrorBodyCallback: Q } = require("./module-25872.js"), { AsyncResource: g } = require(90290), { addSignal: C, removeSignal: B } = require("./module-9909.js");
class a extends g {
    constructor(A, e, t){
        if (!A || "object" != typeof A) throw new o("invalid opts");
        const { signal: r, method: s, opaque: n, body: i, onInfo: Q, responseHeaders: g, throwOnError: B } = A;
        try {
            if ("function" != typeof t) throw new o("invalid callback");
            if ("function" != typeof e) throw new o("invalid factory");
            if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new o("invalid method");
            if (Q && "function" != typeof Q) throw new o("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (A) {
            throw E.isStream(i) && E.destroy(i.on("error", E.nop), A), A;
        }
        this.responseHeaders = g || null, this.opaque = n || null, this.factory = e, this.callback = t, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = Q || null, this.throwOnError = B || !1, E.isStream(i) && i.on("error", (A)=>{
            this.onError(A);
        }), C(this, r);
    }
    onConnect(A, e) {
        if (!this.callback) throw new i;
        this.abort = A, this.context = e;
    }
    onHeaders(A, e, t, o) {
        const { factory: i, opaque: g, context: C, callback: B, responseHeaders: a } = this, I = "raw" === a ? E.parseRawHeaders(e) : E.parseHeaders(e);
        if (A < 200) return void (this.onInfo && this.onInfo({
            statusCode: A,
            headers: I
        }));
        let c;
        if (this.factory = null, this.throwOnError && A >= 400) {
            const t = ("raw" === a ? E.parseHeaders(e) : I)["content-type"];
            c = new s, this.callback = null, this.runInAsyncScope(Q, null, {
                callback: B,
                body: c,
                contentType: t,
                statusCode: A,
                statusMessage: o,
                headers: I
            });
        } else {
            if (null === i) return;
            if (c = this.runInAsyncScope(i, null, {
                statusCode: A,
                headers: I,
                opaque: g,
                context: C
            }), !c || "function" != typeof c.write || "function" != typeof c.end || "function" != typeof c.on) throw new n("expected Writable");
            r(c, {
                readable: !1
            }, (A)=>{
                const { callback: e, res: t, opaque: r, trailers: s, abort: o } = this;
                this.res = null, !A && t.readable || E.destroy(t, A), this.callback = null, this.runInAsyncScope(e, null, A || null, {
                    opaque: r,
                    trailers: s
                }), A && o();
            });
        }
        c.on("drain", t), this.res = c;
        return !0 !== (void 0 !== c.writableNeedDrain ? c.writableNeedDrain : c._writableState && c._writableState.needDrain);
    }
    onData(A) {
        const { res: e } = this;
        return !e || e.write(A);
    }
    onComplete(A) {
        const { res: e } = this;
        B(this), e && (this.trailers = E.parseHeaders(A), e.end());
    }
    onError(A) {
        const { res: e, callback: t, opaque: r, body: s } = this;
        B(this), this.factory = null, e ? (this.res = null, E.destroy(e, A)) : t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, A, {
                opaque: r
            });
        })), s && (this.body = null, E.destroy(s, A));
    }
}
module.exports = function A(e, t, r) {
    if (void 0 === r) return new Promise((r, s)=>{
        A.call(this, e, t, (A, e)=>A ? s(A) : r(e));
    });
    try {
        this.dispatch(e, new a(e, t, r));
    } catch (A) {
        if ("function" != typeof r) throw A;
        const t = e && e.opaque;
        queueMicrotask(()=>r(A, {
                opaque: t
            }));
    }
};

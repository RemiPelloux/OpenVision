"use strict";
const r = require(56970), { finished: s, PassThrough: o } = require(57075), { InvalidArgumentError: n, InvalidReturnValueError: i } = require("./module-38238.js"), a = require("./module-55201.js"), { getResolveErrorBodyCallback: Q } = require("./module-31904.js"), { AsyncResource: g } = require(16698), { addSignal: E, removeSignal: B } = require("./module-65893.js");
class c extends g {
    constructor(A, e, t){
        if (!A || "object" != typeof A) throw new n("invalid opts");
        const { signal: r, method: s, opaque: o, body: i, onInfo: Q, responseHeaders: g, throwOnError: B } = A;
        try {
            if ("function" != typeof t) throw new n("invalid callback");
            if ("function" != typeof e) throw new n("invalid factory");
            if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
            if ("CONNECT" === s) throw new n("invalid method");
            if (Q && "function" != typeof Q) throw new n("invalid onInfo callback");
            super("UNDICI_STREAM");
        } catch (A) {
            throw a.isStream(i) && a.destroy(i.on("error", a.nop), A), A;
        }
        this.responseHeaders = g || null, this.opaque = o || null, this.factory = e, this.callback = t, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i, this.onInfo = Q || null, this.throwOnError = B || !1, a.isStream(i) && i.on("error", (A)=>{
            this.onError(A);
        }), E(this, r);
    }
    onConnect(A, e) {
        this.reason ? A(this.reason) : (r(this.callback), this.abort = A, this.context = e);
    }
    onHeaders(A, e, t, r) {
        const { factory: n, opaque: g, context: E, callback: B, responseHeaders: c } = this, I = "raw" === c ? a.parseRawHeaders(e) : a.parseHeaders(e);
        if (A < 200) return void (this.onInfo && this.onInfo({
            statusCode: A,
            headers: I
        }));
        let C;
        if (this.factory = null, this.throwOnError && A >= 400) {
            const t = ("raw" === c ? a.parseHeaders(e) : I)["content-type"];
            C = new o, this.callback = null, this.runInAsyncScope(Q, null, {
                callback: B,
                body: C,
                contentType: t,
                statusCode: A,
                statusMessage: r,
                headers: I
            });
        } else {
            if (null === n) return;
            if (C = this.runInAsyncScope(n, null, {
                statusCode: A,
                headers: I,
                opaque: g,
                context: E
            }), !C || "function" != typeof C.write || "function" != typeof C.end || "function" != typeof C.on) throw new i("expected Writable");
            s(C, {
                readable: !1
            }, (A)=>{
                const { callback: e, res: t, opaque: r, trailers: s, abort: o } = this;
                this.res = null, !A && t.readable || a.destroy(t, A), this.callback = null, this.runInAsyncScope(e, null, A || null, {
                    opaque: r,
                    trailers: s
                }), A && o();
            });
        }
        C.on("drain", t), this.res = C;
        return !0 !== (void 0 !== C.writableNeedDrain ? C.writableNeedDrain : C._writableState?.needDrain);
    }
    onData(A) {
        const { res: e } = this;
        return !e || e.write(A);
    }
    onComplete(A) {
        const { res: e } = this;
        B(this), e && (this.trailers = a.parseHeaders(A), e.end());
    }
    onError(A) {
        const { res: e, callback: t, opaque: r, body: s } = this;
        B(this), this.factory = null, e ? (this.res = null, a.destroy(e, A)) : t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, A, {
                opaque: r
            });
        })), s && (this.body = null, a.destroy(s, A));
    }
}
module.exports = function A(e, t, r) {
    if (void 0 === r) return new Promise((r, s)=>{
        A.call(this, e, t, (A, e)=>A ? s(A) : r(e));
    });
    try {
        this.dispatch(e, new c(e, t, r));
    } catch (A) {
        if ("function" != typeof r) throw A;
        const t = e?.opaque;
        queueMicrotask(()=>r(A, {
                opaque: t
            }));
    }
};

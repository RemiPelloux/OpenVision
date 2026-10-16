"use strict";
const { Readable: r, Duplex: s, PassThrough: o } = require(57075), { InvalidArgumentError: n, InvalidReturnValueError: i, RequestAbortedError: a } = require("./module-38238.js"), Q = require("./module-55201.js"), { AsyncResource: g } = require(16698), { addSignal: E, removeSignal: B } = require("./module-65893.js"), c = require(56970), I = Symbol("resume");
class C extends r {
    constructor(){
        super({
            autoDestroy: !0
        }), this[I] = null;
    }
    _read() {
        const { [I]: A } = this;
        A && (this[I] = null, A());
    }
    _destroy(A, e) {
        this._read(), e(A);
    }
}
class h extends r {
    constructor(A){
        super({
            autoDestroy: !0
        }), this[I] = A;
    }
    _read() {
        this[I]();
    }
    _destroy(A, e) {
        A || this._readableState.endEmitted || (A = new a), e(A);
    }
}
class l extends g {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new n("invalid opts");
        if ("function" != typeof e) throw new n("invalid handler");
        const { signal: t, method: r, opaque: o, onInfo: i, responseHeaders: g } = A;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === r) throw new n("invalid method");
        if (i && "function" != typeof i) throw new n("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = g || null, this.handler = e, this.abort = null, this.context = null, this.onInfo = i || null, this.req = (new C).on("error", Q.nop), this.ret = new s({
            readableObjectMode: A.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: A } = this;
                A?.resume && A.resume();
            },
            write: (A, e, t)=>{
                const { req: r } = this;
                r.push(A, e) || r._readableState.destroyed ? t() : r[I] = t;
            },
            destroy: (A, e)=>{
                const { body: t, req: r, res: s, ret: o, abort: n } = this;
                A || o._readableState.endEmitted || (A = new a), n && A && n(), Q.destroy(t, A), Q.destroy(r, A), Q.destroy(s, A), B(this), e(A);
            }
        }).on("prefinish", ()=>{
            const { req: A } = this;
            A.push(null);
        }), this.res = null, E(this, t);
    }
    onConnect(A, e) {
        const { ret: t, res: r } = this;
        this.reason ? A(this.reason) : (c(!r, "pipeline cannot be retried"), c(!t.destroyed), this.abort = A, this.context = e);
    }
    onHeaders(A, e, t) {
        const { opaque: r, handler: s, context: o } = this;
        if (A < 200) {
            if (this.onInfo) {
                const t = "raw" === this.responseHeaders ? Q.parseRawHeaders(e) : Q.parseHeaders(e);
                this.onInfo({
                    statusCode: A,
                    headers: t
                });
            }
            return;
        }
        let n;
        this.res = new h(t);
        try {
            this.handler = null;
            const t = "raw" === this.responseHeaders ? Q.parseRawHeaders(e) : Q.parseHeaders(e);
            n = this.runInAsyncScope(s, null, {
                statusCode: A,
                headers: t,
                opaque: r,
                body: this.res,
                context: o
            });
        } catch (A) {
            throw this.res.on("error", Q.nop), A;
        }
        if (!n || "function" != typeof n.on) throw new i("expected Readable");
        n.on("data", (A)=>{
            const { ret: e, body: t } = this;
            !e.push(A) && t.pause && t.pause();
        }).on("error", (A)=>{
            const { ret: e } = this;
            Q.destroy(e, A);
        }).on("end", ()=>{
            const { ret: A } = this;
            A.push(null);
        }).on("close", ()=>{
            const { ret: A } = this;
            A._readableState.ended || Q.destroy(A, new a);
        }), this.body = n;
    }
    onData(A) {
        const { res: e } = this;
        return e.push(A);
    }
    onComplete(A) {
        const { res: e } = this;
        e.push(null);
    }
    onError(A) {
        const { ret: e } = this;
        this.handler = null, Q.destroy(e, A);
    }
}
module.exports = function(A, e) {
    try {
        const t = new l(A, e);
        return this.dispatch({
            ...A,
            body: t.req
        }, t), t.ret;
    } catch (A) {
        return (new o).destroy(A);
    }
};

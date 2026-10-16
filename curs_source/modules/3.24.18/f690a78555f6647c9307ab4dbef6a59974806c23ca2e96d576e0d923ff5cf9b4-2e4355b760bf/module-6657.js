"use strict";
const { Readable: n, Duplex: r, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: s, InvalidReturnValueError: a, RequestAbortedError: i } = require("./module-7902.js"), c = require("./module-9361.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: g, removeSignal: E } = require("./module-9909.js"), u = require("./module-2613.js"), d = Symbol("resume");
class I extends n {
    constructor(){
        super({
            autoDestroy: !0
        }), this[d] = null;
    }
    _read() {
        const { [d]: e } = this;
        e && (this[d] = null, e());
    }
    _destroy(e, A) {
        this._read(), A(e);
    }
}
class h extends n {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[d] = e;
    }
    _read() {
        this[d]();
    }
    _destroy(e, A) {
        e || this._readableState.endEmitted || (e = new i), A(e);
    }
}
class Q extends l {
    constructor(e, A){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof A) throw new s("invalid handler");
        const { signal: t, method: n, opaque: o, onInfo: a, responseHeaders: l } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n) throw new s("invalid method");
        if (a && "function" != typeof a) throw new s("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = l || null, this.handler = A, this.abort = null, this.context = null, this.onInfo = a || null, this.req = (new I).on("error", c.nop), this.ret = new r({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, A, t)=>{
                const { req: n } = this;
                n.push(e, A) || n._readableState.destroyed ? t() : n[d] = t;
            },
            destroy: (e, A)=>{
                const { body: t, req: n, res: r, ret: o, abort: s } = this;
                e || o._readableState.endEmitted || (e = new i), s && e && s(), c.destroy(t, e), c.destroy(n, e), c.destroy(r, e), E(this), A(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, g(this, t);
    }
    onConnect(e, A) {
        const { ret: t, res: n } = this;
        if (u(!n, "pipeline cannot be retried"), t.destroyed) throw new i;
        this.abort = e, this.context = A;
    }
    onHeaders(e, A, t) {
        const { opaque: n, handler: r, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const t = "raw" === this.responseHeaders ? c.parseRawHeaders(A) : c.parseHeaders(A);
                this.onInfo({
                    statusCode: e,
                    headers: t
                });
            }
            return;
        }
        let s;
        this.res = new h(t);
        try {
            this.handler = null;
            const t = "raw" === this.responseHeaders ? c.parseRawHeaders(A) : c.parseHeaders(A);
            s = this.runInAsyncScope(r, null, {
                statusCode: e,
                headers: t,
                opaque: n,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", c.nop), e;
        }
        if (!s || "function" != typeof s.on) throw new a("expected Readable");
        s.on("data", (e)=>{
            const { ret: A, body: t } = this;
            !A.push(e) && t.pause && t.pause();
        }).on("error", (e)=>{
            const { ret: A } = this;
            c.destroy(A, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || c.destroy(e, new i);
        }), this.body = s;
    }
    onData(e) {
        const { res: A } = this;
        return A.push(e);
    }
    onComplete(e) {
        const { res: A } = this;
        A.push(null);
    }
    onError(e) {
        const { ret: A } = this;
        this.handler = null, c.destroy(A, e);
    }
}
module.exports = function(e, A) {
    try {
        const t = new Q(e, A);
        return this.dispatch({
            ...e,
            body: t.req
        }, t), t.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

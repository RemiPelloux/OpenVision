"use strict";
const { Readable: n, Duplex: r, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: s, InvalidReturnValueError: i, RequestAbortedError: a } = require("./module-7902.js"), c = require("./module-9361.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: u, removeSignal: g } = require("./module-9909.js"), E = require("./module-2613.js"), h = Symbol("resume");
class d extends n {
    constructor(){
        super({
            autoDestroy: !0
        }), this[h] = null;
    }
    _read() {
        const { [h]: e } = this;
        e && (this[h] = null, e());
    }
    _destroy(e, t) {
        this._read(), t(e);
    }
}
class I extends n {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[h] = e;
    }
    _read() {
        this[h]();
    }
    _destroy(e, t) {
        e || this._readableState.endEmitted || (e = new a), t(e);
    }
}
class B extends l {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof t) throw new s("invalid handler");
        const { signal: A, method: n, opaque: o, onInfo: i, responseHeaders: l } = e;
        if (A && "function" != typeof A.on && "function" != typeof A.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n) throw new s("invalid method");
        if (i && "function" != typeof i) throw new s("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = l || null, this.handler = t, this.abort = null, this.context = null, this.onInfo = i || null, this.req = (new d).on("error", c.nop), this.ret = new r({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, t, A)=>{
                const { req: n } = this;
                n.push(e, t) || n._readableState.destroyed ? A() : n[h] = A;
            },
            destroy: (e, t)=>{
                const { body: A, req: n, res: r, ret: o, abort: s } = this;
                e || o._readableState.endEmitted || (e = new a), s && e && s(), c.destroy(A, e), c.destroy(n, e), c.destroy(r, e), g(this), t(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, u(this, A);
    }
    onConnect(e, t) {
        const { ret: A, res: n } = this;
        if (E(!n, "pipeline cannot be retried"), A.destroyed) throw new a;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, A) {
        const { opaque: n, handler: r, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const A = "raw" === this.responseHeaders ? c.parseRawHeaders(t) : c.parseHeaders(t);
                this.onInfo({
                    statusCode: e,
                    headers: A
                });
            }
            return;
        }
        let s;
        this.res = new I(A);
        try {
            this.handler = null;
            const A = "raw" === this.responseHeaders ? c.parseRawHeaders(t) : c.parseHeaders(t);
            s = this.runInAsyncScope(r, null, {
                statusCode: e,
                headers: A,
                opaque: n,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", c.nop), e;
        }
        if (!s || "function" != typeof s.on) throw new i("expected Readable");
        s.on("data", (e)=>{
            const { ret: t, body: A } = this;
            !t.push(e) && A.pause && A.pause();
        }).on("error", (e)=>{
            const { ret: t } = this;
            c.destroy(t, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || c.destroy(e, new a);
        }), this.body = s;
    }
    onData(e) {
        const { res: t } = this;
        return t.push(e);
    }
    onComplete(e) {
        const { res: t } = this;
        t.push(null);
    }
    onError(e) {
        const { ret: t } = this;
        this.handler = null, c.destroy(t, e);
    }
}
module.exports = function(e, t) {
    try {
        const A = new B(e, t);
        return this.dispatch({
            ...e,
            body: A.req
        }, A), A.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

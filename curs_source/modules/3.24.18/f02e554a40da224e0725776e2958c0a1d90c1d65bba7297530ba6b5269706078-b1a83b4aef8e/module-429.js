"use strict";
const { Readable: n, Duplex: s, PassThrough: i } = require("./module-2203.js"), { InvalidArgumentError: o, InvalidReturnValueError: a, RequestAbortedError: u } = require("./module-8762.js"), c = require("./module-3589.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: m, removeSignal: d } = require("./module-6921.js"), f = require("./module-2613.js"), p = Symbol("resume");
class h extends n {
    constructor(){
        super({
            autoDestroy: !0
        }), this[p] = null;
    }
    _read() {
        const { [p]: t } = this;
        t && (this[p] = null, t());
    }
    _destroy(t, e) {
        this._read(), e(t);
    }
}
class g extends n {
    constructor(t){
        super({
            autoDestroy: !0
        }), this[p] = t;
    }
    _read() {
        this[p]();
    }
    _destroy(t, e) {
        t || this._readableState.endEmitted || (t = new u), e(t);
    }
}
class A extends l {
    constructor(t, e){
        if (!t || "object" != typeof t) throw new o("invalid opts");
        if ("function" != typeof e) throw new o("invalid handler");
        const { signal: r, method: n, opaque: i, onInfo: a, responseHeaders: l } = t;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n) throw new o("invalid method");
        if (a && "function" != typeof a) throw new o("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = i || null, this.responseHeaders = l || null, this.handler = e, this.abort = null, this.context = null, this.onInfo = a || null, this.req = (new h).on("error", c.nop), this.ret = new s({
            readableObjectMode: t.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: t } = this;
                t && t.resume && t.resume();
            },
            write: (t, e, r)=>{
                const { req: n } = this;
                n.push(t, e) || n._readableState.destroyed ? r() : n[p] = r;
            },
            destroy: (t, e)=>{
                const { body: r, req: n, res: s, ret: i, abort: o } = this;
                t || i._readableState.endEmitted || (t = new u), o && t && o(), c.destroy(r, t), c.destroy(n, t), c.destroy(s, t), d(this), e(t);
            }
        }).on("prefinish", ()=>{
            const { req: t } = this;
            t.push(null);
        }), this.res = null, m(this, r);
    }
    onConnect(t, e) {
        const { ret: r, res: n } = this;
        if (f(!n, "pipeline cannot be retried"), r.destroyed) throw new u;
        this.abort = t, this.context = e;
    }
    onHeaders(t, e, r) {
        const { opaque: n, handler: s, context: i } = this;
        if (t < 200) {
            if (this.onInfo) {
                const r = "raw" === this.responseHeaders ? c.parseRawHeaders(e) : c.parseHeaders(e);
                this.onInfo({
                    statusCode: t,
                    headers: r
                });
            }
            return;
        }
        let o;
        this.res = new g(r);
        try {
            this.handler = null;
            const r = "raw" === this.responseHeaders ? c.parseRawHeaders(e) : c.parseHeaders(e);
            o = this.runInAsyncScope(s, null, {
                statusCode: t,
                headers: r,
                opaque: n,
                body: this.res,
                context: i
            });
        } catch (t) {
            throw this.res.on("error", c.nop), t;
        }
        if (!o || "function" != typeof o.on) throw new a("expected Readable");
        o.on("data", (t)=>{
            const { ret: e, body: r } = this;
            !e.push(t) && r.pause && r.pause();
        }).on("error", (t)=>{
            const { ret: e } = this;
            c.destroy(e, t);
        }).on("end", ()=>{
            const { ret: t } = this;
            t.push(null);
        }).on("close", ()=>{
            const { ret: t } = this;
            t._readableState.ended || c.destroy(t, new u);
        }), this.body = o;
    }
    onData(t) {
        const { res: e } = this;
        return e.push(t);
    }
    onComplete(t) {
        const { res: e } = this;
        e.push(null);
    }
    onError(t) {
        const { ret: e } = this;
        this.handler = null, c.destroy(e, t);
    }
}
module.exports = function(t, e) {
    try {
        const r = new A(t, e);
        return this.dispatch({
            ...t,
            body: r.req
        }, r), r.ret;
    } catch (t) {
        return (new i).destroy(t);
    }
};

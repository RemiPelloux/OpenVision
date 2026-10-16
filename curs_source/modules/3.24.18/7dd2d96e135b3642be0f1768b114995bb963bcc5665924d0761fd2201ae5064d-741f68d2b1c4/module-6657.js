"use strict";
const { Readable: a, Duplex: s, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: r, InvalidReturnValueError: i, RequestAbortedError: A } = require("./module-7902.js"), c = require("./module-9361.js"), { AsyncResource: l } = require("./module-290.js"), { addSignal: d, removeSignal: m } = require("./module-9909.js"), u = require("./module-2613.js"), g = Symbol("resume");
class p extends a {
    constructor(){
        super({
            autoDestroy: !0
        }), this[g] = null;
    }
    _read() {
        const { [g]: e } = this;
        e && (this[g] = null, e());
    }
    _destroy(e, n) {
        this._read(), n(e);
    }
}
class E extends a {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[g] = e;
    }
    _read() {
        this[g]();
    }
    _destroy(e, n) {
        e || this._readableState.endEmitted || (e = new A), n(e);
    }
}
class h extends l {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        if ("function" != typeof n) throw new r("invalid handler");
        const { signal: t, method: a, opaque: o, onInfo: i, responseHeaders: l } = e;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === a) throw new r("invalid method");
        if (i && "function" != typeof i) throw new r("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = l || null, this.handler = n, this.abort = null, this.context = null, this.onInfo = i || null, this.req = (new p).on("error", c.nop), this.ret = new s({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, n, t)=>{
                const { req: a } = this;
                a.push(e, n) || a._readableState.destroyed ? t() : a[g] = t;
            },
            destroy: (e, n)=>{
                const { body: t, req: a, res: s, ret: o, abort: r } = this;
                e || o._readableState.endEmitted || (e = new A), r && e && r(), c.destroy(t, e), c.destroy(a, e), c.destroy(s, e), m(this), n(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, d(this, t);
    }
    onConnect(e, n) {
        const { ret: t, res: a } = this;
        if (u(!a, "pipeline cannot be retried"), t.destroyed) throw new A;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, t) {
        const { opaque: a, handler: s, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const t = "raw" === this.responseHeaders ? c.parseRawHeaders(n) : c.parseHeaders(n);
                this.onInfo({
                    statusCode: e,
                    headers: t
                });
            }
            return;
        }
        let r;
        this.res = new E(t);
        try {
            this.handler = null;
            const t = "raw" === this.responseHeaders ? c.parseRawHeaders(n) : c.parseHeaders(n);
            r = this.runInAsyncScope(s, null, {
                statusCode: e,
                headers: t,
                opaque: a,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", c.nop), e;
        }
        if (!r || "function" != typeof r.on) throw new i("expected Readable");
        r.on("data", (e)=>{
            const { ret: n, body: t } = this;
            !n.push(e) && t.pause && t.pause();
        }).on("error", (e)=>{
            const { ret: n } = this;
            c.destroy(n, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || c.destroy(e, new A);
        }), this.body = r;
    }
    onData(e) {
        const { res: n } = this;
        return n.push(e);
    }
    onComplete(e) {
        const { res: n } = this;
        n.push(null);
    }
    onError(e) {
        const { ret: n } = this;
        this.handler = null, c.destroy(n, e);
    }
}
module.exports = function(e, n) {
    try {
        const t = new h(e, n);
        return this.dispatch({
            ...e,
            body: t.req
        }, t), t.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

"use strict";
const { Readable: t, Duplex: s, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: r, InvalidReturnValueError: i, RequestAbortedError: A } = require("./module-7902.js"), l = require("./module-9361.js"), { AsyncResource: c } = require("./module-290.js"), { addSignal: m, removeSignal: d } = require("./module-9909.js"), g = require("./module-2613.js"), u = Symbol("resume");
class E extends t {
    constructor(){
        super({
            autoDestroy: !0
        }), this[u] = null;
    }
    _read() {
        const { [u]: e } = this;
        e && (this[u] = null, e());
    }
    _destroy(e, n) {
        this._read(), n(e);
    }
}
class p extends t {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[u] = e;
    }
    _read() {
        this[u]();
    }
    _destroy(e, n) {
        e || this._readableState.endEmitted || (e = new A), n(e);
    }
}
class T extends c {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        if ("function" != typeof n) throw new r("invalid handler");
        const { signal: a, method: t, opaque: o, onInfo: i, responseHeaders: c } = e;
        if (a && "function" != typeof a.on && "function" != typeof a.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === t) throw new r("invalid method");
        if (i && "function" != typeof i) throw new r("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = c || null, this.handler = n, this.abort = null, this.context = null, this.onInfo = i || null, this.req = (new E).on("error", l.nop), this.ret = new s({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, n, a)=>{
                const { req: t } = this;
                t.push(e, n) || t._readableState.destroyed ? a() : t[u] = a;
            },
            destroy: (e, n)=>{
                const { body: a, req: t, res: s, ret: o, abort: r } = this;
                e || o._readableState.endEmitted || (e = new A), r && e && r(), l.destroy(a, e), l.destroy(t, e), l.destroy(s, e), d(this), n(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, m(this, a);
    }
    onConnect(e, n) {
        const { ret: a, res: t } = this;
        if (g(!t, "pipeline cannot be retried"), a.destroyed) throw new A;
        this.abort = e, this.context = n;
    }
    onHeaders(e, n, a) {
        const { opaque: t, handler: s, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const a = "raw" === this.responseHeaders ? l.parseRawHeaders(n) : l.parseHeaders(n);
                this.onInfo({
                    statusCode: e,
                    headers: a
                });
            }
            return;
        }
        let r;
        this.res = new p(a);
        try {
            this.handler = null;
            const a = "raw" === this.responseHeaders ? l.parseRawHeaders(n) : l.parseHeaders(n);
            r = this.runInAsyncScope(s, null, {
                statusCode: e,
                headers: a,
                opaque: t,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", l.nop), e;
        }
        if (!r || "function" != typeof r.on) throw new i("expected Readable");
        r.on("data", (e)=>{
            const { ret: n, body: a } = this;
            !n.push(e) && a.pause && a.pause();
        }).on("error", (e)=>{
            const { ret: n } = this;
            l.destroy(n, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || l.destroy(e, new A);
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
        this.handler = null, l.destroy(n, e);
    }
}
module.exports = function(e, n) {
    try {
        const a = new T(e, n);
        return this.dispatch({
            ...e,
            body: a.req
        }, a), a.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

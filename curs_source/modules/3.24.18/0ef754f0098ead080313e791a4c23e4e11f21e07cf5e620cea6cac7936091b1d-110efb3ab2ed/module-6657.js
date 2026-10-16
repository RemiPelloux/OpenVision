"use strict";
const { Readable: t, Duplex: s, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: r, InvalidReturnValueError: i, RequestAbortedError: l } = require("./module-7902.js"), d = require("./module-9361.js"), { AsyncResource: m } = require("./module-290.js"), { addSignal: c, removeSignal: p } = require("./module-9909.js"), A = require("./module-2613.js"), u = Symbol("resume");
class g extends t {
    constructor(){
        super({
            autoDestroy: !0
        }), this[u] = null;
    }
    _read() {
        const { [u]: e } = this;
        e && (this[u] = null, e());
    }
    _destroy(e, a) {
        this._read(), a(e);
    }
}
class T extends t {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[u] = e;
    }
    _read() {
        this[u]();
    }
    _destroy(e, a) {
        e || this._readableState.endEmitted || (e = new l), a(e);
    }
}
class h extends m {
    constructor(e, a){
        if (!e || "object" != typeof e) throw new r("invalid opts");
        if ("function" != typeof a) throw new r("invalid handler");
        const { signal: n, method: t, opaque: o, onInfo: i, responseHeaders: m } = e;
        if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === t) throw new r("invalid method");
        if (i && "function" != typeof i) throw new r("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = m || null, this.handler = a, this.abort = null, this.context = null, this.onInfo = i || null, this.req = (new g).on("error", d.nop), this.ret = new s({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, a, n)=>{
                const { req: t } = this;
                t.push(e, a) || t._readableState.destroyed ? n() : t[u] = n;
            },
            destroy: (e, a)=>{
                const { body: n, req: t, res: s, ret: o, abort: r } = this;
                e || o._readableState.endEmitted || (e = new l), r && e && r(), d.destroy(n, e), d.destroy(t, e), d.destroy(s, e), p(this), a(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, c(this, n);
    }
    onConnect(e, a) {
        const { ret: n, res: t } = this;
        if (A(!t, "pipeline cannot be retried"), n.destroyed) throw new l;
        this.abort = e, this.context = a;
    }
    onHeaders(e, a, n) {
        const { opaque: t, handler: s, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const n = "raw" === this.responseHeaders ? d.parseRawHeaders(a) : d.parseHeaders(a);
                this.onInfo({
                    statusCode: e,
                    headers: n
                });
            }
            return;
        }
        let r;
        this.res = new T(n);
        try {
            this.handler = null;
            const n = "raw" === this.responseHeaders ? d.parseRawHeaders(a) : d.parseHeaders(a);
            r = this.runInAsyncScope(s, null, {
                statusCode: e,
                headers: n,
                opaque: t,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", d.nop), e;
        }
        if (!r || "function" != typeof r.on) throw new i("expected Readable");
        r.on("data", (e)=>{
            const { ret: a, body: n } = this;
            !a.push(e) && n.pause && n.pause();
        }).on("error", (e)=>{
            const { ret: a } = this;
            d.destroy(a, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || d.destroy(e, new l);
        }), this.body = r;
    }
    onData(e) {
        const { res: a } = this;
        return a.push(e);
    }
    onComplete(e) {
        const { res: a } = this;
        a.push(null);
    }
    onError(e) {
        const { ret: a } = this;
        this.handler = null, d.destroy(a, e);
    }
}
module.exports = function(e, a) {
    try {
        const n = new h(e, a);
        return this.dispatch({
            ...e,
            body: n.req
        }, n), n.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

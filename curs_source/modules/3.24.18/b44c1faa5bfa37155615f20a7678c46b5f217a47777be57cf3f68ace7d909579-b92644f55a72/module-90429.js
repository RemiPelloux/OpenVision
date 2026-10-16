"use strict";
const { Readable: n, Duplex: s, PassThrough: o } = require("./module-2203.js"), { InvalidArgumentError: i, InvalidReturnValueError: a, RequestAbortedError: c } = require("./module-48762.js"), l = require("./module-83589.js"), { AsyncResource: u } = require("./module-90290.js"), { addSignal: d, removeSignal: p } = require("./module-26921.js"), m = require("./module-42613.js"), h = Symbol("resume");
class f extends n {
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
class g extends n {
    constructor(e){
        super({
            autoDestroy: !0
        }), this[h] = e;
    }
    _read() {
        this[h]();
    }
    _destroy(e, t) {
        e || this._readableState.endEmitted || (e = new c), t(e);
    }
}
class y extends u {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new i("invalid opts");
        if ("function" != typeof t) throw new i("invalid handler");
        const { signal: r, method: n, opaque: o, onInfo: a, responseHeaders: u } = e;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new i("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n) throw new i("invalid method");
        if (a && "function" != typeof a) throw new i("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o || null, this.responseHeaders = u || null, this.handler = t, this.abort = null, this.context = null, this.onInfo = a || null, this.req = (new f).on("error", l.nop), this.ret = new s({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: ()=>{
                const { body: e } = this;
                e && e.resume && e.resume();
            },
            write: (e, t, r)=>{
                const { req: n } = this;
                n.push(e, t) || n._readableState.destroyed ? r() : n[h] = r;
            },
            destroy: (e, t)=>{
                const { body: r, req: n, res: s, ret: o, abort: i } = this;
                e || o._readableState.endEmitted || (e = new c), i && e && i(), l.destroy(r, e), l.destroy(n, e), l.destroy(s, e), p(this), t(e);
            }
        }).on("prefinish", ()=>{
            const { req: e } = this;
            e.push(null);
        }), this.res = null, d(this, r);
    }
    onConnect(e, t) {
        const { ret: r, res: n } = this;
        if (m(!n, "pipeline cannot be retried"), r.destroyed) throw new c;
        this.abort = e, this.context = t;
    }
    onHeaders(e, t, r) {
        const { opaque: n, handler: s, context: o } = this;
        if (e < 200) {
            if (this.onInfo) {
                const r = "raw" === this.responseHeaders ? l.parseRawHeaders(t) : l.parseHeaders(t);
                this.onInfo({
                    statusCode: e,
                    headers: r
                });
            }
            return;
        }
        let i;
        this.res = new g(r);
        try {
            this.handler = null;
            const r = "raw" === this.responseHeaders ? l.parseRawHeaders(t) : l.parseHeaders(t);
            i = this.runInAsyncScope(s, null, {
                statusCode: e,
                headers: r,
                opaque: n,
                body: this.res,
                context: o
            });
        } catch (e) {
            throw this.res.on("error", l.nop), e;
        }
        if (!i || "function" != typeof i.on) throw new a("expected Readable");
        i.on("data", (e)=>{
            const { ret: t, body: r } = this;
            !t.push(e) && r.pause && r.pause();
        }).on("error", (e)=>{
            const { ret: t } = this;
            l.destroy(t, e);
        }).on("end", ()=>{
            const { ret: e } = this;
            e.push(null);
        }).on("close", ()=>{
            const { ret: e } = this;
            e._readableState.ended || l.destroy(e, new c);
        }), this.body = i;
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
        this.handler = null, l.destroy(t, e);
    }
}
module.exports = function(e, t) {
    try {
        const r = new y(e, t);
        return this.dispatch({
            ...e,
            body: r.req
        }, r), r.ret;
    } catch (e) {
        return (new o).destroy(e);
    }
};

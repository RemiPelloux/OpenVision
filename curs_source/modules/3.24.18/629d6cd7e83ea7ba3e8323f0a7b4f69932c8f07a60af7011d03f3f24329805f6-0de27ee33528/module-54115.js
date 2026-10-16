"use strict";
const { InvalidArgumentError: r, SocketError: s } = require("./module-38238.js"), { AsyncResource: o } = require(16698), n = require("./module-55201.js"), { addSignal: i, removeSignal: a } = require("./module-65893.js"), Q = require(56970);
class g extends o {
    constructor(A, e){
        if (!A || "object" != typeof A) throw new r("invalid opts");
        if ("function" != typeof e) throw new r("invalid callback");
        const { signal: t, opaque: s, responseHeaders: o } = A;
        if (t && "function" != typeof t.on && "function" != typeof t.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = e, this.abort = null, this.context = null, i(this, t);
    }
    onConnect(A, e) {
        this.reason ? A(this.reason) : (Q(this.callback), this.abort = A, this.context = null);
    }
    onHeaders() {
        throw new s("bad upgrade", null);
    }
    onUpgrade(A, e, t) {
        Q(101 === A);
        const { callback: r, opaque: s, context: o } = this;
        a(this), this.callback = null;
        const i = "raw" === this.responseHeaders ? n.parseRawHeaders(e) : n.parseHeaders(e);
        this.runInAsyncScope(r, null, null, {
            headers: i,
            socket: t,
            opaque: s,
            context: o
        });
    }
    onError(A) {
        const { callback: e, opaque: t } = this;
        a(this), e && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(e, null, A, {
                opaque: t
            });
        }));
    }
}
module.exports = function A(e, t) {
    if (void 0 === t) return new Promise((t, r)=>{
        A.call(this, e, (A, e)=>A ? r(A) : t(e));
    });
    try {
        const A = new g(e, t);
        this.dispatch({
            ...e,
            method: e.method || "GET",
            upgrade: e.protocol || "Websocket"
        }, A);
    } catch (A) {
        if ("function" != typeof t) throw A;
        const r = e?.opaque;
        queueMicrotask(()=>t(A, {
                opaque: r
            }));
    }
};

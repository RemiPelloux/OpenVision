"use strict";
const { InvalidArgumentError: t, RequestAbortedError: s, SocketError: o } = require("./module-7902.js"), { AsyncResource: r } = require("./module-290.js"), i = require("./module-9361.js"), { addSignal: A, removeSignal: l } = require("./module-9909.js"), c = require("./module-2613.js");
class m extends r {
    constructor(e, n){
        if (!e || "object" != typeof e) throw new t("invalid opts");
        if ("function" != typeof n) throw new t("invalid callback");
        const { signal: a, opaque: s, responseHeaders: o } = e;
        if (a && "function" != typeof a.on && "function" != typeof a.addEventListener) throw new t("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = n, this.abort = null, this.context = null, A(this, a);
    }
    onConnect(e, n) {
        if (!this.callback) throw new s;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, n, a) {
        const { callback: t, opaque: s, context: o } = this;
        c.strictEqual(e, 101), l(this), this.callback = null;
        const r = "raw" === this.responseHeaders ? i.parseRawHeaders(n) : i.parseHeaders(n);
        this.runInAsyncScope(t, null, null, {
            headers: r,
            socket: a,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: n, opaque: a } = this;
        l(this), n && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(n, null, e, {
                opaque: a
            });
        }));
    }
}
module.exports = function e(n, a) {
    if (void 0 === a) return new Promise((a, t)=>{
        e.call(this, n, (e, n)=>e ? t(e) : a(n));
    });
    try {
        const e = new m(n, a);
        this.dispatch({
            ...n,
            method: n.method || "GET",
            upgrade: n.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof a) throw e;
        const t = n && n.opaque;
        queueMicrotask(()=>a(e, {
                opaque: t
            }));
    }
};

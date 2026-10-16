"use strict";
const { InvalidArgumentError: t, RequestAbortedError: s, SocketError: o } = require("./module-7902.js"), { AsyncResource: r } = require("./module-290.js"), i = require("./module-9361.js"), { addSignal: l, removeSignal: d } = require("./module-9909.js"), m = require("./module-2613.js");
class c extends r {
    constructor(e, a){
        if (!e || "object" != typeof e) throw new t("invalid opts");
        if ("function" != typeof a) throw new t("invalid callback");
        const { signal: n, opaque: s, responseHeaders: o } = e;
        if (n && "function" != typeof n.on && "function" != typeof n.addEventListener) throw new t("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = a, this.abort = null, this.context = null, l(this, n);
    }
    onConnect(e, a) {
        if (!this.callback) throw new s;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, a, n) {
        const { callback: t, opaque: s, context: o } = this;
        m.strictEqual(e, 101), d(this), this.callback = null;
        const r = "raw" === this.responseHeaders ? i.parseRawHeaders(a) : i.parseHeaders(a);
        this.runInAsyncScope(t, null, null, {
            headers: r,
            socket: n,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: a, opaque: n } = this;
        d(this), a && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(a, null, e, {
                opaque: n
            });
        }));
    }
}
module.exports = function e(a, n) {
    if (void 0 === n) return new Promise((n, t)=>{
        e.call(this, a, (e, a)=>e ? t(e) : n(a));
    });
    try {
        const e = new c(a, n);
        this.dispatch({
            ...a,
            method: a.method || "GET",
            upgrade: a.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof n) throw e;
        const t = a && a.opaque;
        queueMicrotask(()=>n(e, {
                opaque: t
            }));
    }
};

"use strict";
const { InvalidArgumentError: n, RequestAbortedError: s, SocketError: o } = require("./module-48762.js"), { AsyncResource: i } = require("./module-90290.js"), a = require("./module-83589.js"), { addSignal: c, removeSignal: l } = require("./module-26921.js"), u = require("./module-42613.js");
class d extends i {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new n("invalid opts");
        if ("function" != typeof t) throw new n("invalid callback");
        const { signal: r, opaque: s, responseHeaders: o } = e;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o || null, this.opaque = s || null, this.callback = t, this.abort = null, this.context = null, c(this, r);
    }
    onConnect(e, t) {
        if (!this.callback) throw new s;
        this.abort = e, this.context = null;
    }
    onHeaders() {
        throw new o("bad upgrade", null);
    }
    onUpgrade(e, t, r) {
        const { callback: n, opaque: s, context: o } = this;
        u.strictEqual(e, 101), l(this), this.callback = null;
        const i = "raw" === this.responseHeaders ? a.parseRawHeaders(t) : a.parseHeaders(t);
        this.runInAsyncScope(n, null, null, {
            headers: i,
            socket: r,
            opaque: s,
            context: o
        });
    }
    onError(e) {
        const { callback: t, opaque: r } = this;
        l(this), t && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(t, null, e, {
                opaque: r
            });
        }));
    }
}
module.exports = function e(t, r) {
    if (void 0 === r) return new Promise((r, n)=>{
        e.call(this, t, (e, t)=>e ? n(e) : r(t));
    });
    try {
        const e = new d(t, r);
        this.dispatch({
            ...t,
            method: t.method || "GET",
            upgrade: t.protocol || "Websocket"
        }, e);
    } catch (e) {
        if ("function" != typeof r) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>r(e, {
                opaque: n
            }));
    }
};

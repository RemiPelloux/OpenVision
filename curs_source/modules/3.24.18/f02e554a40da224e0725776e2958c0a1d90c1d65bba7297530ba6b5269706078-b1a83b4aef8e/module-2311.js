"use strict";
const { InvalidArgumentError: n, RequestAbortedError: s, SocketError: i } = require("./module-8762.js"), { AsyncResource: o } = require("./module-290.js"), a = require("./module-3589.js"), { addSignal: u, removeSignal: c } = require("./module-6921.js"), l = require("./module-2613.js");
class m extends o {
    constructor(t, e){
        if (!t || "object" != typeof t) throw new n("invalid opts");
        if ("function" != typeof e) throw new n("invalid callback");
        const { signal: r, opaque: s, responseHeaders: i } = t;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = i || null, this.opaque = s || null, this.callback = e, this.abort = null, this.context = null, u(this, r);
    }
    onConnect(t, e) {
        if (!this.callback) throw new s;
        this.abort = t, this.context = null;
    }
    onHeaders() {
        throw new i("bad upgrade", null);
    }
    onUpgrade(t, e, r) {
        const { callback: n, opaque: s, context: i } = this;
        l.strictEqual(t, 101), c(this), this.callback = null;
        const o = "raw" === this.responseHeaders ? a.parseRawHeaders(e) : a.parseHeaders(e);
        this.runInAsyncScope(n, null, null, {
            headers: o,
            socket: r,
            opaque: s,
            context: i
        });
    }
    onError(t) {
        const { callback: e, opaque: r } = this;
        c(this), e && (this.callback = null, queueMicrotask(()=>{
            this.runInAsyncScope(e, null, t, {
                opaque: r
            });
        }));
    }
}
module.exports = function t(e, r) {
    if (void 0 === r) return new Promise((r, n)=>{
        t.call(this, e, (t, e)=>t ? n(t) : r(e));
    });
    try {
        const t = new m(e, r);
        this.dispatch({
            ...e,
            method: e.method || "GET",
            upgrade: e.protocol || "Websocket"
        }, t);
    } catch (t) {
        if ("function" != typeof r) throw t;
        const n = e && e.opaque;
        queueMicrotask(()=>r(t, {
                opaque: n
            }));
    }
};

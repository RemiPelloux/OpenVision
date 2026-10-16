"use strict";
const { AsyncResource: n } = require("./module-90290.js"), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: i } = require("./module-48762.js"), a = require("./module-83589.js"), { addSignal: c, removeSignal: l } = require("./module-26921.js");
class u extends n {
    constructor(e, t){
        if (!e || "object" != typeof e) throw new s("invalid opts");
        if ("function" != typeof t) throw new s("invalid callback");
        const { signal: r, opaque: n, responseHeaders: o } = e;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n || null, this.responseHeaders = o || null, this.callback = t, this.abort = null, c(this, r);
    }
    onConnect(e, t) {
        if (!this.callback) throw new o;
        this.abort = e, this.context = t;
    }
    onHeaders() {
        throw new i("bad connect", null);
    }
    onUpgrade(e, t, r) {
        const { callback: n, opaque: s, context: o } = this;
        l(this), this.callback = null;
        let i = t;
        null != i && (i = "raw" === this.responseHeaders ? a.parseRawHeaders(t) : a.parseHeaders(t)), this.runInAsyncScope(n, null, null, {
            statusCode: e,
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
        const e = new u(t, r);
        this.dispatch({
            ...t,
            method: "CONNECT"
        }, e);
    } catch (e) {
        if ("function" != typeof r) throw e;
        const n = t && t.opaque;
        queueMicrotask(()=>r(e, {
                opaque: n
            }));
    }
};

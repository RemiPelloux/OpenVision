"use strict";
const { AsyncResource: n } = require("./module-290.js"), { InvalidArgumentError: s, RequestAbortedError: i, SocketError: o } = require("./module-8762.js"), a = require("./module-3589.js"), { addSignal: u, removeSignal: c } = require("./module-6921.js");
class l extends n {
    constructor(t, e){
        if (!t || "object" != typeof t) throw new s("invalid opts");
        if ("function" != typeof e) throw new s("invalid callback");
        const { signal: r, opaque: n, responseHeaders: i } = t;
        if (r && "function" != typeof r.on && "function" != typeof r.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n || null, this.responseHeaders = i || null, this.callback = e, this.abort = null, u(this, r);
    }
    onConnect(t, e) {
        if (!this.callback) throw new i;
        this.abort = t, this.context = e;
    }
    onHeaders() {
        throw new o("bad connect", null);
    }
    onUpgrade(t, e, r) {
        const { callback: n, opaque: s, context: i } = this;
        c(this), this.callback = null;
        let o = e;
        null != o && (o = "raw" === this.responseHeaders ? a.parseRawHeaders(e) : a.parseHeaders(e)), this.runInAsyncScope(n, null, null, {
            statusCode: t,
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
        const t = new l(e, r);
        this.dispatch({
            ...e,
            method: "CONNECT"
        }, t);
    } catch (t) {
        if ("function" != typeof r) throw t;
        const n = e && e.opaque;
        queueMicrotask(()=>r(t, {
                opaque: n
            }));
    }
};

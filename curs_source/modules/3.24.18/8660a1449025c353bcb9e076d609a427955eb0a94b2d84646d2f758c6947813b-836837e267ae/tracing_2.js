import { Ei } from "./Iwo.js";
import { LZu, Nmr, Pdn, gZn, iyy, m6t, oTo } from "./SZu.js";
import { kve } from "./global.js";
import { sTo } from "./liveRequestTrace.js";
import { Q0 } from "./sentry.js";
import { IZu, UOe } from "./spanCollector.js";
import { p6t } from "./spanLifecycle.js";
import { Xby } from "./spanSampling.js";
import { tyy } from "./traceparent.js";
import { E } from "./tslib.es6.js";
var UZu, jZu, _Zn, cTo, $Zu, Mde, Omr;
export { $Zu, Mde, Omr, UZu, _Zn, cTo, jZu };
var __wakaru____initialized = false;
export function __() {
if (__wakaru____initialized) return;
__wakaru____initialized = true;
"use strict";
E(), Ei(), kve(), Q0(), sTo(), IZu(), LZu(), Xby(), tyy(), p6t(), typeof Symbol.dispose != "symbol" && Object.defineProperty(Symbol, "dispose", {
    value: Symbol("Symbol.dispose")
}), typeof Symbol.asyncDispose != "symbol" && Object.defineProperty(Symbol, "asyncDispose", {
    value: Symbol("Symbol.asyncDispose")
}), _Zn = 1, cTo = "__tracingCtx", $Zu = class {
    constructor(){
        this[UZu] = !0;
    }
    spanContext() {}
    setAttribute(t, e) {}
    setInheritableAttribute(t, e) {}
    setError(t) {}
    end() {}
    startSpan(t) {
        return Mde;
    }
    reportEvent(t, e) {}
    reportException(t, e) {}
    [(UZu = cTo, Symbol.dispose)]() {}
}, Mde = new $Zu, Omr = class {
    constructor(t, e = !1){
        this[jZu] = !0, this._ended = !1, this._doNotReport = !1, this._span = t, this._doNotReport = e;
    }
    end() {
        this._ended || (this._span?.end(), this._doNotReport || UOe.collect(this._span), this._ended = !0);
    }
    spanContext() {
        const t = this._span?.spanContext();
        if (t) return {
            traceId: t.traceId,
            spanId: t.spanId,
            traceFlags: t.traceFlags
        };
    }
    setAttribute(t, e) {
        this._span?.setAttribute(t, e);
    }
    setInheritableAttribute(t, e) {
        this._span?.setInheritableAttribute(t, e);
    }
    setError(t) {
        if (!this._span) return;
        let e = "internal_error";
        t instanceof Error ? (e = t.message || e, this._span.setAttribute("error.stack", t.stack ?? ""), this._span.setAttribute("error.type", t.name ?? t.constructor?.name ?? "Error")) : typeof t == "string" ? e = t : t != null && (e = String(t)), this._span.setAttribute("error.message", e), this._span.setStatus({
            code: Pdn.ERROR,
            message: e
        });
    }
    startSpan(t) {
        return iyy(t, this._span);
    }
    reportEvent(t, e) {
        if (m6t()) return;
        const n = this._span ? oTo(this._span, t) : gZn(t);
        Nmr(n, "event", e), n.end(), UOe.collect(n);
    }
    reportException(t, e) {
        if (m6t()) return;
        const n = this._span ? oTo(this._span, "exception") : gZn("exception");
        let i = "internal_error", r = "", s = "Error";
        t instanceof Error ? (i = t.message || i, r = t.stack ?? "", s = t.name ?? t.constructor?.name ?? s) : (i = String(t), s = "StringError"), Nmr(n, "error", e), n.setAttribute("error.message", i), n.setAttribute("error.stack", r), n.setAttribute("error.type", s), n.setStatus({
            code: Pdn.ERROR,
            message: i
        }), n.end(), UOe.collect(n);
    }
    [(jZu = cTo, Symbol.dispose)]() {
        this.end();
    }
};

}

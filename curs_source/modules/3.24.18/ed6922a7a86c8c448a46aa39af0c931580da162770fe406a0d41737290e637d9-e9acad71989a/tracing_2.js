import { si } from "./HVr.js";
import { Yie } from "./global.js";
import { yzr } from "./liveRequestTrace.js";
import { Omi, PNt, Szr, Xpn, oAc, vht, ydg } from "./qIc.js";
import { Lk } from "./sentry.js";
import { QIc, swe } from "./spanCollector.js";
import { fht } from "./spanLifecycle.js";
import { pdg } from "./spanSampling.js";
import { _dg } from "./traceparent.js";
import { x } from "./tslib.es6.js";
var uAc, dAc, Jpn, Czr, hAc, cJ, Bmi;
export { Bmi, Czr, Jpn, cJ, dAc, hAc, uAc };
var __wakaru_yv_initialized = false;
export function yv() {
if (__wakaru_yv_initialized) return;
__wakaru_yv_initialized = true;
"use strict";
x(), si(), Yie(), Lk(), yzr(), QIc(), oAc(), pdg(), _dg(), fht(), typeof Symbol.dispose != "symbol" && Object.defineProperty(Symbol, "dispose", {
    value: Symbol("Symbol.dispose")
}), typeof Symbol.asyncDispose != "symbol" && Object.defineProperty(Symbol, "asyncDispose", {
    value: Symbol("Symbol.asyncDispose")
}), Jpn = 1, Czr = "__tracingCtx", hAc = class {
    constructor(){
        this[uAc] = !0;
    }
    spanContext() {}
    setAttribute(e, t) {}
    setInheritableAttribute(e, t) {}
    setError(e) {}
    end() {}
    startSpan(e) {
        return cJ;
    }
    reportEvent(e, t) {}
    reportException(e, t) {}
    [(uAc = Czr, Symbol.dispose)]() {}
}, cJ = new hAc, Bmi = class {
    constructor(e, t = !1){
        this[dAc] = !0, this._ended = !1, this._doNotReport = !1, this._span = e, this._doNotReport = t;
    }
    end() {
        this._ended || (this._span?.end(), this._doNotReport || swe.collect(this._span), this._ended = !0);
    }
    spanContext() {
        const e = this._span?.spanContext();
        if (e) return {
            traceId: e.traceId,
            spanId: e.spanId,
            traceFlags: e.traceFlags
        };
    }
    setAttribute(e, t) {
        this._span?.setAttribute(e, t);
    }
    setInheritableAttribute(e, t) {
        this._span?.setInheritableAttribute(e, t);
    }
    setError(e) {
        if (!this._span) return;
        let t = "internal_error";
        e instanceof Error ? (t = e.message || t, this._span.setAttribute("error.stack", e.stack ?? ""), this._span.setAttribute("error.type", e.name ?? e.constructor?.name ?? "Error")) : typeof e == "string" ? t = e : e != null && (t = String(e)), this._span.setAttribute("error.message", t), this._span.setStatus({
            code: PNt.ERROR,
            message: t
        });
    }
    startSpan(e) {
        return ydg(e, this._span);
    }
    reportEvent(e, t) {
        if (vht()) return;
        const n = this._span ? Szr(this._span, e) : Xpn(e);
        Omi(n, "event", t), n.end(), swe.collect(n);
    }
    reportException(e, t) {
        if (vht()) return;
        const n = this._span ? Szr(this._span, "exception") : Xpn("exception");
        let i = "internal_error", r = "", s = "Error";
        e instanceof Error ? (i = e.message || i, r = e.stack ?? "", s = e.name ?? e.constructor?.name ?? s) : (i = String(e), s = "StringError"), Omi(n, "error", t), n.setAttribute("error.message", i), n.setAttribute("error.stack", r), n.setAttribute("error.type", s), n.setStatus({
            code: PNt.ERROR,
            message: i
        }), n.end(), swe.collect(n);
    }
    [(dAc = Czr, Symbol.dispose)]() {
        this.end();
    }
};

}

import { Ve } from "./errors.js";
import { Ho } from "./global.js";
import { Ehe } from "./liveRequestTrace.js";
import { _a } from "./sentry.js";
import { Ahe, TJe, s1 } from "./span.js";
import { On, _Je, rf } from "./spanCollector.js";
import { wJe } from "./spanLifecycle.js";
import { kJe } from "./spanSampling.js";
import { yJe } from "./traceparent.js";
import { h } from "./tslib.es6.js";
function r1(e, t) {
    return new Ahe({
        name: e,
        kind: t
    });
}
function PO(e, t, n) {
    return e.createChild(t, n);
}
function OO() {
    return !On().enabled;
}
function LO(e, t, n) {
    if (e.setAttribute("cursor.eventType", t), !!n) for (const [r, s] of Object.entries(n))e.setAttribute(r, s === void 0 ? "undefined" : s);
}
function bJe(e, t) {
    let n;
    return t ? n = PO(t, e) : n = r1(e), new Lhe(n);
}
var Phe, Nhe, UO, Dhe, Ohe, Lhe;
export { Dhe, LO, Lhe, Nhe, OO, Ohe, PO, Phe, UO, bJe, r1 };
var __wakaru_Uhe_initialized = false;
export function Uhe() {
if (__wakaru_Uhe_initialized) return;
__wakaru_Uhe_initialized = true;
"use strict";
h(), Ve(), Ho(), _a(), Ehe(), _Je(), TJe(), kJe(), yJe(), wJe(), typeof Symbol.dispose != "symbol" && Object.defineProperty(Symbol, "dispose", {
    value: Symbol("Symbol.dispose")
}), typeof Symbol.asyncDispose != "symbol" && Object.defineProperty(Symbol, "asyncDispose", {
    value: Symbol("Symbol.asyncDispose")
}), UO = "__tracingCtx", Dhe = class {
    constructor(){
        this[Phe] = !0;
    }
    spanContext() {}
    setAttribute(e, t) {}
    setInheritableAttribute(e, t) {}
    setError(e) {}
    end() {}
    startSpan(e) {
        return Ohe;
    }
    reportEvent(e, t) {}
    reportException(e, t) {}
    [(Phe = UO, Symbol.dispose)]() {}
}, Ohe = new Dhe, Lhe = class {
    constructor(e, t = !1){
        this[Nhe] = !0, this._ended = !1, this._doNotReport = !1, this._span = e, this._doNotReport = t;
    }
    end() {
        this._ended || (this._span?.end(), this._doNotReport || rf.collect(this._span), this._ended = !0);
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
            code: s1.ERROR,
            message: t
        });
    }
    startSpan(e) {
        return bJe(e, this._span);
    }
    reportEvent(e, t) {
        if (OO()) return;
        const n = this._span ? PO(this._span, e) : r1(e);
        LO(n, "event", t), n.end(), rf.collect(n);
    }
    reportException(e, t) {
        if (OO()) return;
        const n = this._span ? PO(this._span, "exception") : r1("exception");
        let r = "internal_error", s = "", i = "Error";
        e instanceof Error ? (r = e.message || r, s = e.stack ?? "", i = e.name ?? e.constructor?.name ?? i) : (r = String(e), i = "StringError"), LO(n, "error", t), n.setAttribute("error.message", r), n.setAttribute("error.stack", s), n.setAttribute("error.type", i), n.setStatus({
            code: s1.ERROR,
            message: r
        }), n.end(), rf.collect(n);
    }
    [(Nhe = UO, Symbol.dispose)]() {
        this.end();
    }
};

}

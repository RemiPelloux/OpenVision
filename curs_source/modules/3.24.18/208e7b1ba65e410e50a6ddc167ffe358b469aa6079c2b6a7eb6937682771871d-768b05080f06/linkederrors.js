import { xW } from "./aggregate-errors.js";
import { oI } from "./eventbuilder.js";
import { ar } from "./integration.js";
import { h } from "./tslib.es6.js";
function kc(e, t) {
    try {
        return e instanceof t;
    } catch  {
        return !1;
    }
}
function BFe(e, t) {
    return e(t.stack || "", 1);
}
function GFe(e, t) {
    const n = {
        type: t.name || t.constructor.name,
        value: t.message
    }, r = BFe(e, t);
    return r.length && (n.stacktrace = {
        frames: r
    }), n;
}
function d6e(e, t, n, r, s, i) {
    if (!s.exception?.values || !i || !kc(i.originalException, Error)) return;
    const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    a && (s.exception.values = pI(e, t, r, i.originalException, n, s.exception.values, a, 0));
}
function pI(e, t, n, r, s, i, a, o) {
    if (i.length >= n + 1) return i;
    let l = [
        ...i
    ];
    if (kc(r[s], Error)) {
        LW(a, o);
        const d = e(t, r[s]), u = l.length;
        UW(d, s, u, o), l = pI(e, t, n, r[s], s, [
            d,
            ...l
        ], d, u);
    }
    return Array.isArray(r.errors) && r.errors.forEach((d, u)=>{
        if (kc(d, Error)) {
            LW(a, o);
            const m = e(t, d), f = l.length;
            UW(m, `errors[${u}]`, f, o), l = pI(e, t, n, d, s, [
                m,
                ...l
            ], m, f);
        }
    }), l;
}
function LW(e, t) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...e.mechanism,
        ...e.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: t
    };
}
function UW(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    };
}
var FW, WW, BW, GW, u6e;
export { BFe, BW, FW, GFe, GW, LW, UW, WW, d6e, kc, pI, u6e };
var __wakaru_m6e_initialized = false;
export function m6e() {
if (__wakaru_m6e_initialized) return;
__wakaru_m6e_initialized = true;
"use strict";
h(), ar(), xW(), oI(), FW = "cause", WW = 5, BW = "LinkedErrors", GW = ((e = {})=>{
    const t = e.limit || WW, n = e.key || FW;
    return {
        name: BW,
        preprocessEvent (r, s, i) {
            const a = i.getOptions();
            d6e(GFe, a.stackParser, n, t, r, s);
        }
    };
}), u6e = GW;

}

import { sAe } from "./HVr.js";
import { TCc } from "./aggregate-errors.js";
import { tVr } from "./eventbuilder.js";
import { YH } from "./integration.js";
import { JGr } from "./qIc.js";
import { x } from "./tslib.es6.js";
function eVr(e, t) {
    const n = {
        type: t.name || t.constructor.name,
        value: t.message
    }, i = JGr(e, t);
    return i.length && (n.stacktrace = {
        frames: i
    }), n;
}
function Whi(e, t, n, i, r, s) {
    if (!r.exception?.values || !s || !sAe(s.originalException, Error)) return;
    const o = r.exception.values.length > 0 ? r.exception.values[r.exception.values.length - 1] : void 0;
    o && (r.exception.values = fVr(e, t, i, s.originalException, n, r.exception.values, o, 0));
}
function fVr(e, t, n, i, r, s, o, a) {
    if (s.length >= n + 1) return s;
    let c = [
        ...s
    ];
    if (sAe(i[r], Error)) {
        wCc(o, a);
        const l = e(t, i[r]), u = c.length;
        CCc(l, r, u, a), c = fVr(e, t, n, i[r], r, [
            l,
            ...c
        ], l, u);
    }
    return Array.isArray(i.errors) && i.errors.forEach((l, u)=>{
        if (sAe(l, Error)) {
            wCc(o, a);
            const h = e(t, l), p = c.length;
            CCc(h, `errors[${u}]`, p, a), c = fVr(e, t, n, l, r, [
                h,
                ...c
            ], h, p);
        }
    }), c;
}
function wCc(e, t) {
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
function CCc(e, t, n, i) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: i
    };
}
var ECc, xCc, ICc, ACc, RCc;
export { ACc, CCc, ECc, ICc, RCc, Whi, eVr, fVr, wCc, xCc };
var __wakaru_vrg_initialized = false;
export function vrg() {
if (__wakaru_vrg_initialized) return;
__wakaru_vrg_initialized = true;
"use strict";
x(), YH(), TCc(), tVr(), ECc = "cause", xCc = 5, ICc = "LinkedErrors", ACc = ((e = {})=>{
    const t = e.limit || xCc, n = e.key || ECc;
    return {
        name: ICc,
        preprocessEvent (i, r, s) {
            const o = s.getOptions();
            Whi(eVr, o.stackParser, n, t, i, r);
        }
    };
}), RCc = ACc;

}

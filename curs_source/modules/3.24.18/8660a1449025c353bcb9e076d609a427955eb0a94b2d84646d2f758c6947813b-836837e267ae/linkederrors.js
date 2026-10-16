import { Hje } from "./Iwo.js";
import { Uko } from "./SZu.js";
import { zGu } from "./aggregate-errors.js";
import { $ko } from "./eventbuilder.js";
import { hQ } from "./integration.js";
import { E } from "./tslib.es6.js";
function jko(t, e) {
    const n = {
        type: e.name || e.constructor.name,
        value: e.message
    }, i = Uko(t, e);
    return i.length && (n.stacktrace = {
        frames: i
    }), n;
}
function Bhr(t, e, n, i, r, s) {
    if (!r.exception?.values || !s || !Hje(s.originalException, Error)) return;
    const o = r.exception.values.length > 0 ? r.exception.values[r.exception.values.length - 1] : void 0;
    o && (r.exception.values = nwo(t, e, i, s.originalException, n, r.exception.values, o, 0));
}
function nwo(t, e, n, i, r, s, o, a) {
    if (s.length >= n + 1) return s;
    let l = [
        ...s
    ];
    if (Hje(i[r], Error)) {
        GGu(o, a);
        const c = t(e, i[r]), u = l.length;
        qGu(c, r, u, a), l = nwo(t, e, n, i[r], r, [
            c,
            ...l
        ], c, u);
    }
    return Array.isArray(i.errors) && i.errors.forEach((c, u)=>{
        if (Hje(c, Error)) {
            GGu(o, a);
            const d = t(e, c), h = l.length;
            qGu(d, `errors[${u}]`, h, a), l = nwo(t, e, n, c, r, [
                d,
                ...l
            ], d, h);
        }
    }), l;
}
function GGu(t, e) {
    t.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...t.mechanism,
        ...t.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: e
    };
}
function qGu(t, e, n, i) {
    t.mechanism = {
        handled: !0,
        ...t.mechanism,
        type: "chained",
        source: e,
        exception_id: n,
        parent_id: i
    };
}
var VGu, KGu, YGu, XGu, ZGu;
export { Bhr, GGu, KGu, VGu, XGu, YGu, ZGu, jko, nwo, qGu };
var __wakaru_ipy_initialized = false;
export function ipy() {
if (__wakaru_ipy_initialized) return;
__wakaru_ipy_initialized = true;
"use strict";
E(), hQ(), zGu(), $ko(), VGu = "cause", KGu = 5, YGu = "LinkedErrors", XGu = ((t = {})=>{
    const e = t.limit || KGu, n = t.key || VGu;
    return {
        name: YGu,
        preprocessEvent (i, r, s) {
            const o = s.getOptions();
            Bhr(jko, o.stackParser, n, e, i, r);
        }
    };
}), ZGu = XGu;

}

import { gt, tt } from "./debug-build.js";
import { Ke, lt } from "./debug-logger.js";
import { ar } from "./integration.js";
import { Tc } from "./stacktrace.js";
import { wC } from "./third-party-errors-filter.js";
import { h } from "./tslib.es6.js";
function P6e(e, t) {
    return t ? !!(N6e(e, t) || D6e(e, t)) : !1;
}
function N6e(e, t) {
    const n = e.message, r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !QW(e, t) || !XW(e, t));
}
function D6e(e, t) {
    const n = ZW(t), r = ZW(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !QW(e, t) || !XW(e, t));
}
function XW(e, t) {
    let n = wC(e), r = wC(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for(let s = 0; s < r.length; s++){
        const i = r[s], a = n[s];
        if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1;
    }
    return !0;
}
function QW(e, t) {
    let n = e.fingerprint, r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join("") === r.join("");
    } catch  {
        return !1;
    }
}
function ZW(e) {
    return e.exception?.values?.[0];
}
var eB, tB, O6e;
export { D6e, N6e, O6e, P6e, QW, XW, ZW, eB, tB };
var __wakaru_L6e_initialized = false;
export function L6e() {
if (__wakaru_L6e_initialized) return;
__wakaru_L6e_initialized = true;
"use strict";
h(), gt(), ar(), Ke(), Tc(), eB = "Dedupe", tB = (()=>{
    let e;
    return {
        name: eB,
        processEvent (t) {
            if (t.type) return t;
            try {
                if (P6e(t, e)) return tt && lt.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch  {}
            return e = t;
        }
    };
}), O6e = tB;

}

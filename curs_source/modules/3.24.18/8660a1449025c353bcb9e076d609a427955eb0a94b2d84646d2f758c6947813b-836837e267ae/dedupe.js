import { zdr } from "./SZu.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { hQ } from "./integration.js";
import { fFt } from "./stacktrace.js";
import { E } from "./tslib.es6.js";
function bpy(t, e) {
    return e ? !!(ypy(t, e) || Spy(t, e)) : !1;
}
function ypy(t, e) {
    const n = t.message, i = e.message;
    return !(!n && !i || n && !i || !n && i || n !== i || !lqu(t, e) || !aqu(t, e));
}
function Spy(t, e) {
    const n = cqu(e), i = cqu(t);
    return !(!n || !i || n.type !== i.type || n.value !== i.value || !lqu(t, e) || !aqu(t, e));
}
function aqu(t, e) {
    let n = zdr(t), i = zdr(e);
    if (!n && !i) return !0;
    if (n && !i || !n && i || (n = n, i = i, i.length !== n.length)) return !1;
    for(let r = 0; r < i.length; r++){
        const s = i[r], o = n[r];
        if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1;
    }
    return !0;
}
function lqu(t, e) {
    let n = t.fingerprint, i = e.fingerprint;
    if (!n && !i) return !0;
    if (n && !i || !n && i) return !1;
    n = n, i = i;
    try {
        return n.join("") === i.join("");
    } catch  {
        return !1;
    }
}
function cqu(t) {
    return t.exception?.values?.[0];
}
var uqu, dqu, LFt;
export { LFt, Spy, aqu, bpy, cqu, dqu, lqu, uqu, ypy };
var __wakaru_kpy_initialized = false;
export function kpy() {
if (__wakaru_kpy_initialized) return;
__wakaru_kpy_initialized = true;
"use strict";
E(), qR(), hQ(), JC(), fFt(), uqu = "Dedupe", dqu = (()=>{
    let t;
    return {
        name: uqu,
        processEvent (e) {
            if (e.type) return e;
            try {
                if (bpy(e, t)) return rg && so.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch  {}
            return t = e;
        }
    };
}), LFt = dqu;

}

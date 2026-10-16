import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { YH } from "./integration.js";
import { Xdi } from "./qIc.js";
import { ydt } from "./stacktrace.js";
import { x } from "./tslib.es6.js";
function Prg(e, t) {
    return t ? !!(Lrg(e, t) || Nrg(e, t)) : !1;
}
function Lrg(e, t) {
    const n = e.message, i = t.message;
    return !(!n && !i || n && !i || !n && i || n !== i || !HCc(e, t) || !$Cc(e, t));
}
function Nrg(e, t) {
    const n = WCc(t), i = WCc(e);
    return !(!n || !i || n.type !== i.type || n.value !== i.value || !HCc(e, t) || !$Cc(e, t));
}
function $Cc(e, t) {
    let n = Xdi(e), i = Xdi(t);
    if (!n && !i) return !0;
    if (n && !i || !n && i || (n = n, i = i, i.length !== n.length)) return !1;
    for(let r = 0; r < i.length; r++){
        const s = i[r], o = n[r];
        if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1;
    }
    return !0;
}
function HCc(e, t) {
    let n = e.fingerprint, i = t.fingerprint;
    if (!n && !i) return !0;
    if (n && !i || !n && i) return !1;
    n = n, i = i;
    try {
        return n.join("") === i.join("");
    } catch  {
        return !1;
    }
}
function WCc(e) {
    return e.exception?.values?.[0];
}
var GCc, VCc, Udt;
export { $Cc, GCc, HCc, Lrg, Nrg, Prg, Udt, VCc, WCc };
var __wakaru_Org_initialized = false;
export function Org() {
if (__wakaru_Org_initialized) return;
__wakaru_Org_initialized = true;
"use strict";
x(), kE(), YH(), Xk(), ydt(), GCc = "Dedupe", VCc = (()=>{
    let e;
    return {
        name: GCc,
        processEvent (t) {
            if (t.type) return t;
            try {
                if (Prg(t, e)) return Qh && zr.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch  {}
            return e = t;
        }
    };
}), Udt = VCc;

}

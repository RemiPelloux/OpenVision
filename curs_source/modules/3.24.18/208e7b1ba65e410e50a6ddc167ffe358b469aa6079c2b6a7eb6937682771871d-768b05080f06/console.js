import { dt } from "./currentScopes.js";
import { tt } from "./debug-build.js";
import { Ep, Ke, lt, wp } from "./debug-logger.js";
import { S8 } from "./eventFilters.js";
import { Vr } from "./exports.js";
import { IC } from "./growthbook.js";
import { EC, Rp, bp } from "./handlers.js";
import { ar } from "./integration.js";
import { es } from "./misc.js";
import { _r } from "./object.js";
import { vI } from "./severity.js";
import { Kn, Mp, Rr, dd } from "./spanUtils.js";
import { ik } from "./stacktrace.js";
import { gs } from "./storageMain.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
import { Ot, dn } from "./worldwide.js";
function d8(e) {
    try {
        return !e || typeof e != "function" ? ik : e.name || ik;
    } catch  {
        return ik;
    }
}
function s3e(e, t) {
    bp[e] = bp[e] || [], bp[e].push(t);
}
function i3e(e, t) {
    if (!EC[e]) {
        EC[e] = !0;
        try {
            t();
        } catch (n) {
            tt && lt.error(`Error while instrumenting ${e}`, n);
        }
    }
}
function a3e(e, t) {
    const n = e && bp[e];
    if (n) for (const r of n)try {
        r(t);
    } catch (s) {
        tt && lt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${d8(r)}
Error:`, s);
    }
}
function h8(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function MC(e, t) {
    if (!Array.isArray(e)) return "";
    const n = [];
    for(let r = 0; r < e.length; r++){
        const s = e[r];
        try {
            h8(s) ? n.push("[VueViewModel]") : n.push(String(s));
        } catch  {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(t);
}
function y8(e, t) {
    const n = S8(e);
    if (!n) return;
    const r = {
        type: "generic",
        handled: !0
    }, s = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...s,
        ...t
    }, t && "data" in t) {
        const i = {
            ...s?.data,
            ...t.data
        };
        n.mechanism.data = i;
    }
}
function fk(...e) {
    const t = dd(), n = Mp(t);
    if (e.length === 2) {
        const [r, s] = e;
        return r ? n.withSetScope(r, s) : n.withScope(s);
    }
    return n.withScope(e[0]);
}
function dW(e, t) {
    const n = typeof t == "string" ? t : void 0, r = typeof t != "string" ? {
        captureContext: t
    } : void 0;
    return Rr().captureMessage(e, n, r);
}
function _I(e) {
    const t = "console";
    s3e(t, e), i3e(t, C6e);
}
function C6e() {
    "console" in Ot && wp.forEach(function(e) {
        e in Ot.console && IC(Ot.console, e, function(t) {
            return Ep[e] = t, function(...n) {
                const r = Ep[e];
                if (Nk) {
                    r?.apply(Ot.console, n);
                    return;
                }
                const s = {
                    args: n,
                    level: e
                };
                Nk = !0;
                try {
                    a3e("console", s);
                } finally{
                    Nk = !1;
                }
                r?.apply(Ot.console, n);
            };
        });
    });
}
var Nk;
function zW(e) {
    return e === "warn" ? "warning" : [
        "fatal",
        "error",
        "warning",
        "log",
        "info",
        "debug"
    ].includes(e) ? e : "log";
}
function I6e(e, t, n) {
    const r = {
        level: zW(t),
        extra: {
            arguments: e
        }
    };
    fk((s)=>{
        if (s.addEventProcessor((o)=>(o.logger = "console", y8(o, {
                handled: n,
                type: "auto.core.capture_console"
            }), o)), t === "assert") {
            if (!e[0]) {
                const o = `Assertion failed: ${MC(e.slice(1), " ") || "console.assert"}`;
                s.setExtra("arguments", e.slice(1)), dW(o, r);
            }
            return;
        }
        const i = e.find((o)=>o instanceof Error);
        if (i) {
            gs(i, r);
            return;
        }
        const a = MC(e, " ");
        dW(a, r);
    });
}
var YW, JW, A6e;
export { A6e, C6e, I6e, JW, MC, Nk, YW, _I, a3e, d8, dW, fk, h8, i3e, s3e, y8, zW };
var __wakaru_Dk_initialized = false;
export function Dk() {
if (__wakaru_Dk_initialized) return;
__wakaru_Dk_initialized = true;
"use strict";
h(), Ke(), _r(), dn(), Rp(), Nk = !1;

}
var __wakaru_M6e_initialized = false;
export function M6e() {
if (__wakaru_M6e_initialized) return;
__wakaru_M6e_initialized = true;
"use strict";
h(), dt(), Vr(), Dk(), ar(), Ke(), es(), vI(), Ui(), dn(), YW = "CaptureConsole", JW = ((e = {})=>{
    const t = e.levels || wp, n = e.handled ?? !0;
    return {
        name: YW,
        setup (r) {
            "console" in Ot && _I(({ args: s, level: i })=>{
                Kn() !== r || !t.includes(i) || I6e(s, i, n);
            });
        }
    };
}), A6e = JW;

}

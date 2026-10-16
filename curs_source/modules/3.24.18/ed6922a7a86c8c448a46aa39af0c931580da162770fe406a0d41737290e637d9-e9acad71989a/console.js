import { Hce, N3e, O3e } from "./HVr.js";
import { Zke } from "./composerDataCreation.js";
import { Km } from "./composerMessageStorageService.js";
import { NT } from "./currentScopes.js";
import { Xk, hLt, pLt } from "./debug-logger.js";
import { tJ } from "./exports.js";
import { sA } from "./growthbook.js";
import { ghn } from "./handlers.js";
import { YH } from "./integration.js";
import { Mie } from "./misc.js";
import { wV } from "./object.js";
import { NLt, qH, tqe } from "./qIc.js";
import { yVr } from "./severity.js";
import { Pu } from "./spanUtils.js";
import { oAe } from "./string.js";
import { XB } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Og, c3 } from "./worldwide.js";
function LLt(e) {
    const t = "console";
    N3e(t, e), O3e(t, Rrg);
}
function Rrg() {
    "console" in Og && hLt.forEach(function(e) {
        e in Og.console && sA(Og.console, e, function(t) {
            return pLt[e] = t, function(...n) {
                const i = pLt[e];
                if (Vhi) {
                    i?.apply(Og.console, n);
                    return;
                }
                const r = {
                    args: n,
                    level: e
                };
                Vhi = !0;
                try {
                    Hce("console", r);
                } finally{
                    Vhi = !1;
                }
                i?.apply(Og.console, n);
            };
        });
    });
}
var Vhi;
function Drg(e, t, n) {
    const i = {
        level: NLt(t),
        extra: {
            arguments: e
        }
    };
    XB((r)=>{
        if (r.addEventProcessor((a)=>(a.logger = "console", qH(a, {
                handled: n,
                type: "auto.core.capture_console"
            }), a)), t === "assert") {
            if (!e[0]) {
                const a = `Assertion failed: ${tqe(e.slice(1), " ") || "console.assert"}`;
                r.setExtra("arguments", e.slice(1)), Zke(a, i);
            }
            return;
        }
        const s = e.find((a)=>a instanceof Error);
        if (s) {
            Km(s, i);
            return;
        }
        const o = tqe(e, " ");
        Zke(o, i);
    });
}
var BCc, UCc, qhi;
export { BCc, Drg, LLt, Rrg, UCc, Vhi, qhi };
var __wakaru_jhi_initialized = false;
export function jhi() {
if (__wakaru_jhi_initialized) return;
__wakaru_jhi_initialized = true;
"use strict";
x(), Xk(), wV(), c3(), ghn(), Vhi = !1;

}
var __wakaru_Mrg_initialized = false;
export function Mrg() {
if (__wakaru_Mrg_initialized) return;
__wakaru_Mrg_initialized = true;
"use strict";
x(), NT(), tJ(), jhi(), YH(), Xk(), Mie(), yVr(), oAe(), c3(), BCc = "CaptureConsole", UCc = ((e = {})=>{
    const t = e.levels || hLt, n = e.handled ?? !0;
    return {
        name: BCc,
        setup (i) {
            "console" in Og && LLt(({ args: r, level: s })=>{
                Pu() !== i || !t.includes(s) || Drg(r, s, n);
            });
        }
    };
}), qhi = UCc;

}

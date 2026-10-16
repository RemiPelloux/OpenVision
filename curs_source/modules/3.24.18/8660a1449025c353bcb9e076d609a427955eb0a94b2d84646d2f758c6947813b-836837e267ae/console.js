import { iet, net, uke } from "./Iwo.js";
import { cQ, jun, vvt } from "./SZu.js";
import { TOe } from "./composerDataCreation.js";
import { Sv } from "./composerMessageStorageService.js";
import { JA } from "./currentScopes.js";
import { JC, _un, vun } from "./debug-logger.js";
import { Tde } from "./exports.js";
import { CD } from "./growthbook.js";
import { LYn } from "./handlers.js";
import { hQ } from "./integration.js";
import { uve } from "./misc.js";
import { Rte } from "./object.js";
import { owo } from "./severity.js";
import { ah } from "./spanUtils.js";
import { Wje } from "./string.js";
import { s7 } from "./trace.js";
import { E } from "./tslib.es6.js";
import { o_, r7 } from "./worldwide.js";
function Uun(t) {
    const e = "console";
    net(e, t), iet(e, fpy);
}
function fpy() {
    "console" in o_ && vun.forEach(function(t) {
        t in o_.console && CD(o_.console, t, function(e) {
            return _un[t] = e, function(...n) {
                const i = _un[t];
                if (jhr) {
                    i?.apply(o_.console, n);
                    return;
                }
                const r = {
                    args: n,
                    level: t
                };
                jhr = !0;
                try {
                    uke("console", r);
                } finally{
                    jhr = !1;
                }
                i?.apply(o_.console, n);
            };
        });
    });
}
var jhr;
function vpy(t, e, n) {
    const i = {
        level: jun(e),
        extra: {
            arguments: t
        }
    };
    s7((r)=>{
        if (r.addEventProcessor((a)=>(a.logger = "console", cQ(a, {
                handled: n,
                type: "auto.core.capture_console"
            }), a)), e === "assert") {
            if (!t[0]) {
                const a = `Assertion failed: ${vvt(t.slice(1), " ") || "console.assert"}`;
                r.setExtra("arguments", t.slice(1)), TOe(a, i);
            }
            return;
        }
        const s = t.find((a)=>a instanceof Error);
        if (s) {
            Sv(s, i);
            return;
        }
        const o = vvt(t, " ");
        TOe(o, i);
    });
}
var squ, oqu, Hhr;
export { Hhr, Uun, fpy, jhr, oqu, squ, vpy };
var __wakaru_$hr_initialized = false;
export function $hr() {
if (__wakaru_$hr_initialized) return;
__wakaru_$hr_initialized = true;
"use strict";
E(), JC(), Rte(), r7(), LYn(), jhr = !1;

}
var __wakaru__py_initialized = false;
export function _py() {
if (__wakaru__py_initialized) return;
__wakaru__py_initialized = true;
"use strict";
E(), JA(), Tde(), $hr(), hQ(), JC(), uve(), owo(), Wje(), r7(), squ = "CaptureConsole", oqu = ((t = {})=>{
    const e = t.levels || vun, n = t.handled ?? !0;
    return {
        name: squ,
        setup (i) {
            "console" in o_ && Uun(({ args: r, level: s })=>{
                ah() !== i || !e.includes(s) || vpy(r, s, n);
            });
        }
    };
}), Hhr = oqu;

}

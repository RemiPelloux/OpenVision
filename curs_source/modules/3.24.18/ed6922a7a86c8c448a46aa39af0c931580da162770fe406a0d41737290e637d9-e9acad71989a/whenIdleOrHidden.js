import { kpi, wjr } from "./runOnce.js";
import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var Rjr;
export { Rjr };
var __wakaru_zTc_initialized = false;
export function zTc() {
if (__wakaru_zTc_initialized) return;
__wakaru_zTc_initialized = true;
"use strict";
x(), fK(), wjr(), Rjr = (e)=>{
    const t = "requestIdleCallback" in by ? 1e3 : 0, n = by.requestIdleCallback || by.setTimeout, i = by.cancelIdleCallback || by.clearTimeout;
    if (by.document?.visibilityState === "hidden") e();
    else {
        const r = kpi(e);
        let s = -1;
        const o = ()=>{
            i(s), removeEventListener("visibilitychange", o, {
                capture: !0
            }), removeEventListener("pagehide", o, {
                capture: !0
            }), r();
        };
        by.document && (addEventListener("visibilitychange", o, {
            once: !0,
            capture: !0
        }), addEventListener("pagehide", o, {
            once: !0,
            capture: !0
        })), s = n(()=>{
            removeEventListener("visibilitychange", o, {
                capture: !0
            }), removeEventListener("pagehide", o, {
                capture: !0
            }), r();
        }, {
            timeout: t
        });
    }
};

}

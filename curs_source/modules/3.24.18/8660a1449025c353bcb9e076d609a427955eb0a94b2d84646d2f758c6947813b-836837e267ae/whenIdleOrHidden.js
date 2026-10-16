import { _pr, c0o } from "./runOnce.js";
import { E } from "./tslib.es6.js";
import { Rse, Zk } from "./types.js";
var f0o;
export { f0o };
var __wakaru_mKu_initialized = false;
export function mKu() {
if (__wakaru_mKu_initialized) return;
__wakaru_mKu_initialized = true;
"use strict";
E(), Rse(), c0o(), f0o = (t)=>{
    const e = "requestIdleCallback" in Zk ? 1e3 : 0, n = Zk.requestIdleCallback || Zk.setTimeout, i = Zk.cancelIdleCallback || Zk.clearTimeout;
    if (Zk.document?.visibilityState === "hidden") t();
    else {
        const r = _pr(t);
        let s = -1;
        const o = ()=>{
            i(s), removeEventListener("visibilitychange", o, {
                capture: !0
            }), removeEventListener("pagehide", o, {
                capture: !0
            }), r();
        };
        Zk.document && (addEventListener("visibilitychange", o, {
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
            timeout: e
        });
    }
};

}

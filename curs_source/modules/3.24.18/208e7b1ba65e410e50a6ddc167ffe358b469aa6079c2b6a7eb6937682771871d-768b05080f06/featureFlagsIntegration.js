import { tt } from "./debug-build.js";
import { lt } from "./debug-logger.js";
import { RB, SI, Wp, bB } from "./featureFlags.js";
import { ar } from "./integration.js";
import { Ip } from "./scope.js";
import { Mp, Rr, dd, ps } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
function H8() {
    const e = dd(), t = Mp(e);
    return t.getActiveSpan ? t.getActiveSpan() : Ip(Rr());
}
function yB(e) {
    const n = Rr().getScopeData().contexts.flags, r = n ? n.values : [];
    return r.length && (e.contexts === void 0 && (e.contexts = {}), e.contexts.flags = {
        values: [
            ...r
        ]
    }), e;
}
function wB(e, t, n = bB) {
    const r = Rr().getScopeData().contexts;
    r.flags || (r.flags = {
        values: []
    });
    const s = r.flags.values;
    p8e(s, e, t, n);
}
function p8e(e, t, n, r) {
    if (typeof n != "boolean") return;
    if (e.length > r) {
        tt && lt.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`);
        return;
    }
    const s = e.findIndex((i)=>i.flag === t);
    s !== -1 && e.splice(s, 1), e.length === r && e.shift(), e.push({
        flag: t,
        result: n
    });
}
function EB(e, t, n = RB) {
    if (typeof t != "boolean") return;
    const r = H8();
    if (!r) return;
    const s = ps(r).data;
    if (`${Wp}${e}` in s) {
        r.setAttribute(`${Wp}${e}`, t);
        return;
    }
    Object.keys(s).filter((a)=>a.startsWith(Wp)).length < n && r.setAttribute(`${Wp}${e}`, t);
}
var h8e;
export { EB, H8, h8e, p8e, wB, yB };
var __wakaru_g8e_initialized = false;
export function g8e() {
if (__wakaru_g8e_initialized) return;
__wakaru_g8e_initialized = true;
"use strict";
h(), ar(), SI(), h8e = ()=>({
        name: "FeatureFlags",
        processEvent (e, t, n) {
            return yB(e);
        },
        addFeatureFlag (e, t) {
            wB(e, t), EB(e, t);
        }
    });

}

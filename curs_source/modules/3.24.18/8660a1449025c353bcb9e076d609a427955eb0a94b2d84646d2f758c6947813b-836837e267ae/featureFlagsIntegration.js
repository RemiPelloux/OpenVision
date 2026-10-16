import { rg } from "./debug-build.js";
import { so } from "./debug-logger.js";
import { dwo, hwo, mXn, pwo } from "./featureFlags.js";
import { eL } from "./inp.js";
import { hQ } from "./integration.js";
import { Kb, Yb } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
function OFt(t) {
    const n = Kb().getScopeData().contexts.flags, i = n ? n.values : [];
    return i.length && (t.contexts === void 0 && (t.contexts = {}), t.contexts.flags = {
        values: [
            ...i
        ]
    }), t;
}
function xvt(t, e, n = dwo) {
    const i = Kb().getScopeData().contexts;
    i.flags || (i.flags = {
        values: []
    });
    const r = i.flags.values;
    zpy(r, t, e, n);
}
function zpy(t, e, n, i) {
    if (typeof n != "boolean") return;
    if (t.length > i) {
        rg && so.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${i}`);
        return;
    }
    const r = t.findIndex((s)=>s.flag === e);
    r !== -1 && t.splice(r, 1), t.length === i && t.shift(), t.push({
        flag: e,
        result: n
    });
}
function Avt(t, e, n = hwo) {
    if (typeof e != "boolean") return;
    const i = eL();
    if (!i) return;
    const r = Yb(i).data;
    if (`${mXn}${t}` in r) {
        i.setAttribute(`${mXn}${t}`, e);
        return;
    }
    Object.keys(r).filter((o)=>o.startsWith(mXn)).length < n && i.setAttribute(`${mXn}${t}`, e);
}
var Yhr;
export { Avt, OFt, Yhr, xvt, zpy };
var __wakaru_Vpy_initialized = false;
export function Vpy() {
if (__wakaru_Vpy_initialized) return;
__wakaru_Vpy_initialized = true;
"use strict";
E(), hQ(), pwo(), Yhr = ()=>({
        name: "FeatureFlags",
        processEvent (t, e, n) {
            return OFt(t);
        },
        addFeatureFlag (t, e) {
            xvt(t, e), Avt(t, e);
        }
    });

}

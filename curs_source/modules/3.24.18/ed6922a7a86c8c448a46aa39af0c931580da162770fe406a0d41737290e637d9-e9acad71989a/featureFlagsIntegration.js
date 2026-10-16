import { Qh } from "./debug-build.js";
import { zr } from "./debug-logger.js";
import { EVr, Khn, TVr, xVr } from "./featureFlags.js";
import { mD } from "./inp.js";
import { YH } from "./integration.js";
import { iv, nv } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
function $dt(e) {
    const n = nv().getScopeData().contexts.flags, i = n ? n.values : [];
    return i.length && (e.contexts === void 0 && (e.contexts = {}), e.contexts.flags = {
        values: [
            ...i
        ]
    }), e;
}
function hqe(e, t, n = TVr) {
    const i = nv().getScopeData().contexts;
    i.flags || (i.flags = {
        values: []
    });
    const r = i.flags.values;
    osg(r, e, t, n);
}
function osg(e, t, n, i) {
    if (typeof n != "boolean") return;
    if (e.length > i) {
        Qh && zr.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${i}`);
        return;
    }
    const r = e.findIndex((s)=>s.flag === t);
    r !== -1 && e.splice(r, 1), e.length === i && e.shift(), e.push({
        flag: t,
        result: n
    });
}
function pqe(e, t, n = EVr) {
    if (typeof t != "boolean") return;
    const i = mD();
    if (!i) return;
    const r = iv(i).data;
    if (`${Khn}${e}` in r) {
        i.setAttribute(`${Khn}${e}`, t);
        return;
    }
    Object.keys(r).filter((o)=>o.startsWith(Khn)).length < n && i.setAttribute(`${Khn}${e}`, t);
}
var Jhi;
export { $dt, Jhi, hqe, osg, pqe };
var __wakaru_asg_initialized = false;
export function asg() {
if (__wakaru_asg_initialized) return;
__wakaru_asg_initialized = true;
"use strict";
x(), YH(), xVr(), Jhi = ()=>({
        name: "FeatureFlags",
        processEvent (e, t, n) {
            return $dt(e);
        },
        addFeatureFlag (e, t) {
            hqe(e, t), pqe(e, t);
        }
    });

}

import { h } from "./tslib.es6.js";
function lxe(e, t, n) {
    t[ti.DI_TARGET] === t ? t[ti.DI_DEPENDENCIES].push({
        id: e,
        index: n
    }) : (t[ti.DI_DEPENDENCIES] = [
        {
            id: e,
            index: n
        }
    ], t[ti.DI_TARGET] = t);
}
function Q(e) {
    if (ti.serviceIds.has(e)) return ti.serviceIds.get(e);
    const t = function(n, r, s) {
        if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
        lxe(t, n, s);
    };
    return t.toString = ()=>e, ti.serviceIds.set(e, t), t;
}
var ti, ni;
export { Q, lxe, ni, ti };
var __wakaru_ne_initialized = false;
export function ne() {
if (__wakaru_ne_initialized) return;
__wakaru_ne_initialized = true;
"use strict";
h(), ((e)=>{
    e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
    function t(n) {
        return n[e.DI_DEPENDENCIES] || [];
    }
    e.getServiceDependencies = t;
})(ti || (ti = {})), ni = Q("instantiationService");

}

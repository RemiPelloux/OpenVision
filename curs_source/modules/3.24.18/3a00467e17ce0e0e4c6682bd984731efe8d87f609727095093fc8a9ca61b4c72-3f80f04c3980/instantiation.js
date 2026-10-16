import { w } from "./tslib.es6.js";
function $2(e, t, r) {
    t[Te.DI_TARGET] === t ? t[Te.DI_DEPENDENCIES].push({
        id: e,
        index: r
    }) : (t[Te.DI_DEPENDENCIES] = [
        {
            id: e,
            index: r
        }
    ], t[Te.DI_TARGET] = t);
}
function D1(e) {
    if (Te.serviceIds.has(e)) return Te.serviceIds.get(e);
    const t = function(r, s, i) {
        if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
        $2(t, r, i);
    };
    return t.toString = ()=>e, Te.serviceIds.set(e, t), t;
}
var Te, j2;
export { $2, D1, Te, j2 };
var __wakaru_Sn_initialized = false;
export function Sn() {
if (__wakaru_Sn_initialized) return;
__wakaru_Sn_initialized = true;
"use strict";
w(), ((e)=>{
    e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
    function t(r) {
        return r[e.DI_DEPENDENCIES] || [];
    }
    e.getServiceDependencies = t;
})(Te || (Te = {})), j2 = D1("instantiationService");

}

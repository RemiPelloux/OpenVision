import { jn } from "./SZu.js";
import { E } from "./tslib.es6.js";
var sAe, dn;
export { dn, sAe };
var __wakaru_It_initialized = false;
export function It() {
if (__wakaru_It_initialized) return;
__wakaru_It_initialized = true;
"use strict";
E(), ((t)=>{
    t.serviceIds = new Map, t.DI_TARGET = "$di$target", t.DI_DEPENDENCIES = "$di$dependencies";
    function e(n) {
        return n[t.DI_DEPENDENCIES] || [];
    }
    t.getServiceDependencies = e;
})(sAe || (sAe = {})), dn = jn("instantiationService");

}

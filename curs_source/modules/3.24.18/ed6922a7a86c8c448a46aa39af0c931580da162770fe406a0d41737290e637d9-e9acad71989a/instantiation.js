import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Age, _t;
export { Age, _t };
var __wakaru_Ze_initialized = false;
export function Ze() {
if (__wakaru_Ze_initialized) return;
__wakaru_Ze_initialized = true;
"use strict";
x(), ((e)=>{
    e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
    function t(n) {
        return n[e.DI_DEPENDENCIES] || [];
    }
    e.getServiceDependencies = t;
})(Age || (Age = {})), _t = vn("instantiationService");

}

import { E } from "./tslib.es6.js";
var bgr, ygr, aEo;
export { aEo, bgr, ygr };
var __wakaru_Sgr_initialized = false;
export function Sgr() {
if (__wakaru_Sgr_initialized) return;
__wakaru_Sgr_initialized = true;
"use strict";
E(), bgr = "3.20.2", ygr = {
    sdkVersion: bgr,
    sdkType: "js-mono"
}, aEo = {
    get: ()=>ygr,
    add: (t)=>{
        ygr = {
            ...ygr,
            ...t
        };
    }
};

}

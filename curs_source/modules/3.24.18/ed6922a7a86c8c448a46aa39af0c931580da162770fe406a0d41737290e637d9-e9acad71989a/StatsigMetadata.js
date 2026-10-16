import { x } from "./tslib.es6.js";
var mHi, gHi, Rto;
export { Rto, gHi, mHi };
var __wakaru_fHi_initialized = false;
export function fHi() {
if (__wakaru_fHi_initialized) return;
__wakaru_fHi_initialized = true;
"use strict";
x(), mHi = "3.20.2", gHi = {
    sdkVersion: mHi,
    sdkType: "js-mono"
}, Rto = {
    get: ()=>gHi,
    add: (e)=>{
        gHi = {
            ...gHi,
            ...e
        };
    }
};

}

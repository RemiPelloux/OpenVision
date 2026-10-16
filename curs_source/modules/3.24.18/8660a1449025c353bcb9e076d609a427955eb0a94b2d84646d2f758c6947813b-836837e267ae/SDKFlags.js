import { E } from "./tslib.es6.js";
var _Eo, bEo;
export { _Eo, bEo };
var __wakaru_NJu_initialized = false;
export function NJu() {
if (__wakaru_NJu_initialized) return;
__wakaru_NJu_initialized = true;
"use strict";
E(), _Eo = {}, bEo = {
    setFlags: (t, e)=>{
        _Eo[t] = e;
    },
    get: (t, e)=>_Eo[t]?.[e] ?? !1
};

}

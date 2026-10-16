import { x } from "./tslib.es6.js";
var Hto, Wto;
export { Hto, Wto };
var __wakaru_Kfd_initialized = false;
export function Kfd() {
if (__wakaru_Kfd_initialized) return;
__wakaru_Kfd_initialized = true;
"use strict";
x(), Hto = {}, Wto = {
    setFlags: (e, t)=>{
        Hto[e] = t;
    },
    get: (e, t)=>Hto[e]?.[t] ?? !1
};

}

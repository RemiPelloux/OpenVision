import { x } from "./tslib.es6.js";
var Oto, yHi, aLn;
export { Oto, aLn, yHi };
var __wakaru_Fto_initialized = false;
export function Fto() {
if (__wakaru_Fto_initialized) return;
__wakaru_Fto_initialized = true;
"use strict";
x(), Oto = {}, aLn = {
    _get: (e)=>(Oto[e] ?? "js-mono") + (yHi ?? ""),
    _setClientType (e, t) {
        Oto[e] = t;
    },
    _setBindingType (e) {
        (!yHi || yHi === "-react") && (yHi = "-" + e);
    }
};

}

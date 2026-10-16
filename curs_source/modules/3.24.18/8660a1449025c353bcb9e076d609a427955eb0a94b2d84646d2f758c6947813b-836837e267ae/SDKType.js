import { E } from "./tslib.es6.js";
var pEo, Tgr, NZn;
export { NZn, Tgr, pEo };
var __wakaru_mEo_initialized = false;
export function mEo() {
if (__wakaru_mEo_initialized) return;
__wakaru_mEo_initialized = true;
"use strict";
E(), pEo = {}, NZn = {
    _get: (t)=>(pEo[t] ?? "js-mono") + (Tgr ?? ""),
    _setClientType (t, e) {
        pEo[t] = e;
    },
    _setBindingType (t) {
        (!Tgr || Tgr === "-react") && (Tgr = "-" + t);
    }
};

}

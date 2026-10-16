import { E } from "./tslib.es6.js";
var _pr;
export { _pr };
var __wakaru_c0o_initialized = false;
export function c0o() {
if (__wakaru_c0o_initialized) return;
__wakaru_c0o_initialized = true;
"use strict";
E(), _pr = (t)=>{
    let e = !1;
    return ()=>{
        e || (t(), e = !0);
    };
};

}

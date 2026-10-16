import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { $h } from "./use-reactive.react_2.js";
var k1_, w1_, C1_, T1_, u1c;
export { C1_, T1_, k1_, u1c, w1_ };
var __wakaru_eYC_initialized = false;
export function eYC() {
if (__wakaru_eYC_initialized) return;
__wakaru_eYC_initialized = true;
"use strict";
E(), Kf(), $h(), k1_ = new ca([]), w1_ = {
    value: void 0,
    onChange: ()=>({
            dispose: ()=>{}
        })
}, C1_ = {
    value: null,
    onChange: ()=>({
            dispose: ()=>{}
        })
}, T1_ = ()=>{}, u1c = {
    hasMismatch: !1,
    agentBranch: "",
    currentBranch: "",
    dismiss: T1_
};

}

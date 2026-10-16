import { D } from "./Iwo.js";
import { _re } from "./composer-pill.react.js";
import { g8 } from "./mm_.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { c as cYC } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as dYC } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as uYC } from "./react-runtime/react/esm-index-production.js";
var E1_;
export { E1_ };
var __wakaru_hYC_initialized = false;
export function hYC() {
if (__wakaru_hYC_initialized) return;
__wakaru_hYC_initialized = true;
"use strict";
E(), Bt(), _re(), E1_ = uYC(function(e) {
    const n = cYC(5), { onClick: i } = e;
    let r;
    n[0] !== i ? (r = ()=>i(), n[0] = i, n[1] = r) : r = n[1];
    const s = r;
    let o;
    n[2] === Symbol.for("react.memo_cache_sentinel") ? (o = D("glass.agentPanel.continueWorking", "Continue Working"), n[2] = o) : o = n[2];
    let a;
    return n[3] !== s ? (a = dYC(g8, {
        onClick: s,
        children: o
    }), n[3] = s, n[4] = a) : a = n[4], a;
});

}

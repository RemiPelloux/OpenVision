import { zt } from "./LYd.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { c as Ke0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Xe0 } from "./react-runtime/react/esm-index-production.js";
import { memo as Ye0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as ncv } from "./react-runtime/react/esm-jsx-runtime-production.js";
var icv, rcv;
export { icv, rcv };
var __wakaru_Ze0_initialized = false;
export function Ze0() {
if (__wakaru_Ze0_initialized) return;
__wakaru_Ze0_initialized = true;
"use strict";
E(), Mt(), icv = {
    icon: {
        kmuXW: "glass-2lah0s",
        $$css: !0
    }
}, rcv = Ye0(function(e) {
    const n = Ke0(8), { iconUrl: i } = e, [r, s] = Xe0(null);
    let o;
    n[0] !== i ? (o = ()=>{
        s(i?.trim() ?? null);
    }, n[0] = i, n[1] = o) : o = n[1];
    const a = o;
    let l;
    n[2] !== i ? (l = i?.trim() || void 0, n[2] = i, n[3] = l) : l = n[3];
    const c = l;
    if (c !== void 0 && r !== c) {
        let h;
        return n[4] !== a || n[5] !== c ? (h = ncv("img", {
            className: "glass-2lah0s glass-ek66a6 glass-1q5geii glass-1bl94mz glass-19kjcj4",
            alt: "",
            onError: a,
            src: c
        }), n[4] = a, n[5] = c, n[6] = h) : h = n[6], h;
    }
    let d;
    return n[7] === Symbol.for("react.memo_cache_sentinel") ? (d = ncv(zt, {
        name: "globe",
        rootStyle: icv.icon,
        size: "base"
    }), n[7] = d) : d = n[7], d;
});

}

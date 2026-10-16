import { Nks } from "./BA.js";
import { BgC, nt_ } from "./react-vnc.js";
import { E } from "./tslib.es6.js";
import { Lks } from "./use-page-visible.react.js";
import { jsx as $gC } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as UgC } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { forwardRef as jgC } from "./react-runtime/react/esm-index-production.js";
var mpc;
export { mpc };
var __wakaru_HgC_initialized = false;
export function HgC() {
if (__wakaru_HgC_initialized) return;
__wakaru_HgC_initialized = true;
"use strict";
E(), BgC(), Lks(), mpc = jgC(function(e, n) {
    const i = UgC(3);
    if (!Nks()) return null;
    let s;
    return i[0] !== e || i[1] !== n ? (s = $gC(nt_, {
        ref: n,
        ...e
    }), i[0] = e, i[1] = n, i[2] = s) : s = i[2], s;
});

}

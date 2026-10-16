import { E } from "./tslib.es6.js";
import { createContext as Mv0 } from "./react-runtime/react/esm-index-production.js";
var GQt;
export { GQt };
var __wakaru_vFi_initialized = false;
export function vFi() {
if (__wakaru_vFi_initialized) return;
__wakaru_vFi_initialized = true;
"use client";
E(), GQt = Mv0({
    transformPagePoint: (t)=>t,
    isStatic: !1,
    reducedMotion: "never"
});

}

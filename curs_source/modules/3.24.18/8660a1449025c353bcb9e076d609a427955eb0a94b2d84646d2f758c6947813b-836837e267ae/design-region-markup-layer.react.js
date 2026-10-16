import { Wfv } from "./ofv.js";
import { CQt, EKl, q5i } from "./region-markup.js";
import { E } from "./tslib.es6.js";
import { jsx as IRs } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as qb0 } from "./react-runtime/react/esm-index-production.js";
var uZl;
export { uZl };
var __wakaru_Pkv_initialized = false;
export function Pkv() {
if (__wakaru_Pkv_initialized) return;
__wakaru_Pkv_initialized = true;
"use strict";
E(), CQt(), uZl = qb0(function({ shape: e, render: n }) {
    return Wfv(e, n).map((i, r)=>i.paint === "fill" ? IRs("path", {
            d: i.d,
            fill: q5i
        }, r) : IRs("path", {
            d: i.d,
            fill: "none",
            stroke: q5i,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: EKl
        }, r));
});

}

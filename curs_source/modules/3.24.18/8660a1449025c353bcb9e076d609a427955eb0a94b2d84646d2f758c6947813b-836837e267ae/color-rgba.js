import { Rm1, ujr } from "./css-named-colors.js";
import { E } from "./tslib.es6.js";
var t1p, bAa, yAa, n1p, SAa, i1p;
export { SAa, bAa, i1p, n1p, t1p, yAa };
var __wakaru_Hwn_initialized = false;
export function Hwn() {
if (__wakaru_Hwn_initialized) return;
__wakaru_Hwn_initialized = true;
"use strict";
E(), Rm1(), t1p = /^([a-z]+)\(([^()]*)\)$/i, bAa = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i, yAa = {
    "": 1,
    deg: 1,
    grad: .9,
    rad: 180 / Math.PI,
    turn: 360
}, n1p = .5 / 255, SAa = {
    rgb: "rgb",
    rgba: "rgb",
    hsl: "hsl",
    hsla: "hsl",
    oklab: "oklab",
    oklch: "oklch"
}, i1p = new Map(Object.entries(ujr).reverse().map(([t, e])=>[
        e,
        t
    ]));

}

import { sFi, wXf } from "./css-named-colors.js";
import { x } from "./tslib.es6.js";
var Jou, V2s, j2s, eau, q2s, MXf;
export { Jou, MXf, V2s, eau, j2s, q2s };
var __wakaru_PXf_initialized = false;
export function PXf() {
if (__wakaru_PXf_initialized) return;
__wakaru_PXf_initialized = true;
"use strict";
x(), wXf(), Jou = /^([a-z]+)\(([^()]*)\)$/i, V2s = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i, j2s = {
    "": 1,
    deg: 1,
    grad: .9,
    rad: 180 / Math.PI,
    turn: 360
}, eau = .5 / 255, q2s = {
    rgb: "rgb",
    rgba: "rgb",
    hsl: "hsl",
    hsla: "hsl",
    oklab: "oklab",
    oklch: "oklch"
}, MXf = new Map(Object.entries(sFi).reverse().map(([e, t])=>[
        t,
        e
    ]));

}

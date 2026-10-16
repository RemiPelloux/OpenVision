import { J1v, _b0 } from "./animations.mjs";
import { Y1v, gb0 } from "./create-visual-element.mjs";
import { Ib0, dkv } from "./gestures.mjs";
import { E } from "./tslib.es6.js";
var hkv;
export { hkv };
var __wakaru_xb0_initialized = false;
export function xb0() {
if (__wakaru_xb0_initialized) return;
__wakaru_xb0_initialized = true;
"use client";
E(), _b0(), Ib0(), gb0(), hkv = {
    renderer: Y1v,
    ...J1v,
    ...dkv
};

}

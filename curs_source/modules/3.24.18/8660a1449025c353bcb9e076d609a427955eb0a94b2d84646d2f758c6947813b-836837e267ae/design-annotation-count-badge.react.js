import { _On } from "./glass-motion.react.js";
import { E } from "./tslib.es6.js";
import { gx0 } from "./wTv.js";
var hxv, pxv, WJl, mxv, gxv, fxv;
export { WJl, fxv, gxv, hxv, mxv, pxv };
var __wakaru_vx0_initialized = false;
export function vx0() {
if (__wakaru_vx0_initialized) return;
__wakaru_vx0_initialized = true;
"use strict";
E(), _On(), hxv = [
    {
        transform: "translateY(0)"
    },
    {
        transform: "translateY(-5px)"
    }
], pxv = {
    duration: 600,
    easing: gx0()
}, WJl = 100, mxv = [
    3e4,
    6e4,
    9e4
].map((t)=>t + WJl), gxv = {
    duration: .2,
    ease: [
        .23,
        1,
        .32,
        1
    ]
}, fxv = {
    enter: (t)=>({
            y: `${t * 100}%`,
            opacity: 0
        }),
    shown: {
        y: "0%",
        opacity: 1
    },
    exit: (t)=>({
            y: `${t * -100}%`,
            opacity: 0
        })
};

}

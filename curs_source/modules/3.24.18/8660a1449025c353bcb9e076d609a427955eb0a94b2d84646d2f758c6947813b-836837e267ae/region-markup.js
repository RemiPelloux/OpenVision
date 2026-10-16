import { ece } from "./index_27.ts";
import { Zd0 } from "./index_9.mjs";
import { iOn } from "./region-marquee.js";
import { E } from "./tslib.es6.js";
var q5i, EKl, z5i, IKl, qfv, zfv, Vfv, Kfv, Yfv, Xfv;
export { EKl, IKl, Kfv, Vfv, Xfv, Yfv, q5i, qfv, z5i, zfv };
var __wakaru_CQt_initialized = false;
export function CQt() {
if (__wakaru_CQt_initialized) return;
__wakaru_CQt_initialized = true;
"use strict";
E(), ece(), Zd0(), iOn(), q5i = "#ff3b30", EKl = 3, z5i = 3, IKl = 14, qfv = 6, zfv = .5, Vfv = (t)=>-(Math.cos(Math.PI * t) - 1) / 2, Kfv = (t)=>Math.sin(t * Math.PI / 2), Yfv = {
    size: 3,
    thinning: -.99,
    streamline: .99,
    smoothing: .99,
    easing: Vfv,
    simulatePressure: !0,
    start: {
        taper: 79,
        easing: Kfv,
        cap: !0
    },
    end: {
        taper: 0,
        cap: !0
    }
}, Xfv = [
    {
        tool: "pen",
        label: "Draw",
        icon: "pencil"
    },
    {
        tool: "ellipse",
        label: "Ellipse",
        icon: "circle"
    },
    {
        tool: "rect",
        label: "Rectangle",
        icon: "square"
    },
    {
        tool: "arrow",
        label: "Arrow",
        icon: "arrow-right-up"
    }
];

}

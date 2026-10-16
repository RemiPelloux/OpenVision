import { Ps } from "./HVr.js";
import { Yf, qC } from "./lazy.js";
import { AUc, SFt, Tbi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var MUc, PUc, LUc, NUc, OUc;
export { LUc, MUc, NUc, OUc, PUc };
var __wakaru_pvn_initialized = false;
export function pvn() {
if (__wakaru_pvn_initialized) return;
__wakaru_pvn_initialized = true;
"use strict";
x(), qC(), SFt(), Ps(), MUc = new Map([
    [
        "&quot;",
        '"'
    ],
    [
        "&nbsp;",
        " "
    ],
    [
        "&amp;",
        "&"
    ],
    [
        "&#39;",
        "'"
    ],
    [
        "&lt;",
        "<"
    ],
    [
        "&gt;",
        ">"
    ]
]), PUc = new Yf(()=>Tbi(!1)), LUc = new Yf(()=>AUc(Tbi(!1))), NUc = new Yf(()=>Tbi(!0)), OUc = new Yf(()=>AUc(Tbi(!0)));

}

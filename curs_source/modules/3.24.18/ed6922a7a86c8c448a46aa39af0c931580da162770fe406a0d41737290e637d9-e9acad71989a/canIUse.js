import { Q_, jn } from "./HVr.js";
import { ile, n_ } from "./browser_2.js";
import { Tzr } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var FNt, D7;
export { D7, FNt };
var __wakaru_EAe_initialized = false;
export function EAe() {
if (__wakaru_EAe_initialized) return;
__wakaru_EAe_initialized = true;
"use strict";
x(), n_(), lo(), jn(), FNt = ((e)=>(e[e.Always = 0] = "Always", e[e.FullScreen = 1] = "FullScreen", e[e.None = 2] = "None", e))(FNt || {}), D7 = {
    clipboard: {
        writeText: Q_ || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
        readText: Q_ || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
    },
    keyboard: Q_ || Tzr() ? 0 : navigator.keyboard || ile ? 1 : 2,
    touch: "ontouchstart" in on || navigator.maxTouchPoints > 0,
    pointerEvents: on.PointerEvent && ("ontouchstart" in on || navigator.maxTouchPoints > 0)
};

}

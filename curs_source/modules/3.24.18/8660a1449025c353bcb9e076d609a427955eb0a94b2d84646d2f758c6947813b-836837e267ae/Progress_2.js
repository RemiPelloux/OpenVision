import { xOS } from "./ProgressBar.js";
import { TYh } from "./ProgressPie.js";
import { ypi } from "./ProgressRing.js";
import { IOS, ROS, ewS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { jsx as Fya } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { forwardRef as MOS } from "./react-runtime/react/esm-index-production.js";
import { c as POS } from "./react-runtime/react/esm-compiler-runtime-production.js";
var Yg;
export { Yg };
var __wakaru_Rkt_initialized = false;
export function Rkt() {
if (__wakaru_Rkt_initialized) return;
__wakaru_Rkt_initialized = true;
"use strict";
E(), xOS(), TYh(), ypi(), Yg = MOS(function(e, n) {
    const i = POS(9);
    switch(e.variant){
        case "bar":
            {
                let r;
                return i[0] !== e || i[1] !== n ? (r = Fya(IOS, {
                    ...e,
                    ref: n
                }), i[0] = e, i[1] = n, i[2] = r) : r = i[2], r;
            }
        case "pie":
            {
                let r;
                return i[3] !== e || i[4] !== n ? (r = Fya(ROS, {
                    ...e,
                    ref: n
                }), i[3] = e, i[4] = n, i[5] = r) : r = i[5], r;
            }
        case "ring":
        case void 0:
            {
                let r;
                return i[6] !== e || i[7] !== n ? (r = Fya(ewS, {
                    ...e,
                    ref: n
                }), i[6] = e, i[7] = n, i[8] = r) : r = i[8], r;
            }
        default:
            return e;
    }
});

}

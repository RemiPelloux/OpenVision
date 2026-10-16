import { zYl } from "./calc-duration.mjs";
import { wg0 } from "./create-generator-easing.mjs";
import { xR } from "./index_10.mjs";
import { Wbv } from "./linear.mjs";
import { YAs, kg0 } from "./ofv.js";
import { sEe } from "./time-conversion.mjs";
import { E } from "./tslib.es6.js";
var i8, qbv, XAs, zbv, Vbv;
export { Vbv, XAs, i8, qbv, zbv };
var __wakaru_Kbv_initialized = false;
export function Kbv() {
if (__wakaru_Kbv_initialized) return;
__wakaru_Kbv_initialized = true;
E(), xR(), Wbv(), zYl(), wg0(), i8 = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}, qbv = 12, XAs = .001, zbv = [
    "duration",
    "bounce"
], Vbv = [
    "stiffness",
    "damping",
    "mass"
], YAs.applyToOptions = (t)=>{
    const e = kg0(t, 100, YAs);
    return t.ease = e.ease, t.duration = sEe(e.duration), t.type = "keyframes", t;
};

}

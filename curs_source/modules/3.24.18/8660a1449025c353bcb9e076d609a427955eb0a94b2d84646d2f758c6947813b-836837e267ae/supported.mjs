import { fOn, kyv } from "./cubic-bezier_2.mjs";
import { E } from "./tslib.es6.js";
var sXl;
export { sXl };
var __wakaru_qg0_initialized = false;
export function qg0() {
if (__wakaru_qg0_initialized) return;
__wakaru_qg0_initialized = true;
E(), kyv(), sXl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fOn([
        0,
        .65,
        .55,
        1
    ]),
    circOut: fOn([
        .55,
        0,
        1,
        .45
    ]),
    backIn: fOn([
        .31,
        .01,
        .66,
        -.59
    ]),
    backOut: fOn([
        .33,
        1.53,
        .69,
        .99
    ])
};

}

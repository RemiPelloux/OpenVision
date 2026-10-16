import { iYe, jQt } from "./keys-transform.mjs";
import { E } from "./tslib.es6.js";
var jyv, $yv, Hyv, Wyv, Gyv;
export { $yv, Gyv, Hyv, Wyv, jyv };
var __wakaru_hf0_initialized = false;
export function hf0() {
if (__wakaru_hf0_initialized) return;
__wakaru_hf0_initialized = true;
E(), iYe(), jyv = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}, $yv = (t)=>({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }), Hyv = {
    type: "keyframes",
    duration: .8
}, Wyv = {
    type: "keyframes",
    ease: [
        .25,
        .1,
        .35,
        1
    ],
    duration: .3
}, Gyv = (t, { keyframes: e })=>e.length > 2 ? Hyv : jQt.has(t) ? t.startsWith("scale") ? $yv(e[1]) : jyv : Wyv;

}

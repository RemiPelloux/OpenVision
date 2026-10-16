import { Ayv } from "./accelerated-values.mjs";
import { xR } from "./index_10.mjs";
import { of0 } from "./is-browser-color.mjs";
import { Z_v } from "./ofv.js";
import { E } from "./tslib.es6.js";
var Pyv, Myv;
export { Myv, Pyv };
var __wakaru_lf0_initialized = false;
export function lf0() {
if (__wakaru_lf0_initialized) return;
__wakaru_lf0_initialized = true;
E(), xR(), Ayv(), of0(), Pyv = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
]), Myv = Z_v(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));

}

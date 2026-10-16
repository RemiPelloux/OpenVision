import { OQt, cOn } from "./index_11.mjs";
import { MYl, uOn } from "./sanitize.mjs";
import { E } from "./tslib.es6.js";
import { FQt, hOn } from "./units.mjs";
import { HAs, LYl, NYl } from "./utils_2.mjs";
var BQt;
export { BQt };
var __wakaru_Ebv_initialized = false;
export function Ebv() {
if (__wakaru_Ebv_initialized) return;
__wakaru_Ebv_initialized = true;
E(), OQt(), hOn(), MYl(), LYl(), BQt = {
    test: HAs("hsl", "hue"),
    parse: NYl("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 })=>"hsla(" + Math.round(t) + ", " + FQt.transform(uOn(e)) + ", " + FQt.transform(uOn(n)) + ", " + uOn(cOn.transform(i)) + ")"
};

}

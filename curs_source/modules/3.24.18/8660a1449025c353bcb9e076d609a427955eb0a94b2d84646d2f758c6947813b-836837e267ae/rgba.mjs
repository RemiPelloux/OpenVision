import { Lut } from "./clamp.mjs";
import { xR } from "./index_10.mjs";
import { LQt, OQt, cOn } from "./index_11.mjs";
import { MYl, uOn } from "./sanitize.mjs";
import { E } from "./tslib.es6.js";
import { HAs, LYl, NYl } from "./utils_2.mjs";
var kbv, WAs, yRt;
export { WAs, kbv, yRt };
var __wakaru_OYl_initialized = false;
export function OYl() {
if (__wakaru_OYl_initialized) return;
__wakaru_OYl_initialized = true;
E(), xR(), OQt(), MYl(), LYl(), kbv = (t)=>Lut(0, 255, t), WAs = {
    ...LQt,
    transform: (t)=>Math.round(kbv(t))
}, yRt = {
    test: HAs("rgb", "red"),
    parse: NYl("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: i = 1 })=>"rgba(" + WAs.transform(t) + ", " + WAs.transform(e) + ", " + WAs.transform(n) + ", " + uOn(cOn.transform(i)) + ")"
};

}

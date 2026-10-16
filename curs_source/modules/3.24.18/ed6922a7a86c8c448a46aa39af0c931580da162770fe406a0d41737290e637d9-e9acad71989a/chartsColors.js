import { S } from "./HVr.js";
import { cze, id } from "./baseColors.js";
import { NP } from "./colorUtils.js";
import { c5, eU, opt, ore } from "./editorColors.js";
import { G2t, QLc } from "./minimapColors.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Lmg, Nmg, V2t, JLc, eNc, Omg, GAe, tNc;
export { GAe, JLc, Lmg, Nmg, Omg, V2t, eNc, tNc };
var __wakaru_Fmg_initialized = false;
export function Fmg() {
if (__wakaru_Fmg_initialized) return;
__wakaru_Fmg_initialized = true;
"use strict";
x(), rt(), NP(), cze(), opt(), QLc(), Lmg = Lt("charts.foreground", id, S(2311, null)), Nmg = Lt("charts.lines", pa(id, .5), S(2312, null)), V2t = Lt("charts.red", ore, S(2313, null)), JLc = Lt("charts.blue", eU, S(2314, null)), eNc = Lt("charts.yellow", c5, S(2315, null)), Omg = Lt("charts.orange", G2t, S(2316, null)), GAe = Lt("charts.green", {
    dark: "#89D185",
    light: "#388A34",
    hcDark: "#89D185",
    hcLight: "#374e06"
}, S(2317, null)), tNc = Lt("charts.purple", {
    dark: "#B180D7",
    light: "#652D90",
    hcDark: "#B180D7",
    hcLight: "#652D90"
}, S(2318, null));

}

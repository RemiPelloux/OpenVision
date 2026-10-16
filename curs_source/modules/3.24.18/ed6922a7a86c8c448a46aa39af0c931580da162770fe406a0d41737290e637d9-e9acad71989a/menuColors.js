import { S } from "./HVr.js";
import { Vb, cze, uc } from "./baseColors.js";
import { NP } from "./colorUtils.js";
import { Dgn, lpt, wNc } from "./inputColors.js";
import { DK, VAe, vZr } from "./listColors.js";
import { rt } from "./nls.js";
import { Lt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var UNc, $Nc, HNc, WNc, GNc, VNc, jNc;
export { $Nc, GNc, HNc, UNc, VNc, WNc, jNc };
var __wakaru_Gmg_initialized = false;
export function Gmg() {
if (__wakaru_Gmg_initialized) return;
__wakaru_Gmg_initialized = true;
"use strict";
x(), rt(), NP(), cze(), wNc(), vZr(), UNc = Lt("menu.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(2494, null)), $Nc = Lt("menu.foreground", Dgn, S(2495, null)), HNc = Lt("menu.background", lpt, S(2496, null)), WNc = Lt("menu.selectionForeground", VAe, S(2497, null)), GNc = Lt("menu.selectionBackground", DK, S(2498, null)), VNc = Lt("menu.selectionBorder", {
    dark: null,
    light: null,
    hcDark: Vb,
    hcLight: Vb
}, S(2499, null)), jNc = Lt("menu.separatorBackground", {
    dark: "#606060",
    light: "#D4D4D4",
    hcDark: uc,
    hcLight: uc
}, S(2500, null));

}

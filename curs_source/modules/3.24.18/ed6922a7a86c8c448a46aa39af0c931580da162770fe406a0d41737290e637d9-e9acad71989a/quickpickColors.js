import { S } from "./HVr.js";
import { $s, Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { _3, lze, opt } from "./editorColors.js";
import { DK, VAe, hZr, vZr } from "./listColors.js";
import { rt } from "./nls.js";
import { Lt, fgn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _Zr, qNc, zNc, bZr, KNc, yZr, X2t, Yfi, Z2t;
export { KNc, X2t, Yfi, Z2t, _Zr, bZr, qNc, yZr, zNc };
var __wakaru_Vmg_initialized = false;
export function Vmg() {
if (__wakaru_Vmg_initialized) return;
__wakaru_Vmg_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), opt(), vZr(), _Zr = Lt("quickInput.background", _3, S(2527, null)), qNc = Lt("quickInput.foreground", lze, S(2528, null)), zNc = Lt("quickInputTitle.background", {
    dark: new Ci(new $s(255, 255, 255, .105)),
    light: new Ci(new $s(0, 0, 0, .06)),
    hcDark: "#000000",
    hcLight: Ci.white
}, S(2529, null)), bZr = Lt("pickerGroup.foreground", {
    dark: "#3794FF",
    light: "#0066BF",
    hcDark: Ci.white,
    hcLight: "#0F4A85"
}, S(2530, null)), KNc = Lt("pickerGroup.border", {
    dark: "#3F3F46",
    light: "#CCCEDB",
    hcDark: Ci.white,
    hcLight: "#0F4A85"
}, S(2531, null)), yZr = Lt("quickInput.list.focusBackground", null, "", void 0, S(2532, null)), X2t = Lt("quickInputList.focusForeground", VAe, S(2533, null)), Yfi = Lt("quickInputList.focusIconForeground", hZr, S(2534, null)), Z2t = Lt("quickInputList.focusBackground", {
    dark: fgn(yZr, DK),
    light: fgn(yZr, DK),
    hcDark: null,
    hcLight: null
}, S(2535, null));

}

import { S } from "./HVr.js";
import { cze, tN, uc } from "./baseColors.js";
import { Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ypg, sre, WAe, _Lc, bLc, yLc, SLc, IBe, tpt, npt, ipt, kLc, wLc, qXr, CLc;
export { CLc, IBe, SLc, WAe, Ypg, _Lc, bLc, ipt, kLc, npt, qXr, sre, tpt, wLc, yLc };
var __wakaru_Wfi_initialized = false;
export function Wfi() {
if (__wakaru_Wfi_initialized) return;
__wakaru_Wfi_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), cze(), Ypg = Lt("sash.hoverBorder", tN, S(2512, null)), sre = Lt("badge.background", {
    dark: "#4D4D4D",
    light: "#C4C4C4",
    hcDark: Ci.black,
    hcLight: "#0F4A85"
}, S(2513, null)), WAe = Lt("badge.foreground", {
    dark: Ci.white,
    light: "#333",
    hcDark: Ci.white,
    hcLight: Ci.white
}, S(2514, null)), _Lc = Lt("activityWarningBadge.foreground", {
    dark: Ci.black.lighten(.2),
    light: Ci.white,
    hcDark: null,
    hcLight: Ci.black.lighten(.2)
}, S(2515, null)), bLc = Lt("activityWarningBadge.background", {
    dark: "#CCA700",
    light: "#BF8803",
    hcDark: null,
    hcLight: "#CCA700"
}, S(2516, null)), yLc = Lt("activityErrorBadge.foreground", {
    dark: Ci.black.lighten(.2),
    light: Ci.white,
    hcDark: null,
    hcLight: Ci.black.lighten(.2)
}, S(2517, null)), SLc = Lt("activityErrorBadge.background", {
    dark: "#F14C4C",
    light: "#E51400",
    hcDark: null,
    hcLight: "#F14C4C"
}, S(2518, null)), IBe = Lt("scrollbar.shadow", {
    dark: "#000000",
    light: "#DDDDDD",
    hcDark: null,
    hcLight: null
}, S(2519, null)), tpt = Lt("scrollbarSlider.background", {
    dark: Ci.fromHex("#797979").transparent(.4),
    light: Ci.fromHex("#646464").transparent(.4),
    hcDark: pa(uc, .6),
    hcLight: pa(uc, .4)
}, S(2520, null)), npt = Lt("scrollbarSlider.hoverBackground", {
    dark: Ci.fromHex("#646464").transparent(.7),
    light: Ci.fromHex("#646464").transparent(.7),
    hcDark: pa(uc, .8),
    hcLight: pa(uc, .8)
}, S(2521, null)), ipt = Lt("scrollbarSlider.activeBackground", {
    dark: Ci.fromHex("#BFBFBF").transparent(.4),
    light: Ci.fromHex("#000000").transparent(.6),
    hcDark: uc,
    hcLight: uc
}, S(2522, null)), kLc = Lt("progressBar.background", {
    dark: Ci.fromHex("#0E70C0"),
    light: Ci.fromHex("#0E70C0"),
    hcDark: uc,
    hcLight: uc
}, S(2523, null)), wLc = Lt("chart.line", {
    dark: "#236B8E",
    light: "#236B8E",
    hcDark: "#236B8E",
    hcLight: "#236B8E"
}, S(2524, null)), qXr = Lt("chart.axis", {
    dark: Ci.fromHex("#BFBFBF").transparent(.4),
    light: Ci.fromHex("#000000").transparent(.6),
    hcDark: uc,
    hcLight: uc
}, S(2525, null)), CLc = Lt("chart.guide", {
    dark: Ci.fromHex("#BFBFBF").transparent(.2),
    light: Ci.fromHex("#000000").transparent(.2),
    hcDark: uc,
    hcLight: uc
}, S(2526, null));

}

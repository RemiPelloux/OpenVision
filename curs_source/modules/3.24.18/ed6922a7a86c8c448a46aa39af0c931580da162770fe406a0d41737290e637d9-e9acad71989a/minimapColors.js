import { S } from "./HVr.js";
import { $s, Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { $2t, H2t, c5, eU, opt } from "./editorColors.js";
import { Wfi, ipt, npt, tpt } from "./miscColors.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var G2t, Rgn, iZr, zLc, KLc, YLc, XLc, ZLc, Dmg, Mmg, Pmg;
export { Dmg, G2t, KLc, Mmg, Pmg, Rgn, XLc, YLc, ZLc, iZr, zLc };
var __wakaru_QLc_initialized = false;
export function QLc() {
if (__wakaru_QLc_initialized) return;
__wakaru_QLc_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), opt(), Wfi(), G2t = Lt("minimap.findMatchHighlight", {
    light: "#d18616",
    dark: "#d18616",
    hcDark: "#AB5A00",
    hcLight: "#0F4A85"
}, S(2501, null), !0), Rgn = Lt("minimap.selectionOccurrenceHighlight", {
    light: "#c9c9c9",
    dark: "#676767",
    hcDark: "#ffffff",
    hcLight: "#0F4A85"
}, S(2502, null), !0), iZr = Lt("minimap.selectionHighlight", {
    light: "#ADD6FF",
    dark: "#264F78",
    hcDark: "#ffffff",
    hcLight: "#0F4A85"
}, S(2503, null), !0), zLc = Lt("minimap.infoHighlight", {
    dark: eU,
    light: eU,
    hcDark: H2t,
    hcLight: H2t
}, S(2504, null)), KLc = Lt("minimap.warningHighlight", {
    dark: c5,
    light: c5,
    hcDark: $2t,
    hcLight: $2t
}, S(2505, null)), YLc = Lt("minimap.errorHighlight", {
    dark: new Ci(new $s(255, 18, 18, .7)),
    light: new Ci(new $s(255, 18, 18, .7)),
    hcDark: new Ci(new $s(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, S(2506, null)), XLc = Lt("minimap.background", null, S(2507, null)), ZLc = Lt("minimap.foregroundOpacity", Ci.fromHex("#000f"), S(2508, null)), Dmg = Lt("minimapSlider.background", pa(tpt, .5), S(2509, null)), Mmg = Lt("minimapSlider.hoverBackground", pa(npt, .5), S(2510, null)), Pmg = Lt("minimapSlider.activeBackground", pa(ipt, .5), S(2511, null));

}

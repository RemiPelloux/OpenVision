import { D } from "./Iwo.js";
import { _b, la, ls } from "./color.js";
import { iB } from "./colorUtils.js";
import { Bgn, Fgn, Wbt, lwe, tne } from "./editorColors.js";
import { B9t, U9t, j9t, lri } from "./miscColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { iu, mn } from "./ze.js";
var Ugn, fri, LUo, X6d, Z6d, Q6d, J6d, e4d, WRy, GRy, qRy;
export { GRy, J6d, LUo, Q6d, Ugn, WRy, X6d, Z6d, e4d, fri, qRy };
var __wakaru_t4d_initialized = false;
export function t4d() {
if (__wakaru_t4d_initialized) return;
__wakaru_t4d_initialized = true;
"use strict";
E(), Bt(), _b(), iB(), Wbt(), lri(), Ugn = mn("minimap.findMatchHighlight", {
    light: "#d18616",
    dark: "#d18616",
    hcDark: "#AB5A00",
    hcLight: "#0F4A85"
}, D(2501, null), !0), fri = mn("minimap.selectionOccurrenceHighlight", {
    light: "#c9c9c9",
    dark: "#676767",
    hcDark: "#ffffff",
    hcLight: "#0F4A85"
}, D(2502, null), !0), LUo = mn("minimap.selectionHighlight", {
    light: "#ADD6FF",
    dark: "#264F78",
    hcDark: "#ffffff",
    hcLight: "#0F4A85"
}, D(2503, null), !0), X6d = mn("minimap.infoHighlight", {
    dark: lwe,
    light: lwe,
    hcDark: Bgn,
    hcLight: Bgn
}, D(2504, null)), Z6d = mn("minimap.warningHighlight", {
    dark: tne,
    light: tne,
    hcDark: Fgn,
    hcLight: Fgn
}, D(2505, null)), Q6d = mn("minimap.errorHighlight", {
    dark: new ls(new la(255, 18, 18, .7)),
    light: new ls(new la(255, 18, 18, .7)),
    hcDark: new ls(new la(255, 50, 50, 1)),
    hcLight: "#B5200D"
}, D(2506, null)), J6d = mn("minimap.background", null, D(2507, null)), e4d = mn("minimap.foregroundOpacity", ls.fromHex("#000f"), D(2508, null)), WRy = mn("minimapSlider.background", iu(B9t, .5), D(2509, null)), GRy = mn("minimapSlider.hoverBackground", iu(U9t, .5), D(2510, null)), qRy = mn("minimapSlider.activeBackground", iu(j9t, .5), D(2511, null));

}

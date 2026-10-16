import { D } from "./Iwo.js";
import { jn } from "./SZu.js";
import { _b, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { $9t, MD, ew } from "./editorColors.js";
import { It } from "./instantiation.js";
import { qgn } from "./listColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { iu, k7, mn, y6d } from "./ze.js";
var L2n, Yhs, Xhs, Zhs, x_l, A_l, lDg, R_l, P_l, cDg, vNk, _Nk, aIt;
export { A_l, L2n, P_l, R_l, Xhs, Yhs, Zhs, _Nk, aIt, cDg, lDg, vNk, x_l };
var __wakaru_yKt_initialized = false;
export function yKt() {
if (__wakaru_yKt_initialized) return;
__wakaru_yKt_initialized = true;
"use strict";
E(), Bt(), It(), _b(), Ap(), L2n = jn("quickDiff"), Yhs = mn("editorGutter.modifiedBackground", {
    dark: "#1B81A8",
    light: "#2090D3",
    hcDark: "#1B81A8",
    hcLight: "#2090D3"
}, D(9330, null)), Xhs = mn("editorGutter.addedBackground", {
    dark: "#487E02",
    light: "#48985D",
    hcDark: "#487E02",
    hcLight: "#48985D"
}, D(9331, null)), Zhs = mn("editorGutter.deletedBackground", $9t, D(9332, null)), x_l = mn("minimapGutter.modifiedBackground", Yhs, D(9333, null)), A_l = mn("minimapGutter.addedBackground", Xhs, D(9334, null)), lDg = mn("minimapGutter.deletedBackground", Zhs, D(9335, null)), R_l = mn("editorOverviewRuler.modifiedForeground", iu(Yhs, .6), D(9336, null)), P_l = mn("editorOverviewRuler.addedForeground", iu(Xhs, .6), D(9337, null)), cDg = mn("editorOverviewRuler.deletedForeground", iu(Zhs, .6), D(9338, null)), vNk = mn("editorGutter.itemGlyphForeground", {
    dark: MD,
    light: MD,
    hcDark: ls.black,
    hcLight: ls.white
}, D(9339, null)), _Nk = mn("editorGutter.itemBackground", {
    dark: y6d(qgn, ew),
    light: k7(y6d(qgn, ew), .05),
    hcDark: ls.white,
    hcLight: ls.black
}, D(9340, null)), aIt = ((t)=>(t[t.Modify = 0] = "Modify", t[t.Add = 1] = "Add", t[t.Delete = 2] = "Delete", t))(aIt || {});

}

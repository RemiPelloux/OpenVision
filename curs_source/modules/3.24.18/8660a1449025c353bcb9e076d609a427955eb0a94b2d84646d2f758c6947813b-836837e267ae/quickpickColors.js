import { D } from "./Iwo.js";
import { _b, la, ls } from "./color.js";
import { iB } from "./colorUtils.js";
import { EQ, Wbt, jbt } from "./editorColors.js";
import { $Uo, Dtt, HUo, Vve } from "./listColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { mn, rri } from "./ze.js";
var XUo, V4d, K4d, ZUo, Y4d, QUo, zgn, Wwr, Vgn;
export { K4d, QUo, V4d, Vgn, Wwr, XUo, Y4d, ZUo, zgn };
var __wakaru_a2y_initialized = false;
export function a2y() {
if (__wakaru_a2y_initialized) return;
__wakaru_a2y_initialized = true;
"use strict";
E(), Bt(), _b(), iB(), Wbt(), HUo(), XUo = mn("quickInput.background", EQ, D(2527, null)), V4d = mn("quickInput.foreground", jbt, D(2528, null)), K4d = mn("quickInputTitle.background", {
    dark: new ls(new la(255, 255, 255, .105)),
    light: new ls(new la(0, 0, 0, .06)),
    hcDark: "#000000",
    hcLight: ls.white
}, D(2529, null)), ZUo = mn("pickerGroup.foreground", {
    dark: "#3794FF",
    light: "#0066BF",
    hcDark: ls.white,
    hcLight: "#0F4A85"
}, D(2530, null)), Y4d = mn("pickerGroup.border", {
    dark: "#3F3F46",
    light: "#CCCEDB",
    hcDark: ls.white,
    hcLight: "#0F4A85"
}, D(2531, null)), QUo = mn("quickInput.list.focusBackground", null, "", void 0, D(2532, null)), zgn = mn("quickInputList.focusForeground", Dtt, D(2533, null)), Wwr = mn("quickInputList.focusIconForeground", $Uo, D(2534, null)), Vgn = mn("quickInputList.focusBackground", {
    dark: rri(QUo, Vve),
    light: rri(QUo, Vve),
    hcDark: null,
    hcLight: null
}, D(2535, null));

}

import { D } from "./Iwo.js";
import { Ad, Ck, xtt } from "./baseColors.js";
import { iB } from "./colorUtils.js";
import { A4d, Wgn, _ri } from "./inputColors.js";
import { Dtt, HUo, Vve } from "./listColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { mn } from "./ze.js";
var WUo, GUo, qUo, zUo, VUo, KUo, YUo;
export { GUo, KUo, VUo, WUo, YUo, qUo, zUo };
var __wakaru_z4d_initialized = false;
export function z4d() {
if (__wakaru_z4d_initialized) return;
__wakaru_z4d_initialized = true;
"use strict";
E(), Bt(), iB(), xtt(), A4d(), HUo(), WUo = mn("menu.border", {
    dark: null,
    light: null,
    hcDark: Ad,
    hcLight: Ad
}, D(2494, null)), GUo = mn("menu.foreground", _ri, D(2495, null)), qUo = mn("menu.background", Wgn, D(2496, null)), zUo = mn("menu.selectionForeground", Dtt, D(2497, null)), VUo = mn("menu.selectionBackground", Vve, D(2498, null)), KUo = mn("menu.selectionBorder", {
    dark: null,
    light: null,
    hcDark: Ck,
    hcLight: Ck
}, D(2499, null)), YUo = mn("menu.separatorBackground", {
    dark: "#606060",
    light: "#D4D4D4",
    hcDark: Ad,
    hcLight: Ad
}, D(2500, null));

}

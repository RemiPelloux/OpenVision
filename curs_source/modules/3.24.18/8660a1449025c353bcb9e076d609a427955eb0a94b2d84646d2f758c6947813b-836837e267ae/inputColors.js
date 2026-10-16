import { D } from "./Iwo.js";
import { Ad, Ogn, Qde, Y_, xtt } from "./baseColors.js";
import { _b, la, ls } from "./color.js";
import { iB } from "./colorUtils.js";
import { EQ, Wbt } from "./editorColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { UAe, iu, k7, mn } from "./ze.js";
var jgn, vri, Gbt, $gn, r4d, q9t, Hgn, ZRy, s4d, o4d, a4d, l4d, c4d, u4d, d4d, h4d, p4d, Wgn, m4d, _ri, bri, qbt, g4d, nHe, f4d, v4d, FUo, yri, _4d, Ggn, b4d, y4d, S4d, k4d, w4d, C4d, BUo, QRy, UUo, jUo, JRy, T4d, E4d, I4d, x4d;
export { $gn, BUo, C4d, E4d, FUo, Gbt, Ggn, Hgn, I4d, JRy, QRy, S4d, T4d, UUo, Wgn, ZRy, _4d, _ri, a4d, b4d, bri, c4d, d4d, f4d, g4d, h4d, jUo, jgn, k4d, l4d, m4d, nHe, o4d, p4d, q9t, qbt, r4d, s4d, u4d, v4d, vri, w4d, x4d, y4d, yri };
var __wakaru_A4d_initialized = false;
export function A4d() {
if (__wakaru_A4d_initialized) return;
__wakaru_A4d_initialized = true;
"use strict";
E(), Bt(), _b(), iB(), xtt(), Wbt(), jgn = mn("input.background", {
    dark: "#3C3C3C",
    light: ls.white,
    hcDark: ls.black,
    hcLight: ls.white
}, D(2413, null)), vri = mn("input.foreground", Y_, D(2414, null)), Gbt = mn("input.border", {
    dark: null,
    light: null,
    hcDark: Ad,
    hcLight: Ad
}, D(2415, null)), $gn = mn("inputOption.activeBorder", {
    dark: "#007ACC",
    light: "#007ACC",
    hcDark: Ad,
    hcLight: Ad
}, D(2416, null)), r4d = mn("inputOption.hoverBackground", {
    dark: "#5a5d5e80",
    light: "#b8b8b850",
    hcDark: null,
    hcLight: null
}, D(2417, null)), q9t = mn("inputOption.activeBackground", {
    dark: iu(Qde, .4),
    light: iu(Qde, .2),
    hcDark: ls.transparent,
    hcLight: ls.transparent
}, D(2418, null)), Hgn = mn("inputOption.activeForeground", {
    dark: ls.white,
    light: ls.black,
    hcDark: Y_,
    hcLight: Y_
}, D(2419, null)), ZRy = mn("input.placeholderForeground", {
    light: iu(Y_, .5),
    dark: iu(Y_, .5),
    hcDark: iu(Y_, .7),
    hcLight: iu(Y_, .7)
}, D(2420, null)), s4d = mn("inputValidation.infoBackground", {
    dark: "#063B49",
    light: "#D6ECF2",
    hcDark: ls.black,
    hcLight: ls.white
}, D(2421, null)), o4d = mn("inputValidation.infoForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: Y_
}, D(2422, null)), a4d = mn("inputValidation.infoBorder", {
    dark: "#007acc",
    light: "#007acc",
    hcDark: Ad,
    hcLight: Ad
}, D(2423, null)), l4d = mn("inputValidation.warningBackground", {
    dark: "#352A05",
    light: "#F6F5D2",
    hcDark: ls.black,
    hcLight: ls.white
}, D(2424, null)), c4d = mn("inputValidation.warningForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: Y_
}, D(2425, null)), u4d = mn("inputValidation.warningBorder", {
    dark: "#B89500",
    light: "#B89500",
    hcDark: Ad,
    hcLight: Ad
}, D(2426, null)), d4d = mn("inputValidation.errorBackground", {
    dark: "#5A1D1D",
    light: "#F2DEDE",
    hcDark: ls.black,
    hcLight: ls.white
}, D(2427, null)), h4d = mn("inputValidation.errorForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: Y_
}, D(2428, null)), p4d = mn("inputValidation.errorBorder", {
    dark: "#BE1100",
    light: "#BE1100",
    hcDark: Ad,
    hcLight: Ad
}, D(2429, null)), Wgn = mn("dropdown.background", {
    dark: "#3C3C3C",
    light: ls.white,
    hcDark: ls.black,
    hcLight: ls.white
}, D(2430, null)), m4d = mn("dropdown.listBackground", {
    dark: null,
    light: null,
    hcDark: ls.black,
    hcLight: ls.white
}, D(2431, null)), _ri = mn("dropdown.foreground", {
    dark: "#F0F0F0",
    light: Y_,
    hcDark: ls.white,
    hcLight: Y_
}, D(2432, null)), bri = mn("dropdown.border", {
    dark: Wgn,
    light: "#CECECE",
    hcDark: Ad,
    hcLight: Ad
}, D(2433, null)), qbt = mn("button.foreground", ls.white, D(2434, null)), g4d = mn("button.separator", iu(qbt, .4), D(2435, null)), nHe = mn("button.background", {
    dark: "#0E639C",
    light: "#007ACC",
    hcDark: null,
    hcLight: "#0F4A85"
}, D(2436, null)), f4d = mn("button.hoverBackground", {
    dark: UAe(nHe, .2),
    light: k7(nHe, .2),
    hcDark: nHe,
    hcLight: nHe
}, D(2437, null)), v4d = mn("button.border", Ad, D(2438, null)), FUo = mn("button.secondaryForeground", {
    dark: ls.white,
    light: ls.white,
    hcDark: ls.white,
    hcLight: Y_
}, D(2439, null)), yri = mn("button.secondaryBackground", {
    dark: "#3A3D41",
    light: "#5F6A79",
    hcDark: null,
    hcLight: ls.white
}, D(2440, null)), _4d = mn("button.secondaryHoverBackground", {
    dark: UAe(yri, .2),
    light: k7(yri, .2),
    hcDark: null,
    hcLight: null
}, D(2441, null)), Ggn = mn("radio.activeForeground", Hgn, D(2442, null)), b4d = mn("radio.activeBackground", q9t, D(2443, null)), y4d = mn("radio.activeBorder", $gn, D(2444, null)), S4d = mn("radio.inactiveForeground", null, D(2445, null)), k4d = mn("radio.inactiveBackground", null, D(2446, null)), w4d = mn("radio.inactiveBorder", {
    light: iu(Ggn, .2),
    dark: iu(Ggn, .2),
    hcDark: iu(Ggn, .4),
    hcLight: iu(Ggn, .2)
}, D(2447, null)), C4d = mn("radio.inactiveHoverBackground", r4d, D(2448, null)), BUo = mn("checkbox.background", Wgn, D(2449, null)), QRy = mn("checkbox.selectBackground", EQ, D(2450, null)), UUo = mn("checkbox.foreground", _ri, D(2451, null)), jUo = mn("checkbox.border", bri, D(2452, null)), JRy = mn("checkbox.selectBorder", Ogn, D(2453, null)), T4d = mn("keybindingLabel.background", {
    dark: new ls(new la(128, 128, 128, .17)),
    light: new ls(new la(221, 221, 221, .4)),
    hcDark: ls.transparent,
    hcLight: ls.transparent
}, D(2454, null)), E4d = mn("keybindingLabel.foreground", {
    dark: ls.fromHex("#CCCCCC"),
    light: ls.fromHex("#555555"),
    hcDark: ls.white,
    hcLight: Y_
}, D(2455, null)), I4d = mn("keybindingLabel.border", {
    dark: new ls(new la(51, 51, 51, .6)),
    light: new ls(new la(204, 204, 204, .4)),
    hcDark: new ls(new la(111, 195, 223)),
    hcLight: Ad
}, D(2456, null)), x4d = mn("keybindingLabel.bottomBorder", {
    dark: new ls(new la(68, 68, 68, .6)),
    light: new ls(new la(187, 187, 187, .4)),
    hcDark: new ls(new la(111, 195, 223)),
    hcLight: Y_
}, D(2457, null));

}

import { S } from "./HVr.js";
import { U2t, cze, id, tN, uc } from "./baseColors.js";
import { $s, Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { _3, opt } from "./editorColors.js";
import { rt } from "./nls.js";
import { Lt, fle, o2, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var MBe, dze, uwe, apt, nNc, hze, cpt, iNc, rNc, sNc, oNc, aNc, cNc, lNc, rZr, sZr, oZr, lpt, uNc, Dgn, pze, _le, aZr, pJ, upt, dNc, cZr, j2t, hNc, q2t, pNc, mNc, gNc, fNc, vNc, _Nc, lZr, Bmg, uZr, dZr, Umg, bNc, yNc, SNc, kNc;
export { Bmg, Dgn, MBe, SNc, Umg, _Nc, _le, aNc, aZr, apt, bNc, cNc, cZr, cpt, dNc, dZr, dze, fNc, gNc, hNc, hze, iNc, j2t, kNc, lNc, lZr, lpt, mNc, nNc, oNc, oZr, pJ, pNc, pze, q2t, rNc, rZr, sNc, sZr, uNc, uZr, upt, uwe, vNc, yNc };
var __wakaru_wNc_initialized = false;
export function wNc() {
if (__wakaru_wNc_initialized) return;
__wakaru_wNc_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), cze(), opt(), MBe = Lt("input.background", {
    dark: "#3C3C3C",
    light: Ci.white,
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2413, null)), dze = Lt("input.foreground", id, S(2414, null)), uwe = Lt("input.border", {
    dark: null,
    light: null,
    hcDark: uc,
    hcLight: uc
}, S(2415, null)), apt = Lt("inputOption.activeBorder", {
    dark: "#007ACC",
    light: "#007ACC",
    hcDark: uc,
    hcLight: uc
}, S(2416, null)), nNc = Lt("inputOption.hoverBackground", {
    dark: "#5a5d5e80",
    light: "#b8b8b850",
    hcDark: null,
    hcLight: null
}, S(2417, null)), hze = Lt("inputOption.activeBackground", {
    dark: pa(tN, .4),
    light: pa(tN, .2),
    hcDark: Ci.transparent,
    hcLight: Ci.transparent
}, S(2418, null)), cpt = Lt("inputOption.activeForeground", {
    dark: Ci.white,
    light: Ci.black,
    hcDark: id,
    hcLight: id
}, S(2419, null)), iNc = Lt("input.placeholderForeground", {
    light: pa(id, .5),
    dark: pa(id, .5),
    hcDark: pa(id, .7),
    hcLight: pa(id, .7)
}, S(2420, null)), rNc = Lt("inputValidation.infoBackground", {
    dark: "#063B49",
    light: "#D6ECF2",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2421, null)), sNc = Lt("inputValidation.infoForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: id
}, S(2422, null)), oNc = Lt("inputValidation.infoBorder", {
    dark: "#007acc",
    light: "#007acc",
    hcDark: uc,
    hcLight: uc
}, S(2423, null)), aNc = Lt("inputValidation.warningBackground", {
    dark: "#352A05",
    light: "#F6F5D2",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2424, null)), cNc = Lt("inputValidation.warningForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: id
}, S(2425, null)), lNc = Lt("inputValidation.warningBorder", {
    dark: "#B89500",
    light: "#B89500",
    hcDark: uc,
    hcLight: uc
}, S(2426, null)), rZr = Lt("inputValidation.errorBackground", {
    dark: "#5A1D1D",
    light: "#F2DEDE",
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2427, null)), sZr = Lt("inputValidation.errorForeground", {
    dark: null,
    light: null,
    hcDark: null,
    hcLight: id
}, S(2428, null)), oZr = Lt("inputValidation.errorBorder", {
    dark: "#BE1100",
    light: "#BE1100",
    hcDark: uc,
    hcLight: uc
}, S(2429, null)), lpt = Lt("dropdown.background", {
    dark: "#3C3C3C",
    light: Ci.white,
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2430, null)), uNc = Lt("dropdown.listBackground", {
    dark: null,
    light: null,
    hcDark: Ci.black,
    hcLight: Ci.white
}, S(2431, null)), Dgn = Lt("dropdown.foreground", {
    dark: "#F0F0F0",
    light: id,
    hcDark: Ci.white,
    hcLight: id
}, S(2432, null)), pze = Lt("dropdown.border", {
    dark: lpt,
    light: "#CECECE",
    hcDark: uc,
    hcLight: uc
}, S(2433, null)), _le = Lt("button.foreground", Ci.white, S(2434, null)), aZr = Lt("button.separator", pa(_le, .4), S(2435, null)), pJ = Lt("button.background", {
    dark: "#0E639C",
    light: "#007ACC",
    hcDark: null,
    hcLight: "#0F4A85"
}, S(2436, null)), upt = Lt("button.hoverBackground", {
    dark: fle(pJ, .2),
    light: o2(pJ, .2),
    hcDark: pJ,
    hcLight: pJ
}, S(2437, null)), dNc = Lt("button.border", uc, S(2438, null)), cZr = Lt("button.secondaryForeground", {
    dark: Ci.white,
    light: Ci.white,
    hcDark: Ci.white,
    hcLight: id
}, S(2439, null)), j2t = Lt("button.secondaryBackground", {
    dark: "#3A3D41",
    light: "#5F6A79",
    hcDark: null,
    hcLight: Ci.white
}, S(2440, null)), hNc = Lt("button.secondaryHoverBackground", {
    dark: fle(j2t, .2),
    light: o2(j2t, .2),
    hcDark: null,
    hcLight: null
}, S(2441, null)), q2t = Lt("radio.activeForeground", cpt, S(2442, null)), pNc = Lt("radio.activeBackground", hze, S(2443, null)), mNc = Lt("radio.activeBorder", apt, S(2444, null)), gNc = Lt("radio.inactiveForeground", null, S(2445, null)), fNc = Lt("radio.inactiveBackground", null, S(2446, null)), vNc = Lt("radio.inactiveBorder", {
    light: pa(q2t, .2),
    dark: pa(q2t, .2),
    hcDark: pa(q2t, .4),
    hcLight: pa(q2t, .2)
}, S(2447, null)), _Nc = Lt("radio.inactiveHoverBackground", nNc, S(2448, null)), lZr = Lt("checkbox.background", lpt, S(2449, null)), Bmg = Lt("checkbox.selectBackground", _3, S(2450, null)), uZr = Lt("checkbox.foreground", Dgn, S(2451, null)), dZr = Lt("checkbox.border", pze, S(2452, null)), Umg = Lt("checkbox.selectBorder", U2t, S(2453, null)), bNc = Lt("keybindingLabel.background", {
    dark: new Ci(new $s(128, 128, 128, .17)),
    light: new Ci(new $s(221, 221, 221, .4)),
    hcDark: Ci.transparent,
    hcLight: Ci.transparent
}, S(2454, null)), yNc = Lt("keybindingLabel.foreground", {
    dark: Ci.fromHex("#CCCCCC"),
    light: Ci.fromHex("#555555"),
    hcDark: Ci.white,
    hcLight: id
}, S(2455, null)), SNc = Lt("keybindingLabel.border", {
    dark: new Ci(new $s(51, 51, 51, .6)),
    light: new Ci(new $s(204, 204, 204, .4)),
    hcDark: new Ci(new $s(111, 195, 223)),
    hcLight: uc
}, S(2456, null)), kNc = Lt("keybindingLabel.bottomBorder", {
    dark: new Ci(new $s(68, 68, 68, .6)),
    light: new Ci(new $s(187, 187, 187, .4)),
    hcDark: new Ci(new $s(111, 195, 223)),
    hcLight: id
}, S(2457, null));

}

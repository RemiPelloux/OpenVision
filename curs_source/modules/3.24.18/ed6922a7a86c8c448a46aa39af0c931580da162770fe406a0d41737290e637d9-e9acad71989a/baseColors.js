import { S } from "./HVr.js";
import { Ci, Sm } from "./color.js";
import { NP } from "./colorUtils.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { x } from "./tslib.es6.js";
var id, GXr, ygn, gLc, U2t, tN, uc, Vb, VXr, rre, jXr, jpg, qpg, zpg, fLc, vLc, Kpg;
export { GXr, Kpg, U2t, VXr, Vb, fLc, gLc, id, jXr, jpg, qpg, rre, tN, uc, vLc, ygn, zpg };
var __wakaru_cze_initialized = false;
export function cze() {
if (__wakaru_cze_initialized) return;
__wakaru_cze_initialized = true;
"use strict";
x(), rt(), Sm(), NP(), id = Lt("foreground", {
    dark: "#CCCCCC",
    light: "#616161",
    hcDark: "#FFFFFF",
    hcLight: "#292929"
}, S(2294, null)), GXr = Lt("disabledForeground", {
    dark: "#CCCCCC80",
    light: "#61616180",
    hcDark: "#A5A5A5",
    hcLight: "#7F7F7F"
}, S(2295, null)), ygn = Lt("errorForeground", {
    dark: "#F48771",
    light: "#A1260D",
    hcDark: "#F48771",
    hcLight: "#B5200D"
}, S(2296, null)), gLc = Lt("descriptionForeground", {
    light: "#717171",
    dark: pa(id, .7),
    hcDark: pa(id, .7),
    hcLight: pa(id, .7)
}, S(2297, null)), U2t = Lt("icon.foreground", {
    dark: "#C5C5C5",
    light: "#424242",
    hcDark: "#FFFFFF",
    hcLight: "#292929"
}, S(2298, null)), tN = Lt("focusBorder", {
    dark: "#007FD4",
    light: "#0090F1",
    hcDark: "#F38518",
    hcLight: "#006BBD"
}, S(2299, null)), uc = Lt("contrastBorder", {
    light: null,
    dark: null,
    hcDark: "#6FC3DF",
    hcLight: "#0F4A85"
}, S(2300, null)), Vb = Lt("contrastActiveBorder", {
    light: null,
    dark: null,
    hcDark: tN,
    hcLight: tN
}, S(2301, null)), VXr = Lt("selection.background", null, S(2302, null)), rre = Lt("textLink.foreground", {
    light: "#006AB1",
    dark: "#3794FF",
    hcDark: "#21A6FF",
    hcLight: "#0F4A85"
}, S(2303, null)), jXr = Lt("textLink.activeForeground", {
    light: "#006AB1",
    dark: "#3794FF",
    hcDark: "#21A6FF",
    hcLight: "#0F4A85"
}, S(2304, null)), jpg = Lt("textSeparator.foreground", {
    light: "#0000002e",
    dark: "#ffffff2e",
    hcDark: Ci.black,
    hcLight: "#292929"
}, S(2305, null)), qpg = Lt("textPreformat.foreground", {
    light: "#A31515",
    dark: "#D7BA7D",
    hcDark: "#000000",
    hcLight: "#FFFFFF"
}, S(2306, null)), zpg = Lt("textPreformat.background", {
    light: "#0000001A",
    dark: "#FFFFFF1A",
    hcDark: "#FFFFFF",
    hcLight: "#09345f"
}, S(2307, null)), fLc = Lt("textBlockQuote.background", {
    light: "#f2f2f2",
    dark: "#222222",
    hcDark: null,
    hcLight: "#F2F2F2"
}, S(2308, null)), vLc = Lt("textBlockQuote.border", {
    light: "#007acc80",
    dark: "#007acc80",
    hcDark: Ci.white,
    hcLight: "#292929"
}, S(2309, null)), Kpg = Lt("textCodeBlock.background", {
    light: "#dcdcdc66",
    dark: "#0a0a0a66",
    hcDark: Ci.black,
    hcLight: "#F2F2F2"
}, S(2310, null));

}

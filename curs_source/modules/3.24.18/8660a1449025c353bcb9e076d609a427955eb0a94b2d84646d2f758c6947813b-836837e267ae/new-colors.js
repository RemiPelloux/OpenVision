import { Hwn } from "./color-rgba.js";
import { mjr } from "./core-cursor-css.js";
import { MAa, qwn } from "./dark.js";
import { Km1, L2e, Vm1, a1p } from "./ipa.js";
import { DAa, zwn } from "./light.js";
import { CAa } from "./mix-opacity.js";
import { AAa, Gwn, PAa } from "./semantic-ladders.js";
import { u1t } from "./to-kebab-case.js";
import { E } from "./tslib.es6.js";
var BAa, g_i, UAa, bjr, Tae, p1p, m1p, yjr, Ewt, Vwn, mHt, jAa, Kwn, $Aa, HAa, g1p, f1p, v1p, _1p, f_i, b1p, y1p, S1p;
export { $Aa, BAa, Ewt, HAa, Kwn, S1p, Tae, UAa, Vwn, _1p, b1p, bjr, f1p, f_i, g1p, g_i, jAa, m1p, mHt, p1p, v1p, y1p, yjr };
var __wakaru_k1p_initialized = false;
export function k1p() {
if (__wakaru_k1p_initialized) return;
__wakaru_k1p_initialized = true;
"use strict";
E(), u1t(), Hwn(), mjr(), CAa(), PAa(), MAa(), DAa(), BAa = [
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "violet",
    "magenta",
    "gray"
], g_i = [
    100,
    150,
    200,
    250,
    300,
    350,
    400,
    450,
    500,
    550,
    600,
    650,
    700
], UAa = {
    brown: "#97683d",
    red: "#ff263c",
    orange: "#ff6700",
    yellow: "#ff9800",
    green: "#00c972",
    cyan: "#00bca6",
    blue: "#1084fe",
    violet: "#9159fe",
    magenta: "#ff309b",
    gray: "#777777"
}, bjr = {
    100: 10,
    150: 23,
    200: 43,
    250: 79,
    300: 135,
    350: 199,
    400: 255,
    450: 194,
    500: 130,
    550: 82,
    600: 51,
    650: 36,
    700: 15
}, Tae = a1p(Vm1), p1p = a1p((t, e)=>Km1(UAa[t], e)), m1p = {
    light: L2e(zwn.editor).toLowerCase(),
    dark: L2e(qwn.editor).toLowerCase()
}, yjr = {
    light: 450,
    dark: 350
}, Ewt = 400, Vwn = {
    text: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary"
    ],
    icon: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary"
    ],
    bg: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "quinary"
    ],
    stroke: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary"
    ]
}, mHt = {
    addedLine: 14,
    addedText: 18,
    removedLine: 10,
    removedText: 16
}, jAa = {
    light: "#fcfcfc",
    dark: "#f0f0f0"
}, Kwn = {
    primary: Gwn,
    ...AAa
}, $Aa = {
    primary: 0,
    danger: 0,
    success: 1,
    warning: 0
}, HAa = new Set([
    "warning"
]), g1p = 650, f1p = new Set([
    "success"
]), v1p = 50, _1p = "0px 1px 2px rgba(0, 0, 0, 0.1)", f_i = [
    "danger",
    "success",
    "warning"
], b1p = [
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary"
], y1p = [
    "iconAccentPrimary",
    "bgAccent",
    "bgAccentHover",
    "bgGitAddedHover",
    "bgGitModifiedHover",
    "bgGitRemovedHover",
    "bgGitUntrackedHover",
    "editorSelectionBackground",
    "buttonPrimaryBackground",
    "buttonPrimaryHoverBackground",
    "buttonPrimaryActiveBackground",
    "buttonDangerBackground",
    "buttonDangerForeground",
    "buttonDangerHoverBackground",
    "buttonDangerActiveBackground",
    "buttonSuccessBackground",
    "buttonSuccessForeground",
    "buttonSuccessHoverBackground",
    "buttonSuccessActiveBackground",
    "buttonWarningBackground",
    "buttonWarningForeground",
    "buttonWarningHoverBackground",
    "buttonWarningActiveBackground"
], S1p = new Set(y1p);

}

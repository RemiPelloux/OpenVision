import { PXf } from "./color-rgba.js";
import { KXf, uau } from "./dark.js";
import { Qou, XXf, ZXf, pau } from "./f0s.js";
import { YXf, dau } from "./light.js";
import { aau, lau, sau } from "./semantic-ladders.js";
import { x } from "./tslib.es6.js";
var mau, gau, Q2s, J2s, pxn, QXf, JXf, eZf, fau, tZf;
export { J2s, JXf, Q2s, QXf, eZf, fau, gau, mau, pxn, tZf };
var __wakaru_nZf_initialized = false;
export function nZf() {
if (__wakaru_nZf_initialized) return;
__wakaru_nZf_initialized = true;
"use strict";
x(), PXf(), lau(), KXf(), YXf(), mau = [
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
], gau = [
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
], Q2s = {
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
}, J2s = {
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
}, pxn = pau(XXf), QXf = pau((e, t)=>ZXf(Q2s[e], t)), JXf = {
    light: Qou(dau.editor).toLowerCase(),
    dark: Qou(uau.editor).toLowerCase()
}, eZf = {
    primary: sau,
    ...aau
}, fau = [
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
], tZf = new Set(fau);

}

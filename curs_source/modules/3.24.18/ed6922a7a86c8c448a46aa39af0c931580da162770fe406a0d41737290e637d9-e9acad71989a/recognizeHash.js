import { x } from "./tslib.es6.js";
var c2s, ixn, l2s, isu, rsu, u2s, ssu, osu, asu;
export { asu, c2s, isu, ixn, l2s, osu, rsu, ssu, u2s };
var __wakaru_Oqf_initialized = false;
export function Oqf() {
if (__wakaru_Oqf_initialized) return;
__wakaru_Oqf_initialized = true;
"use strict";
x(), c2s = `,\\+\\*\\?\\$\\@\\|{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, ixn = "#", l2s = `[^${ixn}${c2s}/\\s]`, isu = `(?:\\.[ |$]| |[${c2s}/]|)`, rsu = 120, u2s = 50, ssu = new RegExp(`(^|\\s|\\()([${ixn}]((?:${l2s}${isu}){0,${rsu}}))$`), osu = new RegExp(`(^|\\s|\\()([${ixn}]((?:${l2s}){0,${u2s}}))$`), asu = /[,!?)\]}'":;<>]+$/;

}

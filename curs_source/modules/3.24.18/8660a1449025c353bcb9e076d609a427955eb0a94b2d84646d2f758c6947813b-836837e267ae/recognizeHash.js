import { E } from "./tslib.es6.js";
var qIa, Fvi, zIa, Uvp, jvp, VIa, $vp, Hvp, Wvp;
export { $vp, Fvi, Hvp, Uvp, VIa, Wvp, jvp, qIa, zIa };
var __wakaru_Ll1_initialized = false;
export function Ll1() {
if (__wakaru_Ll1_initialized) return;
__wakaru_Ll1_initialized = true;
"use strict";
E(), qIa = `,\\+\\*\\?\\$\\@\\|{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, Fvi = "#", zIa = `[^${Fvi}${qIa}/\\s]`, Uvp = `(?:\\.[ |$]| |[${qIa}/]|)`, jvp = 120, VIa = 50, $vp = new RegExp(`(^|\\s|\\()([${Fvi}]((?:${zIa}${Uvp}){0,${jvp}}))$`), Hvp = new RegExp(`(^|\\s|\\()([${Fvi}]((?:${zIa}){0,${VIa}}))$`), Wvp = /[,!?)\]}'":;<>]+$/;

}

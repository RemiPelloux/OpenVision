import { E } from "./tslib.es6.js";
var ZIa, AUr, QIa, Vvp, Kvp, JIa, Yvp, Xvp;
export { AUr, JIa, Kvp, QIa, Vvp, Xvp, Yvp, ZIa };
var __wakaru_Yl1_initialized = false;
export function Yl1() {
if (__wakaru_Yl1_initialized) return;
__wakaru_Yl1_initialized = true;
"use strict";
E(), ZIa = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, AUr = "@", QIa = `[^${AUr}${ZIa}\\s]`, Vvp = `(?:\\.[ |$]| |[${ZIa}/]|)`, Kvp = 120, JIa = 50, Yvp = new RegExp(`(^|\\s|\\()([${AUr}]((?:${QIa}${Vvp}){0,${Kvp}}))$`), Xvp = new RegExp(`(^|\\s|\\()([${AUr}]((?:${QIa}){0,${JIa}}))$`);

}

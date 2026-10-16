import { E } from "./tslib.es6.js";
var jIa, xUr, Dvp, $Ia, Nvp, HIa, WIa, Lvp, Ovp;
export { $Ia, Dvp, HIa, Lvp, Nvp, Ovp, WIa, jIa, xUr };
var __wakaru_Ml1_initialized = false;
export function Ml1() {
if (__wakaru_Ml1_initialized) return;
__wakaru_Ml1_initialized = true;
"use strict";
E(), jIa = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, xUr = "/", Dvp = /(?![._-])[\p{P}\p{S}]|\.\./u, $Ia = `[^${xUr}${jIa}\\s]`, Nvp = `(?:\\.[ |$]| |[${jIa}/]|)`, HIa = 50, WIa = 120, Lvp = new RegExp(`(^|\\s|\\()([${xUr}]((?:${$Ia}${Nvp}){0,${WIa}}))$`), Ovp = new RegExp(`(^|\\s|\\()([${xUr}]((?:${$Ia}){0,${HIa}}))$`);

}

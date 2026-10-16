import { x } from "./tslib.es6.js";
var i2s, HOi, Zru, r2s, Qru, s2s, o2s, Jru, esu;
export { HOi, Jru, Qru, Zru, esu, i2s, o2s, r2s, s2s };
var __wakaru_Pqf_initialized = false;
export function Pqf() {
if (__wakaru_Pqf_initialized) return;
__wakaru_Pqf_initialized = true;
"use strict";
x(), i2s = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, HOi = "/", Zru = /(?![._-])[\p{P}\p{S}]|\.\./u, r2s = `[^${HOi}${i2s}\\s]`, Qru = `(?:\\.[ |$]| |[${i2s}/]|)`, s2s = 50, o2s = 120, Jru = new RegExp(`(^|\\s|\\()([${HOi}]((?:${r2s}${Qru}){0,${o2s}}))$`), esu = new RegExp(`(^|\\s|\\()([${HOi}]((?:${r2s}){0,${s2s}}))$`);

}

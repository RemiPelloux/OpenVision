import { x } from "./tslib.es6.js";
var m2s, WOi, g2s, dsu, hsu, f2s, psu, msu;
export { WOi, dsu, f2s, g2s, hsu, m2s, msu, psu };
var __wakaru_Xqf_initialized = false;
export function Xqf() {
if (__wakaru_Xqf_initialized) return;
__wakaru_Xqf_initialized = true;
"use strict";
x(), m2s = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`, WOi = "@", g2s = `[^${WOi}${m2s}\\s]`, dsu = `(?:\\.[ |$]| |[${m2s}/]|)`, hsu = 120, f2s = 50, psu = new RegExp(`(^|\\s|\\()([${WOi}]((?:${g2s}${dsu}){0,${hsu}}))$`), msu = new RegExp(`(^|\\s|\\()([${WOi}]((?:${g2s}){0,${f2s}}))$`);

}

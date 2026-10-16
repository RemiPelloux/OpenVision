import { E } from "./tslib.es6.js";
var S0n, xxp, iMa, Axp, rMa, Rxp, Pxp, Mxp, Dxp;
export { Axp, Dxp, Mxp, Pxp, Rxp, S0n, iMa, rMa, xxp };
var __wakaru_X01_initialized = false;
export function X01() {
if (__wakaru_X01_initialized) return;
__wakaru_X01_initialized = true;
"use strict";
E(), S0n = {
    sliceBudgetMs: 12,
    minSegmentChars: 0,
    maxSegmentChars: 8e3,
    firstSegmentChars: 600
}, xxp = /^#{1,6}(?:\s|$)/, iMa = /^ {0,3}(?:```|~~~)/, Axp = /^\$\$/, rMa = /\$\$[ \t]*$/, Rxp = /^ {0,3}\[(?!\^)[^\]\n]+\]:[ \t]*(?:<[^>\n]*>|\S+)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*$/, Pxp = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?:[ \t]|$)/, Mxp = /^ {0,3}>/, Dxp = /^(?: {4}|\t)/;

}

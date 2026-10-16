import { x } from "./tslib.es6.js";
var FUt, shu, h3s, ohu, p3s, ahu, chu, lhu, uhu;
export { FUt, ahu, chu, h3s, lhu, ohu, p3s, shu, uhu };
var __wakaru_Siv_initialized = false;
export function Siv() {
if (__wakaru_Siv_initialized) return;
__wakaru_Siv_initialized = true;
"use strict";
x(), FUt = {
    sliceBudgetMs: 12,
    minSegmentChars: 0,
    maxSegmentChars: 8e3,
    firstSegmentChars: 600
}, shu = /^#{1,6}(?:\s|$)/, h3s = /^ {0,3}(?:```|~~~)/, ohu = /^\$\$/, p3s = /\$\$[ \t]*$/, ahu = /^ {0,3}\[(?!\^)[^\]\n]+\]:[ \t]*(?:<[^>\n]*>|\S+)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*$/, chu = /^ {0,3}(?:[-*+]|\d{1,9}[.)])(?:[ \t]|$)/, lhu = /^ {0,3}>/, uhu = /^(?: {4}|\t)/;

}

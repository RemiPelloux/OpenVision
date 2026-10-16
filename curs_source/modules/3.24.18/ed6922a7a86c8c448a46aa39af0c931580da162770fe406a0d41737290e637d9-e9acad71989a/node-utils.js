import { x } from "./tslib.es6.js";
var qEl;
export { qEl };
var __wakaru_zEl_initialized = false;
export function zEl() {
if (__wakaru_zEl_initialized) return;
__wakaru_zEl_initialized = true;
x(), qEl = new Set([
    "AbsenceFunction",
    "Backreference",
    "CapturingGroup",
    "Character",
    "CharacterClass",
    "CharacterSet",
    "Group",
    "Quantifier",
    "Subroutine"
]);

}

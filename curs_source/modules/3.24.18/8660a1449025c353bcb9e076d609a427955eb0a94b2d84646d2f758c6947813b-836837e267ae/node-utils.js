import { E } from "./tslib.es6.js";
var pAh;
export { pAh };
var __wakaru_mAh_initialized = false;
export function mAh() {
if (__wakaru_mAh_initialized) return;
__wakaru_mAh_initialized = true;
E(), pAh = new Set([
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

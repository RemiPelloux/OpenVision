import { E } from "./tslib.es6.js";
var mhs, _Pg, bPg, yPg, Hvl, ghs, Wvl, SPg, kPg, wPg, CPg, TPg;
export { CPg, Hvl, SPg, TPg, Wvl, _Pg, bPg, ghs, kPg, mhs, wPg, yPg };
var __wakaru_UDk_initialized = false;
export function UDk() {
if (__wakaru_UDk_initialized) return;
__wakaru_UDk_initialized = true;
"use strict";
E(), mhs = `,\\+\\*\\?\\$\\@\\|#{}\\^\\-\\[\\]\\\\!%'"~=<>:;`, _Pg = mhs + "\\(\\)", bPg = "\\b[A-Z][^\\s" + mhs + "]", yPg = {
    NAME: bPg,
    PUNCTUATION: mhs
}, Hvl = yPg.PUNCTUATION, ghs = [
    "@"
].join(""), Wvl = "[^" + ghs + Hvl + "\\s]", SPg = "(?:\\.[ |$]| |[" + Hvl + "/]|)", kPg = 120, wPg = new RegExp("(^|\\s|\\()([" + ghs + "]((?:" + Wvl + SPg + "){0," + kPg + "}))$"), CPg = 50, TPg = new RegExp("(^|\\s|\\()([" + ghs + "]((?:" + Wvl + "){0," + CPg + "}))$");

}

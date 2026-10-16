import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var k2s, $Ql, fTv, vTv, _Tv, bTv;
export { $Ql, _Tv, bTv, fTv, k2s, vTv };
var __wakaru_yTv_initialized = false;
export function yTv() {
if (__wakaru_yTv_initialized) return;
__wakaru_yTv_initialized = true;
"use strict";
E(), Mt(), k2s = /[a-zA-Z0-9_]/, $Ql = /[\s_./-]+/, fTv = String.raw`[\s_./-]+`, vTv = String.raw`(^|[^a-zA-Z0-9_])\/\S+`, _Tv = new Set([
    "hardBreak",
    "hard_break"
]), bTv = new RegExp(vTv, "g");

}

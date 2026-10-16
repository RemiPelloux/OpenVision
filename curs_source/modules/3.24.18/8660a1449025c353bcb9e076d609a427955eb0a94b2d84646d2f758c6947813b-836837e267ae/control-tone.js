import { E } from "./tslib.es6.js";
var pKo, SZd, mKo, kZd, $Fy, wZd, CZd, TZd, EZd, vai;
export { $Fy, CZd, EZd, SZd, TZd, kZd, mKo, pKo, vai, wZd };
var __wakaru_Jvn_initialized = false;
export function Jvn() {
if (__wakaru_Jvn_initialized) return;
__wakaru_Jvn_initialized = true;
"use strict";
E(), pKo = [
    "secondary",
    "tertiary",
    "accent",
    "monochrome",
    "success",
    "warning",
    "danger"
], SZd = [
    "accent",
    "monochrome",
    "success",
    "danger",
    "warning"
], mKo = {
    plan: "warning",
    "git-added": "success",
    "git-modified": "warning",
    "git-removed": "danger"
}, kZd = [
    ...pKo,
    "plan",
    "git-added",
    "git-modified",
    "git-removed"
], $Fy = kZd.filter((t)=>t !== "tertiary"), wZd = [
    "accent",
    "success",
    "warning",
    "danger"
], CZd = new Set(pKo), TZd = new Set(SZd), EZd = new Set(wZd), vai = "accent";

}

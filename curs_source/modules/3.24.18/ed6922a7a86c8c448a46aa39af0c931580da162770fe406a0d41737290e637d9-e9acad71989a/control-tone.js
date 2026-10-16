import { x } from "./tslib.es6.js";
var mas, lYc, gas, uYc, ATg, dYc, RTg, hYc, pYc, Zbn;
export { ATg, RTg, Zbn, dYc, gas, hYc, lYc, mas, pYc, uYc };
var __wakaru_Qbn_initialized = false;
export function Qbn() {
if (__wakaru_Qbn_initialized) return;
__wakaru_Qbn_initialized = true;
"use strict";
x(), mas = [
    "secondary",
    "tertiary",
    "accent",
    "monochrome",
    "success",
    "warning",
    "danger"
], lYc = [
    "accent",
    "monochrome",
    "success",
    "danger",
    "warning"
], gas = {
    plan: "warning",
    "git-added": "success",
    "git-modified": "warning",
    "git-removed": "danger"
}, uYc = [
    ...mas,
    "plan",
    "git-added",
    "git-modified",
    "git-removed"
], ATg = uYc.filter((e)=>e !== "tertiary"), dYc = [
    "accent",
    "success",
    "warning",
    "danger"
], RTg = new Set(mas), hYc = new Set(lYc), pYc = new Set(dYc), Zbn = "accent";

}

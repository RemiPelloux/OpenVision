import { LHe, OHe } from "./cursor-icons.js";
import { E } from "./tslib.es6.js";
var rZd, sZd, oZd;
export { oZd, rZd, sZd };
var __wakaru_vFy_initialized = false;
export function vFy() {
if (__wakaru_vFy_initialized) return;
__wakaru_vFy_initialized = true;
"use strict";
E(), OHe(), rZd = /(^|-)(left|right)(-|$)/, sZd = new Set([
    "history",
    "link-external",
    "list-bullets",
    "list-ordered",
    "quote",
    "redo",
    "return"
]), oZd = new Set(LHe.filter((t)=>rZd.test(t) || sZd.has(t)));

}

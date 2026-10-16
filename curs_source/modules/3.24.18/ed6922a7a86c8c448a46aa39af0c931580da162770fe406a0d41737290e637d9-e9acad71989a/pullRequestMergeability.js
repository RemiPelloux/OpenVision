import { x } from "./tslib.es6.js";
var BEh, UEh, $Eh;
export { $Eh, BEh, UEh };
var __wakaru_HJv_initialized = false;
export function HJv() {
if (__wakaru_HJv_initialized) return;
__wakaru_HJv_initialized = true;
"use strict";
x(), BEh = {
    cannot_be_merged: "dirty",
    unchecked: "unknown",
    checking: "unknown",
    can_be_merged: "clean"
}, UEh = new Set([
    "behind",
    "blocked",
    "clean",
    "dirty",
    "draft",
    "has_hooks",
    "unknown",
    "unstable"
]), $Eh = new Set([
    "clean",
    "behind",
    "has_hooks",
    "unstable"
]);

}

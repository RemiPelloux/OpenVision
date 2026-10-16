import { E } from "./tslib.es6.js";
var smg, omg, amg;
export { amg, omg, smg };
var __wakaru_Nos_initialized = false;
export function Nos() {
if (__wakaru_Nos_initialized) return;
__wakaru_Nos_initialized = true;
"use strict";
E(), smg = {
    cannot_be_merged: "dirty",
    unchecked: "unknown",
    checking: "unknown",
    can_be_merged: "clean"
}, omg = new Set([
    "behind",
    "blocked",
    "clean",
    "dirty",
    "draft",
    "has_hooks",
    "unknown",
    "unstable"
]), amg = new Set([
    "clean",
    "behind",
    "has_hooks",
    "unstable"
]);

}

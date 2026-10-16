import { Eet } from "./subagentTaskState.js";
import { x } from "./tslib.es6.js";
var gSh, fSh;
export { fSh, gSh };
var __wakaru_Pqv_initialized = false;
export function Pqv() {
if (__wakaru_Pqv_initialized) return;
__wakaru_Pqv_initialized = true;
"use strict";
x(), Eet(), gSh = new Set([
    "success",
    "error",
    "cancelled",
    "skipped",
    "rejected"
]), fSh = new Set([
    "completed",
    "cancelled",
    "error"
]);

}

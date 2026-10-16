import { Ve } from "./errors.js";
import { $e } from "./network.js";
import { fp } from "./storageSizeBreakdown.js";
import { h } from "./tslib.es6.js";
var __wakaru_j5e_initialized = false;
export function j5e() {
if (__wakaru_j5e_initialized) return;
__wakaru_j5e_initialized = true;
"use strict";
h(), Ve(), $e(), fp();

}

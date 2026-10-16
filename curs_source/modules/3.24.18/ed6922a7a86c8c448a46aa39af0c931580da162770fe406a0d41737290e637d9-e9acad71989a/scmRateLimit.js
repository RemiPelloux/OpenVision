import { hg } from "./connect.js";
import { TN } from "./connectErrors.js";
import { x } from "./tslib.es6.js";
var __wakaru_tAh_initialized = false;
export function tAh() {
if (__wakaru_tAh_initialized) return;
__wakaru_tAh_initialized = true;
"use strict";
x(), hg(), TN();

}

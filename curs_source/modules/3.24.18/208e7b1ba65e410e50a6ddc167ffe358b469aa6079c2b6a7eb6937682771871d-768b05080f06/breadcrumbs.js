import { dt } from "./currentScopes.js";
import { Ke } from "./debug-logger.js";
import { us } from "./time.js";
import { h } from "./tslib.es6.js";
var RW;
export { RW };
var __wakaru_uI_initialized = false;
export function uI() {
if (__wakaru_uI_initialized) return;
__wakaru_uI_initialized = true;
"use strict";
h(), dt(), Ke(), us(), RW = 100;

}

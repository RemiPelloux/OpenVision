import { es } from "./misc.js";
import { us } from "./time.js";
import { h } from "./tslib.es6.js";
var __wakaru_dk_initialized = false;
export function dk() {
if (__wakaru_dk_initialized) return;
__wakaru_dk_initialized = true;
"use strict";
h(), es(), us();

}

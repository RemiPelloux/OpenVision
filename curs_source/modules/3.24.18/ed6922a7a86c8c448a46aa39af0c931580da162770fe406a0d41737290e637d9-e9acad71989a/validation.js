import { kE } from "./debug-build.js";
import { Xk } from "./debug-logger.js";
import { x } from "./tslib.es6.js";
var __wakaru_ipi_initialized = false;
export function ipi() {
if (__wakaru_ipi_initialized) return;
__wakaru_ipi_initialized = true;
"use strict";
x(), kE(), Xk();

}

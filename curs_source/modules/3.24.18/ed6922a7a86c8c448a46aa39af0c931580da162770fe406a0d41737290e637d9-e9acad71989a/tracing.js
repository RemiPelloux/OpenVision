import { kLt } from "./baggage.js";
import { Xk } from "./debug-logger.js";
import { Kke } from "./dsn.js";
import { Rhn } from "./parseSampleRate.js";
import { iqe } from "./propagationContext.js";
import { x } from "./tslib.es6.js";
var hhi;
export { hhi };
var __wakaru_phi_initialized = false;
export function phi() {
if (__wakaru_phi_initialized) return;
__wakaru_phi_initialized = true;
"use strict";
x(), Xk(), kLt(), Kke(), Rhn(), iqe(), hhi = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

}

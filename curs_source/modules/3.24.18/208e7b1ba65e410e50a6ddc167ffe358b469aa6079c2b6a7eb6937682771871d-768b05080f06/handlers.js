import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { Tc } from "./stacktrace.js";
import { h } from "./tslib.es6.js";
var bp, EC;
export { EC, bp };
var __wakaru_Rp_initialized = false;
export function Rp() {
if (__wakaru_Rp_initialized) return;
__wakaru_Rp_initialized = true;
"use strict";
h(), gt(), Ke(), Tc(), bp = {}, EC = {};

}

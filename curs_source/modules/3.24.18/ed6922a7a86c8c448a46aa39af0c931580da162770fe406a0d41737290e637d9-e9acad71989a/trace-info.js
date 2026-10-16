import { NT } from "./currentScopes.js";
import { uqe } from "./dynamicSamplingContext.js";
import { zH } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
var __wakaru_GGr_initialized = false;
export function GGr() {
if (__wakaru_GGr_initialized) return;
__wakaru_GGr_initialized = true;
"use strict";
x(), NT(), uqe(), zH();

}

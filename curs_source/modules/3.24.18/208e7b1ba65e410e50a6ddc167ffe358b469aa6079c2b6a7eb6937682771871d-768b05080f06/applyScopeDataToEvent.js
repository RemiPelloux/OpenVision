import { co } from "./dynamicSamplingContext.js";
import { OC } from "./merge.js";
import { sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
var __wakaru_Ak_initialized = false;
export function Ak() {
if (__wakaru_Ak_initialized) return;
__wakaru_Ak_initialized = true;
"use strict";
h(), co(), OC(), sr();

}

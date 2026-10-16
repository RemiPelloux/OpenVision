import { dt } from "./currentScopes.js";
import { co } from "./dynamicSamplingContext.js";
import { sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
var __wakaru_sI_initialized = false;
export function sI() {
if (__wakaru_sI_initialized) return;
__wakaru_sI_initialized = true;
"use strict";
h(), dt(), co(), sr();

}

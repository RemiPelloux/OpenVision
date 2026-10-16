import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var bve;
export { bve };
var __wakaru_Cnt_initialized = false;
export function Cnt() {
if (__wakaru_Cnt_initialized) return;
__wakaru_Cnt_initialized = true;
"use strict";
h(), ne(), bve = Q("agentAnalyticsOperationsService");

}

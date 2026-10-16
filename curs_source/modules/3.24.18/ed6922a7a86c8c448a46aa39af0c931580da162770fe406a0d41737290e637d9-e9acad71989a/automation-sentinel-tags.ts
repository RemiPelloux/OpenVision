import { x } from "./tslib.es6.js";
var _Mu, bMu;
export { _Mu, bMu };
var __wakaru_Bdv_initialized = false;
export function Bdv() {
if (__wakaru_Bdv_initialized) return;
__wakaru_Bdv_initialized = true;
"use strict";
x(), _Mu = /<automation_(?:trigger_info|external_input|teammate_input)\b[^>]*>\n?/g, bMu = /\n?<\/automation_(?:trigger_info|external_input|teammate_input)\b[^>]*>/g;

}

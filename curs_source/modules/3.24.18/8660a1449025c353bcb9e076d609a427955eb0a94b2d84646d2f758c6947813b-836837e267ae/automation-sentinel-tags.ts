import { E } from "./tslib.es6.js";
var HLp, WLp;
export { HLp, WLp };
var __wakaru_JR1_initialized = false;
export function JR1() {
if (__wakaru_JR1_initialized) return;
__wakaru_JR1_initialized = true;
"use strict";
E(), HLp = /<automation_(?:trigger_info|external_input|teammate_input)\b[^>]*>\n?/g, WLp = /\n?<\/automation_(?:trigger_info|external_input|teammate_input)\b[^>]*>/g;

}

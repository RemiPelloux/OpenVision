import { E } from "./tslib.es6.js";
var NDh;
export { NDh };
var __wakaru_IdS_initialized = false;
export function IdS() {
if (__wakaru_IdS_initialized) return;
__wakaru_IdS_initialized = true;
"use strict";
E(), NDh = /#(?=[0-9a-fA-F]*[a-fA-F])(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6})(?=\W|$)/g;

}

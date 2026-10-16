import { h } from "./tslib.es6.js";
var tve;
export { tve };
var __wakaru_Vtt_initialized = false;
export function Vtt() {
if (__wakaru_Vtt_initialized) return;
__wakaru_Vtt_initialized = true;
"use strict";
h(), tve = {
    maxAgeMs: 10080 * 60 * 1e3,
    maxTotalBytes: 5 * 1024 * 1024 * 1024,
    inUseWindowMs: 3600 * 1e3
};

}

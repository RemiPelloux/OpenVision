import { li } from "./network.js";
import { x } from "./tslib.es6.js";
var Pwu;
export { Pwu };
var __wakaru_Sse_initialized = false;
export function Sse() {
if (__wakaru_Sse_initialized) return;
__wakaru_Sse_initialized = true;
"use strict";
x(), li(), Pwu = new Set([
    "localhost",
    "127.0.0.1",
    "::1",
    "[::1]",
    "0000:0000:0000:0000:0000:0000:0000:0001",
    "[0000:0000:0000:0000:0000:0000:0000:0001]"
]);

}

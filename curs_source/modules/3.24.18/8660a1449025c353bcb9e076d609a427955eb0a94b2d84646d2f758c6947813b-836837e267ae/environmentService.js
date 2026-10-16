import { cy, fb } from "./environment.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var ps;
export { ps };
var __wakaru_fo_initialized = false;
export function fo() {
if (__wakaru_fo_initialized) return;
__wakaru_fo_initialized = true;
"use strict";
E(), It(), fb(), ps = cy;

}

import { x } from "./tslib.es6.js";
var rkh;
export { rkh };
var __wakaru_vCt_initialized = false;
export function vCt() {
if (__wakaru_vCt_initialized) return;
__wakaru_vCt_initialized = true;
"use strict";
x(), rkh = /("[^"\\]*(?:\\.[^"\\]*)*")|('[^'\\]*(?:\\.[^'\\]*)*')|(\/\*[^\/\*]*(?:(?:\*|\/)[^\/\*]*)*?\*\/)|(\/{2,}.*?(?:(?:\r?\n)|$))|(,\s*[}\]])/g;

}

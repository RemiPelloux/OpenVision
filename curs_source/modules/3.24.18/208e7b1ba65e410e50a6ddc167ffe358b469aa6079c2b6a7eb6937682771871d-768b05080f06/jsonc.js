import { h } from "./tslib.es6.js";
var Dx;
export { Dx };
var __wakaru_Ox_initialized = false;
export function Ox() {
if (__wakaru_Ox_initialized) return;
__wakaru_Ox_initialized = true;
"use strict";
h(), Dx = /("[^"\\]*(?:\\.[^"\\]*)*")|('[^'\\]*(?:\\.[^'\\]*)*')|(\/\*[^\/\*]*(?:(?:\*|\/)[^\/\*]*)*?\*\/)|(\/{2,}.*?(?:(?:\r?\n)|$))|(,\s*[}\]])/g;

}

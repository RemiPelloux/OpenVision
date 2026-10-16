import { E } from "./tslib.es6.js";
var _ag;
export { _ag };
var __wakaru_Gzt_initialized = false;
export function Gzt() {
if (__wakaru_Gzt_initialized) return;
__wakaru_Gzt_initialized = true;
"use strict";
E(), _ag = /("[^"\\]*(?:\\.[^"\\]*)*")|('[^'\\]*(?:\\.[^'\\]*)*')|(\/\*[^\/\*]*(?:(?:\*|\/)[^\/\*]*)*?\*\/)|(\/{2,}.*?(?:(?:\r?\n)|$))|(,\s*[}\]])/g;

}

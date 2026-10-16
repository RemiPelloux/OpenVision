import { E } from "./tslib.es6.js";
var dwg;
export { dwg };
var __wakaru_mIk_initialized = false;
export function mIk() {
if (__wakaru_mIk_initialized) return;
__wakaru_mIk_initialized = true;
"use strict";
E(), dwg = `
(function() {
	'use strict';
	if (window.__cursorDevToolsInjected) return;
	window.__cursorDevToolsInjected = true;
	window.__cursorDevToolsSelectedElement = null;
})();
`;

}

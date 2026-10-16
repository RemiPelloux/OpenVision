import { x } from "./tslib.es6.js";
var x2h;
export { x2h };
var __wakaru_Cc__initialized = false;
export function Cc_() {
if (__wakaru_Cc__initialized) return;
__wakaru_Cc__initialized = true;
"use strict";
x(), x2h = `
(function() {
	'use strict';
	if (window.__cursorDevToolsInjected) return;
	window.__cursorDevToolsInjected = true;
	window.__cursorDevToolsSelectedElement = null;
})();
`;

}
